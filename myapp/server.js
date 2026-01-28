const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
require("./database/db"); // เชื่อม DB

app.use(express.json());
app.use(cors()); // ถ้า frontend จะเรียก API จาก port อื่น

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
