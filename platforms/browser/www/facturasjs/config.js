$(document).ready(function(){
alert("asdfasd");
  $.ajax({
    url:"http://localhost:8766/contester/test_service",
    type:"GET",
    dataType:"json",
    success:function(data){
      alert(data);
    }
  });

});
