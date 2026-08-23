# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# workflow
- When user asks a conceptual question, create a markdown file in IQ_Notes/ folder explaining the concept with table view, examples, and visual pipeline format (similar to Source_Byte_Binary_Code_IQ.md). Confidence: 0.85
- For keyword/concept explanation deliverables, follow the user's requested file format literally — when the user asks for an "html file", create a self-contained visually-rich HTML (dark theme, tables, pipeline/flow visuals, syntax-highlighted code, badges/callouts) rather than defaulting to markdown. Confidence: 0.7
- Prefers a plan-first workflow for building projects: show the full plan and get approval before writing any code, then build step-by-step while narrating and explaining each step; ask clarifying questions (e.g., via choices) before locking design decisions. Confidence: 0.9

# test-automation
- Wants enterprise/production-grade automation code ("almost zero bad coding practice"): Page Object Model with reusable action methods, structured try/catch exception handling that names the failing step, and a consistent modular structure. Confidence: 0.9
- Mandates XPath-only locators in automation scripts — no CSS selectors, IDs, or other locator types. Confidence: 0.95
- Forbids explicit sleeps (Thread.sleep/setTimeout); relies on automatic/conditional waiting (WebDriverWait, Playwright auto-waiting + expect polling). Confidence: 0.9
- Wants generated code to be runnable-only with no comments or extra explanatory text; keeps code clean of comments even in deliverables like READMEs/tests. Confidence: 0.85
- Prefers credentials/secrets read from environment variables (never hardcoded), with credential-dependent tests auto-skipping when vars are unset. Confidence: 0.7

