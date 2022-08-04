FROM php:8.0-apache
RUN apt-get update
COPY apache2.conf /etc/apache2/apache2.conf
COPY ./public /var/www/html
WORKDIR /var/www/html