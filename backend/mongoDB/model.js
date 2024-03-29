const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  username: String,
  password: String,
});

const userModel = model("users", UserSchema);

module.exports = userModel;
