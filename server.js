const config = require('./config')[process.env.NODE_ENV]; 
const express = require('express');
const http = require('http');

const app = express();
const port = config.PORT;

//cors 옵션 설정
const cors = require('cors');
let corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};
app.use(cors(corsOptions));

/*
const router = express.Router();
router.get('/',(req,res)=>{
    res.json({
        status : 200,
        data: 'success',
    })
})
app.use('/api',router);
*/

// const todoRouter = require('./api/todo')
// app.use('/api',todoRouter);

const autoRoute = require('./autoRoute');
autoRoute('/api',app);

const webServer = http.createServer(app);
webServer.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
