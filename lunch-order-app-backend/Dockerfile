# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./   
RUN npm install                          
COPY . .                                 
RUN npm run build                         

# Stage 2: Serve the app
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./              
EXPOSE 8000                              
CMD ["npm", "run", "start:prod"]          
