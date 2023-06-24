chrome.runtime.sendMessage({
    message: "get_speed"
}, response => {
    if (response.message === 'success') {
        document.getElementsByTagName("video")[0].playbackRate = `${response.payload}`;
        console.log(`Playback rate set to ${response.payload}`);
    } else {
        console.log("Error setting playback rate");
    }
});