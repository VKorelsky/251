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
    success: function(response) { success(response, data);},
    error: function(error) { console.log(err)}
  });
};

function success(response, data){
  $('#notification').show();

  setTimeout(function(){
    $('#notification').hide();
  }, 2000);

  renderItem(data)
};

function renderItem(data){
  console.log(data);
  var div = document.createElement('div');

  div.innerHtml = '<div class="list-upvotes">' +
              '<i class="fa fa-caret-up" aria-hidden="true"></i>' +
              '<p>0</p>' +
          '</div>' +
          '<div class="list-main">' +
              '<h4 class="title">'+ data.title + '</h4>' +
              '<p class="body">'+ data.body + '</p>' +
          '</div>';

  console.log(div);
  $('#item-container').append(div);
}


});
