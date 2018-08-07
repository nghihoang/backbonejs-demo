var Song = Backbone.Model.extend({
    defaults:{
        genze: "Jazz"
    }
});
var song = new Song({
    title: "Blue in Green",
    artist: "Miles Davis",
    publishYear: 1959
});