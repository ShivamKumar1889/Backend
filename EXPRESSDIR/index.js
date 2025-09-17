// const express=require("express");
// const app=express();    // issi app ke through ham server side wali web application ham bana rahe honge
// console.dir(app);

// let port=3000;  //8080 another port used to make custom server

// app.listen(port,()=> {
//     console.log(`app is listening on port ${port}`);
// });


// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// });

// app.get("/mango",(req,res)=>{
//     res.send("you contacted mango path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// });

// app.use((req, res) => {     //Remove "/*" from app.use.This will catch all unmatched routes and methods.
//     res.send("this path does not exist"); //agar kisi aur path se request aaye toh response do this path doesnt exist
// });

// app.post("/",(req,res)=>{
//     res.send("you sent a post request to root");
// })

// // app.use((req,res)=>{
// //     console.log("request recieved");
// //     let output="<h1> fruits</h1><ul><li>mango</li><li>orange</li></ul>"
// //     res.send(output);
// // });



//TOPIC-PATH PARAMETERS:--



const express=require("express");
const app=express();    // issi app ke through ham server side wali web application ham bana rahe honge
console.dir(app);

let port=3000;  //8080 another port used to make custom server

app.listen(port,()=> {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello i am root");
});

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let{username, id} = req.params;
    res.send(`This account belongs to @${username} with id ${id}`);
});


//query strings:--


app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`search results for the query :${q} `);
})