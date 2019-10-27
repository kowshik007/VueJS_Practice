var app=new Vue(
    {
        "el": "#root",
        "data":{
            "SignInUserDetails":{
                "exampleInputEmail1":"",
                "exampleInputPassword1":""
            }
        },
        "methods":{
            signInUser(){
                alert("UserLogin Successful");
            }
        }
    }
);