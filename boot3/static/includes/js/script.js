/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function() {

    $('#alertMe').click(function(e) { 
        
        /* default behavior is to nav
           to the href or refresh the page */
        //e.preventDefault();
        $('#successAlert').toggle("slow");
        
        // $('#successAlert').slideDown();
    });
    
    $('#closeAlert').click(function(e) {
        e.preventDefault();
        $('#successAlert').toggle("slow");
    });

    //Prevent page from refreshing    
    $('#modalPopup').click(function(e) {
        e.preventDefault() ;
    });
    
    $('#modalPopup').popover();
    
    $('[rel="tooltip"]').tooltip();
});