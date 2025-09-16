import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/health", (req: Request, res: Response) => {
    res.json({status: 'X'});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});