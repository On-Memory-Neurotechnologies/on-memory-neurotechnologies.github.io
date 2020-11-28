
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
    let consentBox = document.getElementById("consent");
    collectData = consentBox.checked;
    if (collectData) {
        submitForm();
        changeDeck(1)
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

function submitForm(){
    if (collectData) {
        /* get form on current slide */

        if (/*user id is not already in mongodb */) {
            /* create new document in mongodb */
        } else {
            /* update existing document ONLY IF FORM IS NOT EMPTY */
        }
    }
}


