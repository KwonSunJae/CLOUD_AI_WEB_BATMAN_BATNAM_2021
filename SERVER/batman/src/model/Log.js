import { model, Schema } from "mongoose";

const LogSchema = new Schema({
  runway: {
    type: Schema.Types.ObjectId,
    ref: "Runway",
  },
  sector: {
    type: Schema.Types.ObjectId,
    ref: "Sector",
  },
  time: {
    type: Date,
  },
  finding: {
    kinds: String,
    number: Number,
  },
  action: {
    kinds: String,
    time: Date,
  },
});

const Log = model("Log", LogSchema);

export default Log;
