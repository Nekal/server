const shell = require("shelljs");
shell.exec("sequelize db:seed:undo --seed 20180209112914-admin.js --env=test");
shell.exec("sequelize db:seed:undo --seed 20180208080958-test-news.js --env=test");
shell.exec("sequelize db:seed:undo --seed 20180208081323-test-news.js --env=test");

