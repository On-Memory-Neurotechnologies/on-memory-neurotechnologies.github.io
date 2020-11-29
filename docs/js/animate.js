

function animateInnerHTML(element, newHTML){
    $(element).animate({'opacity': 0}, 100, function(){
        $(this).html(newHTML).animate({'opacity': 1}, 0);
    });
}
