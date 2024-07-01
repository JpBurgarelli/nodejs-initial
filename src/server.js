import http from "node:http";
import { jsonMiddleware } from "../middleware/middleware.js";

/* 
O prefixo node: na importação de um módulo serve para informar que 
esse módulo é interno do Node.js:

No package.json foi adicionado "type": "module" para aceitar importacoes dessa
forma.

Adiciona aos escripts:
"dev": "node --watch src/server.js"



*/

const users = [];

const server = http.createServer(async (request, response) => {
 const { url, method } = request;

 await jsonMiddleware(request, response);

 if (method === "GET" && url === "/users") {
  return response
   .setHeader("Content-type", "application/json")
   .end(JSON.stringify(users));
 }

 if (method === "POST" && url === "/users") {
  const { name, email } = request.body;

  users.push({
   id: 1,
   name,
   email,
  });

  return response.writeHead(201).end();
 }

 return response.writeHead(404).end("Hello, World!");
});

server.listen(3333);

/* 

writeHead() -> Numero do erro

JSON.stringify(users) -> onverte para uma string no formato JSON
end() -> Envie a resposta ao servidor e encerra a conexao

*/
