# 🎨 UI Design System (Next.js + Tailwind)

## 1. Colors

All colors are defined in global.css using CSS variables.

- Use Tailwind color utilities:
  - text-light-grey
  - bg-light-grey

## 2. Typography

- Use all Tailwind font sizes by default

- If required size is not available:
  - Use root from global.css
  - Example: text-*  classes like :
      - text-custom-xl
      - text-custom-2xl

## 3. Layout Rules

- Container:
  - max-w-[1320px]
  - px-5
  - mx-auto
- Centered layout
- Responsive using Tailwind breakpoints

## 4. Images & Links

- Use Next.js components:
  - next/image
  - Use <Image />
  - Must include:
    - width
    - height
    - alt
 
  - next/link
  - use <Link href=""><Link/>

## 5. Naming Rules

- Use semantic class names
- Avoid hardcoded colors
- Always use CSS variables
