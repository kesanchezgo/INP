
var filter=$("#filter").val();
var entry =$("#entry").val();
if(!entry) entry = "_";

$("#list-teams").load("/team/listTeams/"+filter+"/"+entry);

function clickFilter(){
  var filter=$("#filter").val();
  var entry =$("#entry").val();
  if(!entry & filter != "Todos"){
     alert("Ingrese una consulta");
     return;
  }
  $("#list-teams").load("/team/listTeams/"+filter+"/"+entry);  

}
