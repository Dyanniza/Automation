//secuencia de primos y su diferencia
var expect = require('chai').expect;

var getPrimo = function(nro){
	var primos = [];
	for (var i = 2 ; i <= 0; i++) {
		primos.push();
	};
	return primos ;
};

var getSecPrimo = function(n){
	var sec = [];
	var primos = [2,3,5,7,11,13,17,19,23,29];
	
	
	if (n>=1){
		for (var i = 1; i <= n; i++) {
			//sec [i] = getPrimo(i);
			sec.push(primos[i-1]);

			
			if (i%3==0)
			{
				var resta = sec[i]-sec[i-1];
				sec.push(resta);
				
			}	

		}
		return sec;
	}
	else
		return 'error';
	
};








