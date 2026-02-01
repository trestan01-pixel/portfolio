## 2025-05-14 - Accessible Composite Components
**Learning:** For composite interactive components (like audio widgets), wrapping the entire component in a single semantic `<button>` is far superior for accessibility than using multiple nested interactive elements or `role="button"` on a `div`. This provides a single, predictable tab stop and clear interaction for screen reader users.
**Action:** Always check for nested interactive elements in complex widgets and refactor to a single semantic container where possible.
