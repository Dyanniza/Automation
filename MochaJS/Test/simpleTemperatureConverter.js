// Simple temperature converter
var expect = require('chai').expect;
var farToCelsius = function(far){
	return (((far-32)*5)/9).toFixed(2);
	//(F - 32) * 5/9 
};
var farToKelvin = function(far){
	return ((((far-32)*5)/9)-273.15).toFixed(2);
	//(F - 32) * 5/9 + 273.15 
};
var celToFahr = function(cel){
	return (((cel*9)/5)+32).toFixed(2);
	//(C * 9/5) + 32 
};
var celToKelvin = function(cel){
	return (cel+273.15);
	//C + 273.15 
};
var kelvinToFaren = function(k){
	return (((k - 273.15) * 9/5) + 32).toFixed(2);	  
};
var kelvinToCelsius = function(k){
	return (k - 273.15); 
	//K - 273.15 
};

describe('SimpleTemperatureConverter',function(){
	

	var farToCelArray = [{n1:100,r:37.78},{n1:32,r:0.00},{n1:0,r:-17.78},];
	var farToKelArray = [{n1:100,r:-235.37},{n1:32,r:-273.15},{n1:0,r:-290.93},];
	var celToFarArray = [{n1:100,r:212},{n1:32,r:89.60},{n1:0,r:32},];
	var celToKelArray = [{n1:100,r:373.15},{n1:-273.15,r:0.00},{n1:0,r:273.15},];

	
	farToCelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);
		it('#farToCelsius ('+n1+')='+res,function(){
		expect(farToCelsius(n1)).to.equal(resAround);
		});
	});	
	
	
	farToKelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);
		it('#farToKelvin ('+n1+')='+res,function(){
		expect(farToKelvin(n1)).to.equal(resAround);
		});
	});	
	celToFarArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);
		it('#celToFahr ('+n1+')='+res,function(){
		expect(celToFahr(n1)).to.equal(resAround);
		});
	});	

	celToKelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		it('#celToKelvin ('+n1+')='+res,function(){
		expect(celToKelvin(n1)).to.equal(res);
		});
	});	
});



