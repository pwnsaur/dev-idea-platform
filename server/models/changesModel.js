import mongoose from "mongoose";

const ChangeSchema = new mongoose.Schema({
  latestChanges: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Changes", ChangeSchema);
