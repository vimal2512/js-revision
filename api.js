// Nodejs must know boiler plate snippets

// create a basic nodejs server
// How do you create a server using nodejs without using express

const { read } = require("fs");
const http = require("http");

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    })

    res.end("Hello from nodejs");
})

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
})

// read a file asynchronously

const fs = requrie("fs/promises");

async function readFile() {

    try {
      const data = await fs.readFile("sample.txt", "utf8");
      console.log(data);

    }catch (error) {
      console.error("Failed to read file:", error.message);
    }
}

readFile();


// write a file asyncronously

const fs = require("fs/promises");

async function writeFile() {

    try{
       await fs.writeFile("output.txt", "Hello Node.js");

       console.log("File written successfully");
    }catch (error) {

        console.log(error.message);
    }
}

writeFile();

// execute asynchronous operation concurrently

async function getData() {

    try {
       const result = await Promise.all([
        fetchUsers(),
        fetchProducts(),
        fetchOrders()
    ]);

       const [users, products, orders] = result;

      return { users, products, orders};

    }catch(error) {
      console.error("Operation failed:", error.message);
      throw error;
    }
}

getData();


// create a reusable async error handling wrapper
// This forwards rejected promise to express handling middleware
// it is usefull with express 5 , express 5 automaticaly rejected promise 
// return by route handlers and middleware

async function asyncHandler(fn) {
    return async function(req, res, next) {
        try {
            await fn(req, res, next);
        }catch(error) {
            next(error);
        }
    }
}

module.exports = asyncHandler;


// Express.js - Essential backend boiler plate

// create basic express server

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({
        message: "API is running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


// understand the request parameters
// GET /users/123

app.get("/users/:id", (req, res) => {
    res.json({
        id: req.params.id
    })
})

// Query parameters: req.query
// GET /users?role=admin&page=2

app.get("/users", (req, res) => {
    res.json({
        role: req.query.role,
        page: req.query.page
    });
});


// request body
// POST /users
// Content-Type: application/json

app.get("/users", (req,res) => {
    res.json(body);
})


// create a custom middleware

function logger(req, res, next) {
    console.log({
        method: req.method,
        url: req.originalUrl,
        time: new Date().toISOString();
    });

    next();
}

app.use(logger);

// middleware with condition

function checkApiKey(req, res, next) {
    const apiKey = req.headers(["x-api-key"]);

    if(!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            message: "Invalid API key"
        })
    }

    next();
}

app.get("/protected", checkApiKey, (req,res) => {
    res.json({messsge: "Access granted"});
});

// create express routes using express.Router()
// routes/ userRoutes.js

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Get all users"});
})

router.get("/:id", (req,res) => {
    res.json({
        message: "Get user",
        id: req.params.id
    })
})

router.post("/", (req,res) => {
    res.status(201).json({
        message: "Create user"
    })
})


router.put("/id", (req,res) => {
    res.json({
        message: "Update user",
        id: req.params.id
    })
})

router.delete("/:id", (req,res) => {
    res.status(204).end();
})


module.exports = router;


// app.js (register the routes in app.js)

