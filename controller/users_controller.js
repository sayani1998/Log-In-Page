const User = require('../models/user');

//render the profile page
module.exports.profile = async function(req,res){
    try{
        console.log(req.params.id);
    let user= await User.findById(req.params.id);
        console.log(user);
            return res.render('users_profile',{
                title :"User Profile",
                profile_user:user
            }); 
        }catch(err){
            console.log(err);
            return;
        }
    }
        



 //render the register page
 module.exports.register= function(req,res){
    // if(req.isAuthenticated()){
    //     res.redirect('/users/profile');
    // }
   return res.render('register_page',{
    title:"Register Page"
   });
};

//render the log in page
module.exports.logIn=function(req,res){
    return res.render('users_log_in',{
        title:"Log In Page"
       });
}

//get the registered data
module.exports.creat=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
        User.findOne({email:req.body.email},function(err,user){
            if(err){
                console.log('error in finding up user in register',err);
                return;
            }
                
            if(!user){
                User.create(req.body,function(err,user){
                    if(err){
                        console.log('error in creating user conneting Log in page',err);
                        return;
                    }
                    return res.redirect('/users/logIn');
                })
            }else{
                return res.redirect('back');
            }
           
        });

    };


    //get the profile page
    module.exports.creatSession = async function(req,res){
        try{
            let user= await User.findOne({name:req.body.name});
            if(user.password==req.body.password){
                return res.redirect(`/users/profile/${user._id}`);
            }else{
                return res.redirect('back');
            }
       
        }catch(err){
            console.log(err);
        return;
        }
    }

    //log out 
    module.exports.destroySession=function(req,res){

        return res.redirect('/');
    }