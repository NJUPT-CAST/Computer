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