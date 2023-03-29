import express, { Application } from "express";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares";
import { clientRouter, contactsRouter } from "./routers";
import { sessionRoutes } from "./routers/session.router";
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use("/client", clientRouter);
app.use("/contacts", contactsRouter);
app.use("/login", sessionRoutes);

app.use(handleErrorMiddleware);

export default app;
