//node-es-module-loader 3044 files, 1079 folders, 5.37MB
//node-dynamic-import     49 files,    9 folders, 3.69MB

var rollup = require( 'rollup' ),
		nodePath = require('path')

module.exports = function importModule(path) {
	return rollup.rollup({
		entry: nodePath.resolve(nodePath.dirname(module.parent.filename), path)
	}).then(getExports)
}

function getExports(bundle) {
	var m = {exports: {}}
	Function('module', 'exports', bundle.generate({format: 'cjs'}).code)(m, m.exports)
	return m.exports
}
