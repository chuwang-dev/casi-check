# Casi-Check

Casi-Check is a premium auto parts dealer and repair website built with Next.js, Prisma, and designed for a modern deployment stack.

## Theme
- Navy blue, cream, and white
- Clean, premium layout for auto parts, repair services, and dealer operations

## Recommended deployment stack
- Host the app on Vercel
- Use Neon for the PostgreSQL database
- Use Cloudflare CDN for image and static asset delivery
- Use Namecheap or Whogohost for the domain name

## Environment variables
Set these in Vercel:
- `DATABASE_URL` for the Neon connection string
- `NEXT_PUBLIC_CDN_URL` for your Cloudflare-backed asset base URL (optional)

## Local development

```bash
npm install
npm run dev
```
