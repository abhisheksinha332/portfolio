$(document).ready(function(){

let $btns = $('.projects .btn-grp button');

$btns.click(function(e){
    $('.projects .btn-grp button').removeClass('active');
    e.target.classList.add('active');

let selector =$(e.target).attr('data-filter');
$('.projects .grid').isotope({
    filter: selector
});

return false;
});

})