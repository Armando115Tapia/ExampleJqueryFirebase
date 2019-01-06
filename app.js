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
            //console.log(result.user);
            //when the auth is done
            $('#login').hide();
            //Agregar html 
            $('#root').append("<img src='"+ result.user.photoURL+"' /> ");
        }); 

}); 

//Keep user in Database 
$('#guardar').click(function(){
    //Create a new brach in the databse NoSQL
    firebase.database().ref("ramaPruebaJquery")
    .set({
        nombre:"Armando Tapia",
        edad:"15",
        sexo:"mucho"
         })
});










//
