# Project Backlog

## 1. To Do

### AXIOS Interceptors
- [ ] 
- [ ] Add clearing state funcitonality to intereceptor with jwt refersh logic later on 
- [ ] Standardize API errors
  Create errors.ts with normalized error types and a helper that converts Axios, API, and unknown errors into a consistent format.
- [ ] 401 — Unauthorized
  Handle expired access tokens (already implemented). Later handle invalid credentials and failed refreshes, including clearing auth state and redirecting to login when appropriate.
- [ ] 403 — Forbidden
  Handle authenticated users who lack permission. Show an access-denied message; don't automatically log them out.
- [ ] 400 / 422 — Validation errors
  Normalize backend field-validation errors so forms can display messages beside the relevant inputs.
- [ ] 404 — Not Found
  Handle missing resources and invalid routes; show a useful message or a not-found page where appropriate.
- [ ] 429 — Too Many Requests
  Handle rate limits. Respect the Retry-After header where available; don't blindly retry requests.
- [ ] 5xx — Server errors
  Handle backend failures with a generic user-friendly message, without exposing internal server details.
- [ ] Network errors and timeouts
  Handle unavailable servers, connection failures, and requests that time out without receiving a response.
- [ ] Request cancellation
  Handle intentionally cancelled requests without showing misleading error notifications.
- [ ] Duplicate notifications
  Prevent the same error from producing multiple toasts when several requests fail together.
- [ ] Logging and diagnostics
  Log useful technical details in development and integrate monitoring in production, while excluding tokens and sensitive data.

## 2. In Progress
- [ ]

## 3. Bugs
- [ ] 

## 4. Future Improvements

### AXIOS Interceptors
- [ ] helper functions for error interceptors


## 5. Completed
- [X] Add proper error handling interceptor for jwt refresh logic
- [] 
