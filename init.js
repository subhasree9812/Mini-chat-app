const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
    from:"neha",
    to:"priya",
    msg:"send me your notes",
    created_at:new Date(),
},
{
    from:"rohit",
    to:"mohit",
    msg:"call me",
    created_at:new Date(),
},
{
    from:"amit",
    to:"sruti",
    msg:"hii",
    created_at:new Date(),
},
{
    from:"rose",
    to:"riya",
    msg:"send me your pic",
    created_at:new Date(),
},
];

Chat.insertMany(allChats);




