const url='https://api.openweathermap.org/data/2.5/' //openweatherdan current olarak aldığımız anlık hava durumu
const key= 'de551b6676811bef90084b3fa81c815d' //openweatherdan oluşturulan hesap altında myapi keyleri kişiye özel oluşturuluyor
const setQuery= (e)=> {
    if(e.keyCode=='13') //13e eşitse entera basılmıştır
    getResult(searcBar.value)

} //klavyeden gelen eventi yakalamak için

//input değerinden gelen şehiri yakalamak için ;
const getResult= (cityName)=> {
    let query= `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=> {
        return weather.json()
    })
    .then(displayResult) //dönen değeri thenle kullanıyorsun
}
const displayResult=(result)=> {
  let city=document.querySelector('.city')
  city.innerText=`${result.name}, ${result.sys.country}`
  let temp= document.querySelector('.temp')
  temp.innerText=`${Math.round(result.main.temp)}°C`
  let desc= document.querySelector('.desc')
  desc.innerText=result.weather[0].description
  let minmax= document.querySelector('.minmax')
  minmax.innerText= `${Math.round(result.main.temp_min)}°C/
  ${Math.round(result.main.temp_max)}°C`  
}
const searcBar=document.getElementById('searcBar')
searcBar.addEventListener('keypress',setQuery) //enter tuşuna basılınca şehir giriliyor
