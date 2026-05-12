# PRSNLBRANDED

Personal branding agency landing page built with Next.js 14.

## Quick deploy to Vercel

### Option A: Drag and drop (easiest)

1. Go to **https://vercel.com/new**
2. Drag the entire `prsnlbranded` folder into the upload area
3. Vercel auto-detects Next.js
4. Click "Deploy"
5. Wait 1-2 minutes
6. Done. You get a URL like `prsnlbranded.vercel.app`

### Option B: GitHub + Vercel (recommended for production)

1. Create a GitHub repo
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USER/prsnlbranded.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new
4. Import the GitHub repo
5. Click "Deploy"

## Connect your domain (prsnlbranded.com)

1. In Vercel project settings, go to "Domains"
2. Add `prsnlbranded.com`
3. Vercel gives you DNS records to add to your domain provider (where you bought prsnlbranded.com)
4. Add them in your domain provider (Namecheap, Squarespace Domains, GoDaddy, etc.)
5. Wait 5-30 minutes for DNS to propagate
6. Site is live on prsnlbranded.com with free SSL

## Run locally first (optional)

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customize

- **Copy text**: Edit `app/page.js`
- **Colors and styles**: Edit `app/globals.css`
- **Photos**: Replace files in `public/images/` (keep the same filenames)
- **Form submissions**: The form sends to `/api/apply`. Currently it just logs to console. To send to email, integrate Resend or SendGrid. To send to a database, add Vercel Postgres or Supabase.

## Add email notifications (later)

Install Resend:
```bash
npm install resend
```

Edit `app/api/apply/route.js` to send email when someone applies.
