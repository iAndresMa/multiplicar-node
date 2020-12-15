const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor '${ base }' no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor '${ limite }' no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`./tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla${ base }.txt`);
        });
    });
}

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log(`======Tabla de ${base}======`.green);

        if (!Number(base)) {
            reject(`El valor '${ base }' no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor '${ limite }' no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }
        console.log(data);
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}