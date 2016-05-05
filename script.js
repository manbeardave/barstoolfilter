$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

  $( ".blog-post" ).each(function( index ) {
    var on_page = $(this).find("h2").text()
    var guess = new RegExp("Guess");
    var smokeshow = new RegExp("Smokeshow");
    var smokesmash = new RegExp("Smokesmash");
    var ass = guess.test(on_page);
    var titties = smokeshow.test(on_page);
    var competitive_titties = smokesmash.test(on_page);
    if (ass == true | titties ==true | competitive_titties == true ) {
      $( this ).hide();
    }
    
  });
    
    
    

});


$(document).ready(function() {
  $("#tna_on").click(handler);
  $("#tna_off").click(off);
});

function handler() {
  
  $(".blog-post").show();
};
function off() {
  $( ".blog-post" ).each(function( index ) {
    var on_page = $(this).find("h2").text()
    var guess = new RegExp("Guess");
    var smokeshow = new RegExp("Smokeshow");
    var smokesmash = new RegExp("Smokesmash");
    var ass = guess.test(on_page);
    var titties = smokeshow.test(on_page);
    var competitive_titties = smokesmash.test(on_page);
    if (ass == true | titties ==true | competitive_titties == true ) {
      $( this ).hide();
    }
    
  });
    
};
