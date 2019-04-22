

document.addEventListener("DOMContentLoaded", function() { 
    
  const flkty = new Flickity( '.main-carousel', {
      cellAlign: 'left',
      wrapAround: true,
      freeScroll: true,
      groupCells: true,  
    });

    /* as found on https://www.formget.com/javascript-submit-form/ */

    const subButton = document.getElementById("subScribe").submit;
    button.addEventListener("click", function() {
    function sucCess() {
        const signedUp = document.getElementById("emailForm").value;
        if (validation())
        {
        document.getElementById("subScribe").submit();
        alert("Thank you for subscribing!");
} 
    }

function validation(){
    const email = document.getElementById("emailForm").value;
    const emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if ( email ==='') {
    alert("Please fill all fields...!");
    return false;
    } else if (!(email).match(emailReg)) {
    alert("Invalid Email...!");
    return false;
    } else {
    return true;
    }
    }
});


});

//END OF DOCUMENT

