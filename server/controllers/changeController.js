import changesModel from "../models/changesModel.js";

export const updateChange = async () => {
  await changesModel.findOneAndUpdate({}, { latesChanges: new Date() });
};
