const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  username: String,
  password: String,
});

const userModel = model("UserSchema", UserSchema);

module.exports = userModel;
