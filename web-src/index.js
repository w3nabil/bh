function html5basiccode() {
    const codeElement = document.getElementById('html5basiccode');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Change the button text to 'Copied!'
    const copyButton = document.querySelector('.copy-button-1');
    copyButton.innerHTML = '<img src="./web-src/img/copy.png" height="20px" width="auto"> Copied!';
  }

function copyCode() {
    const codeElement = document.getElementById('myCode');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Change the button text to 'Copied!'
    const copyButton = document.querySelector('.copy-button');
    copyButton.innerHTML = '<img src="./web-src/img/copy.png" height="20px" width="auto"> Copied!';
  }

function bhashpreloadcode() {
    const codeElement = document.getElementById('bhashpreloadcode');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Change the button text to 'Copied!'
    const copyButton = document.querySelector('.copy-button-3');
    copyButton.innerHTML = '<img src="./web-src/img/copy.png" height="20px" width="auto"> Copied!';
  }

  
function bhashlink() {
    const codeElement = document.getElementById('bhashlink');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Change the button text to 'Copied!'
    const copyButton = document.querySelector('.copy-button-2');
    copyButton.innerHTML = '<img src="./web-src/img/copy.png" height="20px" width="auto"> Copied!';
  }