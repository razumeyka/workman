$(document).ready(function(){
    
// scroll
    $(".advantages_caption a").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
    });
    
// licenses
    $('.carousel .next,.carousel .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.review_container').children().children().length-Math.round(parseFloat(jQuery('.review_wrapper').css('width'))/parseFloat(jQuery('.one_doc').css('width')));
        var slide=$(this).closest('.carousel').data('slide');
        console.log(countslides);
        if($(this).hasClass('next')){
            slide++;
            if(slide>countslides)slide=0;
        }
        if($(this).hasClass('prev')){
            slide--;
            if(slide<0)slide=countslides;
        }
         $(this).closest('.carousel').find('.long').css('margin-left','-'+(slide*25)+'%');
		$(this).closest('.carousel').data('slide',slide);
    });
    
// search
    
    var options = {
        valueNames: [ 'name' ]
    };
    var arr = [];
    
    $('.branch').each(function(){
        var branch = new List(this,options);
        arr.push(branch);
    });
        
    $(".search_input").keyup(function(){
        var self=this;
        arr.forEach(function (branch, i, arr) {
            branch.search($(self).val());
        });   
    });
 

// fancybox
    
    $('.fancybox').fancybox();
    
    $('.list li').click(function(){
        $.fancybox.open({
            src  : '#order',
            type : 'inline',
        });
    });
})
