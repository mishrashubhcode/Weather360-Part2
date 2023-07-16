window.onload = function(){

    // My default API Key
    const myAPIkey = "4c51310474d005c1278f123382cd14f3";

    // defining variables for weather API
    var toronto = document.getElementById("Toronto");
    var brampton = document.getElementById("Brampton");
    var location = document.getElementById("location");
    var icon = document.getElementById("icon");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    var humidity = document.getElementById("humidity");

    //For Toronto City
    toronto.addEventListener('click',function()
    {

        //url for toronto   
        const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + myAPIkey + "&units=metric";
    
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4)
            {
                if(xhr.status === 200)
                {

                    const data = xhr.response;
                    console.log(data);

                    location.innerHTML = data.name+ "'s";
                    //icon.innerHTML = data.weather[0].icon; // in weather array icon is an id which is displaying here so i have commented this and used a image
                    temperature.innerHTML = data.main.temp + "&deg;C";
                    conditions.innerHTML = data.weather[0].description;
                    humidity.innerHTML = data.main.humidity+"%";

                }
                else
                {
                    location.innerHTML = "API was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }
        
        xhr.open('GET',url);
        xhr.responseType = "json";
        xhr.send(null);

    })

    
    //For Brampton City
    brampton.addEventListener('click',function()
    {

        //API url for Brampton    
        const url = "https://api.openweathermap.org/data/2.5/weather?q=Brampton&appid=" + myAPIkey + "&units=metric";
    
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4)
            {
                if(xhr.status === 200)
                {

                    const data = xhr.response;
                    console.log(data);

                    location.innerHTML = data.name + "'s";
                    //icon.innerHTML = data.weather[0].icon;  // in weather array icon is an id which is displaying here so i have commented this and used a image
                    temperature.innerHTML = data.main.temp + "&deg;C";
                    conditions.innerHTML = data.weather[0].description;
                    humidity.innerHTML = data.main.humidity+"%";

                }
                else 
                {
                    location.innerHTML = "API was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }
        
        xhr.open('GET',url);
        xhr.responseType = "json";
        xhr.send(null);

    })

}