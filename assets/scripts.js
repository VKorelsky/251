$(document).ready( function() {

  $('#input-taker').submit( function(e){
    e.preventDefault();

    var formData = this.elements,
        title = formData[0].value,
        body = formData[1].value,
        url = "http://localhost:3000/submit",
        data = {'title': title, 'body': body};

    submitPost(url, data)
  });

function submitPost(url, data) {
  $.ajax({
    url: url,
    data: data,
    type: 'POST',
    success: function(response) { success(response);},
    error: function(error) { console.log(err)}
  });
};

function success(response){
  console.log("Success");
  $('#notification').show();

  setTimeout(function(){
    $('#notification').hide();
  }, 2000);

};


});
