const fs = require('fs');
const FILE = './data.json';

function readFILE() {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE, 'utf-8', (_, data) => {
            resolve(data);
        });
    });
}

function writeFILE(data) {
    fs.writeFile(FILE, JSON.stringify(data, null, 4), (err) => {
        if (err) console.log("[!] ERROR");
        else console.log("[+] Saved", new Date());
    })
}

module.exports = { readFILE, writeFILE };