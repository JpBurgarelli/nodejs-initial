import http from "http";

const users = [];

const server = http.createServer((request, response) => {
 const { url, method } = request;

 if (method == "POST" && url == "/users") {
  users.push({
   id: 1,
   nome: "j",
   email: "j.b@g.c",
  });

  return response.writeHead(201).end("Usuario Criado com sucesso!");
 }

 if (method == "GET" && url == "/users") {
  return response
   .setHeader("Content-type", "application/json")
   .end(JSON.stringify(users));
 }

 return response.end("buscsa!");
});

server.listen(3336);
