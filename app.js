// // Globaly avaliable function to import api's
// const fs = require('fs');


// const userName = "Mridul";


// console.log(userName);
// // alert(userName) Not defined

// // FS file system is async function hence requires callback

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Wrote in file");
// });

// To create webserver
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Incomming request");
    console.log(req.method, req.url);

    // Have to send a res because the browser will throw and error when it times out
    res.end("Success!")

});

server.listen(5000);
