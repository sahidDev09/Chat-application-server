import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";

const port = 9000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Chat application");
});

io.on("connection", (socket) => {
  console.log("User connected");
  console.log("ID: ", socket.id);
});

server.listen(port, () => {
  console.log(`Chatapplication is connected in port : ${port}`);
});
