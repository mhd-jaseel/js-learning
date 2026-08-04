const server1= Promise.reject("server1 failed");
const server2= Promise.resolve("server2 success");
const server3= Promise.reject("server3 failed");
const server4= Promise.reject("server4 failed");
const server5= Promise.resolve("server5 failed");

Promise.any([server1,server2,server3,server4,server5])
 .then(result=>console.log(result))
 .catch(error=>console.log(error))

