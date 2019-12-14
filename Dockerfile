FROM nginx:1

# @TODO create a base image with health check enabled by default
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

COPY dist/blink-frontend/ /usr/share/nginx/html
