FROM node:12-alpine as build

# Dependencies
COPY package*.json ./
RUN npm install

# Build
COPY . .
RUN npm run build


FROM node:9-alpine

# Dependencies
COPY --from=build ./dist ./dist
COPY package.json .
RUN npm install --production --parseable

# Application
USER node
ENV PORT=8080
EXPOSE 8080

ENV NODE_ENV=production
ENV cart=http://task-8-dev2.eu-west-1.elasticbeanstalk.com/api/profile/cart
ENV products=https://1ztz8u9329.execute-api.eu-west-1.amazonaws.com/dev/products

CMD ["node", "dist/main.js"]