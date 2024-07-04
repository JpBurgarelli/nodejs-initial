import http from "http";
import { jsonMiddleWare2 } from "./middleware.js";

const database = {};

const Select = (table) => {
 const data = database[table] ?? [];
 return data;
};

const Insert = (table, user) => {
 if (Array.isArray(database[table])) {
  database[table].push(user);
 } else {
  database[table] = [user];
 }
};

const server = http.createServer(async (request, response) => {
 const { method, url } = request;

 await jsonMiddleWare2(request, response);

 if (url == "/users" && method == "GET") {
  const users = Select("users");

  return response
   .setHeader("content-type", "application/json")
   .end(JSON.stringify(users));
 }

 if (url == "/users" && method == "POST") {
  const { name, email } = request.body;

  const user = {
   name,
   email,
  };

  Insert("users", user);

  return response.writeHead(201).end("Usuario criado com sucesso!!!");
 }

 return response.end("sever rodando!");
});

server.listen(3340);
