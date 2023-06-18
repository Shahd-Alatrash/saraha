import userModel from '../../../../DB/model/user.model.js'
import messageModel from '../../../../DB/model/message.model.js'

export const getMessage=async(req,res)=>{  /** middleware  هاي عبارة عن ال  ، auth بهاد الفنكشن لازم يكون اليوزر عامل تسجيل دخول في الموقع عشان اقدر اعرض كل الرسائل الي واصلاته ، عشان هيك كتبت في الايند بوينت ، كلمة  */
   // return res.json({message:req.id}); /** تبع المستقبل الي بدي اعرض الرسائل تبعونه كلهن  idبترجعلي ال  */
    const messageList=await messageModel.find({receiverId:req.id});
    return res.json({message:"success",messageList});
}


export const sendMassege=async(req,res)=>{
    const {receiverId}=req.params;
    const {message}=req.body;

const user=await userModel.findById(receiverId);
if(!user){
    return res.json({message: 'invalid account id'});
}
const createMessage=await messageModel.create({receiverId,message});
return res.json({message:"success ",createMessage});
}


export const deleteMessage= async(req,res)=>{
const id=req.id;  /** تبع الشخص المستقبل id بترجعلي ال   req.id */
const {messageId}=req.params; /**تبعت الرسالة  id بترجعلي ال  */
//return res.json(messageId);
const message=await messageModel.deleteOne({_id:messageId,receiverId:id}); /**   عمود في جدول الرسائل receiverId ،  هاي عبارة عن الاي دي تبعت الرسالة التي يتم انشائها تلقائي لما يتم عمل جدول الرسائل ، كأنها عمود يتم اضافته تلقائيا _id:*/
//return res.json(message);
if(!message.deletedCount==0){
    return res.status(400).json({message:"invalid user id or message id"});
}

return res.json({message:"success"});
}


