# syntax=docker/dockerfile:1

# ---- Base: Node + pnpm via Corepack ----
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ---- Deps: install all dependencies (devDeps included for build) ----
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ---- Build: compile to .output/ ----
FROM deps AS build
COPY . .
RUN pnpm build

# ---- Runner: minimal production image ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 --ingroup nodejs nodeuser

# Nitro output is fully self-contained — no node_modules needed
COPY --from=build --chown=nodeuser:nodejs /app/.output .output

USER nodeuser
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
