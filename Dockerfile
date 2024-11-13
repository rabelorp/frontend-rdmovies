FROM node:20.17.0 AS install
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
 
FROM node:20.17.0 AS build
 
WORKDIR /app
 
COPY --from=install /app/node_modules ./node_modules
 
COPY . .
 
RUN npm run build
 

 
FROM node:20.17.0 AS production
 
WORKDIR /var/www
 
COPY --from=install /app/node_modules ./node_modules
 
COPY --from=build /app/.next /var/www/.next

COPY package*.json ./

COPY .env ./
 
EXPOSE 3000
 
CMD ["npm", "start"]
