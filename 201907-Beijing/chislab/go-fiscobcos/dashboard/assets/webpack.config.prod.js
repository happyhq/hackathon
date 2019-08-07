// Copyright 2018 The go-fiscobcos Authors
// This file is part of the go-fiscobcos library.
//
// The go-fiscobcos library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// The go-fiscobcos library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the go-fiscobcos library. If not, see <http://www.gnu.org/licenses/>.

const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
	mode:         'production',
	devtool:      'source-map',
	optimization: {
		minimize:     true,
		namedModules: true, // Module names instead of numbers - resolves the large diff problem.
		minimizer:    [
			new TerserPlugin({
				cache:         true,
				parallel:      true,
				sourceMap:     true,
				terserOptions: {
					output: {
						comments: false,
						beautify: true,
					},
				},
			}),
		],
	},
});
