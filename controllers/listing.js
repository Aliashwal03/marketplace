const express=require('express')
const router=express.Router()



// view new listing form
router.get('/new',(req,res)=>{
    res.render('listings/new.ejs')

})

router.post('/',async(req,res)=>{
    await listing.create(req.body)
    res.send('u submitted the form')
})

module.exports=router