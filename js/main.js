$("#arrowjs").click(function()
{
    $("body , html").animate( {scrollTop:0} , 1500)
})

$(".arrow").click(function()
{
    $(".text").slideToggle(1000)
})


$("#home").click(function()
{
    $("html , body").animate({scrollTop:0} , 1000)
})


let section2 = $("#section2").offset().top
$("#about").click(function()
{
    $("html , body").animate({scrollTop:section2} , 1000)
})


let section3 = $("#section3").offset().top;
$("#product").click(function()
{
    $("html , body").animate({scrollTop:section3} , 1000)
})

let section4 = $("#section4").offset().top
$("#contact").click(function()
{
    $("html , body").animate( {scrollTop:section4} , 1000 )
})


$(window).scroll(function()
{
    let amr = $(window).scrollTop();

    if( amr > section2 )
    {
        $("#arrowjs").fadeIn(1000)
    }
    else
    {
        $("#arrowjs").fadeOut(1000)
    }
})