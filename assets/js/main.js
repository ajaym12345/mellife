
$(document).ready(function(){
  // $('.collapse.show').each(function() {
  //   $(this).parent().addClass('open');
  // });

  // $('.clicked_accordion').click(function(){
  //   $('.open').removeClass('open');
  //   let activeTab= $(this).parent().siblings()
  //   $('.open').addClass('.open')
  //   if(!activeTab.hasClass('show')){
  //     $(this).parent().parent().addClass('open')
  //   }
  // });


  if ($(".formValidation").length) {
    $(".formValidation")
    .bootstrapValidator({
     feedbackIcons: {
       valid: "glyphicon glyphicon-ok",
       invalid: "form-remove",
       validating: "glyphicon glyphicon-refresh",
     },
    })
    .on("success.form.bv", function (e) {
     e.preventDefault();
     var $form = $(e.target);
     setTimeout(function(){
       $form[0].reset();
     },300);
     $form.find(":submit").removeAttr("disabled");
    });
    }
});
 /***************** nav-link click function ***********************************************/
  // document.addEventListener("DOMContentLoaded", function() {
  //   var navLinks = document.querySelectorAll('.nav-link');
  //   navLinks.forEach(function(navLink) {
  //       navLink.addEventListener('click', function(event) {
  //           var navItems = document.querySelectorAll('.nav-item');
  //           navItems.forEach(function(navItem) {
  //               navItem.classList.remove('active');
  //           });
  //           var parentNavItem = this.parentElement;
  //           parentNavItem.classList.add('active');
  //       });
  //   });
  // });

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href").slice(1) === current) {
      li.classList.add("active");
    }
  });
});

    
 
      document
        .getElementById("myForm")
        .addEventListener("submit", function (event) {
          // event.preventDefault(); // Prevent form submission
          if (this.checkValidity()) {
            // Form is valid
            // document.getElementById('modalcontent').style.display = 'none';
            $("#exampleModal").modal("hide");
            // Show the thank you modal
            $("#thankyouModal").modal("show");
            // Reset the form
            this.reset();
          } else {
            this.classList.add("was-validated"); // Show validation feedback
          }
        });
        $('#exampleModal').on('hidden.bs.modal', function (e) {
          
    document.getElementById("myForm").reset(); // Reset the form
    document.getElementById("myForm").classList.remove("was-validated");
  document.getElementById("submitBtn").disabled = false;
   // Get all elements with the class name "help-block"
var helpBlocks = document.getElementsByClassName("help-block");

// Iterate over each element and set its display style to "none"
for (var i = 0; i < helpBlocks.length; i++) {
  helpBlocks[i].style.display = "none";
}

     // Remove validation feedback
  });
  
