#!/bin/bash
mv js/HTTPQuery.js js/HTTPQuery-node.js
sed 's/require("request")/require("browser-request")/' \
    js/HTTPQuery-node.js >js/HTTPQuery.js
browserify -r ./index.js:blockapps-js -r bluebird > api.js
#minify api-tmp.js > api.js
#rm api-tmp.js
mv js/HTTPQuery-node.js js/HTTPQuery.js
