const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    chatName:{type:String,trim:true},
    isGroupChat: {type: String,default: false},
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message", 
    },
    groutAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
{
    timestamps:true,
}
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;


// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin
