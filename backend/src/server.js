import express from "express";
import cors from "cors";
import morgan from "morgan";

import resultRoutes from "./routes/resultRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Lottery Sambad API Running"
    });
});

app.use("/api/results", resultRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
