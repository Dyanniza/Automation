//var sum simple callbacks
var expect= require('chai').expect;
var sum= function(num1,num2){
	return num1+num2;
};
var mult= function(num1,num2){
	return num1*num2;
};
var calc= function(callback){
	return callback;
}
var div= function(n1,n2,callback){
	setTimeout(function(){
		callback(n1/n2,':division');
	},2500);
};
/*
console.log(calc(sum(1,2)));
console.log(calc(mult(1,2)));

div(1,2,function(res){
	console.log(res);
});
*/

describe('Simplest calculator',function(){
	this.timeout(2600);
	this.slow(3000);

	it('division',function(done){
		div(1,2,function(res,msg){
			console.log(res,msg);
			expect(res).to.equal(0.5);
			done();
		});
	});

});