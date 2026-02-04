## 2025-05-14 - [Accessibility: Icon-only Audio Controls]
**Learning:** Icon-only buttons (like Play/Pause in VoiceIntro) lack semantic meaning for screen readers. Dynamic aria-labels that reflect the state are essential.
**Action:** Always add dynamic aria-labels to interactive elements that change state but only show different icons.

## 2025-05-14 - [Environment: Tool Output Truncation]
**Learning:** Large files can be truncated in the trace, leading to plan rejections.
**Action:** Read large files in small (25-line) chunks using sed or head/tail to ensure they are fully captured in the session trace.
