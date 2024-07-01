const buff = Buffer.from("Hello");

console.log(buff);
//<Buffer 48 65 6c 6c 6f>

console.log(buff.toJSON());
// { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
