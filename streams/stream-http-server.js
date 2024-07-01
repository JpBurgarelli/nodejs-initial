import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
 _transform(chunk, encoding, callback) {
  const transformed = Number(chunk.toString()) * -1;

  console.log(transformed);

  callback(null, Buffer.from(String(transformed)));
 }
}

const server = http.createServer(async (req, res) => {
 //  return req.pipe(new InverseNumberStream()).pipe(res);

 const buffers = [];

 for await (const chunk of req) {
  buffers.push(chunk);
 }
 //Enquanto todos os buffers nao forem lidos e cocatenados, nao  ha retorno.

 const fullStreamContetent = Buffer.concat(buffers).toString();

 console.log(fullStreamContetent);

 return res.end(fullStreamContetent);
});

server.listen(3334);
