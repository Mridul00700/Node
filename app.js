// // // Globaly avaliable function to import api's
// // const fs = require('fs');


// // const userName = "Mridul";


// // console.log(userName);
// // // alert(userName) Not defined

// // // FS file system is async function hence requires callback

// // fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
// //     if (err) {
// //         console.log(err);
// //         return;
// //     }
// //     console.log("Wrote in file");
// // });

// // To create webserver
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("Incomming request");
//     console.log(req.method, req.url);

//     if (req.method === 'POST') {
//         let body = "";

//         req.on('end', () => {

//             // console.log(body);
//             const userName = body.split('=')[1];
//             res.end('<h1>' + userName + '</h1>');
//         })

//         req.on('data', (chunk) => {
//             body += chunk;
//         });
//     }
//     else {
//         res.setHeader('Content-Type', 'text/html')
//         res.end('<form method="POST"><input type="text" name="username"/><button type="submit">Create User</button></form>');

//     }
// });
// // Have to send a res because the browser will throw and error when it times out


// server.listen(5000);


// Using Express --->>>

const express = require('express');
// express is a function

const app = express();

// Middleware --->>>> functions -->
app.use((req, res, next) => {
    let body = "";
    // After parsing incoming data 
    req.on('end', () => {
        const userName = body.split('=')[1];
        if (userName) {
            req.body = { name: userName };
        }
        next();
    });

    // Parsing data that is comming in chunks 
    req.on('data', chunk => {
        body += chunk;
    })
});


app.use((req, res, next) => {
    if (req.body) {
        return res.send('<h1>User : ' + req.body.name + '</h1>');
    }
    res.send('<form method="POST"><input type="text" name="username"/><button type="submit">Create User</button></form>');
});


app.listen(5000);