app.use("/static", express.static('./static/'));
Vue.config.devtools = true;

Vue.component('task-list',{
    template: '<div><task v-for="task in tasks">{{task.name}}</task></div>',
    data(){
        return {
            tasks:[
                {
                    "name":"task1",
                    "status":true
                },
                {
                    "name":"task2",
                    "status":true
                },
                {
                    "name":"task3",
                    "status":false
                }
            ]
        }
    }
});
Vue.component('task',{
    template:"<li><slot></slot></li>"
});

Vue.component('comment',{
    props:['name','message'],
    template:`
    <div class="card" v-show="isVisible">
        <div class="card-title">
            {{name}}<button @click='hideThis'>X</button>
        </div>
        <div class="card-body">
            {{message}}
        </div>
    </div>
    `,
    data(){
        return {
            "isVisible":true
        }
    },
    "methods":{
        hideThis(){
            this.isVisible=false
        }
    }
});

var app=new Vue(
    {
        "el": "#root",
        "data": {
            "listOfTasks":[
                {
                    "name":"Task 1",
                    "complated":true
                },
                {
                    "name":"Task 2",
                    "complated":true
                },
                {
                    "name":"Task 3",
                    "complated":false
                },
                {
                    "name":"Task 4",
                    "complated":true
                },
                {
                    "name":"Task 5",
                    "complated":false
                }
            ]
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
        },
        "computed":{
            getCompletedTasks(){
                return this.listOfTasks.filter(task=> task.complated);
            }
        }
    }
);