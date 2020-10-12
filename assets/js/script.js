function getSearchVal() { 
    var searchValue = document.querySelector("#search-value").nodeValue; 
    searchWeather (searchValue); 
    makeRow (searchValue); 
}

function searchWeather(searchValue) { 
    fetch("api.openweathermap.org/data/2.5/weather?q=") + searchValue + 
    then(function(response) { 
        return response.json();
     })
     .then(function(data) { 

        //remove old data 
        todayEl = document.querySelector("#today"); 
        TextEl.textContent = " "; 
     })
    
}