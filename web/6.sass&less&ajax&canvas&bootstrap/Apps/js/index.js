/**
 * Created by cui on 2015/12/6.
 */
$(document).ready(function(){
    $.ajax({
        url : "res/data.json",
        type : "get",
        success : function(callback){
            console.log(callback);
        }
    });
});