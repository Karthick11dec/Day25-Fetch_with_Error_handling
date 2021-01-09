let container=document.getElementById('row')
console.log(container)

async function getData(){
    try{
        let contryarr=await fetch("https://restcountries.eu/rest/v2/all")
        let contrydata=await contryarr.json()
        for(var i in contrydata){
            if(true){   
                var cont_name=contrydata[i].name 
                let weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cont_name}&appid=257c31c053cadfb9b5f394447707b2f4`)
                var weatherdata=await weatherAPI.json()
                
                let div = document.createElement("div")
                div.innerHTML = `<div class="card col col-lg-4 col-sm-12" style="max-width: 20rem;">
                <div class="card-head bg-dark text-light pt-2"style="text-align:center">
                    <p>${contrydata[i].name}</p>
                </div>
                <div class="card-body body-bg">
                    <img src="${contrydata[i].flag}" class="card-img-top" alt="...">
                    <ul style="list-style-type: none;"class="pt-4">
                        <li>Capital :<span>${contrydata[i].capital}</span></li>
                        <li>Region : <span>${contrydata[i].region}</span></li>
                        <li>Country Code :<span>${contrydata[i].alpha2Code},${contrydata[i].alpha3Code}</span> </li>
                        <li>LatLang : <span>${contrydata[i].latlng[0]}, ${contrydata[i].latlng[1]}</span></li>
                        <li>Weather:<span>${weatherdata.weather[0].description}</span></li>
                        <li>Wind:<span>${weatherdata.wind.deg},${weatherdata.wind.speed}</span></li>
                        <li class="pt-4"><button type="button" class="btn btn-outline-info" id= "button" name ="button"onclick="click()">Click for Weather</button></li>
                    </ul>
                    
                </div>
            </div>`
            container.append(div)
                
            }
        }
        
    }
    
    catch(e){
        console.log(e)
    }
}

getData().then((data)=>console.log(data))
.catch((error)=>console.log(error))

//  function click()
//  {
//     <a href="https://www.google.com/"target="_blank"></a>
//  }

               
