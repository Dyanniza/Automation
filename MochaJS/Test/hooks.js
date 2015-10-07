//hooks
describe('Suite 1.0', function(){
	before(function(){
		console.log('Before Test 1.0');
	});
	after(function(){
		console.log('After Test 1.0');
	});

	beforeEach(function(){
		console.log('Before Each Suite 1.0');
	});

	afterEach(function(){
		console.log('After Each Suite 1.0');
	});

	it('Test 1.0',function(){
		console.log('Test 1.0');
	});


	describe('Suite 1.1',function(){
		beforeEach(function(){
			console.log('Before Each Suite 1.1');
		});

		afterEach(function(){
			console.log('After Each Suite 1.1');
		});


		it('Test 1.1',function(){
		console.log('Test 1.1');
		});
	});

})