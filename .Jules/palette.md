# Palette's Journal

## 2025-05-14 - Inline Validation & ARIA for Forms
**Learning:** Replaced intrusive browser `alert()` calls with state-driven inline validation and accessible labeling. Using `sr-only` labels ensures screen reader compatibility when placeholders are the only visual cues, and `aria-invalid` provides programmatic error feedback.
**Action:** Always prefer inline validation over `alert()` and ensure every input has a linked `<label>` (even if visually hidden).
