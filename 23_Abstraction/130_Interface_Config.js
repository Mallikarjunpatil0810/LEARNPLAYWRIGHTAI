// CI/CD Configuration using Interface Abstraction

// ============================================
// Interface Definitions (using duck-typing pattern)
// ============================================

/**
 * @interface ICICDProvider
 * Methods:
 *   - configure(context)
 *   - validate()
 *   - executePipeline(stages)
 *   - getStatus()
 */

/**
 * @interface IPipelineStage
 * Methods:
 *   - getName()
 *   - run(context)
 *   - rollback(context)
 *   - isSuccess()
 */

/**
 * @interface INotifier
 * Methods:
 *   - send(message, level)
 *   - getChannel()
 */

// ============================================
// Interface Check Utility
// ============================================

class InterfaceValidator {
  static implements(obj, methods) {
    const missing = methods.filter(m => typeof obj[m] !== 'function');
    if (missing.length > 0) {
      throw new Error(`Class does not implement required methods: ${missing.join(', ')}`);
    }
    return true;
  }
}

// ============================================
// Concrete Implementations of Pipeline Stages
// ============================================

class BuildStage {
  constructor(name = 'build') {
    this.name = name;
    this.success = false;
  }

  getName() { return this.name; }

  async run(context) {
    console.log(`[${this.name}] Starting build...`);
    await new Promise(r => setTimeout(r, 100));
    console.log(`[${this.name}] Build completed for ${context.branch}`);
    this.success = true;
    return { status: 'passed', artifacts: ['dist/', 'build/'] };
  }

  async rollback(context) {
    console.log(`[${this.name}] Rolling back build...`);
    this.success = false;
    return { status: 'rolled_back' };
  }

  isSuccess() { return this.success; }
}

class TestStage {
  constructor(name = 'test') {
    this.name = name;
    this.success = false;
  }

  getName() { return this.name; }

  async run(context) {
    console.log(`[${this.name}] Running tests...`);
    await new Promise(r => setTimeout(r, 200));
    const passed = Math.random() > 0.1;
    this.success = passed;
    console.log(`[${this.name}] Tests ${passed ? 'PASSED' : 'FAILED'}`);
    return { status: passed ? 'passed' : 'failed', coverage: passed ? 85 : 0 };
  }

  async rollback(context) {
    console.log(`[${this.name}] No rollback needed for tests`);
    return { status: 'noop' };
  }

  isSuccess() { return this.success; }
}

class DeployStage {
  constructor(name = 'deploy', environment = 'staging') {
    this.name = name;
    this.environment = environment;
    this.success = false;
  }

  getName() { return `${this.name}:${this.environment}`; }

  async run(context) {
    console.log(`[${this.name}] Deploying to ${this.environment}...`);
    await new Promise(r => setTimeout(r, 150));
    this.success = true;
    console.log(`[${this.name}] Deployed to ${this.environment} successfully`);
    return { status: 'passed', url: `https://${this.environment}.example.com` };
  }

  async rollback(context) {
    console.log(`[${this.name}] Rolling back ${this.environment} deployment...`);
    this.success = false;
    return { status: 'rolled_back', previousVersion: context.version };
  }

  isSuccess() { return this.success; }
}

// ============================================
// Concrete Implementations of CI/CD Providers
// ============================================

class GitHubActionsProvider {
  constructor(config = {}) {
    this.config = {
      runner: 'ubuntu-latest',
      timeout: 30,
      ...config
    };
    this.pipeline = null;
    this.status = 'idle';
  }

  configure(context) {
    console.log('[GitHubActions] Configuring workflow...');
    this.workflow = {
      name: context.pipelineName || 'CI/CD Pipeline',
      on: ['push', 'pull_request'],
      jobs: {}
    };
    this.status = 'configured';
    return this.workflow;
  }

  validate() {
    console.log('[GitHubActions] Validating workflow YAML...');
    if (!this.workflow) throw new Error('Workflow not configured');
    this.status = 'validated';
    return true;
  }

  async executePipeline(stages) {
    console.log('[GitHubActions] Executing pipeline...');
    this.status = 'running';
    const results = [];
    for (const stage of stages) {
      InterfaceValidator.implements(stage, ['getName', 'run', 'rollback', 'isSuccess']);
      const result = await stage.run({ branch: 'main', version: 'v1.0.0' });
      results.push({ stage: stage.getName(), result });
      if (result.status === 'failed') {
        this.status = 'failed';
        console.log('[GitHubActions] Pipeline failed, triggering rollback...');
        for (const s of stages.reverse()) {
          await s.rollback({ branch: 'main', version: 'v1.0.0' });
        }
        break;
      }
    }
    if (this.status !== 'failed') this.status = 'passed';
    return results;
  }

  getStatus() { return this.status; }
}

