# Base44 dev environment notes

- Next.js 14 App Router marketing site; no database, API routes, or environment variables.
- Run with `docker compose -f docker-compose.base44.yml up -d --build`; the `web` service bind-mounts the repo and runs `next dev -H 0.0.0.0` on host port 3000.
- `node_modules` and `.next` are container-only anonymous volumes; dependencies are installed with `npm ci` at every container start from the committed `package-lock.json`. If a dependency is added or the lockfile changes, just restart `web` (or up again) — no image rebuild needed.
- The 3D hero uses procedural react-three-fiber geometry only (no model downloads). Project/room imagery is loaded from `images.unsplash.com`, so the browser needs outbound internet for photos; the page still renders without them.
- No external credentials are required; contact and newsletter forms are UI-only demos.
- Verify: `curl -sS -o /dev/null -w '%{http_code}' http://localhost:3000/` should return 200, and the served page is the live dev bundle (look for `/_next/static/...` scripts and `.next` compilation logs in `docker compose logs web`).
