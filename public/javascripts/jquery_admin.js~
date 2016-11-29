
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
 

for(i=0;i<tabcontent.length; i++){
     tabcontent[i].style.display ="none";
}
tablinks = document.getElementsByClassName("tablinks");

for(i=0;i<tablinks.length; i++){
tablinks[i].className=tablinks[i].className.replace("active","");
}

document.getElementById('home').style.display = "block";
evt.currentTarget.className += "active";
//handling sections
function openSection(evt, cityName){

   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
 
   for(i=0;i<tabcontent.length; i++){
        tabcontent[i].style.display ="none";
   }
    tablinks = document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length; i++){
        tablinks[i].className=tablinks[i].className.replace("active","");
   }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}

//calling ajax for method DELETE
function getAlertDelete(name, idUser){  
  $('#d_name').text("Esta seguro de Eliminar a "+name+"? ");  
  $('#d_id').val(idUser); 
}
function deleteOneUser(evt, idUser){ 
   var idUser = $('#d_id').val(); 
   $.ajax({
     url: '/admin/'+idUser,
     type: 'DELETE',
      success: function(result){
         if(result.success){
            alert("Exito al Eliminar");           
         }
         else {
           alert("Ocurrio un ERROR ");
         }
         $('#myModal2').modal('hide');

      },
      error: function(){
        console.log("process error");
      }

  });
}

function getDataUser(evt, idUser){
  
   $.ajax({
     url: '/admin/'+idUser,
     type: 'GET',
      success: function(result){      
        $('#id').val(result.data._id);
        $('#name').val(result.data.name);
        $('#lastname').val(result.data.lastname);
        $('#email').val(result.data.email);
        $('#phone').val(result.data.phone);
        $('#dni').val(result.data.dni);
      }
  });
}

function updateOneUser(){
    
   var idUser = $('#id').val();
       
   $.ajax({
     url: '/admin/'+idUser,
     type: 'PUT',
     dataType: "json",
     data: {
        name : $('#name').val(),
        lastname : $('#lastname').val(),
        email : $('#email').val(),
        phone : $('#phone').val(),
        dni: $('#dni').val() 
      },
     
      success: function(result){
         if(result.success){
            alert("Exito "+ result.data.name);           
         }
         else {
           alert("ocurrio algun ERROR, vuelva a intentarlo ");
         }
         $('#myModal').modal('hide');

      },
      error: function(){
        console.log("process error");
      }
  });
}





