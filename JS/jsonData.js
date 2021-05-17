var requestUrl = 'https://raw.githubusercontent.com/Symchowicz/Bassbrands/main/JS/bassData.json';

var request = new XMLHttpRequest();

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function (){
    var result = request.response;
    console.log(result);
}
