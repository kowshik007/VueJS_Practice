Vue.config.devtools = true;
var app=new Vue(
    {
        "el": "#root",
        "data":{
            blog_info:{
                "title":"",
                "description":"",
                "isVisible":true
            },
            AllBlogs:[]
        },
        "methods":{
            createBlog(){
                this.AllBlogs.push(this.blog_info);
                this.clearBlog();
            },
            clearBlog(){
                this.blog_info={
                    "title":"",
                    "description":"",
                    "isVisible":true
                }
            }
        }
    }
);
Vue.component('comment',{
    props:['name','message'],
    template:`
    <div class="card" v-show="isVisible">
        <div class="card-title">
            {{name}}<button type="button" class="btn btn-danger float-right" @click="hideThis">X</button>
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