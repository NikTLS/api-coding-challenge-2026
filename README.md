# API Coding Challenge 2026

**Scenario:** You are joining a team that is building a new API to analyze shop URLs. The initial version of the API is in place, but it needs some improvements before it can be shipped.

**Your Mission:** Your task is to enhance the API's reliability, robustness, and functionality.

**Repository:** Please clone the following repository to get started:
`git@github.com:NikTLS/api-coding-challenge-2026.git`

You will need to have node and optionally nvm installed.

After cloning change into `code` directory and run:
- `nvm use` (optional)
- `npm i`

To run tests run `npm run test`.

To lint run `npm run lint` or `npm run lint -- --fix`.

### Tasks:

1.  **Bug Investigation and Fix:**
    The current test suite is failing, indicating a bug in the existing implementation. Your first priority is to investigate the codebase, identify the root cause of the failure, and implement a fix to get the tests passing.

2.  **Implement Robust Input Validation:**
    To ensure the integrity of our system and provide clear feedback to clients, the API needs to validate incoming requests. Extend the request handler to validate the `shopUrl` parameter. If the validation fails, the API should return a `400 Bad Request` response with a clear error message.

3.  **Strengthen Testing with Edge Cases:**
    A robust service is tested for more than just the happy path. Add new unit tests to cover edge cases for the input validation you've just implemented. Think about what kind of invalid inputs could be sent and ensure they are handled gracefully.

4.  **Data Persistence:**
    To provide observability and for future analysis, we need to record the requests and their outcomes. Implement a mechanism to store each incoming request and its processing result (e.g., success or failure, and any relevant data) in an in-memory database. This will serve as a foundation for more sophisticated logging and monitoring.

### Bonus Task:

- Provide a concise OpenAPI spec at `infrastructure/openapi/openapi.yml` describing the endpoint, query parameter, responses (200 and 400), and the shape of the `ShopCheck` object.

### References:

- Handler implementation: [code/src/index.cjs](code/src/index.cjs)  
- Current tests: [code/tests/index.spec.cjs](code/tests/index.spec.cjs)