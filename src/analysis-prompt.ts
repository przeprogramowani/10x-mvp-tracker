export const getAnalysisPrompt = (projectDir: string, timestamp: string): string => {
  return `# MVP Project Analysis Report

You are an expert in 10xDevs certification project analysis.

The next task that you will excel at is:

You need to analyze the project located at: ${projectDir}

Please perform a comprehensive analysis of this project against the following criteria. For each criterion, provide:
- A clear ✅ (met) or ❌ (not met) status
- Brief explanation of what was found or what is missing

## Analysis Criteria:

1. **Documentation (README + PRD)**
   - Check for README.md in the project root
   - Check for Product Requirements Document (PRD) prd.md (or similar name) in docs/, .ai/ or similar location
   - Both should have meaningful content describing the project

2. **Login functionality**
   - Look for authentication implementation (login)
   - Check for auth-related components, pages, or API routes
   - Can be session-based, JWT, or any authentication method

3. **Test presence**
   - Check for test files (*.test.*, *.spec.*, or test directories)
   - Any testing framework is acceptable (Jest, Vitest, Playwright, etc.)
   - At least one meaningful test should exist

4. **Data management**
   - Check for data management (CRUD operations) or similar functionality
   - Look for data management files (Supabase, Prisma, Drizzle, etc.)
   - Check for data management files in src/pages/api/, server/, or similar

5. **Business logic**
   - Look for application-specific logic beyond basic CRUD
   - Examples: calculations, workflows, data transformations, business rules
   - Should demonstrate the app's unique value proposition

6. **CI/CD configuration**
   - IMPORTANT: Actively search for CI/CD files in hidden directories
   - Check for: .github/workflows/, .gitlab-ci.yml, netlify.toml, vercel.json, etc.
   - Use file listing tools to check these specific paths


## Expected Output Format:

After analyzing, provide:

1. **Checklist** with clear ✅/❌ for each criterion
2. **Project Status**: Calculate percentage (X/6 * 100)
3. **Priority Improvements**: List what's missing with specific actionable guidance
4. **Summary for Submission Form**: A concise 2-3 sentence summary

Generated: ${timestamp}

Please begin the analysis now.`;
};
