chrome.runtime.sendMessage({
  message: "get_speed"
}, response => {
  if (response.message === 'success') {
    document.querySelector('#speedInput').value = `${response.payload}`;
  }
});

setSpeedButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({
    message: "change_spped",
    payload: speedInput.value
  }, response => {
    if (response.message === 'success') {
      ce_name.innerHTML = `Hello ${ce_input.value}`;
    }
  });
});

// change speed if setSpeedButton is clicked