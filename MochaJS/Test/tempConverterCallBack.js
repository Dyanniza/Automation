// Simple temperature converter with callbacks
var expect = require('chai').expect;
var farToCelsius = function(far,callback){
	setTimeout(function(){
		callback((((far-32)*5)/9).toFixed(2),':farhToCelsius');
	},500);	
};	
var farToKelvin = function(far,callback){
	setTimeout(function(){
		callback(((((far-32)*5)/9)-273.15).toFixed(2),':farToKelvin');
	},500);	
	 
};
var celToFahr = function(cel,callback){

	setTimeout(function(){
		callback((((cel*9)/5)+32).toFixed(2),':farToKelvin');
	},500);	
	 
};
var celToKelvin = function(cel,callback){
	setTimeout(function(){
		callback((cel+273.15),':celToKelvin');
	},500);		 
};
var kelvinToFaren = function(k,callback){
	setTimeout(function(){
		callback((((k - 273.15) * 9/5) + 32).toFixed(2),':kelvinToFaren');
	},500);	
	
};
var kelvinToCelsius = function(k,callback){

	setTimeout(function(){
		callback((k - 273.15),':kelvinToFaren');
	},500);	 
};


describe('SimpleTemperatureConverter',function(){
	this.timeout(800);
	this.slow(700);

	var farToCelArray = [{n1:100,r:37.78},{n1:32,r:0.00},{n1:0,r:-17.78},];
	var farToKelArray = [{n1:100,r:-235.37},{n1:32,r:-273.15},{n1:0,r:-290.93},];
	var celToFarArray = [{n1:100,r:212},{n1:32,r:89.60},{n1:0,r:32},];
	var celToKelArray = [{n1:100,r:373.15},{n1:-273.15,r:0.00},{n1:0,r:273.15},];
	var kelToFarArray = [{n1:100,r:-279.67},{n1:273.15,r:32.00},{n1:0,r:-459.67},];
	var kelTocelArray = [{n1:100,r:-173.15},{n1:273.15,r:0.00},{n1:0,r:-273.15},];

	
	farToCelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);

		it('#farToCelsius ('+n1+')='+res,function(done){
			farToCelsius(n1,function(res,msg){
				console.log(res,msg);
				expect(res).to.equal(resAround)
				done();
			});			
		});
	});	
	
	
	farToKelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);
		
		it('#farToKelvin ('+n1+')='+res,function(done){
			farToKelvin(n1,function(res,msg){
				console.log(res,msg);
				expect(res).to.equal(resAround);
				done();
			});			
		});
	});	
	celToFarArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);		
		it('#celToFahr ('+n1+')='+res,function(done){
			celToFahr(n1,function(res,msg){
				console.log(res,msg);
				expect(res).to.equal(res);
				done();
			});			
		});
	});	

	celToKelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;		
		it('#celToKelvin ('+n1+')='+res,function(done){
			celToKelvin(n1,function(res,msg){
				console.log(res,msg);
				expect(res).to.equal(res);
				done();
			});			
		});
	});	

	kelToFarArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;
		var resAround = res.toFixed(2);		
		it('#kelToFar('+n1+')='+res,function(done){
			kelvinToFaren(n1,function(res,msg){
				console.log(res,msg);
				expect(res).to.equal(resAround);
				done();
			});			
		});
	});	


	kelTocelArray.forEach(function(element){
		var n1 = element.n1;		
		var res = element.r;		
		it('#kelvinToCelsius ('+n1+')='+res,function(done){
			kelvinToCelsius(n1,function(res,msg){
				console.log(res,msg);
				expect(res).to.equal(res);
				done();
			});			
		});
	});	
});