class GitLabCICDProvider {
  constructor(config = {}) {
    this.config = {
      runner: 'docker',
      timeout: 60,
      ...config
    };
    this.pipeline = null;
    this.status = 'idle';
  }

  configure(context) {
    console.log('[GitLabCI] Configuring .gitlab-ci.yml...');
    this.pipeline = {
      stages: context.stages || [],
      variables: context.variables || {},
      cache: context.cache || {}
    };
    this.status = 'configured';
    return this.pipeline;
  }

  validate() {
    console.log('[GitLabCI] Validating CI configuration...');
    if (!this.pipeline) throw new Error('Pipeline not configured');
    this.status = 'validated';
    return true;
  }

  async executePipeline(stages) {
    console.log('[GitLabCI] Running pipeline...');
    this.status = 'running';
    const results = [];
    for (const stage of stages) {
      InterfaceValidator.implements(stage, ['getName', 'run', 'rollback', 'isSuccess']);
      const result = await stage.run({ branch: 'develop', version: 'v2.0.0' });
      results.push({ stage: stage.getName(), result });
      if (result.status === 'failed') {
        this.status = 'failed';
        break;
      }
    }
    if (this.status !== 'failed') this.status = 'passed';
    return results;
  }

  getStatus() { return this.status; }
}

// ============================================
// Concrete Implementations of Notifiers
// ============================================

class SlackNotifier {
  constructor(webhook = 'https://hooks.slack.com/default') {
    this.webhook = webhook;
    this.channel = '#ci-cd';
  }

  send(message, level = 'info') {
    const emoji = level === 'error' ? '❌' : level === 'warning' ? '⚠️' : '✅';
    console.log(`[Slack] Sending to ${this.channel}: ${emoji} ${message}`);
    return { sent: true, channel: this.channel };
  }

  getChannel() { return this.channel; }
}

class EmailNotifier {
  constructor(recipients = ['dev-team@example.com']) {
    this.recipients = recipients;
    this.channel = 'email';
  }

  send(message, level = 'info') {
    const subject = level === 'error' ? '[URGENT]' : '[CI/CD]';
    console.log(`[Email] Sending to ${this.recipients.join(', ')}: ${subject} ${message}`);
    return { sent: true, recipients: this.recipients };
  }

  getChannel() { return this.channel; }
}

// ============================================
// CI/CD Orchestrator (uses interfaces)
// ============================================

class CICDOrchestrator {
  constructor(provider, notifiers = []) {
    InterfaceValidator.implements(provider, ['configure', 'validate', 'executePipeline', 'getStatus']);
    notifiers.forEach(n => InterfaceValidator.implements(n, ['send', 'getChannel']));

    this.provider = provider;
    this.notifiers = notifiers;
    this.context = {};
  }

  async runPipeline(pipelineName, stages) {
    console.log(`\n========== Starting Pipeline: ${pipelineName} ==========\n`);

    // Phase 1: Configure
    this.context = {
      pipelineName,
      stages: stages.map(s => s.getName()),
      branch: 'main',
      version: 'v1.0.0',
      timestamp: new Date().toISOString()
    };
    this.provider.configure(this.context);

    // Phase 2: Validate
    this.provider.validate();

    // Phase 3: Execute
    const results = await this.provider.executePipeline(stages);

    // Phase 4: Notify
    const finalStatus = this.provider.getStatus();
    for (const notifier of this.notifiers) {
      const message = `Pipeline "${pipelineName}" ${finalStatus}`;
      const level = finalStatus === 'passed' ? 'info' : 'error';
      notifier.send(message, level);
    }

    console.log(`\n========== Pipeline Complete: ${finalStatus} ==========\n`);
    return { status: finalStatus, results };
  }
}

// ============================================
// Usage Example
// ============================================

async function main() {
  // Create stages
  const stages = [
    new BuildStage(),
    new TestStage(),
    new DeployStage('deploy', 'staging'),
    new DeployStage('deploy', 'production')
  ];

  // Create providers
  const githubProvider = new GitHubActionsProvider({ timeout: 45 });
  const gitlabProvider = new GitLabCICDProvider({ runner: 'docker' });

  // Create notifiers
  const notifiers = [
    new SlackNotifier('https://hooks.slack.com/team-webhook'),
    new EmailNotifier(['team@example.com'])
  ];

  // Run with GitHub Actions
  const orchestrator1 = new CICDOrchestrator(githubProvider, notifiers);
  await orchestrator1.runPipeline('Production Release', stages);

  // Run with GitLab CI
  const orchestrator2 = new CICDOrchestrator(gitlabProvider, [new SlackNotifier()]);
  await orchestrator2.runPipeline('Develop Build', [new BuildStage(), new TestStage()]);
}

// Execute if running directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  InterfaceValidator,
  BuildStage,
  TestStage,
  DeployStage,
  GitHubActionsProvider,
  GitLabCICDProvider,
  SlackNotifier,
  EmailNotifier,
  CICDOrchestrator
};