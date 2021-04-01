FROM node:14 as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json ./
COPY ./yarn.lock ./

RUN apt-get update
RUN apt install yarn -y
RUN yarn global add react-scripts@4.0.2
RUN yarn install
COPY . .
RUN yarn run build

# Production build

FROM nginx:alpine
RUN ln -sf /usr/share/zoneinfo/Asiz/Seoul /etc/localtime
ENV TZ Asia/Seoul

COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf