## 2025-05-22 - [Duplicate ID Pattern]
**Learning:** The application's main page (`Home.tsx`) frequently wraps components in `div` elements with IDs that are also present on the root elements of those components (e.g., `#about`, `#cases`). This causes duplicate IDs in the DOM, which violates HTML standards and can cause failures in strict-mode automated tests or navigation issues.
**Action:** When adding sections or navigating to them, check both the page wrapper and the component root for ID definitions to ensure uniqueness.

## 2025-05-22 - [Interactive Element Semantics]
**Learning:** Many interactive components were built using `motion.div` with click handlers. This prevents keyboard focus and screen reader recognition.
**Action:** Always use `<motion.button>` or `<button>` for interactive elements. Ensure icon-only buttons have explicit `aria-label` attributes and `type="button"`.
