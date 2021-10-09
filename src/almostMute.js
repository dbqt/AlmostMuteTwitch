'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
    {
      code:`volumeControl = document.body.querySelector("video");
      volumeControl.volume = 0.001;
      `
    });

  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
  }
});