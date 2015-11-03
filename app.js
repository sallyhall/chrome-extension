$("document").ready(function() {
    picPage.init();
});

var picPage = {
    subReddit: "aww",
    init: function() {
        picPage.events();
        picPage.styling();
    },
    events: function() {
        $(".subReddit").on("submit", function() {
            event.preventDefault();
            picPage.subReddit = $("input").val();
            $(".pics").html("");
            picPage.loadPics();
        });
    },
    styling: function() {
        picPage.loadPics();
    },
    loadPics: function() {
        $.ajax({
            url: "https://www.reddit.com/r/" + picPage.subReddit +
                ".json",
            method: "GET",
            success: function(data) {
                var redditsArray = data.data.children;
                _.each(redditsArray, function(post) {
                    $(".pics").append(
                        "<div class='animalPic'><a target='_blank' href='http://reddit.com"
                        + post.data.permalink
                        + "'><img src='"
                        + post.data.thumbnail
                        + "'></a><h2>"
                        + post.data.title
                        + "</h2></div>");
                })
            }
        });
    },
};
