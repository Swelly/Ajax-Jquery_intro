$(function(){

  $('form').submit(function() {
    console.log("Form button was clicked");
    return false; //stops form from being submitted
  });

  $('#search').click(function(event){
    // to Search
    var movieTitle = "http://www.omdbapi.com/?s="+ $('#movie').val();
    // Send request with Ajax using movieTitle as url
    $.ajax({
      type: 'get',
      url: movieTitle,
      dataType: 'json'
    }).done(function(data){
      for(var i = 0; i < data.Search.length; i++) {
      $('#searchResult').append('<div>'+data.Search.[i]+'</div>');
      }
        // $('#searchResult').append('<li>'+data.key[i]+'</li>');
    })
  })

})

// $.ajax({
//   type: 'get',
//   url: ''
// })
