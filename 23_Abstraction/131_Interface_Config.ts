// ============================================================
// CI/CD Configuration using TypeScript Interfaces
// ============================================================

// ---------- Stage & Job Interfaces ----------

/** Defines a single CI/CD job */
interface Job {
  name: string;
  image?: string;
  script: string[];
  artifacts?: string[];
  dependencies?: string[];
  timeout?: number; // in minutes
  retry?: number;
  only?: string[];
  except?: string[];
}

/** Defines a stage in the pipeline */
interface Stage {
  name: string;
  jobs: Job[];
  parallel?: boolean;
  when?: 'always' | 'on_success' | 'on_failure' | 'manual';
}

// ---------- Environment & Trigger Interfaces ----------

/** Environment variables */
interface EnvironmentVariable {
  key: string;
  value: string;
  protected?: boolean;
}

/** Deployment environment configuration */
interface DeploymentEnvironment {
  name: string;
  url?: string;
  variables?: EnvironmentVariable[];
}

/** Pipeline trigger configuration */
interface Trigger {
  type: 'push' | 'pull_request' | 'tag' | 'schedule' | 'manual';
  branches?: string[];
  tags?: string[];
  paths?: string[];
  schedule?: string; // cron expression
}

// ---------- Notification & Approval Interfaces ----------

/** Notification configuration */
interface Notification {
  on: ('success' | 'failure' | 'pending')[];
  channel: string;
  message?: string;
}

/** Approval gate for manual intervention */
interface ApprovalGate {
  required: number;
  approvers: string[];
  timeout?: number; // in hours
}

// ---------- Main CI/CD Configuration Interface ----------

/** Complete CI/CD pipeline configuration */
interface CICDConfiguration {
  // Pipeline metadata
  name: string;
  description?: string;
  version: string;

  // Pipeline structure
  stages: Stage[];
  triggers: Trigger[];

  // Global settings
  defaultImage?: string;
  defaultTimeout?: number;
  cache?: {
    key: string;
    paths: string[];
    policy?: 'push' | 'pull' | 'push-pull';
  };

  // Environment
  environments?: DeploymentEnvironment[];
  globalVariables?: EnvironmentVariable[];

  // Notifications & approvals
  notifications?: Notification[];
  approvalGates?: ApprovalGate[];

  // Advanced options
  maxParallelJobs?: number;
  retryOnFailure?: boolean;
  allowFailure?: boolean;
}

// ---------- Builder Class ----------

/** Builder to construct a CI/CD configuration step by step */
class CICDConfigurationBuilder {
  private config: CICDConfiguration;

  constructor(name: string, version: string) {
    this.config = {
      name,
      version,
      stages: [],
      triggers: [],
    };
  }

  addStage(stage: Stage): this {
    this.config.stages.push(stage);
    return this;
  }

  addTrigger(trigger: Trigger): this {
    this.config.triggers.push(trigger);
    return this;
  }

  setDefaultImage(image: string): this {
    this.config.defaultImage = image;
    return this;
  }

  setDefaultTimeout(minutes: number): this {
    this.config.defaultTimeout = minutes;
    return this;
  }

  addGlobalVariable(key: string, value: string, protectedVar?: boolean): this {
    if (!this.config.globalVariables) {
      this.config.globalVariables = [];
    }
    this.config.globalVariables.push({ key, value, protected: protectedVar });
    return this;
  }

  addEnvironment(env: DeploymentEnvironment): this {
    if (!this.config.environments) {
      this.config.environments = [];
    }
    this.config.environments.push(env);
    return this;
  }

  addNotification(notification: Notification): this {
    if (!this.config.notifications) {
      this.config.notifications = [];
    }
    this.config.notifications.push(notification);
    return this;
  }

  setCache(key: string, paths: string[], policy?: 'push' | 'pull' | 'push-pull'): this {
    this.config.cache = { key, paths, policy };
    return this;
  }

  setMaxParallelJobs(max: number): this {
    this.config.maxParallelJobs = max;
    return this;
  }

  build(): CICDConfiguration {
    return { ...this.config };
  }
}

// ---------- Example Usage ----------

