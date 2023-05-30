const mongoose = require("mongoose");

const UserDetailsSchema =new mongoose.Schema(
    {
        ID:String,
        fname:String,
        lname:String,
        position:String,
        gender:String,
        address:String,
        contactno:String,
        email:{type:String, unique: true},
        password:String,
        userType:String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsSchema);
