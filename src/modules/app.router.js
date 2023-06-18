import authRouter from './Auth/auth.router.js'
import messageRouter from './Message/message.router.js'
import userRouter from './User/user.router.js'
import connectDB from '../../DB/connection.js'


const initApp=(app,express)=>{
    connectDB();
    app.get('/',(req,res)=>{
        return res.send("hello..")
    })
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/message',messageRouter);
    app.use('/user',userRouter);
    app.use('/*',(req,res)=>{  /** غلط req في حال بعت  */
        return res.json({message:"page not found"});
    })
}
export default initApp;
