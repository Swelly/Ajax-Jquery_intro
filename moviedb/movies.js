$(function(){

  $('form').submit(function() {
    console.log("Form button was clicked");
    return false; //stops form from being submitted
  });

  $('#search').click(function(event){
    // to Search
    var movieTitle = "http://www.omdbapi.com/?t="+ $('#movie').val();
    // Send request with Ajax using movieTitle as url
    var http = $.ajax({
      type: 'get',
      url: movieTitle
    })
  })

})

// $.ajax({
//   type: 'get',
//   url: ''
// })
