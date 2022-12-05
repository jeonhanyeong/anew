{"filter":false,"title":"app.js","tooltip":"/node/remoteapi/app.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","","// view engine setup","app.set('view engine', 'jade');","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","var restful = require('./routes/restful.js');","app.use('/', restful);","","app.listen(app.get('port'), () =>{","\tconsole.log('3000 Port : 서버 실행 중')","});",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","var restful = require('./routes/restful.js');","app.use('/', restful);","","app.listen(app.get('port'), () =>{","\tconsole.log('3000 Port : 서버 실행 중')","});"]}],[{"start":{"row":0,"column":0},"end":{"row":20,"column":3},"action":"remove","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","var restful = require('./routes/restful.js');","app.use('/', restful);","","app.listen(app.get('port'), () =>{","\tconsole.log('3000 Port : 서버 실행 중')","});"],"id":3},{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","","// view engine setup","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","var restful = require('./routes/restful.js');","app.use('/', restful);","","app.listen(app.get('port'), () =>{","   console.log('3000 Port : 서버 실행 중')","});"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":34},"end":{"row":20,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":74,"mode":"ace/mode/javascript"}},"timestamp":1670201425872,"hash":"d9f2c0d256610652e360d22a9881a5c01f909243"}