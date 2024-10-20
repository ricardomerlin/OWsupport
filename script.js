document.addEventListener('DOMContentLoaded', function () {
    const script1 = document.createElement('script');
    script1.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
    script1.integrity = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN";
    script1.crossOrigin = "anonymous";

    const script2 = document.createElement('script');
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
    script2.integrity = "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
    script2.crossOrigin = "anonymous";

    const script3 = document.createElement('script');
    script3.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
    script3.integrity = "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl";
    script3.crossOrigin = "anonymous";

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
});
