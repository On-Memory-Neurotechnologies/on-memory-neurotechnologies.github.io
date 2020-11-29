
// Functions to Log User In
function displayUserId(){
    if (userId != undefined){
        document.getElementById('user-id').innerHTML = userId
    }
}

function clientAction(destination,method,body=JSON.stringify({'default':''})){
    fetch(url + destination, { method: method,
        mode: 'cors',
        credentials: 'include',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: body,
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
    setCookie('prevSettings',[currentDeck,currentSlide], 30)

    if (collectData == undefined) {
            let consentBox = document.getElementById("consent");
            collectData = consentBox.checked;
            setCookie('consent',collectData,30);
    }

    if (collectData) {
        submitForm();
    }
    else if (numTries == 0 && (decks[currentDeck].id == "disclaimer")){
            let buttons = document.getElementById('disclaimer').getElementsByTagName("button")
            for (let button of buttons) {
                button.style.display = 'none';
            }
            document.getElementById('disclaimer-form').style.display = 'none';
            document.getElementById('warning-message').innerHTML = `
<h3>Are you sure you want to move forward without data collection?</h3>
<div id="disclaimer-buttons">
    <a onclick="changeDeck(1) ; numTries = 0;" id="button1" class="black">Yes</a>
    <a onclick="unhideForm()" id="button2" class="black">No</a>
</div>
`;
        numTries++;
    }

    if (numTries == 0) {
        if (chosenVignette == null){
            if ((currentSlide == decks[currentDeck].slides.length - 1) && (currentDeck != decks.length - 1)) {
                changeDeck(1);
            } else {
                changeSlide(1);
            }
        } else {
            if (vignetteSlide == decks[currentDeck].vignettes[chosenVignette].slides.length - 1) {
                chosenVignette = null
                vignetteSlide = -1;
                changeSlide(0);
            }
            else {
                changeSlide(1);
            }
        }
    }
}

function removeButtons(){
    let buttons = document.getElementById(decks[currentDeck].id).getElementsByTagName("button")
    let len = buttons.length;
    for (let i = 0; i < len; i++) {
        buttons[0].remove();
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

// Handle Form Data


/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
let serialize = function (form) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');

};

function submitForm() {
//         /* get form on current slide */
    let forms = document.getElementById(decks[currentDeck].id).getElementsByTagName("form")

    if (forms.length != 0){
        for (let form of forms) {
            let content = serialize(form);
            content = content.split("&");

            let jsonObj = {}
            let _temp;
            for (var i = 0 ; i < content.length; i++) {
                _temp = content[i].split('=')
                if (_temp[1] =! '') {
                    jsonObj[_temp[0]] = _temp[1];
                }
            }
                clientAction('submit','POST', JSON.stringify(jsonObj))

        }
    }

    // SERVER SIDE PSEUDOCODE
//         if (/*user id is not already in mongodb */) {
//             /* create new document in mongodb */
//         } else {
//             /* update existing document*/
//         }
// }

    //PSEUDOCODE IMPLEMENTATION
    // Get user ID from mongoDB
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

function resetSettings() {

    // Position
    let settings = getCookie('prevSettings')
    if (settings != null) {
        let targetSlide = settings[0]
        let targetDeck = settings[0]

        while (targetDeck != currentDeck && targetSlide != currentSlide) {
            if (currentDeck != -1 && currentSlide != decks[currentDeck].slides.length - 1) {
                changeSlide(1)
            } else {
                changeDeck(1)
            }
        }
    }

    // Consent
    let consent = getCookie('consent');
    if (consent != null){
        collectData = consent;
    }
}
