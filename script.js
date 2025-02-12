const apiKey="0aaf5570b20fac8c05d9d601922e5bc3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.getElementsByTagName("input");
console.log("serachBox",searchBox)
const serachButton=document.querySelector(".searchBtn")
async function checkWeather(city){
    const response =await fetch(apiUrl + city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log("data",data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
    document.querySelector(".weather").style.display="block";
    //add the code for changing the icon

}

serachButton.addEventListener("click",()=>{checkWeather(searchBox[0].value)})
