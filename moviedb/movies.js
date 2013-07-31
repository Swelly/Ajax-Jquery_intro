$(function(){

  $('form').submit(function() {
    console.log("Form button was clicked");
    return false; //stops form from being submitted
  });

  $('#search').click(function(event){
    // to Search
    var movieTitle = "http://www.omdbapi.com/?t="+ $('#movie').val();
    // Send request with Ajax using movieTitle as url
    var query = $.ajax({
      type: 'get',
      url: movieTitle
    }).done(function(event){
      $('#searchResult').append('<div>'+query+'</div>');
    })
  })

})

// $.ajax({
//   type: 'get',
//   url: ''
// })
