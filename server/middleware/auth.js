import jwt from "jsonwebtoken";

export const verifyToken = async(req,res,next)=>{
    try{
        let token = req.headers("Authorization");
        if(!token){
            return res.status(401).send("Access Denied");
        }

        if(token.startWith("Bearer ")){
            token=token.slice(7,token.length).trimLeft();
        }

        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified.user;
        next();
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export default verifyToken;