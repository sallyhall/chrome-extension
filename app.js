
$(".subReddit").on("submit", function(event){
  event.preventDefault();
  var subReddit = $("input").val();
  $(".pics").html("");
  $.ajax({
              url: "https://www.reddit.com/r/"+subReddit+".json",
              method: "GET",
              success: function(data) {
                  var redditsArray = data.data.children;
                  _.each(redditsArray, function(post) {
                          $(".pics").append("<div class='animalPic'><a target='_blank' href='http://reddit.com"
                                            + post.data.permalink
                                            + "'><img src='"
                                            + post.data.preview.images[0].source.url
                                            + "'></a><h2>"+ post.data.title+ "</h2></div>");
                      })
                  }
              });

});
