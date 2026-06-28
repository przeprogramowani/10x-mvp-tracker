export const getAnalysisPrompt = (projectDir: string, timestamp: string): string => {
  return `# MVP Project Analysis Report

You are an expert in 10xDevs certification project analysis.

The next task that you will excel at is:

You need to analyze the project located at: ${projectDir}

This project is a Minimum Viable Product (MVP) submitted for the 10xBuilder block.
It can be ANY kind of software project — a web app, a CLI tool, a desktop or mobile
app, an API/backend service, a data pipeline, a bot, a browser extension, etc.
Do NOT assume it is a web application. Infer the project's domain and shape from its
files first, then judge each criterion in the way that makes sense for that domain.

OUT OF SCOPE — do NOT evaluate, reward, or deduct for any of these: visual design,
styling, CSS, UI polish, accessibility, and whether the app is deployed/hosted/live.
These are reviewed separately (e.g. from submitted screenshots). Judge ONLY the criteria
below, purely from the code and documentation in the repository.

Please analyze this project against the minimal technical requirements below.
These requirements are intentionally modest — the goal is to confirm solid technical
foundations, not to demand a large application. For each criterion, provide:
- A clear ✅ (met) or ❌ (not met) status
- A brief explanation of what was found or what is missing
- For met criteria, point to concrete evidence (file paths, function names)
Base every ✅ on evidence you actually located in the repository. If you cannot find
evidence for a criterion, mark it ❌ rather than assuming it exists — but remember the
bar is "minimal", so do not demand more than each criterion asks for.

## Analysis Criteria:

1. **CRUD actions**
   - The project must let users create, read, update, and delete its core items
     (e.g. add, list, edit, and remove tasks on a to-do list).
   - "Items" depends on the domain: records, files, entities, resources, documents, etc.
   - Look for the operations wherever they live for this project type: HTTP/API routes,
     CLI commands, service/repository methods, database calls (Supabase, Prisma, Drizzle,
     raw SQL, ORMs), file operations, etc.
   - State explicitly which of Create / Read / Update / Delete you found, each with its
     own evidence. Mark this criterion ✅ ONLY if all four exist for at least one core
     item type and act on persisted data. A transient edit that happens only in the UI
     before the item is first saved does NOT count as Update.

2. **Business logic**
   - The project must contain at least one function that implements real logic beyond
     plain CRUD (e.g. automatically suggesting task priority based on its name,
     description, and deadline).
   - Examples: calculations, scoring, workflows, validation rules, data transformations,
     scheduling, recommendations, or integrations that process data.
   - This should reflect the unique value the project provides.

3. **Tests addressing a defined risk**
   - The project must include at least one test suite that addresses a concrete risk.
   - Look for a test plan document (e.g. test-plan.md) that defines the risk(s) the tests
     are meant to cover. Check the context/ directory first (e.g.
     context/foundation/test-plan.md), then fall back to .ai/ or docs/.
   - Then confirm at least one real test (*.test.*, *.spec.*, or a test directory) exists
     and meaningfully exercises that risk. Any framework is fine (Vitest, Jest,
     Playwright, pytest, Go test, etc.).
   - In your explanation, name the specific risk from the test plan AND the specific test
     that exercises it. Mark ✅ only when a real test maps to a stated risk. If tests
     exist but there is no test plan, or no test maps to any stated risk, mark it ❌ and
     say what is missing (a test plan, or a test that targets a defined risk).

4. **Authentication tied to a user**
   - Access to the system should be tied to a user, who logs in and sees the resources
     assigned to them.
   - Look for authentication (login) and for resources being scoped/owned per user.
   - A SIMPLER or register-free approach is acceptable when the project's domain makes
     that a reasonable design decision (e.g. a single-user local CLI, a personal desktop
     tool, an API secured by a key/token). In that case, explain why the chosen approach
     is reasonable for this project and mark it ✅ if it sensibly identifies/scopes a user.

5. **Documentation**
   - The project should document what it is and what it does.
   - Check the context/ directory FIRST — the 10x foundation lives there (e.g.
     context/foundation/prd.md, context/foundation/roadmap.md). If it is not there,
     fall back to .ai/ or docs/, then the project root (README.md).
   - Expect at least a README describing the project and a Product Requirements Document
     (PRD) or equivalent. Both should have meaningful content, not just placeholders.

## Expected Output Format:

After analyzing, provide:

1. **Checklist** with a clear ✅/❌ for each of the 5 criteria
2. **Project Status**: Calculate percentage (X/5 * 100)
3. **Priority Improvements**: For each unmet criterion, give specific, actionable guidance
   tailored to this project's type and stack
4. **Summary for Submission Form**: A concise 2-3 sentence summary

Remember: these are MINIMAL requirements — criteria 1-4 (CRUD, business logic, tests,
authentication) are the official technical foundations, and documentation rounds out a
submission-ready project. A project that meets all five is in great shape to submit. More
ambitious projects may earn special recognition and a Demo Day invitation — if you notice
the project goes well beyond the minimum, mention it briefly.

Generated: ${timestamp}

Please begin the analysis now.`;
};
