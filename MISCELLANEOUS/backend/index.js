const express=require("express");
const app=express();

const port=8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());   //ye line likha h for in case agar ham json format me koi data bhejte h so that express json data bhi padh paay

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standard GET response.welcome ${user}`);
});

app.post("/register",(req,res)=>{
    let{user,password}=req.body;
    res.send(`standard POST response.welcome ${user}`);   //abhi hamne database padha nhi h thats why res.send ke liye use kr rhe h
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})