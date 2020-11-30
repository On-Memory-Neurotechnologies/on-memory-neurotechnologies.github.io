/*
let dbName = "on-memory-neurotechnologies"
let collectionName = "readers"

mongoose = require("mongoose");
const Schema = mongoose.Schema;
const readerSchema = new Schema({
    userID: String,
    age: Number,
    hasAlzheimers: Boolean,

    v1Q1: String,
    v1Q2: String,
    v1Q3: String,
    v1Q4: Number,
    v1Q5: String,
    v2Q1: String,
    v2Q2: String,
    v3Q1: String,
    v3Q2: String,
    v3Q3: String,
    v4Q1: String,
    v4Q1Desc: String,
    v4Q2: String,
    v4Q2Desc: String,
    v4Q3Pros: String,
    v4Q3Cons: String,
    v4Q5: String,
    v5Q1: String,
    v5Q2: String,
    v6Q1: String,
    v6Q2: String,
});
*/

// Functions to Log User In
function displayUserId(){
    if (userId != undefined){
        document.getElementById('user-id').innerHTML = userId
    }
}

function clientAction(destination,method,body=JSON.stringify({'default':''})){

    console.log(body)
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
    setCookie('prevSettings',[currentDeck,currentSlide,chosenVignette, vignetteSlide], 30)

    if (collectData == undefined) {
            let consentBox = document.getElementById("consent");
            collectData = consentBox.checked;
            setCookie('consent',collectData,30);
    }
    // else {
    //     setCookie('consent',collectData,30);
    // }

    if (currentDeck != -1) {
        if (collectData) {
            // submitForm();
        } else if (numTries == 0 && (decks[currentDeck].id == "disclaimer")) {

            if (reset) {
                numTries = 0;
            } else {
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
        }
    }

    if (numTries == 0) {
        if (currentDeck == -1){
            changeDeck(1);
        }
        else if (chosenVignette == null){
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

    // Check if object already exists

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
            clientAction('submit','POST', JSON.stringify(jsonObj));
        }
    
    
        
        
        
        /*
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("readers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
        });
        */
    }

    //SERVER SIDE PSEUDOCODE
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

function resetSettings(reset) {
    // Consent
    let consent = getCookie('consent');
    if (consent != '') {
        collectData = consent;
    } else {
        collectData = false;
    }

    // Position
    let settings = [4,2,2,1]; // getCookie('prevSettings')
    if (settings != null) {
        let targetDeck = settings[0]
        let targetSlide = settings[1]
        let targetVignette = settings[2]
        let targetVignetteSlide = settings[3]


        while (targetDeck != currentDeck || targetSlide != currentSlide) {
                checkConsent();
        }

        if (decks[currentDeck].slides[currentSlide] == 'vignette-grid') {
            chosenVignette = targetVignette;
            while (targetVignetteSlide != vignetteSlide) {
                checkConsent();
            }
        }
    }
    return false
}


// Team
// Team
function getPerson(fullName){
    document.getElementById("team").style.display = `none`
    document.getElementById("team-header").style.display = `none`
    document.getElementById("person").innerHTML = `<${fullName}></${fullName}>`
    document.getElementById("person").insertAdjacentHTML( 'beforeend', `<button id="back" onclick="backToTeam()"> Back to the Team</button>`)
}

function backToTeam(){
    document.getElementById("team").style.display = `flex`
    document.getElementById("team-header").style.display = `block`
    document.getElementById("person").innerHTML = ``
}
