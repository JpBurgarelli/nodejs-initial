import http from "http";

const users = [];

const Server = http.createServer((request, response) => {
 const { url, method } = request;

 if (url == "/users" && method == "POST") {
  users.push({
   name: "joao",
   email: "jp.bu@gmail.com",
  });

  return response.writeHead(201).end("Usuario criado com sucesso!");
 }

 if (url == "/users" && method == "GET") {
  return response
   .setHeader("Content-type", "application/json")
   .end(JSON.stringify(users));
 }

 return response.writeHead(201);
});

Server.listen(3335);
//basic