/**
 * Created by cuitianhao on 16/4/7.
 */

//11111
(function() {

    var a = b = 5;

})();

console.log(b);


//11111
function test() {

    console.log(a);

    console.log(foo());

    var a = 1;

    function foo() {

        return 2;

    }}

test();

//11111
var fullname = 'John Doe';

var obj = {

    fullname: 'Colin Ihrig',

    prop: {

        fullname: 'Aurelio De Rosa',

        getFullname: function() {

            return this.fullname;

        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//1.JS从前端到后端 -- nodeJS
//2.从 nodeJS 衍生出来的一系列前端构建工具 -- grunt gulp webpack
//3.新时代的前端框架 react angular vue