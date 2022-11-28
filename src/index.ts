import express, { Application, Request, Response } from "express";

const app: Application = express();

const port = process.env.PORT || 3000;
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "welcome to my page for testing" });
});

app.listen(port, () => {
  console.log(`server listen to port ${port}`);
});

export default app;
