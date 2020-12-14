const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const users = [{email : 'test@test.com', age : 32}, {email : 'test1@test.com', age : 33}]

app.get("/api/users", (req, res ) => {
    return res.send(users);
})

app.listen(PORT, () => {console.log("Started")})