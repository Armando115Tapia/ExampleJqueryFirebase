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
            guardaDatos(result.user);
            //console.log(result.user);
            //when the auth is done
            $('#login').hide();
            //Agregar html 
          //  $('#root').append("<img src='"+ result.user.photoURL+"' /> ");
        }); 

}); 

//This function keep data automatically
 function guardaDatos(user){
     var usuario = {
        uid:user.uid, 
        nombre:user.displayName,
         email:user.email,
         foto:user.photoURL
     }
     firebase.database().ref("ramaPruebaJquery/" + user.uid)
     //add data
     //.push(usuario)
     .set(usuario)
 }

//Keep user in Database 
$('#guardar').click(function(){
    //Create a new brach in the databse NoSQL
    firebase.database().ref("ramaPruebaJquery")
    //with set we store in all the branch, restart the brach, remplace data
    .set({
        nombre:"Armando Tapia",
        edad:"15",
        sexo:"muchisimo"
         })
});

// Read from database
firebase.database().ref("ramaPruebaJquery")
.on("child_added",function(s){
    var user = s.val();
    //without a bucle pepe will do it for every element 
    $('#root').append("<img width='100px' src='"+ user.foto+"' /> ");

})
