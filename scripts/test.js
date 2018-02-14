const shell = require("shelljs");
shell.exec("npm run migrate:undo:test");
shell.exec("npm run migrate:test");
shell.exec("npm run seeds:test");
shell.exec("NODE_ENV=test node ./src/server.js");


