$(document).ready(function(){
	$('label[for=myinput]').change(function(){
		if(this.value =='Zawgyi'){
			$('#myinput').css("font-family", "Zawgyi-One");
			console.log("Input is Zawgyi-One");
		}
		else if(this.value == 'Unicode'){
			$('#myinput').css("font-family", "Pyidaungsu");
		}
		else if(this.value == 'WinMyanmar'){
			$('#myinput').css("font-family", "win_innwaregular");
		}
	});
	$('label[for=output]').change(function(){
		if(this.value == 'Zawgyi'){
			$('#output').css("font-family", "Zawgyi-One");
			console.log("Output is ZawGyi-One");
		}
		else if(this.value == 'Unicode'){
			$('#output').css("font-family", "Pyidaungsu");
		}
		else if(this.value == 'WinMyanmar'){
			$('#output').css("font-family", "win_innwaregular");
		}
	});
});


