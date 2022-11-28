import express, { Application, Request, Response, json } from "express";
import helmet from "helmet";
import morgan from "morgan";

const app: Application = express();
app.use(morgan("common"));
app.use(helmet());
app.use(json());

const port = process.env.PORT || 3000;
app.get("/", (req: Request, res: Response): void => {
  res.send({ message: "welcome to my page for testing" });
});

app.listen(port, () => {
  console.log(`server listen to port ${port}`);
});

export default app;
