/**
 * Created by richardgong on 1/25/16.
 */

var path = require('path');
var pa = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log(pa);
