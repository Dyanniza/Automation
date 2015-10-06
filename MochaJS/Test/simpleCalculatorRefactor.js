//simple calculator
var expect = require('chai').expect;

var sum = function(num1,num2){
	return num1+num2;
};
var substract = function(num1,num2){
	return num1-num2;
};

var multiply = function(num1,num2){
	return num1*num2;
};
var divide = function(num1,num2){	
	return num1/num2;
};

describe('SimpleCalculator',function(){
	

	var sumArray = [{n1:1,n2:2,r:3},{n1:1,n2:222,r:223},{n1:0,n2:0,r:0},];
	var subArray = [{n1:1,n2:2,r:-1},{n1:22,n2:2,r:20},{n1:0,n2:0,r:0},];
	var multArray = [{n1:1,n2:2,r:2},{n1:1,n2:222,r:222},{n1:0,n2:0,r:0},];
	var divArray = [{n1:1,n2:2,r:0.5},{n1:10,n2:2,r:5},{n1:21,n2:1,r:21},];

	sumArray.forEach(function(element){
		var n1 = element.n1;
		var n2 = element.n2;
		var res = element.r;
		it('#sum ('+n1+','+n2+')='+res,function(){
		expect(sum(n1,n2)).to.equal(res);
		});
	});

	subArray.forEach(function(element){
		var n1 = element.n1;
		var n2 = element.n2;
		var result = element.r;
		it('#res ('+n1+','+n2+')='+result,function(){
		expect(substract(n1,n2)).to.equal(result);
		});
	});
	multArray.forEach(function(element){
		var n1 = element.n1;
		var n2 = element.n2;
		var result = element.r;
		it('#multiply ('+n1+','+n2+')='+result,function(){
		expect(multiply(n1,n2)).to.equal(result);
		});
	});

	divArray.forEach(function(element){
		var n1 = element.n1;
		var n2 = element.n2;
		var result = element.r;
		it('#divide ('+n1+','+n2+')='+result,function(){
		expect(divide(n1,n2)).to.equal(result);
		});
	});


});


