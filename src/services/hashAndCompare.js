import bcrypt from 'bcrypt';

export const hash=(plainText,saltRound=process.env.SALT_ROUND)=>{
    const hashResult=bcrypt.hashSync(plainText,parseInt(saltRound))
    return hashResult;
}

export const compare=(password,hashValue)=>{
    const hashCompare=bcrypt.compareSync(password,hashValue)
    return hashCompare;
}