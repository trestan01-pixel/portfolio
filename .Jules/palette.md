## 2025-05-15 - [Global Components and Accessibility]
**Learning:** Rendering a global component like `CustomCursor` inside individual pages leads to duplicate instances, affecting performance and causing unpredictable behavior. Always ensure global components are only rendered once at the root level.
**Action:** Audit `App.tsx` and `Home.tsx` to ensure components intended to be global are not duplicated.

**Learning:** Interactive elements like the `VoiceIntro` audio player need dynamic `aria-label` attributes that update with state changes (e.g., "Play" to "Pause") to be fully accessible to screen reader users.
**Action:** Use state-driven ARIA labels for all icon-only buttons.
