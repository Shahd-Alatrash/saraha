import jwt from 'jsonwebtoken';

export const generateToken=(payload,signature=process.env.SIGNATURE_TOKEN,expiresIn='1h')=>{
const token=jwt.sign(payload,signature,{expiresIn});
return token;
}

export const verifyToken=(token,signature=process.env.SIGNATURE_TOKEN)=>{
    const decoded=jwt.verify(token,signature);
    return decoded;
}