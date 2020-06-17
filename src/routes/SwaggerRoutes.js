const fs = require('fs');
const path = require('path');
const router = require('express').Router();


//Swagger Configs
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var spec = fs.readFileSync(path.join(__dirname, '../doc/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);


swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

    // Serve the Swagger documents and Swagger UI
    router.use(middleware.swaggerUi());

});

module.exports = router;