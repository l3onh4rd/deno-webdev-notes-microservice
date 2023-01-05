FROM denoland/deno

EXPOSE 6886

WORKDIR /src

ADD . /src

RUN deno cache src/server.ts

CMD ["run", "--allow-net", "--allow-env", "./src/server.ts"]