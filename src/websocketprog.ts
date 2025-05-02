import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", function (socket) {
    console.log("user connection made.");

    setInterval(() => {
        socket.send("count is" + Math.random() * 1000 + 1);
    }, 50)

    socket.on("message", (e) => {
        console.log(e.toString());
    })
})