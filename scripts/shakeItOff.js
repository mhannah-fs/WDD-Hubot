//Description:
// Hubot displays a video of Fresh Prince dancing to Taylor Swift's Shake it Off.
//
//Dependencies
// None
//
//Commands
// Hubot shake it off - Displays a video of dogs dancing to Taylor Swift's Shake It Off.
//
// Author
// Ashley Crane
// acrane@fullsail.edu
// Github: ashcrane
//
//Contributors
//


// Listens for the phrase fresh dance and calls the function to display the video url/video
module.exports = function (robot) {
    return robot.respond(/shake it off/i, function (msg){
        
        msg.send('https://www.youtube.com/watch?v=aXtiAUPWttQ');
    });
};