//secuencia de primos y su diferencia
//var expect = require('chai').expect;

var getPrimo = function(nro){
	var primos = [];
	var cap = nro;
	for (var i = 1; i < cap ; i++) {
	    var num = isPrime(i);
	    if (num) {
	        primos.push(i);
	    }
	    if (primos.length < nro) {
	       cap++;
	    }
	}
	return primos ;
};

function isPrime(num) {
  var prime = num != 1;
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			prime = false;
			break;
		}
	}
	return prime;
};

var getSecPrimos = function(n){
	var sec = [];
	var primos = getPrimo(n+1);
	var counter = 0;	

	if (n>=1){
		var i =1;
		var counter;	
		if(n==1)
			sec.push(primos[n-1]);
		while (i < n)
		{	
			counter= i-1;			
			sec.push(primos[counter]);
			i++;					
			if (i%3==0)
			{
				var resta = sec[counter]-sec[counter-1];
				sec.push(resta);
			    counter = i-1;			    	   
			}	
			
		}
		return sec;
	}
	else
		return 'error';	
};

describe (' Generate sec of primos',function(){
	var primArray = [{n1:1,r:[2]},{n1:3,r:[2,3,1]},
					 {n1:5,r:[2,3,1,5,7]}, {n1:6,r:[2,3,1,5,7,11,2]},];

	describe('For n=1, n=3, n=5,n=6',function(){
		primArray.forEach(function(element){
			var n1 = element.n1;
			var res = element.r;
			it('#getSecPrimos ('+n1+')='+res,function(){
			expect(getSecPrimos(n1)).to.eql(res);
			});
		});
	});
	var invalidArray = [{n1:-1,r:'error'},{n1:undefined,r:'error'}];

	describe('For n=-1, n=undefined',function(){
		invalidArray.forEach(function(element){
			var n1 = element.n1;
			var res = element.r;
			it('#getSecPrimos ('+n1+')='+res,function(){
			expect(getSecPrimos(n1)).to.eql(res);
			});
		});
	});
    
});