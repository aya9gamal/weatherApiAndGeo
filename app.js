const { error } = require("console");
const request = require("request");
// const url="https://api.weatherapi.com/v1/current.json?key=ba0ed7fdab804849b6e142636242910&q=egypt"
// request({url,json:true},(error,respons)=>{
//     console.log("lon "+respons.body.location.lon)
//     console.log("lat "+respons.body.location.lat)
//     console.log("temp_c "+respons.body.current.temp_c)
//     console.log("temp_f "+respons.body.current.temp_f)
//     console.log("weather "+respons.body.current.condition.text)
// })
// console.log("hello")

// const geoCode = request("geocodeFun")
// geocode.geocode(address,(error,data)=>{
//     console.log("hsll")
//     // console.log("ERROR : " + data.error)
//     // console.log("longtitude : " + data.longtitude)
//     // console.log("latitude : " + data.latitude)

// })

const address = process.argv[2];
const geoCode = require("./geocodeFun");
const weatherApi = require("./forcast");

geoCode.geocode(address, (error, data) => {
  if (error) {
    console.log("ERROR : " + error);
  } else {
    console.log("longtitude : " + data.longtitude);
    console.log("latitude : " + data.latitude);
    weatherApi.weatherApi(data.latitude, data.longtitude, (error, data) => {
      if (error) {
        console.log("Error : " + error);
      } else {
        console.log("temp_c : " + data.temp_c);
        console.log("temp_f : " + data.temp_f);
        console.log("weather : " + data.weather);
      }
    });
  }
});
