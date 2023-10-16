This is a [Next.js](https://nextjs.org/) API proxy server project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Clone this repository

```bash
git clone git@github.com:Crossmint/api-proxy-firebase.git
```

2. Add your credentials

```bash
cp sample.env .env.local
```

Add your values to this file

```
CROSSMINT_API_URL=https://staging.crossmint.com/api
CROSSMINT_PROJECT_ID=
CROSSMINT_CLIENT_SECRET=

NEXT_PUBLIC_FIREBASE_API_KEY=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

Guide to obtain firebase service credentials: https://firebase.google.com/docs/admin/setup

3. Start the dev server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Get a firebase token to test API out

Open [http://localhost:3000](http://localhost:3000) with your browser and click the "Sign in with Google" button and sign into a google account.  

Copy the encoded JWT and pass this as a header with property name `authorization`

Test in postman: (kinda private link)

https://app.getpostman.com/join-team?invite_code=c566f392309c4ea30e61c717004632aa&target_code=cc640ad1c6763fa9162352102fe0efb7


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
