import express from 'express'
import libroRoutes from "./routes/libro.routes.js"

const PORT = 3000;
const app = express()

app.use(libroRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
