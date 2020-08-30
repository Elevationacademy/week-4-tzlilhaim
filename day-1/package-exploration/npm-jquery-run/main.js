
$("div:contains('Click me')").on("click", function (){
    $("div:contains('Click me')").css("background-color","#f39c12")
})

$.ajax({
    url: "http://data.nba.net/10s/prod/v1/2016/players.json",
    success: function (response) {
        console.log(response)
    },
    error: (xhr, text, error) =>
      alert(
        text +
          ": Somehing went wrong...Please try again"
      ),
  })