/***********  INTRO TO NODE.JS ************/

//we use async operations which tells compiler to compile in whatever manner its optimal 
// we use await operation which tells compiler that it may take time so wait for a bit if not loaded then throw error



// The main difference between "let" and "const" is that variables declared with let can be reassigned, while variables declared with const cannot be reassigned.
// let x = 10;
// x = 20;      // This is allowed
// const y = 10;
// y = 20;         // This will cause an error





// //const http = require("http");   //here require is the way to access built in or user defined moduldes
// import http from "http";   //its the new method for importing



// //const hmm = require("./features");          //here we imported the user defined module (it is an old method to import) (to use new method we have to change "type to module" in pacakge.json)

// import hmm from "./features.js";   //here evrytime only the default module will be imported
// console.log(hmm);

// import { gfname1,gfname2 } from "./features.js";
// console.log(gfname1);
// console.log(gfname2);


// import * as myobj from "./features.js";   //if we want to import all of the modules in one go
// console.log(myobj.default);
// console.log(myobj.gfname1);
// console.log(myobj.gfname2);
// // console.log(http);


// import {generatepercent} from "./features.js";
// console.log(generatepercent());


// // import fs from "fs";            //with the help of this inbuilt module we can read any file or write in any file (e.g. html file)...
// // const home = fs.readFile("./index.html",() => {         //here there are two types of read file one is sync and other is simple 
// //     console.log("file read");
// // });
// // console.log(home);                   //here we used asynchronous task i.e. readfile which is giving us undefined value in return


// import fs from "fs";
// const home = fs.readFileSync("./index.html");

// import path from "path";
// console.log(path.extname("/home/random/index.html"));       //reads the extension
// console.log(path.dirname("/home/random/index.html"));       //reads the directory path





// const server = http.createServer((req,res) => {                                     //here req(request) is the thing which we get from the client while they try to access our site and res(response) is the return what we have to give to the client to their request
//     // console.log("work work");
//     // console.log(req.url);

//     // res.end("Noice");   due to this our page wont reload endlessly and give noice as output at our page i.e. localhost:5000


//     // res.end("<h1>Noice</h1>");    here we used the html tags 


//     console.log(req.method);        //we have some methods like (GET,POST,PUT and DELETE) 
//                                     //GET - to get or to read data
//                                     //POST - like we create a task in a to-do list to post a request
//                                     //PUT - to update the task
//                                     //DELETE - to delete the task

//                                     //we are getting get in terminal cause by default right now it can only excess GET
//                                     //to use all those methods we have to install postman



 

//     if(req.url == "/about"){
//         res.end(`<h1>Love is ${generatepercent()}</h1>`);
//     }
//     else if(req.url == "/"){
//         // res.end("<h1>Home Page</h1>");
//         res.end(home);
//     }
//     else if(req.url == "/contact"){
//         res.end("<h1>Contact Page</h1>");
//     }
//     else{
//         res.end("<h1>Page Not Found</h1>");
//     }
    
// });

// server.listen(5000,() => {
//     console.log("Server is working");
// });













/***************** INTRO TO EXPRESS JS ********************/







//NOW WE INSTALLED EXPRESS (its nothing but a framework it helps using node.js in more syntactical manner)


// import express from "express";
// import path from "path";

// const server1 = express();

// server1.get("/",(req,res) => {
//     // res.send("Hi");
//     // res.sendStatus(404);
//     // res.sendStatus(500);
//     res.sendStatus(400);
// });
// server1.get("/products",(req,res) => {

//     res.json({              //its used to send json(object of object) data, this data is the one required to make APIs.
//         success : true,
//         product : [],
//     });
// });




// server1.get("/duplicateproducts",(req,res) => {

//     res.status(400).send("Bhoiiiiii");         //using this we can set staus code and its desirable output
// });




// server1.get("/sendingfile",(req,res) => {

//     const pathlocation = path.resolve();
//     console.log(pathlocation);
//     res.sendFile(path.join(pathlocation,"./index.html"));
// });


// server1.listen(5000,() => {
//     console.log("Server is Working");
// });
















//when we want to render some data from backend to front-end then we use render method (i.e. res.render()) this can be used by using HTML template (e.g. EJS (Embedded Javascript))
// we install it by using "npm i ejs" in terminal to install ejs


/****** EJS tutorial *******/
//folder that we created will always be named as "views"...




// import express from "express";

// const server = express();




// //setting up view engine
// server.set("view engine","ejs");                      //here we first determine what we want to set so here we are setting view engine(we have always have to write these as it is)

// // server.get("/renderdata",(req,res) => {
// //     // res.send("HI");

// //     res.render("index");
// // });





