## 2024-07-25 - Semantic HTML for Interactive Elements

**Learning:** Discovered non-semantic `div` elements being used for interactive buttons (`MagneticButton`). While visually styled and interactive for mouse users, they are completely inaccessible to keyboard-only and screen reader users. They cannot be focused, triggered with Enter/Space, and are not announced as buttons.

**Action:** Always use the correct semantic HTML element for the job. For anything that triggers an action, `motion.button` should be used instead of `motion.div`. This provides built-in accessibility for focus, keyboard events, and screen reader announcements, which is a critical baseline for all interactive UI.
