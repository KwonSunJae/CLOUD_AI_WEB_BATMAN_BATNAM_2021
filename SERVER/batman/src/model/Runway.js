import { model, Schema } from "mongoose";

// angles : [0]:start [1]:end

const RunwaySchema = new Schema({
  name:String,
  angles: [Number],
  sectors: {
    top: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Sector",
        },
      ],
      default: [],
    },
    bottom: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Sector",
        },
      ],
      default: [],
    },
  },
  logs: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Log",
      },
    ],
    default: [],
  },
});

const Runway = model("Runway", RunwaySchema);

export default Runway;
