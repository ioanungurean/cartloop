require("dotenv").config();
const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: "*",
});

const users = [];
const mappings = {};

io.on("connection", (socket) => {
  users.push(socket.id);
  console.log("a user connected");

  if (users.length === 2) {
    mappings[users[0]] = users[1];
    mappings[users[1]] = users[0];
  }

  socket.on("disconnect", () => {
    users.splice(users.indexOf(socket.id), 1);

    console.log("user disconnected");
  });

  socket.on("message", (data) => {
    socket.to(mappings[socket.id]).emit("message", data);
  });
});

httpServer.listen(process.env.PORT);
