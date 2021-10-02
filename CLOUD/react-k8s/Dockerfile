FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./front-app.conf /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html 