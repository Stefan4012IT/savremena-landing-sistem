# Agent Deployment Notes

This project uses GitHub mostly as source backup/history. Production is on Railway.
Before changing deployment flow, read this file and verify current service status.

## Project Shape

- Frontend app lives in the repository root.
- Backend Strapi app lives in `backend/`.
- Public production frontend domain is `https://iss.savremena.edu.rs`.
- Public production backend domain is `https://backend-strapi-production-c3d1.up.railway.app`.
- Railway project is `savremena-landing-sistem`.
- Railway environment is `production`.

## Railway Services

Current production services:

- `Frontend`
  - URL: `https://iss.savremena.edu.rs`
  - Deploys frontend root app.
- `Backend / Strapi`
  - URL: `https://backend-strapi-production-c3d1.up.railway.app`
  - Deploys backend Strapi app from `backend/`.
- `Postgres`
  - Database service only.

Useful checks:

```sh
railway status
railway service list --json
railway service status
railway deployment list
```

If the linked service is wrong, explicitly select the service before deployment:

```sh
railway service "Frontend"
railway service "Backend / Strapi"
```

## Normal Update Flow

1. Work locally.
2. Run relevant checks locally:

```sh
npm run build
npm run build --prefix backend
```

3. Commit only the intended files.
   Do not include unrelated local changes.

```sh
git status --short
git add <intended-files>
git diff --cached --stat
git commit -m "<message>"
git push origin main
```

4. Treat GitHub as history/backup, not the only production deploy target.
5. Deploy to Railway production service(s) that were affected.

## Frontend Deploy

If frontend code changed, deploy the `Frontend` Railway service.

Important: if the local worktree has unrelated uncommitted changes, do not deploy from the dirty worktree. Create a clean snapshot from the commit and deploy from that directory:

```sh
mkdir -p /private/tmp/savremena-landing-sistem-deploy-<sha>
git archive -o /private/tmp/savremena-landing-sistem-<sha>.tar <sha>
tar -xf /private/tmp/savremena-landing-sistem-<sha>.tar -C /private/tmp/savremena-landing-sistem-deploy-<sha>
railway deployment up --project 24f67c1a-2071-4cb7-b302-96705b9316b0 --service Frontend --environment production --message "<message>"
```

Run the final command from the clean snapshot directory, not from the dirty repo.

Verify:

```sh
railway service Frontend
railway deployment list
curl -I https://iss.savremena.edu.rs/
```

For JS changes, inspect the production HTML asset and confirm the expected string exists in the downloaded JS.

## Backend Deploy

If backend code changed, deploy the `Backend / Strapi` Railway service.

Use the linked service deployment from the repo root:

```sh
railway service "Backend / Strapi"
railway deployment up --service "Backend / Strapi" --environment production --message "<message>"
```

Do not use `backend --path-as-root` unless Railway source settings are intentionally changed. That previously failed with:

```text
Error: Failed to read app source directory
Caused by:
    No such file or directory (os error 2)
```

Verify:

```sh
railway service "Backend / Strapi"
railway deployment list
curl -I https://backend-strapi-production-c3d1.up.railway.app/api/landings
```

## GitHub Pages Workflow

There is a `.github/workflows/deploy.yml` workflow that deploys to GitHub Pages on push to `main`.
This is not enough for the live Railway production domain. Still check it if needed, but Railway is the actual production path for `iss.savremena.edu.rs`.

GitHub Actions check:

```sh
curl --globoff -sS 'https://api.github.com/repos/Stefan4012IT/savremena-landing-sistem/actions/runs?per_page=3'
```

## Important Cautions

- Do not assume GitHub push updates Railway.
- Check Railway deployments after every production update.
- Do not deploy a dirty worktree if unrelated changes exist.
- Use a clean `git archive` snapshot for frontend when unrelated local changes are present.
- Backend and frontend are separate Railway services; deploy the affected service(s).
- `Postgres` is not an app deployment target.
- Keep user changes that are unrelated to the task untouched.

