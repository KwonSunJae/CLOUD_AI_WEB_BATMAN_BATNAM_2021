import { model, Schema } from "mongoose";

const SectorSchema = new Schema({
  name: String,
  bomb: Number,
  soundbomb: Number,
  log: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Log",
      },
    ],
    default: [],
  },
  cams: [Number],
});

const Sector = model("Sector", SectorSchema);

export default Sector;