// //Now here we are going to pass our variable to render our data to the the front end...
// server.get("/renderdata",(req,res) => {
//     // res.send("HI");

//     res.render("index",{name : "bankai"});                                  //here we created and passed our variable name to render it on the web/app. now we have to give the name variable to the index.ejs and make changes in it
// });





// server.listen(5000,() => {
//     console.log("Server is Working");
// });







// import express from "express";
// import path from "path";
// //now we created a folder named public and make a html (it becomes static file now we are going to access that file here)
// //here we set our static folder so we can access the files in it directly or indirectly
// // express.static(path.join(path.resolve(),"public"));             //we still cant use it this way as its a middleware 


// const server = express();

// server.use(express.static(path.join(path.resolve(), "public" )));             // now we can use this directly in our web...like this http://localhost:5000/index.html
// // console.log(path.join(path.resolve(),"public"));

// server.set("view engine","ejs"); 

// server.get("/",(req,res) => {     //it wont work if we use "/anystring" ....it will only work for "/" i.e. home
//     // res.sendFile("index");
//     res.render("index.ejs",{name : "bankai"});

// });

// server.listen(5000,() => {
//     console.log("Server is Working");
// });


















/******** NOW WE WILL MAKE A RESPONSIVE FORM ********/

/***********connect server and database to collect the info (using mongoose)*************/


// for this we will craete a proper css file, html file and ejs file


// import express from "express";
// import path from "path";
// import mongoose from "mongoose";

// mongoose.connect("mongodb://127.0.0.1:27017",{              //here we connected to our database
//     dbName : "backend",
// }).then(() => console.log("database connected")).catch((e) => console.log(e));


// const messageschema = new mongoose.Schema({         //here we created our table 
//     name : String,
//     email : String,
// });


// const message = mongoose.model("message",messageschema);        //here we created an object to create the data








// const server = express();
// const users = [];        //making an array to store the info of user (later will be used to store in database)

// //using middlewares
// server.use(express.static(path.join(path.resolve(),"public")));
// server.use(express.urlencoded({extended : true}));    //using this we will be able to access data from the form.   (like---req.body)

// server.set("view engine","ejs");

// server.get("/",(req,res) => {
//     res.render("index1");
// });


// /* this was the forced way to insert data */
// // server.get("/add",async(req,res) => {
// //     // message.create({name : "jarvis",email : "sample@gmail.com"}).then(() => {res.send("DAta sent")});            instead of using then here we can use async and await

// //     await message.create({name : "jarvis",email : "sample@gmail.com"});

// //     // res.send("Nice");                                did this just to check whether API is working or not
// // });



// /*now we will insert data from server to database*/
// //(for this we will perform that action in post method where we are getting info)


// server.get("/success",(req,res) => {            //made a route to show the success page
//     res.render("success");
// });


// server.get("/users",(req,res) => {          //kind of a API to access the users like accessing the database (its not an actual database just an alternative)
//     res.json({
//         users,
//     });
// });



// server.post("/contact",async(req,res) => {
//     console.log(req.body);          //this will give us undefined as we arent able to access data that we are receiving from the form so we need to use middleware so that we can access form data



//     // const messagedata = {name : req.body.name, email : req.body.email};     //this is bit messy lets make it look more clean
//     // console.log(messagedata);
//     // message.create(messagedata);



//     const {name,email} = req.body;               //this is the clearer version
//     await message.create({name,email});





//     //by getting that info of user now we have to store all the info into the database.

//     users.push({username : req.body.name, email : req.body.email});
//     // res.render("success");              //we will make a file named success in the views folder to show that the form sumbitted successfully (using this we are only giving the message)



//     res.redirect("/success");       //here we gave a url to where it should be redirected to (using this we are directing user to the success page)
    

// });

// server.listen(5000, () => {
//     console.log("Server is Working...");
// });






//we use async operations which tells compiler to compile in whatever manner its optimal 
// we use await operation which tells compiler that it may take time so wait for a bit if not loaded then throw error



/************ AUTHENTICATION    (LOGIN AND LOGOUT) ***********/


/*usage of next in (req,res,next)
e.g.
server.get("/",(req,res,next)=>{

    if(condition){
        next();    the moment we called next then jumped on next handler
    }
},(req,res,next)=>{
    if(condition){
        next();
    }
},(req,res,next)=>{},(req,res,next)=>{}.......)


we can add as many handler we want here next means to jump on the next handler then next then next at certain condition

*/





import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";         //we installed this by "npm i jsonwebtoken" (its purpose is to decode the token value to get the object info like its id)
import bcrypt from "bcrypt";        //we use bcrypt to make the user password encrypted (it uses salt to change the string)  (it hashes the password before saving it)

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName : "backend",

}).then(() => console.log("Connected to Database")).catch((e) => console.log(e));



const userschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
});

const user = mongoose.model("usersinfo",userschema);



const server = express();

server.use(express.static(path.join(path.resolve(),"public")));
server.use(express.urlencoded({extended : true}));
server.use(cookieParser());



server.set("view engine","ejs");


const isauthenticated =  async(req,res,next) => {                //we just shortified the handler here with the name of isauthenticated
    const {token} = req.cookies;
    if(token){
        const decoded = jwt.verify(token,"secret_code");            //here we decoded our tokenvalue to object id
        console.log(decoded);

        req.user = await user.findById(decoded._id);            //here we found user details using the object id (we also set req.user with all the info that we got after logged in)


        next();
    }
    else{
        // res.render("login");
        res.redirect("/login");         //here we did this bcoz we made one get request for login page
    }
};


server.get("/",isauthenticated,(req,res) => {

    console.log(req.user);
    res.render("logout",{name : req.user.name});            //here we sent name to logout page(logout.ejs) to get the name of user
});

server.get("/login",(req,res)=>{
    res.render("login");
});

server.get("/register",(req,res) => {

    res.render("register"); 
});





// server.get("/",(req,res) => {
//     // console.log(req.cookies);               //for doing this we have to install (npm i cookie-parser)

//     const {token} = req.cookies;

//     if(token){
//         res.render("logout");
//     }
//     else{
//         res.render("login");
//     }

    
// });



server.post("/login",async(req,res)=>{
    // console.log(req.body);

    // const {name,email} = req.body;
    const {email,Password} = req.body;

    let userID = await user.findOne({email});

    if(!userID){
        // return console.log("Register First");
        return res.redirect("/register");
    }


    // const ismatch = userID.password === Password;                //for password verification (here === means that if the value of both user entered and whats in the database not matches the value will be assigned as false otherwise true)
    
    
    const ismatch = await bcrypt.compare(Password,userID.password);       //to compare the hashed password

    if(!ismatch){
        return res.render("login",{email,message : "Error Wrong Password"});
    }


    // userID = await user.create({
    //     name,
    //     email,
    // });




    const tokenvalue = jwt.sign({_id : userID._id},"secret_code");              //visit website jwt decoder and paste that tokenvalue there and you will see that it decodes to object id that is stored in the mongoDB
    console.log(tokenvalue);





    // res.cookie("token",userID._id,{            //this stores cookies in cookie section (inspect->application->cookie).
    //     httpOnly : true,                //by doing this we are securing our link
    //     expires : new Date(Date.now() + 60*1000),           //this expires tells us within how much time our login will logout automatically and be removed from cookies
    // }); //60*1000 is in millisecond.

    res.cookie("token",tokenvalue,{            //here we replaced userID._id with tokenvalue to give tokenvalue as cookie
        httpOnly : true,                
        expires : new Date(Date.now() + 60*1000),      
    }); //60*1000 is in millisecond.
    res.redirect("/");
    
    
});







server.post("/register",async(req,res)=>{
    // console.log(req.body);

    const {name,email,password} = req.body;

    let userID = await user.findOne({email});
    if(userID){
        // return console.log("Register First");
        return res.redirect("/login");
    }

    const hashedpassword = await bcrypt.hash(password,10);       //created the hashed password

    userID = await user.create({
        name,
        email,
        // password,
        password : hashedpassword,      //to store the hashed password in database
    });

    // const tokenvalue = jwt.sign({_id : userID._id},"secret_code");              //visit website jwt decoder and paste that tokenvalue there and you will see that it decodes to object id that is stored in the mongoDB
    // console.log(tokenvalue);





    // res.cookie("token",userID._id,{            //this stores cookies in cookie section (inspect->application->cookie).
    //     httpOnly : true,                //by doing this we are securing our link
    //     expires : new Date(Date.now() + 60*1000),           //this expires tells us within how much time our login will logout automatically and be removed from cookies
    // }); //60*1000 is in millisecond.

    // res.cookie("token",tokenvalue,{            //here we replaced userID._id with tokenvalue to give tokenvalue as cookie
    //     httpOnly : true,                
    //     expires : new Date(Date.now() + 60*1000),      
    // }); //60*1000 is in millisecond.
    res.redirect("/");
});



server.get("/logout",(req,res) => {
    res.cookie("token",null,{           //this will erase the token from cookie
        httpOnly : true,
        expires : new Date(Date.now()),
    });
    res.redirect("/");
});







server.listen(1000,() => {
    console.log("SERVER IS WORKING...");
});