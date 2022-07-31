// Search input
const searchuser = document.getElementById('searchuser');

// Search input event listener
searchuser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

      //Make an http call to github
    // done through out github.js file
  if(userText !== '') {
 
    console.log(userText);
  }
})