const express = require("express");
const userRoutes = rquire("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

module.exports = app;

// Centralized error-handling middleware
// middleware/errorHandler.js
// next passess error to next middleware

function errorHandler(err, req, res, next) {
    res.status(500).json({
        success: false,
        message: err.message
    })
}

module.exports = errorHandler;

// Handle unkown routes

app.use((req, res, next) => {
    const error = new Error(
        `Route not found ${req.method} ${req.originalUrl}`
    )

    error.status = 404;

    next(error);
});


// validate request data

function validateUser(req, res, next) {
    const{ name, email } = req.body;

    if(
        typeof name !== "string" ||
        !name.trim() ||
        typeof email !== "string" ||
        !email.trim()
    ) {
        return res.status(400).json({
            message: "Valid name and email are required"
        })
    }

    next();
}

app.post("/users", validateUser, (req,res) => {
    res.status(201).json({
        message: "Input validated",
        user: req.body
    })
});


// mongodb must know query snippets

// users collection
// {
//   name: "Arun",
//   email: "arun@example.com",
//   age: 28,
//   salary: 60000,
//   department: "Engineering",
//   skills: ["React", "Node.js"],
//   isActive: true
// }

// insert one document

db.user.insertOne({
    name: "Arun",
    email: "arun@example.com",
    age: 28,
    department: "Engineering"
});


// insert multiple document

db.users.insertmany([
    {
        name: "Priya",
        email: "priya@example.com",
        age: 26
    },
    {
        name: "Kumar",
        email: "kumar@example.com",
        age: 30
    }
]);


// Read documents

// Find all documents
db.users.find({});

// find one document
db.users.findOne({
    email: "arun@example.com"
})

// Find by exact value
db.users.find({
    department: "Engineering"
})

// find users older than 25
db.users.find({
    age: {$gt: 25}
})

// find users aged 25 or older
db.users.find({
    age: { $gte: 25}
});

// find users between 25 and 35
db.users.find({
    age: {
        $gte: 25,
        $lte: 35
    }
});

// find users in a list of departments
db.users.find({
    department: {
        $in: ["Engineering", "Finance"]
    }
})

// find users matching either condition
db.users.find({
    $or: [
        { age: { $lt: 25}},
        { department: "Engineering"}
    ]
});

// find users whose name starts with a

db.users.find({
    name: /^A/
});

// update documents
// update one document

db.users.updateOne(
    {email: "arun@example.com"},
    {
        $set: {
            age: 29
        }
    }
)


// update multiple document

db.users.updateMany(
    { department: "Engineering" },
    {
        $set: {
            isActive: true
        }
    }
)

// increment a value
db.users.updateOne(
    {email: "arun@example.com"},
    {
        $inc: {
            salary: 5000
        }
    }
)

// add an item to an array
db.users.updateOne(
    {email: "arun@example.com"},
    {
        $push: {
            skills: "MongoDB"
        }
    }
)

// remove an item from an array

db.users.updateOne(
    { email: "arun@example.com"},
    {
        $pull: {
            skills: "React"
        }
    }
);

// delete one document

db.users.deleteOne({
    email: "arun@example.com"
})

// delete multiple documents
db.user.deleteMany({
    isActive: false
})


// projection, sorting and pagination

// select specific fields
db.users.find(
    {},
    {
        name: 1,
        email: 1,
        _id: 0
    }
);

// sort by salary in descending order
db.users.find().sort({
    salary: -1
});

// return the first five users

db.users.find().limit(5);

// skip the first 10 users

db.users.find().skip(10);

// implement basic pagination
// offset pagination

const page = 2;
const limit = 10;
const skip = (page -1) * limit;

db.users.find().sort({_id: 1}).skip(skip).limit(limit);

// count active users
db.users.countDocuments({
    isActive: true
})

// get distinct departments
db.users.distinct("department");

// find duplicate email address
db.users.aggregate([
    {
        $group: {
            _id: "$email",
            count: { $sum: 1}
        }
    },
    {
        $match: {
            count: { $gt: 1}
        }
    }
]);


// create indexes

// single field index
db.users.createIndex({
    email: 1
})

// unique index
db.users.createIndex(
    { email: 1},
    { unique: true}
);

// compound index
db.users.createIndex({
    department: 1,
    age: -1
})

// mongoose
// connect mongodb using mongoose

const mongoose = require("mongoose");

async function connectDB() {
   try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected successfully")
   }catch(error) {

    console.log("MongoDB connection failed");
    throw error;
   }
}


module.exports = connectDB;

// create mongoose schema and model
// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        age: {
            type: Number,
            min: 18
        },

        department: {
            type: String,
            default: "Engineering"
        },

        skills: {
            type: [String],
            default: []
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);


// create a user

const User = require("./models/User");

async function createUser() {
    const user = await User.create({
        name: "Arun",
        email: "arun@example.com",
        age: 28
    });

    return user;
}

// we can also use
const user = new User({
  name: "Priya",
  email: "priya@example.com",
  age: 26
});

await user.save();