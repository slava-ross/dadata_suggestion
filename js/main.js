$(document).ready(function () {
    var token = '06437c5f9078834928053139b09331cd4c2a17d8';
    $(".address").suggestions({
        token: token,
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".job").suggestions({
        token: token,
        type: "PARTY",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fio").suggestions({
        token: token,
        type: "NAME",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fms").suggestions({
        token: token,
        type: "fms_unit",
    });
});