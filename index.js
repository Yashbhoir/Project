import FetchWrapper from "./news.js"
import WeatherWrap from "./weather.js"

const news_body = document.querySelector(".card-body");
const news_desc = document.querySelector(".card-text");
const news_col = document.getElementById("news_main");
const carousel_inner = document.querySelector(".carousel-inner");


const newsJSON = new FetchWrapper(`https://newsapi.org/v2/top-headlines?country=in&apiKey=b36a1807722f446d942a366abe598fd4`)
const data = newsJSON.getData()

data.then((data)=>{
      console.log(data);
   data.forEach((news,count)=>{
        
           
            news_main.innerHTML += ` <div class="card col">
            <div class="card-body">
                <h5 class="card-title ">${count}. ${news.title}</h5>
            </div>
        </div>`;
           
        carousel_inner.innerHTML += `<div class="carousel-item">
        <img src="${news.urlToImage}" alt="" class="d-block w-100 h-75">
        </div>`
        
   })
   
}) 

const weather = document.querySelector(".weather");
const state =document.querySelector(".state");
const Temp = document.querySelector(".Temp")

   
const weatherJSON = new WeatherWrap("https://api.openweathermap.org/data/2.5/weather?lat=19.0759899&lon=72.8773928&appid=405c34f146e893dd0073a2737f8d448f");
const weather_data = weatherJSON.get();

weather_data.then(data=>{
    console.log(data);
    state.textContent= data.name;
    Temp.textContent=`Temperature ${data.main.temp}`;
    weather.textContent=`Weather ${data.weather[0].main}`


})
   
    // news_title.textContent = data.articles[0].title
      //  news_desc.textContent = data.articles[0].description 



//const addNews = ()=>{
    

    //news_title.textContent = data
   

    
//}
//addNews(data)

//addNews(data.articles[0].title,data.articles[0].description)