const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());


//============================
//        MODELS
//============================
const { User } = require('./models/user');
const { Brand } = require('./models/brand');
const { Wood } = require('./models/wood');
const { Product } = require('./models/product');


//============================
//       MIDDLEWARES
//============================
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');


//============================
//        PRODUCTS
//============================
// Create new products
app.post('/api/product/article', auth, admin, (req, res) => {
    const product = new Product(req.body);
    product.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            article: doc
        });
    });
});
// Get products by ID 
// + - (/api/product/article?id=xXxXxXxXtype=yYyYyYyY)
app.get('/api/product/articles_by_id', (req, res) => {
    let type = req.query.type;
    let items = req.query.id;
    if(type === "array") {
        let ids = req.query.id.split(',');
        items = [],
        items = ids.map( item => {
            return  mongoose.Types.ObjectId(item);
        });
    }
    Product
    .find({'_id':{$in:items}})
    .populate('brand')
    .populate('wood')
    .exec((err, docs) => {
        return res.status(200).send(docs)
    })
});
// Get products by arrival (createdAt) --> /articles?sortBy=createdAt&order=desc&limit=4
// Get products by sale (sold) --> /articles?sortBy=sold&order=desc&limit=100
app.get('/api/product/articles', (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product
    .find()
    .populate('brand')
    .populate('wood')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, articles) => {
        if(err) return res.status(400).send(err);
        res.send(articles)
    })

});


//============================
//        WOODS
//============================
// Create wood
app.post('/api/product/wood', auth, admin, (req, res) => {
    const wood = new Wood(req.body);
    wood.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            wood: doc
        });
    });
});
// Find woods
app.get('/api/product/woods', (req, res) => {
    Wood.find({}, (err, woods) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(woods);
    });
});


//============================
//        BRANDS
//============================
// Create Brands
app.post('/api/product/brand', auth, admin, (req, res) => {
    const brand = new Brand(req.body);
    brand.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            brand: doc
        });
    });
});
// Find brands
app.get('/api/product/brands', (req, res) => {
    Brand.find({}, (err, brands) => {
        if(err) return escape.status(400).send(err);
        res.status(200).send(brands);
    });
});


//============================
//        USERS
//============================
// Auth user
app.get('/api/users/auth', auth, (req, res) => {
     res.status(200).json({
        //  user: req.user
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
     })
});
// Register user
app.post('/api/users/register', (req, res) => {
    
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err)  return res.json({success:false,err});
        res.status(200).json({
            success: true,
            userdata: doc
        });
    });
});
// Generate user token
app.post('/api/users/login',(req,res)=>{
    // Find email
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false,message:'Auth failed, email not found'});
        // Check password
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false,message:'Wrong password'});
            // Generate Token
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth',user.token).status(200).json({
                    loginSuccess: true
                })
            })
        })
    })
})
// Logout auth user
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ''},
        (err, doc) => {
            if(err) return res.json({success: false, err});
            return res.status(200).send({
                success: true
            })
        }
    )
})


//============================
//       PORT CONFIG
//============================
const port = process.env.PORT || 3002;
app.listen(port, ()=> {
    console.log(`Server running at port: ${port}`)
})