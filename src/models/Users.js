import mongoose, { Schema }  from "mongoose";

const userSchema = new mongoose.Schema({
    username : { type: String, require: true, unique:true},
    password : { type: String, require: true}
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;