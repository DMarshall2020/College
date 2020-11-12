// NAME:  Drew Marshall
// STUDENT ID:  20011394
// COURSE:  NQ Computing with Cyber Security
// DATE:  
// VERSION:



function getUserInput(){

    var length = document.getElementById("widthInput").value;
    var width = document.getElementById("lengthInput").value;
    
    if(length <= 0 ||  width <=0){
        documnent.write("this is not valid")
    }
    else{

        var result = calculateArea(length, width);
        displayResult(result);

    }
    
}


function calculateArea(len, wid){

    var area = len * wid;

    return area;

}

function displayResult(areaResult){
document.getElementByID("showResult").innerHTML = areaResult;


}