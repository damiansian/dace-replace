/** HttpOnly cookie name: mirrors `?t=` for same-browser navigation. */
export const STUDENT_ACCESS_TOKEN_COOKIE = "dace_student_access";

/** ~16 weeks: long enough for the cohort without treating it as a permanent account. */
export const STUDENT_ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 120;

/**
 * Request header set by proxy when the URL contains a well-formed `t`
 * so Server Components in the same request can resolve the student before the
 * Set-Cookie response is applied everywhere.
 */
export const STUDENT_ACCESS_TOKEN_HEADER = "x-dace-access-token";

/** Pathname of the incoming request (for layout chrome on teacher vs student). */
export const DACE_PATHNAME_HEADER = "x-dace-pathname";
