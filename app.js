// Init Github
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchuser = document.getElementById('searchuser');

// Search input event listener
searchuser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

      //Make an http call to github
    // done through out github.js file
  if(userText !== '') {
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert 
        ui.showAlert('User not found', 'alert alert-danger');
        
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
})