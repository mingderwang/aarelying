import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { routes } from "./routes";

const app = express();

app.use(routes);
app.use(morgan('dev'));
app.use(helmet());

export { app };
