FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
