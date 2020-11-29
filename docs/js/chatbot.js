// function checkIfChatbot(){
//     let chatbot = document.getElementById(decks[currentDeck].slides[currentSlide]).getElementsByClassName('chatbot')
//
//     chatbot[0].animate({'width': 0, 'height': 0}, 0, function(){
//         $(this).html(`
// loading...
// <!--<div>-->
// <!--<h3>Welcome to the Brainstorm</h3>-->
// <!--<p>Experience a social neurotechnology platform that enables you to manage your brain data and couple with other minds across social, cultural, and political boundaries.</p>-->
// <!--</div>-->
// `).animate({'width': 1, 'height': 1}, 100);
//     });
// }

var addTimeout = function(milliseconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Stuff worked!"), milliseconds);
    });
}

async function runChat(chat){
    let names = Object.keys(chat);
    let senderThreads = chat[names[0]]
    let receiverThreads = chat[names[1]]
    let res;
    let timeout = 3000 // ms
    let messagesLoc = document.getElementById(names[0] + '-messages');
    for (let thread = 0; thread < senderThreads.length; thread++){
        for (let message = 0; message < senderThreads[thread].length; message++){
            res = await addTimeout(timeout)
            messagesLoc.innerHTML += `
<li class="left"> 
<i class="picture"><img src="assets/${names[1]}.svg"/></i>
<div class="text-message sender">${senderThreads[thread][message]}</div>
</li>`;
            res = await addTimeout(timeout)
            messagesLoc.innerHTML += `
<li class="right"> 
<div class="text-message receiver">${receiverThreads[thread][message]}</div>
<i class="picture"><img src="assets/${names[1]}.svg" /></i>
</li>`;
            if (message == senderThreads[thread].length-1){
                res = await addTimeout(timeout)
            }
        }
        messagesLoc.innerHTML = '';
    }
    changeSlide(0)
}

function fullscreenChat(){
    let slide = document.getElementsByTagName(decks[currentDeck].slides[currentSlide]);
    let chatbot = slide[0].getElementsByClassName('chatbot')
    let fullChat = chatbot[0].cloneNode( true );
    slide[0].innerHTML = '';
    slide[0].append(fullChat)
    fullChat.classList.remove("chatbot");
    fullChat.classList.add("full-chatbot");
    fullChat.removeAttribute("onclick");
}



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
