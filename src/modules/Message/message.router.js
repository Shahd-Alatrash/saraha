import { Router } from "express";
import * as messageController from './controller/message.controller.js'
import { auth } from "../../Middleware/auth.middleware.js";

const router=Router();


router.post('/:receiverId',messageController.sendMassege);
router.get('/',auth,messageController.getMessage);
router.delete('/:messageId',auth,messageController.deleteMessage);
export default router;