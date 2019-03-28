

function switchChannel (channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('chat-name').innerHTML=channelName;
    document.getElementById('location').innerHTML="UPGRADING.NEVER.HELPS";
    document.getElementById('location').href="http://w3w.co/upgrading.never.helps";
} 

function changeStar () {
    $("#chat-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function changeStarToFilled () {
    $("#chat-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
}

function removeClass() {
    $("div#tab-bar > button").removeClass("selected");
}

function selectTab (tabId) {
    $(tabId).addClass("selected");
    console.log(tabId);
}

function showEmojis () {
    $("#emojis").toggle();
}

