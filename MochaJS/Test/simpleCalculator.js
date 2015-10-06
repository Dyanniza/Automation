//simple calculator
var expect = require('chai').expect;

var sum = function(num1,num2){
	return num1+num2;
};

var multiply = function(num1,num2){
	return num1*num2;
};

describe('SimpleCalculator',function(){
	//literal object 
	var sumObj = {
		n1:1,
		n2:2,
		r:3
	};


	//it('#sum',function(){
	//it('#sum num1=1 + num2=2 and res=3',function(){
	it('#sum (1,2)=3',function(){
		expect(sum(sumObj.n1,sumObj.n2)).to.equal(sumObj.r);
	});

	it('#sum (1,222)=223',function(){
		expect(sum(1,222)).to.equal(223);
	});

	it('#sum (0,0)=0',function(){
		expect(sum(0,0)).to.equal(0);
	});

	it('#multiply',function(){
		expect(multiply(3,2)).to.equal(6);
	});


});


