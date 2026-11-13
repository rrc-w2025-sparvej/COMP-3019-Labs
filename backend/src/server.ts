import express from "express";
import cors from "cors";
import organizationRoutes from "./routes/organizationRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";


const app = express();
const PORT = 3001;

// Allow requests from our React front-end
app.use(cors({
  origin: "http://localhost:5173"
}));

// Allow the server to read JSON requests
app.use(express.json());
// Organization API routes
app.use("/api/organization", organizationRoutes);
app.use("/api/employees", employeeRoutes);


// Test route
app.get("/", (_req, res) => {
  res.json({
    message: "Pixell River Financial API is running!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});