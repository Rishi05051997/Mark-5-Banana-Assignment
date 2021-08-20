var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var divOutput = document.querySelector("#output");

var urlTranslate = 'https://api.funtranslations.com/translate/yoda.json';

function translationUrl(text) {
    debugger
    return urlTranslate + "?" + "text=" + text
};

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("Something went wrong! Try again after some time ");
// }

  clickHandler = async() => {
    
    var inputText = textInput.value; //input

    //calling server for response
    debugger;
    fetch(translationUrl(inputText))
        
        .then(response => response.json())
        .then(json => {
            console.log(json)
            var translatedText = json.contents.translated;
            divOutput.value = translatedText // output
        })
    //     .catch(errorHandler);
    // debugger;
    // const fetcheddata = await fetch(translationUrl(inputText))
    // const data = await fetcheddata.json();
    // console.log(data)
};

btnTranslate.addEventListener("click", clickHandler)