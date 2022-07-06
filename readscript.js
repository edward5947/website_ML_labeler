function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    
    // .open will NOT return a value but simply returns undefined in async mode so use a callback
    callback(xobj.responseText);
    
    }
    }
    xobj.send(null);
    
    }
    
function actual_load(){
    loadJSON(function(response){
        console.log(response["firstName"]);
        console.log(response.lastName);

        jsonresponse = JSON.parse(response);
        console.log(jsonresponse.firstName);
    })
}