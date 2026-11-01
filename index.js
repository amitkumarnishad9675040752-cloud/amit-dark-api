import express from "express";

const app = express();

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    status: "online",
    project: "AMIT DARK API",
    message: "API is running"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AMIT DARK API running on port ${PORT}`);
});
