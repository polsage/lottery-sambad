import results from "../data/results.js";

export const getResults = (req, res) => {

    res.json(results);

};
