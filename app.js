console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();


// MONGODB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


// 1. Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 2. Session codes


// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routing code
module.exports = app;
