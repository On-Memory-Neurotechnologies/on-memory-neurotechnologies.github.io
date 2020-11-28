
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
    if (res.userId != undefined){
        userId = res.userId
    } else {
        console.log(`\n${res}`);
    }
}


function checkConsent(){
    let consentBox = document.getElementById("consent");
    collectData = consentBox.checked;
}

function submitForm(){

}


