Vue.config.devtools = true;
new Vue(
    {
        "el": "#root",
        "data": {
            "listPractices":['Kowshik','Karthik','Sujatha'],
            "Register":{
                "firstName":"KK",
                "lastName":"",
                "exampleInputEmail1":"",
                "exampleInputPassword1":"",
                "exampleInputPassword2":"",
                "exampleCheck1":false,
            },
            "Registrations":[],
            "AddValue":"",
            "className":"class-bind"
        },
        "methods":{
            addName(){
                this.listPractices.push(this.AddValue);
                this.AddValue='';
            },
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
            }
        }
    }
);