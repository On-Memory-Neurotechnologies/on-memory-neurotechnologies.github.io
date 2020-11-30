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
        setTimeout(() => resolve("done!"), milliseconds);
    });
}

async function runChat(chat){
    let names = Object.keys(chat.people);
    let res;
    let who;
    let where;
    let style;
    let role;
    let messagesLoc = document.getElementById(chat.id);
    for (let thread = 0; thread < chat.progression.length; thread++){
        let whoTalked = Array(names.length).fill(0)
        for (let statement = 0; statement < chat.progression[thread].length; statement++){
        who = chat.progression[thread][statement]
        where = names.indexOf(who)
            if (who == names[0]){
            role = 'receiver'
            style = 'right'
                messagesLoc.innerHTML += `
                <li class=${style}> 
                <div class="text-message ${role}">${chat.people[who][thread][whoTalked[where]]}</div>
                <i class="picture"><img src="assets/${who}.svg"/></i>
                </li>`;
            } else {
                role = 'sender'
                style = 'left'

                messagesLoc.innerHTML += `
                <li class=${style}> 
                <i class="picture"><img src="assets/${who}.svg"/></i>
                <div class="text-message ${role}">${chat.people[who][thread][whoTalked[where]]}</div>
                </li>`;
            }
            whoTalked[where]++
            res = await addTimeout(chat.time[thread][statement])
        }

        if (thread != chat.progression.length-1){
            messagesLoc.innerHTML = '';
        }
    }
}

function fullscreenChat(){
    let slide = document.getElementsByTagName(decks[currentDeck].slides[currentSlide]);
    let chatbot = slide[0].getElementsByClassName('chatbot')
    let fullChat = chatbot[0].cloneNode( true );
    slide[0].innerHTML = '';
    slide[0].append(fullChat)
    fullChat.style.display = 'block'
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

function updateScroll(el){
    el.scrollTop = el.scrollHeight;
}
