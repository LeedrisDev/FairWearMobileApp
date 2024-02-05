FROM nginx:alpine3.18 as base
WORKDIR /usr/share/nginx/html
EXPOSE 80

FROM node:18-alpine3.18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS final
COPY --from=builder /app/dist/ .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
