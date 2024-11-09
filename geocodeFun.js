const request = require("request")
const geocode = (address,callback)=>{
    const geocodeurl ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?proximity=ip&access_token=pk.eyJ1IjoiYXlhMjAyNSIsImEiOiJjbTJ5YnVneWUwZTU5Mmxxd25iMjk1aHhvIn0.EOJ52RVgMZybi7KeIruSTA";

    request({url :geocodeurl , json:true },(error,response)=>{
        if (error){
            callback("unable to conact geocode service",undefined)
        }
        else if (response.body.message){
            callback(response.body.message,undefined)
        }
        else if (response.body.features.length == 0){
            callback("unable to find location",undefined)
        }
        else{
            callback(undefined,{                                                                                                                                                
                longtitude : response.body.features[0].center[0],
                latitude :  response.body.features[0].center[1]
            })
        }
       
    })
}

module.exports ={geocode}