import { model, Schema } from "mongoose";

const RunwaySchema = new Schema({
  angles: [Number],
  sectors: {
      type:[
        {
          type: Schema.Types.ObjectId,
          ref: "Sector",
        },
      ],
      default:[]
  },
  logs: {
      type:[
        {
          type: Schema.Types.ObjectId,
          ref: "Log",
        },
      ],
      default:[]
  },
});

const Runway = model("Runway",RunwaySchema);

export default Runway;
