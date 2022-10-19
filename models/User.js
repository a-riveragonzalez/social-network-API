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
      match: [/.+\@.+\..+/, 'Please fill a valid email address']
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

// virtual that retrieves the length of the user's friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
