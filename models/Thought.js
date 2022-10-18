const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');


// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // todo 1-280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // todo Use a getter method to format the timestamp on query
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        // ? type string?
        // ? required: true,
        ref: "User",
      },
    ],
    // todo reactions: [
    //   Array of nested documents created with the reactionSchema
    // ],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// todo virtual reactionCount
// retrieves the length of the thought's reactions array field on query.

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
