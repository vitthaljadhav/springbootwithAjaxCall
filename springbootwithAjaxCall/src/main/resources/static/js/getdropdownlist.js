$( document ).ready(function() {
  
  // GET REQUEST
  $("#clickId").click(function(event){
	  event.preventDefault();
	  ajaxCallGetFirstNameList();
  });
	
	function ajaxCallGetFirstNameList(){
		$.ajax({
			 type : "GET",
		      url : window.location + "api/customer/getAllFirstNameList.htm",
			
			success : function(result){
				$("#dropdownlist").empty();
				
					console.log("Success: ", result);
					alert(result);
					$("#country").append(result);
			},
			error:function(e){
				  $("#getResultDiv").html("<strong>Error</strong>");
				  console.log("ERROR: ", e)
				  }
		});
	}
})