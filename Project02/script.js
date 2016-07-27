$('document').ready(function(){
	
	var initialAnimationRemoval = "yes";
	initialAnimationRemoval = "no";	
	$('.settingActivator').click(function() {
		if(initialAnimationRemoval == "yes"){
			$('.closingAnimation').removeClass('downMove');
			$('.closingAnimation').removeClass('downMove');
			$('.closingAnimation').removeClass('settingsVanishes');
			$('.closingAnimation').removeClass('appears');
			$('.closingAnimation').removeClass('fromBack_toNext');
			
			initialAnimationRemoval = "no";
			
			$('.notHidden').toggle();
		} else {
					
			$('.closingAnimation').addClass('downMove');
			$('.closingAnimation').addClass('downMove');
			$('.closingAnimation').addClass('settingsVanishes');
			$('.closingAnimation').addClass('appears');
			$('.closingAnimation').addClass('fromBack_toNext');
			
			$('.notHidden').toggle();
		}
		
		
	});
	
	
	
	
	
	
	
	
	
	
	/* For Mantra */
	var integerMantra = 1;
	$('.rightMantra_click').click(function(){
		if(integerMantra == 1){
			$('.leftMantra').html('Unselect');
			$('.middleMantra').html('Relax (selected)');
			$('.rightMantra').html('Healing');
			
			integerMantra = 2;
		} else if(integerMantra == 2){
			$('.leftMantra').html('Relax');
			$('.middleMantra').html('Healing (selected)');
			$('.rightMantra').html('Love');
			
			integerMantra = 3;
		} else if(integerMantra == 3){
			$('.leftMantra').html('Healing');
			$('.middleMantra').html('Love (selected)');
			$('.rightMantra').html('Happyness');
			
			integerMantra = 4;
		} else if(integerMantra == 4){
			$('.leftMantra').html('Love');
			$('.middleMantra').html('Happyness (selected)');
			$('.rightMantra').html('Sleep');
			
			integerMantra = 5;
		} else if(integerMantra == 5){
			$('.leftMantra').html('Happyness');
			$('.middleMantra').html('Sleep (selected)');
			$('.rightMantra').html('Unselect');
			
			integerMantra = 6;
		} else {
			$('.leftMantra').html('Sleep');
			$('.middleMantra').html('Select Mantra');
			$('.rightMantra').html('Relax');
			
			integerMantra = 1;
		}
	});
	$('.leftMantra_click').click(function(){
		if(integerMantra == 1){
			$('.leftMantra').html('Happyness');
			$('.middleMantra').html('Sleep (selected)');
			$('.rightMantra').html('Unselect');
			
			integerMantra = 6;
		} else if(integerMantra == 6){
			$('.leftMantra').html('Love');
			$('.middleMantra').html('Happyness (selected)');
			$('.rightMantra').html('Sleep');
			
			integerMantra = 5;
		} else if(integerMantra == 5){
			$('.leftMantra').html('Healing');
			$('.middleMantra').html('Love (selected)');
			$('.rightMantra').html('Happyness');
			
			integerMantra = 4;
		} else if(integerMantra == 4){
			$('.leftMantra').html('Relax');
			$('.middleMantra').html('Healing (selected)');
			$('.rightMantra').html('Love');
			
			integerMantra = 3;
		} else if(integerMantra == 3){
			$('.leftMantra').html('Unselect');
			$('.middleMantra').html('Relax (selected)');
			$('.rightMantra').html('Healing');
			
			integerMantra = 2;
		} else {
			$('.leftMantra').html('Sleep');
			$('.middleMantra').html('Select Mantra');
			$('.rightMantra').html('Relax');
			
			integerMantra = 1;
		}
	});
	
	/* For Timimg */
	var integerTiming = 1;
	$('.rightTiming_click').click(function(){
		if(integerTiming == 1){
			$('.leftTiming').html('Unselect');
			$('.middleTiming').html('5 min (selected)');
			$('.rightTiming').html('15 min');
			
			integerTiming = 2;
		} else if(integerTiming == 2){
			$('.leftTiming').html('5 min');
			$('.middleTiming').html('15 min (selected)');
			$('.rightTiming').html('30 min');
			
			integerTiming = 3;
		} else if(integerTiming == 3){
			$('.leftTiming').html('15 min');
			$('.middleTiming').html('30 min (selected)');
			$('.rightTiming').html('45 min');
			
			integerTiming = 4;
		} else if(integerTiming == 4){
			$('.leftTiming').html('30 min');
			$('.middleTiming').html('45 min (selected)');
			$('.rightTiming').html('60 min');
			
			integerTiming = 5;
		} else if(integerTiming == 5){
			$('.leftTiming').html('45 min');
			$('.middleTiming').html('60 min (selected)');
			$('.rightTiming').html('Unselect');
			
			integerTiming = 6;
		} else {
			$('.leftTiming').html('60 min');
			$('.middleTiming').html('Select Mantra');
			$('.rightTiming').html('5 min');
			
			integerTiming = 1;
		}
	});
	$('.leftTiming_click').click(function(){
		if(integerTiming == 1){
			$('.leftTiming').html('45 min');
			$('.middleTiming').html('60 min (selected)');
			$('.rightTiming').html('Unselect');
			
			integerTiming = 6;
		} else if(integerTiming == 6){
			$('.leftTiming').html('30 min');
			$('.middleTiming').html('45 min (selected)');
			$('.rightTiming').html('60 min');
			
			integerTiming = 5;
		} else if(integerTiming == 5){
			$('.leftTiming').html('15 min');
			$('.middleTiming').html('30 min (selected)');
			$('.rightTiming').html('45 min');
			
			integerTiming = 4;
		} else if(integerTiming == 4){
			$('.leftTiming').html('5 min');
			$('.middleTiming').html('15 min (selected)');
			$('.rightTiming').html('30 min');
			
			integerTiming = 3;
		} else if(integerTiming == 3){
			$('.leftTiming').html('Unselect');
			$('.middleTiming').html('5 min (selected)');
			$('.rightTiming').html('15 min');
			
			integerTiming = 2;
		} else {
			$('.leftTiming').html('60 min');
			$('.middleTiming').html('Select Timing');
			$('.rightTiming').html('5 min');
			
			integerTiming = 1;
		}
	});
});