import { Request, Response, NextFunction } from "express";
import express from "express";
import cors from "cors";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";
import AppError from "./errors/appError";
import vehicleRoutes from "./routes/vehicle.routes";
import forgotPasswordRoutes from "./routes/forgotPassword.routes";
import messageRoutes from "./routes/message.routes";


const app = express();
app.use(express.json());

app.use(cors());
app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/forgotPassword", forgotPasswordRoutes);
app.use("/messages", messageRoutes);


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
