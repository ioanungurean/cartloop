import { io } from "socket.io-client";

let socket;

export const connect = () => {
  socket = io(process.env.API_ENDPOINT);
  console.log(`Connecting...`);
};

export const disconnect = () => {
  console.log("Disconnecting...");
  if (socket) socket.disconnect();
};

export const login = (cb) => {
  socket.on("login", (userId) => {
    return cb(null, userId);
  });
  console.log("Login...");
};

export const logout = (cb) => {
  socket.on("logout", () => {
    return cb();
  });
  console.log("Logout...");
};

export const subscribe = (cb) => {
  socket.on("message", (msg) => {
    return cb(null, msg);
  });
};

export const send = (message) => {
  socket.emit("message", { message });
};
