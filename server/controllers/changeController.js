import changesModel from "../models/changesModel.js";

export const getLatestChanges = async (req, res) => {
  try {
    const change = await changesModel.findOne();
    res.status(200).json({ latestChanges: change.latestChanges });
  } catch (error) {
    console.error(error);
  }
};

export const updateChange = async () => {
  await changesModel.findOneAndUpdate({}, { latestChanges: new Date() });
};
