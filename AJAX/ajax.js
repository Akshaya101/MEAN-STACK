var fetch = document.getElementById("fetch").addEventListener("click",function(){

    console.log("Button clicked fetch");

    //XHR object is created
    var xhr = new XMLHttpRequest();

    //open the object
    //true == means that you have opted for an asynchronous request
    //this is GET 
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    //this is POST
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/employees',true);
    xhr.getResponseHeader("content-type",'application/x-www-form-urlencoaded')

    // there are 4 ready state values 
    // you can also know whats happening as per the values
    xhr.onreadystatechange = function(){
        console.log("ready state is : "+xhr.readyState);
    }

    //what to do while progress
    xhr.onprogress = function(){
        console.log("progress");
    }

    //when everything is ready say
    // it means that everything is fine
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("error");
        }
    }

    //send request
    // xhr.send();

    params = '{"name":"test","salary":"123","age":"23"}';
    xhr.send(params);
});

var populate = document.getElementById('backup').addEventListener('click',function(){

    console.log("Button clicked populate");

    //XHR object is created
    var xhr = new XMLHttpRequest();

    //open the object
    //true == means that you have opted for an asynchronous request
    //this is GET 
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employee/1',true);

    //when everything is ready say
    // it means that everything is fine
    xhr.onload = function(){
        if(this.status === 200){
            var obj = JSON.parse(this.responseText)
        }
        else{
            console.log("error");
        }
    }

    xhr.send();
    console.log("we are done fetching emoployee data");

})

