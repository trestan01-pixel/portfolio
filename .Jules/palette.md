## 2025-05-14 - [A11y/UX Polish]
**Learning:** Generic IDs like `contact` should be avoided for form inputs in a single-page application where sections might already use those IDs for navigation anchors.
**Action:** Use feature-specific prefixes for input IDs (e.g., `form-contact`, `audit-contact`) to avoid strict mode violations in Playwright and ensure unique IDs for accessibility.
