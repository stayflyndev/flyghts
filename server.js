const express = require('express');
const request = require("request");
const app = express();

  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});


const api_key = "36c7db92-ee61-43d4-832f-cc3cf3a6d54e";
const api_base = "https://airlabs.co/api/v9/";


app.get('/', (req, res) => {
    res.send('Hello, World!');
    
    //request
    const apiCall = (method, params, cb) => {
        params.api_key = api_key;
        request.post({url: `${api_base}${method}`, form: params}, cb);
      }
      
    apiCall('ping', {param1: 'value1'}, (err, res) => {
        console.group(res.body);
        
      });


  });


