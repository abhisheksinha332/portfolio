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
    
    $('.projects .btn-grp #btn1').trigger('click');

    $('.projects .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });



      let $certbtns = $('.certificates .btn-cert-grp button');
    
      $certbtns.click(function(e){
          $('.certificates .btn-cert-grp button').removeClass('active');
          e.target.classList.add('active');
      
      let selector =$(e.target).attr('data-filter');
      $('.certificates .grid').isotope({
          filter: selector
      });
      
      return false;
      });
      
      $('.certificates .btn-cert-grp #btn2').trigger('click');
  
      $('.certificates .grid .test-popup-link').magnificPopup({
          type: 'image',
          gallery:{enabled:true}
          // other options
        });
  

    })