FROM denoland/deno
EXPOSE 8080
WORKDIR /usr/src/app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
COPY . .
RUN deno cache main.ts
# RUN mkdir -p /var/tmp/log
CMD ["run", "--allow-all", "main.ts"]