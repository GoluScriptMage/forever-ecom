---
applyTo: "**"
---

Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

---

## applyTo: '\*\*'

Here are the Golden Rules for styling any component in this project. Follow these for every styling request.

1.  **Responsiveness is Non-Negotiable:** All styling MUST be fully responsive and look great on all screen sizes, from mobile to desktop. Prioritize using responsive Tailwind CSS classes (e.g., `md:`, `lg:`).

2.  **Maintain the Vibe:** The overall design theme is clean, modern, and minimalist. All new styles must be consistent with the existing design aesthetic of the application.

3.  **Structure is King:** Respect the existing JSX structure. Your primary job is to add styling classes to the existing elements. If you believe a structural change is absolutely necessary for better styling or accessibility, you are allowed to change it, but you MUST add a comment above the change explaining why, like this: `// Copilot: Refactored div structure for better flexbox alignment on mobile.`

4.  **I Will Provide Context:** For each request, I will tell you what the component is (e.g., "this is the Related Products section" or "this is the Navbar"). Use that context to inform your styling choices.

5.  **Consistent Spacing System:** Follow the project's spacing scale for margins and padding. Use `gap-4` for small spacing, `gap-6` for medium spacing, and `gap-8` for larger spacing between major sections.

6.  **Interactive Elements:** All buttons, links, and interactive elements should have clear hover, focus, and active states that provide visual feedback to users.

7.  **Typography Hierarchy:** Maintain consistent text sizing and weight according to element importance: headings use `text-2xl` to `text-4xl` with `font-semibold`, subheadings use `text-xl` with `font-medium`, and body text uses `text-sm` or `text-base`.

8.  **Animation and Transitions:** Use subtle animations that enhance UX without being distracting. Prefer `transition-all duration-200` for most interactions.
