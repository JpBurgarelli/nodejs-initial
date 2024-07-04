import http from "http";
import { jsonMiddleWare2 } from "./middleware.js";

const users = [];

const server = http.createServer(async (request, response) => {
 const { method, url } = request;

 await jsonMiddleWare2(request, response);

 if (url == "/users" && method == "POST") {
  const { name, email } = request.body;
  users.push({
   name,
   email,
  });

  return response.writeHead(201).end("Users created!");
 }

 if (url == "/users" && method == "GET") {
  return response
   .setHeader("content-type", "application/json")
   .end(JSON.stringify(users));
 }
});

server.listen(3330);
