$("#cus").click(function(){
    $("#homepage").hide();
    $("#datapage").hide();
    $("#customer").hide();
    $("#customer").show();
});
$("#dat").click(function(){
    $("#homepage").hide();
    $("#customer").hide();
    $("#estatepage").hide();
    $("#datapage").show();
});
$("#rea").click(function(){
    $("#homepage").hide();
    $("#datapage").hide();
    $("#customer").hide();
    $("#estatepage").show();
});
$("#hom").click(function(){
    $("#homepage").show();
    $("#estatepage").hide();
    $("#datapage").hide();
    $("#customer").hide();
});