
var tag_temp = document.getElementById("temp");
var tag_des = document.getElementById("des");
var tag_city = document.getElementById("city");
var fetch = document.getElementById('fetch').addEventListener('click',function(){
    
    //xhr object is created
    var xhr = new XMLHttpRequest();
    const id = '861f22e9674ed20dcc27263903de294c';
    const cityName = document.getElementById('cityName').value;
    const unit = 'metric'
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+',India&appid='+id+'&units='+unit;
    //open the object
    xhr.open('GET',URL,true);
    //when everything is ready we call the op load method
    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status<=400){
           //if it is running fine
           var weatherData = JSON.parse(xhr.responseText);
           var temp = weatherData.main.temp;
           var description = weatherData.weather[0].description;
                tag_city.innerHTML = cityName;
                tag_temp.innerHTML = temp+"<span> &#8451;</span>";
                tag_des.innerHTML = description;
                // document.write("<h1 style='font-family:Helvetica;font-size:60px;color:#505050;'>"+cityName+"</h1>");
                // document.write("<h3 style='font-family:Helvetica;font-size:25px;color:#505050;'>Temperature : "+temp+"<span> &#8451;</span></h3>");
                // document.write("<h3 style='font-family:Helvetica;font-size:25px;color:#505050;'>Description : "+description+"</h3>"+"<img src="+imageURL+" style='width:150px;'>");
                // document.write("<br><br><br><a href='info.html' style='font-size:20px;'>Back</a>");
        }
        else{
            console.log("error");
        }
    }
    xhr.send();
});


/*
    <img class="img-responsive" style="max-height: 200px; min-height: 200px; width: auto; margin: auto;" src=""/>
    images for correct positioning
*/