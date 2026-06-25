# Portfolioc

Portfolio site built with Vite, React, TypeScript, Framer Motion, Tailwind CSS, and EmailJS.

## Live Demo

- Live site: add your Netlify URL here once it is published.

## Features

- Smooth animated portfolio sections with Framer Motion.
- Responsive layout for desktop and mobile.
- Contact form powered by EmailJS.
- Clean Vite + TypeScript setup for fast builds.

## Screenshot

![Portfolio screenshot](portfolio/src/assets/photo.png)

## Development

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build for production: `npm run build`

## Netlify Deployment

This project is configured for Netlify with:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

Set these environment variables in Netlify site settings:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

The contact form reads these values at build time, so the deployed site needs them configured in Netlify, not in the repository.

## EmailJS Example

See [portfolio/.env.example](portfolio/.env.example) for the variable names and placeholder values.