## 2025-05-15 - Accessible Form Inputs with Tailwind
**Learning:** Form inputs in this project frequently rely on placeholders alone for context, which is an accessibility barrier. The project uses Tailwind, so the `sr-only` class is the preferred way to provide semantic labels without altering the visual design.
**Action:** Always add a `<label>` with `htmlFor` and the `sr-only` class to inputs that lack a visible label.

## 2025-05-15 - Handling Duplicate Section IDs
**Learning:** Section components (like AboutSection, StatsSection) often have IDs that are also applied to their wrapper divs in `Home.tsx`. This causes duplicate ID attributes in the DOM, breaking fragment navigation and Playwright's strict mode.
**Action:** Ensure IDs are unique and only applied to the outermost element of a section, or remove them from the component root if the wrapper already has them.
