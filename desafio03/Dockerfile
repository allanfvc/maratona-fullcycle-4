FROM node:12.13-alpine As development
RUN mkdir /app
WORKDIR /app
COPY . . 
RUN npm run build


FROM node:12.13-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=development /app/dist ./dist
COPY ./maratona.db .
CMD ["node", "dist/main"]