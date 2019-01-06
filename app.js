//Use of JQUERY
//login
var provider = new firebase.auth.GoogleAuthProvider();

//Simple use of jquery 
// -> sintax of jquery $('')
//Obsrver click button
$('#login').click( function () {
        firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            console.log(result.user);
        }); 

}); 





//
