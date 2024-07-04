import http from "node:http";
import { jsonMiddleware } from "../middleware/middleware.js";
import { routes } from "./routes.js";

/* 
O prefixo node: na importação de um módulo serve para informar que 
esse módulo é interno do Node.js:

No package.json foi adicionado "type": "module" para aceitar importacoes dessa
forma.

Adiciona aos escripts:
"dev": "node --watch src/server.js"



*/

const server = http.createServer(async (request, response) => {
 const { method, url } = request;

 await jsonMiddleware(request, response);

 const route = routes.find((route) => {
  return route.method == method && route.path == url;
 });

 console.log(route);

 if (route) {
  route.handler(request, response);
 } else {
  return response.writeHead(404).end();
 }
});

server.listen(3333);

/* 

writeHead() -> Numero do erro

JSON.stringify(users) -> onverte para uma string no formato JSON
end() -> Envie a resposta ao servidor e encerra a conexao

*/
