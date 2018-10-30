
const http = require('http');


http.createServer( (req, res) => {

    res.writeHead(200,{'Content-Type': 'application/json'}); // Para enviar respuesta de tipo JSON

    let salida = {
      nombre: 'PedrOrtiz',
      edad: 23,
      url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();                            // Es importante terminar la respuesta

}).listen(8080);


console.log('escuchando el puerto 8080');
