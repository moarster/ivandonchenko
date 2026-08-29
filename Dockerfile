FROM node:22-alpine AS build

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG VITE_YANDEX_METRIKA_ID=104351621
ENV VITE_YANDEX_METRIKA_ID=$VITE_YANDEX_METRIKA_ID

RUN pnpm run build

# `serve -s` rewrote every request to the root index.html, which would discard
# the per-route HTML that scripts/prerender.mjs emits for crawlers.
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
