$(document).ready(function(){
    $('[data-toggle="scroll"]').on('click', function(e){
        e.preventDefault();
        var target = $($(this).data('target'));
        if(target.length)
            $('body, html').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
    })

    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();

    if($('.grid').length)
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        })

    if($('.grid-isotope').length)
        $('.grid-isotope').isotope({
        })
    $('[data-toggle="isotope-filter"]').on('click', function(e){
        e.preventDefault();
        var target = $($(this).data('target'));
        var parent = $($(this).data('parent'));
        var filter = $($(this).data('filter'));
        target.isotope({ filter: filter });
        parent.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    })

    if($('.owl-carousel').length){
        $('.owl-carousel').each(function(i, item){
            item = $(item);
            var config = item.data();
            item.owlCarousel(config);
        })

        $('[data-toggle="owl-next"]').click(function() {
            var target = $($(this).data('target'));
            target.trigger('next.owl.carousel');
        })
        $('[data-toggle="owl-prev"]').click(function() {
            var target = $($(this).data('target'));
            target.trigger('prev.owl.carousel');
        })

    }


    $("#ambi_form").submit(function (event) {

        event.preventDefault();
      
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var phoneno = /^\d{10}$/;
      
        var name = $('#nameInput').val();
        var phone = $('#phoneInput').val();
        var email = $('#emailInput').val();
        var textarea = $("#messagesInput").val();
        var isValidForm = true;

        
        console.log(email);
        console.log(name);
        console.log(phone);
      
      
        if (name.length == '') {
          $('#name_null_Err').show();
          $('#nameErr').hide();
          isValidForm = false;


        }
        else if ((name.length < 3) ||
          (name.length > 30)) {
          $('#nameErr').show();
          $('#name_null_Err').hide();
          isValidForm = false;

        }
        else {
          $('#nameErr').hide();
          $('#name_null_Err').hide();

      
        }
      
      
        if (phoneno.test(phone) && phone !== '') {
          $('#phoneErr').hide();
      
        }
        else {
          $('#phoneErr').show();
          isValidForm = false;

      
        }
      
       
        if (textarea == '') {
          $("#textErr").show();
          isValidForm = false;

        }
        else {
          $("#textErr").hide();
      
        }
      
      
        if (pattern.test(email) && email !== '') {
      
          $('#emailErr').hide();
      
      
        } else {
      
          $('#emailErr').show();
          isValidForm = false;

      
        }
        if(isValidForm){
          var params = {name, email,phone};
          var form = document.getElementById("ambi_form");
          form.reset();
          sendMail(params);
         }else {
          console.log("oops");
          }
      });

      function sendMail(params){
        $.ajax({
            type: 'POST',
            url:'mailer.php',
            data: params,
            success: function (resp) {
                console.log(resp);
                $("#form__response").append(resp).show();
            }
        });
    }


      $("#cust_form").submit(function (event) {

        event.preventDefault();
    
        var email = $('#email').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      
        if (pattern.test(email) && email !== '') {
      
          $('#emailErr').hide();
      
      
        } else {
      
          $('#emailErr').show();
      
          setTimeout(function () {
      
            $('#custom_form span.err').hide();
      
          }, 3000);
        }
      });

      $("#architecture_form").submit(function (event) {

        event.preventDefault();
        var date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        var place = $('#place').val();
        var startDate = $('#sdate').val();
        var endDate = $('#edate').val();


        if (place.length == '') {
          $('#nameErr').show();
        }
        else if ((place.length < 3) ||
          (place.length > 15)) {
          $('#nameErr').show();
      
        }
        else {
          $('#nameErr').hide();
      
        }


        if (date.test(startDate) && startDate !== '') {
          $('#dateErr').hide();
      
        }
        else {
          $('#dateErr').show();
      
        }

        if (date.test(endDate) && endDate !== '') {
          $('#dateErr1').hide();
      
        }
        else {
          $('#dateErr1').show();
      
        }
    
        
      });

      $("#schedule_form").submit(function (event) {

        event.preventDefault();
        var first_name = $('#name').val();
        var last_name = $('#lastname').val();
        var email = $('#email').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (first_name.length == '') {
          $('#nameErr').show();
        }
        else if ((first_name.length < 3) ||
          (first_name.length > 10)) {
          $('#nameErr').show();
      
        }
        else {
          $('#nameErr').hide();
      
        }


        if (last_name.length == '') {
          $('#lastnameErr').show();
        }
        else if ((last_name.length < 3) ||
          (last_name.length > 10)) {
          $('#lastnameErr').show();
      
        }
        else {
          $('#lastnameErr').hide();
      
        }
        
            
        if (pattern.test(email) && email !== '') {
      
          $('#emailErr').hide();
      
      
        } else {
      
          $('#emailErr').show();
      
          setTimeout(function () {
      
            $('#custom_form span.err').hide();
      
          }, 3000);
        }
      });



      $("#sub_form").submit(function (event) {

        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var sub_email = $('#email1').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


        if (name.length == '') {
          $('#nameErr').show();
        }
        else if ((name.length < 3) ||
          (name.length > 10)) {
          $('#nameErr').show();
      
        }
        else {
          $('#nameErr').hide();
      
        }

        if (pattern.test(sub_email) && sub_email !== '') {
      
          $('#emailErr1').hide();
      
      
        } else {
      
          $('#emailErr1').show();
      
          setTimeout(function () {
      
            $('#sub_form span.err').hide();
      
          }, 3000);
        }
      


        

      
        if (pattern.test(email) && email !== '') {
      
          $('#emailErr').hide();
      
      
        } else {
      
          $('#emailErr').show();
      
          setTimeout(function () {
      
            $('#sub_form span.err').hide();
      
          }, 3000);
        }
      });

      $("#sub1_form").submit(function (event) {

        event.preventDefault();
        var sub_email = $('#email1').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


        if (pattern.test(sub_email) && sub_email !== '') {
      
          $('#emailErr1').hide();
      
      
        } else {
      
          $('#emailErr1').show();
      
          setTimeout(function () {
      
            $('#sub_form span.err').hide();
      
          }, 3000);
        }
   
      });


      $("#explore_form").submit(function (event) {

        event.preventDefault();
        var email = $('#email').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      if (pattern.test(email) && email !== '') {
      
        $('#emailErr').hide();
    
    
      } else {
    
        $('#emailErr').show();
    
        setTimeout(function () {
    
          $('#explore_form span.err').hide();
    
        }, 3000);
      }
    });


      $("#explore1_form").submit(function (event) {

        event.preventDefault();
        var email = $('#email1').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      if (pattern.test(email) && email !== '') {
      
        $('#emailErr1').hide();
    
    
      } else {
    
        $('#emailErr1').show();
    
        setTimeout(function () {
    
          $('#explore1_form span.err').hide();
    
        }, 3000);
      }
    });

      
});

