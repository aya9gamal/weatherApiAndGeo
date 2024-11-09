const request = require("request")

const weatherApi = (lon,lat,callback)=>{
    const url ="https://api.weatherapi.com/v1/current.json?key=ba0ed7fdab804849b6e142636242910&q=" + lat + "," + lon

    request({url,json:true},(error,response)=>{
        if (error){
            callback("ERROR HAS OCCURED",undefined)
        }
        else if (response.body.error){
            callback(response.body.error.message,undefined)
        }
        else {
            callback(undefined,{
                temp_c : response.body.current.temp_c,
                temp_f : response.body.current.temp_f,
                weather : response.body.current.condition.text,
            })
        }
    })

}
module.exports = {weatherApi}