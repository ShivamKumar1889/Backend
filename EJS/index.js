// const express=require("express");
// const app= express();
// const path= require("path");

// const port=8080;

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"));

// app.get("/",(req, res)=>{
//     // res.send("this is home");
//     res.render("home.ejs");
// });


// app.get("/rolldice",(req,res)=>{            //PARSING DATA TO EJS
//     let num=Math.floor(Math.random()*6)+1;   //  ||
//     res.render("rollDice.ejs",{diceVal:num}); //  ||
// })

// app.listen(port, ()=>{
//     console.log(`app is listening on port :${port}`);
// })




//activity:-- INSTAGRAM EJS---  //TOPIC--serving static files 


const express=require("express");
const app= express();
const path= require("path");

const port=8080;

app.use(express.static("public"));  //public folder serve krdega css ko 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req, res)=>{
    // res.send("this is home");
    res.render("home.ejs");
});


app.get("/rolldice",(req,res)=>{            //PARSING DATA TO EJS
    let num=Math.floor(Math.random()*6)+1;   //  ||
    res.render("rollDice.ejs",{diceVal:num}); //  ||
});


// app.get("/ig/:username",(req,res)=>{  //TOPIC- INSTAGRAM EJS
//     const followers=["abc","sk","ak","dk"];   //loops in ejs refer instagram ejs also
//     let{ username }=req.params;      //accessing username from the route itself
//     // console.log(username);
//     res.render("instagram.ejs",{ username,followers });
// })


app.get("/ig/:username",(req,res)=>{
    let { username }=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    if(!data){
        return res.send("user not found");
    }
    res.render("instagram.ejs",{data,username,followers:data.followers});
});

app.listen(port, ()=>{
    console.log(`app is listening on port :${port}`);
});