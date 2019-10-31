$(document).ready(function(){
    $(window).on('scroll' , function(){
        var sc = $(window).scrollTop() ; 
        
        if(sc > 850){
      $("span.sp1").animate({
           width:'89%'
      },1000)   
        
        $("span.sp2").animate({
           width:'79%'
      },1000) 
        
        $("span.sp3").animate({
           width:'40%'
      },1000)   
        
        $("span.sp4").animate({
           width:'66%'
      },1000)
           
           }
    })
 
    $(".psp").show(1500)

    
    

 
});