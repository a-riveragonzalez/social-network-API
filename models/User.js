const { Schema, model } = require("mongoose");
const assignmentSchema = require("./Assignment");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true, 
      required: true,
      // trimmed: true,
    },
    email: {
      type: String,
      // unique: true, 
      required: true,
      // todo validate email address
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      // todo where the f*** do virtuals go?
      getters: true,
    },
  }
);

// todo virtuals go here 
// friendCount  retrieves the length of the user's friends array field on query

const User = model("user", userSchema);

module.exports = User;
