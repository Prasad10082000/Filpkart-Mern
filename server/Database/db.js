import mongoose from "mongoose"

export const Connection = async (USERNAME,PASSWORD) =>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-sdxotq2-shard-00-00.ssomqke.mongodb.net:27017,ac-sdxotq2-shard-00-01.ssomqke.mongodb.net:27017,ac-sdxotq2-shard-00-02.ssomqke.mongodb.net:27017/?ssl=true&replicaSet=atlas-avb0ok-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, {})
       console.log("Database Connect Sucessfully");
    }catch(error){
        console.log("Something went Wrong" , error.massage);
    }
}

export default Connection;