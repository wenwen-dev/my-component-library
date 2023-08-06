# My Component Library

This is my component library which started when I took Josh Comeau's 'CSS for JS developers' course. This project is an ongoing one with continuous update as I progress. The goal is to build my own component library that can be applied to my projects.

## Reflections

### Breadcrumb

- Accessibility attributes e.g. 'aria-label'
- The slash '/' separating Crumbs are not actually semantic, and instead of using slashes, a better way it using a border and transforms its angle to sparing screen readers to read out the word 'slash'

### Button

- A good approach: build one baseline version, e.g. filled large button to have something to start from -> Add size variations -> Add variant and state options
- 2 ways to allow variations:
  - a. use the style attribute to make styles accessible to the component that styled-component creates, and create a variable storing different sizes' styles, with naming matching to CSS variables, thus can be set through 'var()' when passed a particular size
  - b. use conditional rendering in pair with styled-components' composition, i.e. fill/outline/ghost button variations are rendered and unique styles are applied on top of the ButtonBase style.
- Some great little learnings
  - 'currentcolor' is often a better choice for things like border-color than literal values - flexible when color is changed in the future
  - If more than 1 font family is used, can create a utils/fonts.js to import all and export individually when needed. And use variable fonts when possible - smaller package size
  - Having a constants.js file to store things like primary and secondary color values - saves copying pasting (and switching formats) from Figma.

---

Unprocessed Next.js intro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
