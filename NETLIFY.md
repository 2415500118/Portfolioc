# Netlify Deployment

This project is configured to deploy on Netlify with:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

## Required Environment Variables

Set these in Netlify site settings under Environment Variables:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

## Notes

- The app uses Vite, so these values must be available at build time.
- The example values are documented in [portfolio/.env.example](portfolio/.env.example).
- If the variables are missing, the contact form shows a configuration error instead of failing silently.