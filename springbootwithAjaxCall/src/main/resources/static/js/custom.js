$(function(){
var countryOptions;
var stateOptions;
var districtOptions;

$.getJSON('/js/country.json',function(result){
	$.each(result,function(i,country){
		countryOptions+="<option value='"+country.code+"'>"+country.name+"</option>"
	});
	$("#country").html(countryOptions);
});

$("#country").change(function(){
	if($(this).val()=='IN')
		{
		$.getJSON("/js/state.json",function(result){
           $.each(result,function(stateCode,stateName){
        	   stateOptions+="<option value='"+stateCode+"'>"+stateName+"</option>";  
           });
           $("#state").html(stateOptions);
		});
		}
});
$("#state").change(function(){
	if($(this).val()=='MH'){
		$.getJSON("/js/district.json",function(result){
	 		$.each(result,function(i,district){
	 			districtOptions+="<option value='"+district.name+"'>"+district.name+"</option>"			
			});
	 		$("#district").html(districtOptions);
		});
	}
});
});












