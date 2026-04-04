# Helm 🧭
A fullstack job application tracker built with React, Node.js, Express, and TypeScript, using Supabase as the database.

The name comes from the helm of a ship — the thing you use to steer and stay in control. Felt right for a project about navigating the chaos of job hunting.

---

## What is this?
Helm is a fullstack app that lets you track every job you apply to. You can log applications, update their status as things progress, and delete the ones that go nowhere. Everything persists in a real PostgreSQL database through Supabase.

I built this as my first fullstack project outside of school. The goal was to actually understand how a frontend and backend talk to each other — not just follow a tutorial.

---

## Features
- Add job applications with company, role, status, applied date, and notes
- View all your applications in one dashboard
- Update application status — Applied, Interview, Offer, Rejected
- Delete applications you no longer want to track
- Stats update automatically as your data changes

---

## Tech Stack
| | |
|---|---|
| **Frontend** | React, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | Supabase (PostgreSQL) |
| **Dev Server** | ts-node + nodemon |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/jobs` | Get all job applications |
| POST | `/api/jobs` | Add a new application |
| PATCH | `/api/jobs/:id` | Update application status |
| DELETE | `/api/jobs/:id` | Delete an application |

---

## Live API
Base URL: `https://helm-backend-z9fl.onrender.com`

> Hosted on Render's free tier — first request after 15 minutes idle takes around 30–60 seconds to wake up.

Try the health check:
`https://helm-backend-z9fl.onrender.com/health`

---

## Project Structure
helm/
├── helm-backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── jobController.ts
│   │   ├── routes/
│   │   │   └── jobRoutes.ts
│   │   ├── db/
│   │   │   └── supabaseClient.ts
│   │   ├── types/
│   │   │   └── job.ts
│   │   └── index.ts
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
└── helm-frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json

---

## Running Locally

**Backend**
```bash
cd helm-backend
npm install
cp .env.example .env
npm run dev
```

**Frontend**
```bash
cd helm-frontend
npm install
npm run dev
```

---

## Environment Variables
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
PORT=3000

---

## Scripts
```bash
npm run dev      # run locally with nodemon + ts-node
npm run build    # compile TypeScript to dist/
npm start        # run compiled output, what Render actually runs
```

---

## Status
**v0.1.0** — Backend complete and deployed. Frontend in active development.

---

## Related Projects
- [Corvus](https://github.com/HarveyPunsalan/corvus) — social media backend API built with Node.js, Express, and TypeScript.

---

*Built by Harvey Punsalan — BSIT student, first fullstack project.*
