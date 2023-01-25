// Module calling
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});
mongoose.set('strictQuery', true);

const fruitSchema = new mongoose.Schema({
    name:{
        type: 'string',
        requires : [true,'Add a Name pls !']
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review:String
});

const Fruit = mongoose.model('Fruit',fruitSchema);
const fruit = new Fruit({
    name:"Apple",
    rating:4,
    review:"Awesome!!!"
}); 

const pineapple = new Fruit({
    name:"Pineapple",
    rating:5,
    review:"I LoVe It !!!"
});

const mango = new Fruit({
    name:"Mango",
    rating:10,
    review:"Very popular fruit !!!"
});



mango.save();
// fruit.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit : fruitSchema //work as built a relationship between fruit and person work like foreign key
});

const Person = mongoose.model('Person',personSchema);
const person = new Person({
    name:"Amy",
    age:12,
    favouriteFruit: pineapple
});

Person.updateOne({_id:"63d1176dffd9a7e6becfab4d"},{favouriteFruit:mango},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("updated successfully");
    }
});

// person.save();


const kiwi = new Fruit({
    name:"Kiwi",
    rating:7,
    review:"Favorite!"
});

const orange = new Fruit({
    name:"Orange",
    rating:1,
    review:"Kindda tasty!"
});

const banana = new Fruit({
    name:"Banana",
    rating:9,
    review:"Kinda GOOD Having a good taste!"
});

// Fruit.insertMany([kiwi, orange, banana],function(err){
//     if(err){
//         console.log("Error");
//     }else{
//         console.log("Successfully save the fruits to the fruitsDb");
//     }
// });


Fruit.find(function(err,fruits){
    if(err){
        console.log("Error");
    }else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
        mongoose.connection.close();
    }
});

//update the database

// Fruit.updateOne({_id:"63d1193bf12dedc56950ceea"},{name:"peach"},function(err){
//     if(err){
//         console.log("update error");
//     }else{
//         console.log("updated successfully");
//     }
// });


//delete the field of database with id

// Fruit.deleteOne({_id:"63d1193bf12dedc56950ceea"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("deleted successfully");
//     }
// });
