var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(input){
    var encodedURI = encodeURI(input);
    return `${serverUrl}?text=${input}`;
}

function clickHandler(){
    // outputDiv.innerText = `ajaaajajajjaaa ${txtInput.value}`;
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedtext = json.contents.text;
        outputDiv.innerText = translatedtext;
        // console.log(json)
    })
    .catch(() => alert("some error occured"))
};



btnTranslate.addEventListener("click",clickHandler);
