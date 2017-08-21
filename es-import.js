const rollup = require( 'rollup' ),
			path = require('path')

module.exports = function importModule(file) {
	const input = path.resolve(path.dirname(module.parent.filename), file)
	return rollup.rollup({input})
		.then(bundle => bundle.generate({format: 'cjs'}))
		.then(getExports)
}

function getExports(codeMap) {
	var m = {exports: {}}
	Function('module', 'exports', codeMap.code)(m, m.exports)
	return m.exports
}
