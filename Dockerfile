FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate && npm i -g serve

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG VITE_YANDEX_METRIKA_ID=104351621
ENV VITE_YANDEX_METRIKA_ID=$VITE_YANDEX_METRIKA_ID

RUN pnpm run build && rm -rf node_modules src

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
