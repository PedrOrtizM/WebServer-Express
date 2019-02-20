
  const express = require('express')
  const app = express();
  const hbs = require('hbs')
  const port = process.env.PORT || 8080; // Para obtener el puerto donde heroku va a escuchar


  //  MiddleWare: Un callback Se ejecuta siempre sin importar la URL
  //  Todo lo que se ponga en esa carpeta será de acceso público
  app.use (  express.static( __dirname+ '/public' )   );

  //Express HBS
  hbs.registerPartials(__dirname + '/views/parciales');
  app.set('view engine', 'hbs');

  app.get('/', (req, res) => {
    res.render('home.hbs',{
      nombre: 'PedrOrtizM',
      anio: new Date().getFullYear()
    });
  });

  app.get('/about', (req, res) => {
    res.render('about.hbs',{
      anio: new Date().getFullYear()
    });
  });
  app.listen(port, () =>{
    console.log('Escuchando peticiones en el puerto: '+port);
  });
