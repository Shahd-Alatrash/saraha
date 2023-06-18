/***********************                    الي رح اكررهن بالكود كتير      try , catch         هاد الملف لمعالجة مشكلة ال     *************** */
  
export const asyncHandler=(fn)=>{    /** login هوي فنكشن  fn  ال  */
    return (req,res)=>{    /**req,res لأنه اي شي بحطه بالايند بوينت لازم يرجع  */
        fn(req,res).catch(error=>{    /**login للفنكشن الي ناديت عليه الي هوي  calling   عملت  */
      return res.status(500).json({message:"error catch",error:error.stack});
        })    
    } 
}