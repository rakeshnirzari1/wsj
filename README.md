# Western Sydney Jobs

A modern job board platform for Western Sydney built with React, TypeScript, and Supabase.

## Environment Setup

### Required Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Getting Supabase Credentials

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the Project URL and anon/public key

### Deployment Environment Variables

For production deployment, you need to set these environment variables in your hosting platform:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Features

- Job posting and management
- User authentication
- Company profiles
- Location-based job search
- Category filtering
- Featured job listings
- Stripe payment integration
- Admin panel
- Server-side rendering for social media sharing

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Supabase (Database & Auth)
- Stripe (Payments)
- Netlify (Hosting & Functions)