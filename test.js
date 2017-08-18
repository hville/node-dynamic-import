var esImport = require('./es-import')

Promise.all([
	esImport('./test-default'),
	esImport('./test-named')
]).then(function(arr) {
	var plus2 = arr[0],
			times3 = arr[1].times3,
			result = times3(plus2(1))
	if (result !== 9) throw Error('import failed')
	else console.log('TEST PASSED')
}, function(err) {
	throw Error(err)
})
