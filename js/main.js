

document.addEventListener("DOMContentLoaded", function () {

    const flkty = new Flickity('.main-carousel', {
        cellAlign: 'left',
        wrapAround: true,
        freeScroll: true,
        groupCells: true,
    });

    /* as found on https://www.formget.com/javascript-submit-form/ */

    const emailForm = document.getElementById("formId");
    
    // const subButton = document.getElementById("subScribe").submit;
    emailForm.addEventListener("submit", function (event) {
         event.preventDefault();
            const emailInput = document.getElementById("emailForm").value;
            if (emailInput != '') { 
                alert("Thank you for subscribing!");
            } else {
                alert("Please enter your email!");
            }
        });

        // function validation() {
        //     const email = document.getElementById("emailForm").value;
        //     // const emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
        //     if (email === '') {
        //         alert("Please fill all fields...!");
        //         return false;
        //     } else if (!(email).match(emailReg)) {
        //         alert("Invalid Email...!");
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }
    // });


});

//END OF DOCUMENT

