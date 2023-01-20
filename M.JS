var data;
var iInput = document.querySelector('.input');


async function getApi(){

var fApi = await fetch('http://api.weatherapi.com/v1/forecast.json?key=127e72fcc64644fba09210956221110&q=cairo&days=7');
data = await fApi.json();
getData();

}
getApi();


function getData(){

    document.querySelector('.country').innerHTML=`${data.location.name}`;
document.querySelector('.fday').innerHTML=`${data.forecast.forecastday[0].date}`;
document.querySelector('.fdegree').innerHTML=`${data.forecast.forecastday[0].day.avgtemp_c + "℃"}`;
document.querySelector('.condition').innerHTML=`${data.forecast.forecastday[0].day.condition.text}`;
document.querySelector('.icon').src=`${"http:" + data.forecast.forecastday[0].day.condition.icon}`;

document.querySelector('.sday').innerHTML=`${data.forecast.forecastday[1].date}`;
document.querySelector('.sdegree1').innerHTML=`${data.forecast.forecastday[1].day.maxtemp_c + "℃"}`;
document.querySelector('.sdegree2').innerHTML=`${data.forecast.forecastday[1].day.mintemp_c + "℃"}`;
document.querySelector('.condition1').innerHTML=`${data.forecast.forecastday[1].day.condition.text}`;
document.querySelector('.icon1').src=`${"http:" + data.forecast.forecastday[1].day.condition.icon}`;

document.querySelector('.ssday').innerHTML=`${data.forecast.forecastday[2].date}`;
document.querySelector('.ssdegree1').innerHTML=`${data.forecast.forecastday[2].day.maxtemp_c + "℃"}`;
document.querySelector('.ssdegree2').innerHTML=`${data.forecast.forecastday[2].day.mintemp_c + "℃"}`;
document.querySelector('.condition2').innerHTML=`${data.forecast.forecastday[2].day.condition.text}`;
document.querySelector('.icon2').src=`${"http:" + data.forecast.forecastday[2].day.condition.icon}`;

}


iInput.addEventListener('keyup',(async function(){
    var tTest= /^[a-z]{3,}$/i;
        if(tTest.test(iInput.value)==true){
            var fApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=127e72fcc64644fba09210956221110&q=${iInput.value}&days=7`);
            data = await fApi.json();
            getData();
        }else{
            getApi();
        }
    }
))




