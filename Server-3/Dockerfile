FROM denoland/deno:latest
EXPOSE 8080
WORKDIR /usr/src/app
USER deno
COPY main.ts .
RUN deno cache main.ts
COPY . .
RUN deno cache main.ts
CMD ["run", "--allow-net", "main.ts"]