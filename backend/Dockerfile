FROM node:18-alpine
WORKDIR /backend
COPY package.json /backend
RUN npm i
RUN npx prisma generate
ENTRYPOINT ["sh", "./entrypoint.sh"]
EXPOSE 5173