import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

import { routes } from "./routes";
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World From the Typescript Server!");
// });

// app.post("/register", (req, res) => new Auth().register(req, res));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

interface FormInputs {
  email: string;
  password: string;
}

// Array of example users for testing purposes
const users = [
  {
    id: 1,
    name: "Maria Doe",
    email: "maria@example.com",
    password: "maria123",
  },
  {
    id: 2,
    name: "Juan Doe",
    email: "juan@example.com",
    password: "juan123",
  },
];

// route login
app.post("/login", (req: Request, res: Response) => {
  const { email, password }: FormInputs = req.body;

  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (!user) {
    return res.status(404).send("User Not Found!");
  }

  return res.status(200).json(user);
});
