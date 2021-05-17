const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

const express = require("express");
const { response } = require("express");
const router = express.Router();

// Route that serves index.html
router.get("/", (request, response) => {
    response.send("index.html");
});

router.get("/instagram",(req,res)=>{
    res.redirect("https://www.instagram.com/_.pixelated");
});

router.get("/github",(req,res)=>{
    res.redirect("https://github.com/lakshits11/friends-ipsum");
});

router.get("/linkedin",(req,res)=>{
    res.redirect("https://www.linkedin.com/in/lakshit-somani/");
});


// Route that generates the lorem ipsum text and reloads a modified index.html
router.post("/", (request, response) => {
    request.on("data", function (inputValue) {
        // Convert the POST data into a readable string
        let query = inputValue.toString(); // i.e. numberOfParagraphs=3
        // Parse the query into a key/value pair and store the value of numberOfParagraphs
        // in a variable
        let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
        // Generate the lorem ipsum text with the getAllParagraphs function
        let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
        // Capture the contents of index.html in a variable
        let fileContents = fs.readFileSync("./public/index.html", { encoding: "utf8" });
        // Replace the placeholder <div> with the lorem ipsum text and Get started button with scroll below
        fileContents = fileContents.replace("<div class='placeholder-div'></div>", loremIpsumText);
        fileContents = fileContents.replace("<a href='#generator'>Get Started</a>","<a href='#generator'>Scroll Below</a>");
        // fs.writeFileSync("./public/temp.html", fileContents);
        response.setHeader("Content-Type", "text/html");
        // Send a response to the client with the modified index.html file
        response.write(fileContents);
        response.end();
    });
});

module.exports = router;
