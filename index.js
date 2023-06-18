import express from 'express';
import initApp from './src/modules/app.router.js';

import { sendEmail } from './src/services/sendEmail.js';

import * as dotenv from 'dotenv'
import connectDB from './DB/connection.js';
dotenv.config()


const app = express()
const port = 3000
initApp(app,express);
//sendEmail();  
connectDB().then(()=>{
    app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`)) 
})
