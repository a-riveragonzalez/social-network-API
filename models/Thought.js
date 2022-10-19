const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1, 
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        // MMM DD, YYYY at hh:mma
        const formattedDate = moment(date).format("MMM DD, YYYY [at] hh:mma")
        return formattedDate
      }
    },
    username: {
      type: String,
      required: true,
      // ref: "user",
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

// todo virtual reactionCount
// retrieves the length of the thought's reactions array field on query.

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
