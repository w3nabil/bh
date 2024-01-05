/// Preloader 

window.addEventListener('load', function() {
  try {
    document.querySelector('.preloader').style.display = 'none';
  }
  catch (e) {
    console.log("No preloader Used in this page"); 
  }
}); 
