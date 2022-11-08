	$('#inirun').click(function() {

		$.ajax({
			url: "libs/php/findnearbyplacename.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#sellat').val(),
				lng: $('#sellng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

                    $('#txtForDistance').html(result['data'][0]['distance']);
                    $('#txtForLat').html(result['data'][0]['lat']);
                    $('#txtCountryname').html(result['data'][0]['countryName']);
                    $('#populated').html(result['data'][0]['fcodeName']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});
	
	$('#start').click(function() {

		$.ajax({
			url: "libs/php/findnearbypostalcode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postalcode: $('#selPcode').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
  
					$('#txtlng').html(result['data'][0]['lng']);
                    $('#txtLat').html(result['data'][0]['lat']);
                    $('#txtDistance').html(result['data'][0]['distance']);
                    $('#txtplacename').html(result['data'][0]['placeName']);
					$('#txtcountrycode').html(result['data'][0]['countryCode']);


				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});
	
	$('#startrun').click(function() {

		$.ajax({
			url: "libs/php/postalcodesearch.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postalcode: $('#selcode').val(),
				country: $('#selcountry').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
  
					$('#txtname').html(result['data'][0]['adminName1']);
                    $('#txtlong').html(result['data'][0]['lng']);
                    $('#txtlati').html(result['data'][0]['lat']);
                    $('#txtadminName').html(result['data'][0]['placeName']);


				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});	
