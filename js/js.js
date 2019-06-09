photoNum=15
function changeLimit(){
    var num = document.getElementById("numberval").value
    photoNum = num
}
$("#numberbox").hide()
$('#fetch').click(function() {
    
    $("#numberbox").show()
    var userName=$("#username").val()
    
    $.ajax({
      url: 'https://api.lityapp.com/instagrams/'+userName+'?limit=15',
      success: function(data){
      var insData = JSON.parse(data)
      console.log(insData.photoUrlHD)
      var listing = $('#listing')
      $(listing).empty()
      $('<img>').attr('src', insData.photoUrlHD).appendTo(listing)
      var postList = insData.posts
      for (var i = 0; i < photoNum; i++) {
        $('<img>').attr('src', postList[i].photoUrl).css({
          //'width': postList[i].photoWidth,
          //'height': postList[i].photoHeight
        }).appendTo(listing)
        console.log(insData.caption)
        $('<p>').text(postList[i].caption).appendTo(listing)
      }
      },
      error:function(data){
          alert('This page is not exist')
      }
    })
  })
  