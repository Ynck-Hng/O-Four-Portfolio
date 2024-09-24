FROM node:18-alpine
WORKDIR /backend
COPY package.json /backend
RUN yarn install
RUN npx prisma generate
ENTRYPOINT ["sh", "./entrypoint.sh"]
EXPOSE 5173