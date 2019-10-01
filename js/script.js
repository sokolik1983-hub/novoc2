
$(".js-range-slider").ionRangeSlider({
    type: "double",
    skin: "big",
    min: 0,
    max: 10000,
    from: 0,
    to: 10000,
    onChange: function (data) {
        console.dir(data);
    }
});
