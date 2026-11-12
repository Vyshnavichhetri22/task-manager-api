
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// Temporary task storage
let tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        description: "Understand Node.js fundamentals",
        completed: false
    },
    {
        id: 2,
        title: "Practice Express.js",
        description: "Build a REST API",
        completed: false
    }
];

let nextId = 3;

// GET: Fetch all tasks
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Task Manager API"
    });
});

// GET: Fetch a single task by ID
app.get("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
});

// POST: Create a new task
app.post("/api/tasks", (req, res) => {

    console.log("Received body:", req.body);

    const { title, description } = req.body || {};

    if (!title || typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "A valid task title is required"
        });
    }

    const newTask = {
        id: nextId++,
        title: title.trim(),
        description: description || "",
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTask
    });
});

// PUT: Update an existing task
app.put("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }
    

    const { title, description, completed } = req.body || {};

    if (title !== undefined) {
        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: "Title must be a non-empty string"
            });
        }

        task.title = title.trim();
    }

    if (description !== undefined) {
        if (typeof description !== "string") {
            return res.status(400).json({
                success: false,
                message: "Description must be a string"
            });
        }

        task.description = description;
    }

    if (completed !== undefined) {
        if (typeof completed !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Completed must be true or false"
            });
        }

        task.completed = completed;
    }

    res.status(200).json({
        success: true,
        message: "Task updated successfully",
        data: task
    });
});

// DELETE: Delete an existing task
app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
