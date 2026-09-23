# Responsive fixes

Updated the restaurant project to prevent mobile/tablet text overflow and horizontal scrolling.

Main fixes:
- Fixed the About Us section's oversized 40px paragraph on mobile.
- Made About Us heading scale correctly from mobile to desktop.
- Added safe text wrapping for long content.
- Added viewport overflow protection.
- Added minimum-width safety for layout containers.
- Kept desktop/tablet typography using responsive Tailwind breakpoints.
- Corrected the `AboutSection` minimum-height utility.

Run:
```bash
npm install
npm run dev
```

For a production check:
```bash
npm run build
```
