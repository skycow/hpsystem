$(function(){
	const MAX_PLAYERS=2;
	var curTime=1;
	var myTimer;
	var dTime=60000
	$(".navbar-brand").click(function(event){
	  event.preventDefault()
		alert(devices)
		/*for testing only*/
		if(dTime == 1000){
			dTime = 60000
		}else {
			dTime = 1000
		}
	});
	$("select").mouseover(function(){
		//alert("hit")
		//$.get("http://localhost:3000/devices",function(data){
			console.log("request")
			var tempSave = $("select").val()
			$("select").empty()
			for(i=2; i<=devices;i++){
				$("#playerInput").append('<option>'+i+'</option>')
			}
			$("select").val(tempSave)
		//})
	})
	$(".settingsBut").click(function(event){
	  event.preventDefault()
	  $(".results").hide();
		$(".logs").hide()
	  $(".settings").show();
	});
	$(".resultsBut").click(function(event){
	  event.preventDefault()
		$("#resultBod").empty()
		for(i=1; i<=parseInt($("#playerInput").val());i++){
			$("#resultBod").append('<tr><td>Player '+i+'</td>'+
			  ('<td>'+i+'</td>').repeat(4)+'</tr>')
		}
	  $(".settings").hide();
		$(".logs").hide()
	  $(".results").show();
	});
	$(".logsBut").click(function(event){
	  event.preventDefault()
		$("#logsBod").empty()
		//$.get("http://localhost:3000",function(data){
			for(it in db){
				$("#logsBod").append('<tr><td>Player '+db[it].id+'</td>'+
				'<td>'+db[it].type+'</td>'+'<td>'+db[it].time+'</td>'+'</tr>')
			}
		//})
	  $(".settings").hide();
		$(".results").hide()
	  $(".logs").show();
	});
	$("button").click(function(event){
		if($("button").html() == "Start"){
			$("#timeStatus").html($("#timeInput").val()+" minutes remaining");
			$('.progress-bar').css('width', 0+'%').addClass('progress-bar-striped active')
			myTimer = setInterval(function(){
				$("#timeStatus").html($("#timeInput").val()-curTime+" minutes remaining");
				valeur = (curTime)/$("#timeInput").val()*100
				$('.progress-bar').css('width', valeur+'%')
			  curTime+=1;
				if(parseInt($("#timeInput").val())+1 == curTime){
					curTime = 1;
					clearInterval(myTimer);
					$("#timeStatus").html("No game running.");
					$("button").addClass("btn-success").removeClass("btn-danger")
					$("button").html("Start")
					$("#playerInput").removeAttr('disabled');
					$("#timeInput").removeAttr('disabled');
					$('.progress-bar').removeClass('progress-bar-striped active')
				}


		 }, dTime);
		}else if($("button").html() == "Stop") {
			if(myTimer){
				clearInterval(myTimer);
				curTime=1
			}
			$('.progress-bar').css('width', 100+'%').removeClass('progress-bar-striped active')
		}
	});
	$("button").click(function(event){
		if($("button").html() == "Start"){
			$("button").addClass("btn-danger").removeClass("btn-success")
			$("button").html("Stop")
			$("#playerInput").attr('disabled', 'disabled');
			$("#timeInput").attr('disabled', 'disabled');
			//$("#timeStatus").html($("#timeInput").val()+" minutes remaining");
		}else if($("button").html() == "Stop") {
			$("button").addClass("btn-success").removeClass("btn-danger")
			$("button").html("Start")
			$("#timeStatus").html("No game running.");
			$("#playerInput").removeAttr('disabled');
			$("#timeInput").removeAttr('disabled');
		}
	});
	/*for(i=2; i<=MAX_PLAYERS;i++){
		$("#playerInput").append('<option>'+i+'</option>')
	}*/

	$("#playerInput").change(function(){
		$("#resultBod").empty()
		for(i=1; i<=parseInt($("#playerInput").val());i++){
			$("#resultBod").append('<tr><td>Player '+i+'</td>'+
			  ('<td>'+i+'</td>').repeat(4)+'</tr>')
		}
	})
}
)
