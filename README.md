# Casi-Check

Casi-Check is a premium auto parts dealer and repair website built with Next.js, Prisma, and deployed on Render.

## Theme
- Navy blue, cream, and white
- Clean, premium layout for auto parts, repair services, and dealer operations

## Deployment
- Push your code to GitHub on the `main` branch
- Render build command: `npm run build`
- Render start command: `npm start`
- Required environment variable: `DATABASE_URL`

## Render configuration
The project includes `render.yaml` for Render deployment with a Node web service:

```yaml
services:
  - type: web
    name: casi-check
    env: node
    buildCommand: npm run build
    startCommand: npm start
```

## Local development

```bash
npm install
npm run dev
```
