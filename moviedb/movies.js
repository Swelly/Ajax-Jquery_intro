$(function(){

  $('form').submit(function() {
    console.log("Form button was clicked");
    return false; //stops form from being submitted
  });

})

// $.ajax({
//   type: 'get',
//   url: ''
// })
