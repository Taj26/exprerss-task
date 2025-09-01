import express from "express";

const app = express();

app.use(express.json()) 

const PORT = 5005;


app.get("/",(req,res)=>{
  try {
        res.status(200).json({ msg : "Hello this is taj"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
});

app.post("/register",(req,res)=>{
  try {
        res.status(300).json({ msg : "Hello users"});
    }catch (error) {
        console.log(error);
        res.status(300).json({ msg: error});
    }
    
})

app.delete("/delete",(req,res)=>{
  try {
        res.status(500).json({ msg : "user is deletedls"});
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: error});
    }
})

app.put("/update",(req,res)=>{
  try {
        res.status(400).json({ msg : "user is updated"});
    }catch (error) {
        console.log(error);
        res.status(600).json({ msg: error});
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})