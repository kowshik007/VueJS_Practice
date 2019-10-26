Vue.config.devtools = true;
var app=new Vue(
    {
        "el": "#root",
        "data": {
            "Register":{
                "firstName":"",
                "lastName":"",
                "exampleInputEmail1":"",
                "exampleInputPassword1":"",
                "exampleInputPassword2":"",
                "exampleCheck1":false,
            },
            "Registrations":[]
        },
        "methods":{
            clearRegistrationForm(){
                this.Register={
                    "firstName":"",
                    "lastName":"",
                    "exampleInputEmail1":"",
                    "exampleInputPassword1":"",
                    "exampleInputPassword2":"",
                    "exampleCheck1":false,
                }
            },
            registerUser(){
                this.Registrations.push(this.Register);
                this.clearRegistrationForm();
                alert("User registration successful");
            }
        }
    }
);