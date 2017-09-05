'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from '../front/src/routes.js';

//initialise app and server
const app = new Express();
const server = new Server();

//routing and renderToString
app.get('*',(req,res) => {
  match(
    { routes, location: req.url},
    (err, redirectLocation, renderProps) => {
      
      if (err) {
        //handle error
      }

      if (redirectLocation) {
        //handle redirection (??)
      }

      //generate react markup for current route
      if (renderProps) {
        res.status(200).send(renderToString(<RouterContext {...renderProps} />));
      } else {
        //otherwise render not found page
      }

      //render index with embedded react markup
      return res.render('index', { markup});
    }
  );
});

//start server
const port  = process.env.PORT || 3000;
const env   = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if(err) {
    return console.error(err);
  }

  console.info(`Server running on http://localhost:${port} [${env}]`)
});
