const moment = require("moment")

let timeNow = new Date()
console.log(timeNow)

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow)

const urllib = require("urllib")
/* 
urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
}) */

const fetchMovie = function (MOVIE_TITLE, API_KEY = "5a39c4e4") {
    const formattedMOVIE_TITLE = MOVIE_TITLE.split(" ").join("+")
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${formattedMOVIE_TITLE}`
  urllib.request(url,
    function (err, response) {
        const movieData = JSON.parse(response)
      console.log("release date of the movie '" + MOVIE_TITLE + "': " + movieData.Released)
    }
  )
}

fetchMovie("The Lion King")