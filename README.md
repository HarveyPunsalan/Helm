# Helm 🧭

A fullstack job application tracker built to navigate the chaos of job hunting. Track where you applied, what stage you're at, and where you're headed.

---

## What it does

- Add job applications with company, role, status, date, and notes
- View all applications in a clean dashboard
- Update application status inline - Applied, Interview, Offer, Rejected
- Delete applications you no longer want to track
- Stats update automatically as your data changes

---

## Tech Stack

**Frontend**
- HTML, CSS, TypeScript
- Vanilla DOM manipulation, Fetch API

**Backend**
- Node.js, Express, TypeScript
- REST API with four endpoints

**Database**
- Supabase (PostgreSQL)

**Deployment**
- Backend → Render
- Frontend → Vercel

---

## Project Structure
```
helm/
├── helm-backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── jobController.ts
│   │   ├── routes/
│   │   │   └── jobRoutes.ts
│   │   ├── db/
│   │   │   └── supabaseClient.ts
│   │   └── index.ts
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
└── helm-frontend/
    ├── index.html
    ├── style.css
    └── app.ts
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/jobs` | Get all job applications |
| POST | `/api/jobs` | Add a new application |
| PATCH | `/api/jobs/:id` | Update application status |
| DELETE | `/api/jobs/:id` | Delete an application |

---

## Running Locally

**Backend**
```bash
cd helm-backend
npm install
cp .env.example .env
# Fill in your SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

**Frontend**
```bash
cd helm-frontend
# Open index.html in your browser
# Or use Live Server in VS Code
```

---

## Environment Variables

Create a `.env` file inside `helm-backend/` based on the provided `.env.example`:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
PORT=3000
```

Never commit your `.env` file. It is already in `.gitignore`.

---

## Status

🚧 Currently in active development. First fullstack side project.

---

## Related Projects

- [Corvus](https://github.com/HarveyPunsalan/corvus) - A social media backend API built with Node.js, Express, and TypeScript. 

---

*Built by Harvey Punsalan - BSIT student, backend developer learning fullstack.*
