const mongoose = require("mongoose");

const UserDetailsSchema =new mongoose.Schema(
    {
        fname:String,
        lname:String,
        skills:String,
        disability:String,
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
