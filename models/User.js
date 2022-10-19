const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // todo validate email address
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// todo virtuals go here
// friendCount  retrieves the length of the user's friends array field on query

const User = model("user", userSchema);

module.exports = User;
