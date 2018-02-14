const shell = require("shelljs");
shell.exec("sequelize db:migrate:undo:all --to 20180124114632-create-table-news.js --env=test");
shell.exec("sequelize db:migrate:undo:all --to 20180124114619-create-table-users.js --env=test");


