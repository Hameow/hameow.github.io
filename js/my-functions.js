/* Menu JS */

$(document).ready(function() {
  $('#hamburger').click(function() {
    $('.navigation').fadeToggle('fast');
  });
});

$(document).ready(function() {
  $('#close-button').click(function() {
    $('.navigation').fadeToggle('fast');
  });
});


/* Smooth Scrolling */

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

/* Google Form */


function postToGoogle() {
                var field1 = $('#name').val();
                var field2 = $('#email').val();
                var field3 = $('#subject').val();
                var field4 = $('#message').val();
 
                $.ajax({
                url: "https://docs.google.com/forms/d/1iRO8TsuP_uTGT5PReImB-oNOTBqS3iEb0zznbkOMKpA/formResponse",
                data: {"entry_34664156": field1, "entry_701578790": field2, "entry_229519902": field3, "entry_897576732": field4},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function() {
                        //Success message
                    },
                    200: function() {
                        //Success Message
                    }
                }
            });
            }
             
            $(document).ready(function(){
                $('#form').submit(function() {
                    postToGoogle();
                    return false;
                });
            });
            
            
/* Parsley */
$(document).ready(function() {
	$("#contact-form").parsley();
});