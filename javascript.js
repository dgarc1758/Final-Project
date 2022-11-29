function clk(val){
    document.getElementsById("screen").value=document.getElementsById("screen").value+val;

}

function clrdisp(){
    document.getElementById("screen").value=""
}

function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result
}