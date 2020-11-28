
// Functions to Log User In
function displayUserId(){
    if (userId != undefined){
        document.getElementById('user-id').innerHTML = userId
    }
}

function clientAction(destination,method){
    fetch(url + destination, { method: method,
        mode: 'cors',
        credentials: 'include'
    }).then(handleResponse)
        .then(showMessage)
        .catch(function (err) {
            showMessage(err.message);
        });
}

function handleResponse(res) {
    return res.ok
        ? res.json().then((data) => data)
        : Promise.reject(new Error('Unexpected response'));
}

function showMessage(res) {
    if (res.userId != undefined && userId == undefined){
        userId = res.userId
    } else {
        console.log(`\n${res}`);
    }
}


function checkConsent(){
    if (collectData == undefined) {
        let consentBox = document.getElementById("consent");
        collectData = consentBox.checked;
    }
    if (collectData) {

        setCookie('prevSettings',[currentSlide,currentDeck])

        submitForm();
        if ((currentSlide == decks[currentDeck].slides.length - 1) && (currentDeck != decks.length - 1))
        {
            changeDeck(1);
        } else {
            changeSlide(1);
        }
    } else {
        if (numTries == 0) {
            let buttons = document.getElementById('disclaimer').getElementsByTagName("button")
            for (let button of buttons) {
                button.style.display = 'none';
            }
            document.getElementById('disclaimer-form').style.display = 'none';
            document.getElementById('warning-message').innerHTML = `
<h3>Are you sure you want to move forward without data collection?</h3>
<div id="disclaimer-buttons">
    <a onclick="changeDeck(1); numTries = 0;" id="button1" class="black">Yes</a>
    <a onclick="unhideForm()" id="button2" class="black">No</a>
</div>
`;
            numTries++;
        }
    }
}

function unhideForm(){
    let buttons = document.getElementById('disclaimer').getElementsByTagName("button")
    for (let button of buttons) {
        button.style.display = 'none';
    }
    document.getElementById('disclaimer-form').style.display = 'block';
    document.getElementById('warning-message').innerHTML = '';
    insertProgressButton();
    numTries = 0;
}

function submitForm() {
//         /* get form on current slide */
//         if (/* there is a form */) {
//
//         if (/*user id is not already in mongodb */) {
//             /* create new document in mongodb */
//         } else {
//             /* update existing document ONLY IF FORM IS NOT EMPTY */
//         }
// }
}

// Setting Cookie on Client

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function resetSettings(){
    let targetSlide = cookie[0]
    let targetDeck = cookie[0]

    while (targetDeck != currentDeck && targetSlide != currentSlide){

    }

}