function createSamplePipeline(): CICDConfiguration {
  const builder = new CICDConfigurationBuilder('MyApp CI/CD', '1.0.0');

  builder
    .setDefaultImage('node:18-alpine')
    .setDefaultTimeout(30)
    .setMaxParallelJobs(4)
    .addGlobalVariable('NODE_ENV', 'production')
    .addGlobalVariable('APP_VERSION', '1.0.0', true)
    .setCache('node-modules-$CI_COMMIT_REF_SLUG', ['node_modules/'], 'push-pull')
    .addTrigger({
      type: 'push',
      branches: ['main', 'develop', 'feature/*'],
    })
    .addTrigger({
      type: 'pull_request',
      branches: ['main'],
    })
    .addTrigger({
      type: 'schedule',
      schedule: '0 2 * * *', // daily at 2 AM
    })
    .addStage({
      name: 'Build',
      jobs: [
        {
          name: 'install-dependencies',
          script: ['npm ci'],
          artifacts: ['node_modules/'],
          timeout: 10,
        },
        {
          name: 'compile',
          script: ['npm run build'],
          dependencies: ['install-dependencies'],
          artifacts: ['dist/'],
        },
      ],
    })
    .addStage({
      name: 'Test',
      parallel: true,
      jobs: [
        {
          name: 'unit-tests',
          script: ['npm run test:unit'],
          dependencies: ['compile'],
          timeout: 15,
        },
        {
          name: 'integration-tests',
          script: ['npm run test:integration'],
          dependencies: ['compile'],
          timeout: 20,
        },
        {
          name: 'lint',
          script: ['npm run lint'],
          timeout: 5,
        },
      ],
    })
    .addStage({
      name: 'Deploy',
      jobs: [
        {
          name: 'deploy-staging',
          script: ['npm run deploy:staging'],
          dependencies: ['unit-tests', 'integration-tests'],
          only: ['develop'],
          when: 'on_success',
        },
        {
          name: 'deploy-production',
          script: ['npm run deploy:production'],
          dependencies: ['unit-tests', 'integration-tests'],
          only: ['main'],
          when: 'manual',
          retry: 2,
        },
      ],
    })
    .addEnvironment({
      name: 'staging',
      url: 'https://staging.myapp.com',
      variables: [
        { key: 'ENV', value: 'staging' },
        { key: 'DEBUG', value: 'true' },
      ],
    })
    .addEnvironment({
      name: 'production',
      url: 'https://myapp.com',
      variables: [
        { key: 'ENV', value: 'production' },
        { key: 'DEBUG', value: 'false' },
      ],
    })
    .addNotification({
      on: ['failure'],
      channel: '#ci-cd-alerts',
      message: 'Pipeline failed for {{ pipeline.name }}',
    })
    .addNotification({
      on: ['success'],
      channel: '#deployments',
      message: 'Deployment to {{ environment.name }} succeeded!',
    });

  return builder.build();
}

// ---------- Execute & Display ----------

const pipelineConfig = createSamplePipeline();

console.log('=== CI/CD Pipeline Configuration ===');
console.log(JSON.stringify(pipelineConfig, null, 2));

// ---------- Utility: Validate Configuration ----------

function validateConfig(config: CICDConfiguration): string[] {
  const errors: string[] = [];

  if (!config.name) errors.push('Pipeline name is required');
  if (!config.version) errors.push('Pipeline version is required');
  if (config.stages.length === 0) errors.push('At least one stage is required');
  if (config.triggers.length === 0) errors.push('At least one trigger is required');

  for (const stage of config.stages) {
    if (stage.jobs.length === 0) {
      errors.push(`Stage "${stage.name}" has no jobs`);
    }
    for (const job of stage.jobs) {
      if (job.script.length === 0) {
        errors.push(`Job "${job.name}" in stage "${stage.name}" has no script`);
      }
    }
  }

  return errors;
}

const validationErrors = validateConfig(pipelineConfig);
if (validationErrors.length > 0) {
  console.warn('\n⚠️  Validation Errors:');
  validationErrors.forEach((err) => console.warn(`  - ${err}`));
} else {
  console.log('\n✅ Pipeline configuration is valid.');
}