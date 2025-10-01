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

function getBaseKnowledgePrompt() {
  return `
  10xDevs - AI-Assisted Development Methodologies
Executive Summary
10xDevs turns ordinary software engineers into AI-accelerated, quality-driven, change agents who deliver new features faster, with fewer production incidents and a meaningful cut in legacy-system risk. By uniting AI-assisted planning, rigorous quality practices, modernization know-how, and future-proof AI architecture, the program pays for itself within months and creates a durable competitive edge.


Core Philosophy: Production-Grade AI-Assisted Development
The fundamental question isn't "which AI tool should I use?" but rather "how do I think strategically about AI-human collaboration to solve business problems?"

Our methodology addresses three critical strategic dimensions:

Systematic Planning - Moving from ad-hoc prompting to structured, outcome-driven AI collaboration
Quality-First Integration - Embedding human oversight and verification into every AI-assisted workflow
Architectural Thinking - Designing systems and processes that leverage AI's strengths while mitigating its limitations


Strategic Methodologies & Competencies
1. Structured AI Collaboration Framework
The "Spec-First" Mental Model

Developers learn to approach AI not as a magic solution, but as a sophisticated reasoning partner requiring clear context and structured guidance.

Key Methodologies:

Requirements Translation: Converting business needs into precise technical specifications that AI can execute reliably
The 3x3 Workflow: Breaking complex problems into small, reviewable increments that maintain human oversight while leveraging AI speed
Context Engineering: Designing information flows that provide AI with the right context at the right time

Strategic Value: This eliminates the "prompt and pray" approach, creating predictable, measurable outcomes from AI collaboration.
2. Quality-Driven Development Processes
Evidence-Based Verification Over Trust

Rather than blindly accepting AI outputs, developers master systematic verification methodologies that ensure reliability and maintainability.

Key Methodologies:

Multi-Layer Testing Strategy: Designing comprehensive test suites that validate both AI-generated and human-written code
AI-Assisted Quality Assurance: Using models to identify edge cases and potential failures that human reviewers might miss
Continuous Refactoring Discipline: Treating code quality as an ongoing architectural concern, not a one-time activity

Strategic Value: Creates robust, maintainable systems that scale reliably while reducing technical debt and long-term costs.
3. Legacy System Transformation Approach
Systematic Modernization Through AI-Powered Analysis

Developers learn methodologies for understanding, analyzing, and modernizing complex existing systems using AI as an analytical partner.

Key Methodologies:

AI-Driven System Archaeology: Systematically exploring and documenting unfamiliar codebases using AI to accelerate understanding
Intelligent Debugging Workflows: Creating structured approaches to problem-solving that combine human insight with AI analysis
Large-Scale Migration Strategies: Planning and executing technology modernization with AI assistance while maintaining system stability

Strategic Value: Transforms legacy systems from business liabilities into modernized assets, dramatically reducing onboarding time and system maintenance costs.
4. Architectural Decision-Making Framework
Strategic AI Integration at the System Level

Developers master approaches for integrating AI capabilities into broader system architectures, focusing on sustainability and scalability.

Key Methodologies:

Model-Agnostic Integration Patterns: Designing systems that can leverage different AI capabilities without vendor lock-in
Context-Aware AI Workflows: Creating systems that provide models with current, relevant information for accurate outputs
Performance-Driven Model Selection: Developing data-driven approaches to evaluating and selecting AI capabilities based on specific business requirements

Strategic Value: Future-proofs AI investments while ensuring optimal performance and cost-effectiveness.


Business Impact
Development Velocity: Reduction in time-to-market through systematic planning and AI-assisted implementation
Quality Improvement: Reduction in post-launch incidents through structured testing and verification processes
Legacy System Management: Faster onboarding and reduced modernization risk through systematic analysis methodologies
Technical Debt Reduction: Lower long-term maintenance costs through disciplined refactoring and quality practices


Why Methodologies Matter More Than Tools
Tool-based training becomes obsolete quickly - specific AI tools evolve rapidly, making tool-focused training a poor investment.

Methodology-based training creates lasting value - strategic thinking patterns and systematic approaches remain valuable regardless of technological changes.

Examples of methodology persistence:

The "Plan-First" approach works whether using Copilot, Cursor, Claude Code or alternatives
Quality verification frameworks apply to any AI-generated code
Systematic debugging methodologies remain effective across different technologies
Architectural thinking patterns adapt to new AI capabilities as they emerge


Strategic Outcomes
By mastering these methodologies, development teams become:

Strategic AI Collaborators - Understanding when and how to leverage AI for maximum business impact
Quality-Focused Practitioners - Maintaining high standards while accelerating development velocity
System Modernizers - Transforming legacy technical debt into competitive advantages
Architectural Thinkers - Designing sustainable, scalable systems that evolve with AI capabilities

The result: Development teams that don't just use AI tools, but think strategically about AI integration, creating sustainable competitive advantages that persist regardless of technological shifts.


Implementation Philosophy
This training emphasizes learning by doing with real business scenarios, ensuring that methodologies are immediately applicable and measurably valuable. Teams learn to ask the right strategic questions, design appropriate verification processes, and create architectural patterns that maximize AI collaboration while maintaining quality and control.

The goal: Developers who think like architects, not just tool users - creating lasting organizational capabilities that drive innovation and competitive advantage.
`;
}
