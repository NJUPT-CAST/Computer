/**
 * Created by cui on 2015/12/6.
 */
$(document).ready(function(){
    var str = "";

    str = $("h1").html();
    console.log(str);

    $.ajax({
        url : "res/data.json",
        type : "get",
        success : function(callback){
            if(callback.status == "success"){
                var name = callback.msg.name;
                str = str + name;
                $("h1").html(str);
            } else {
                str = str + "世界";
                $("h1").html(str);
            }
        },
        error : function(){

        }
    });
});