apiKey="af25ea49d95df9ff787f1618d1919a85"
window.addEventListener('DOMContentLoaded',(event)=>{

    navigator.geolocation.getCurrentPosition(function(position) {
       let latitud=position.coords.latitude;
       let longitud=position.coords.longitude

       fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitud+'&lon='+longitud+'&units=metric&lang=sp&appid='+apiKey)
       .then(response => response.json())
       .then(json => wheaterDataJSON(json))

       const wheaterDataJSON=(json)=>{
           let city= json.name
           let wheatherDescription=json.weather[0].description
           let wheaterIcon=json.weather[0].icon
           let wheaterTemp=json.main.temp
           let wheaterHumidity=json.main.humidity
           document.getElementById("city").innerHTML="Ciudad: "+city
           document.getElementById("wheatherDescription").innerHTML="Descripcion: "+wheatherDescription
           document.getElementById("wheaterIcon").src="https://openweathermap.org/img/w/"+wheaterIcon+".png"
           document.getElementById("wheaterTemp").innerHTML=Math.round(wheaterTemp)+" C°"
           document.getElementById("wheaterHumidity").innerHTML="Humedad: "+wheaterHumidity+"%"
       }
      });
    
})

