export async function jsonMiddleWare2(request, response) {
 const buffers = [];

 for await (const chunk of request) {
  buffers.push(chunk);
 }

 try {
  request.body = JSON.parse(Buffer.concat(buffers).toString());
 } catch {
  request.body = null;
 }

 return response.setHeader("content-type", "application/json");
}
