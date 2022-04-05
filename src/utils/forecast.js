const request = require('postman-request')

forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=493cd66732c9c1590460936713601790&query='+ latitude + ', '+ longitude +'&units=f'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Cannot connect to forecast service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const weather_description = body.current.weather_descriptions[0]
            const temperature = body.current.temperature
            const feelsLike = body.current.feelslike

            callback(undefined, weather_description + '. Its is currently ' + temperature + ' degress out. It feels like ' + feelsLike + ' degress out.' )
        }
    })
}


module.exports = forecast