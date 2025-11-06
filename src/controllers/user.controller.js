import { asyncHandler } from "../utils/asyncHandler.js";


const resgisterUser = asyncHandler((req,res)=>{
    res.status(200).json(
        {
        success : true,
        message:"ok",
        info : "Zak and Node js"
        } 
    )  
})
 

export { resgisterUser }