FROM node:18-alpine
WORKDIR /frontend
COPY package.json /frontend/
RUN yarn install
CMD ["yarn", "run", "dev", "--", "--host", "0.0.0.0"]
EXPOSE 5173