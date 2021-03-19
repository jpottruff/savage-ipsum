function copyToClipboard() {
  const btn = document.getElementById('copy-btn');
  const msgText = document.getElementById('copied-msg-text');
  const copyMsg = document.getElementById('copied-msg');

  btn.disabled = true;
  copyText();
  msgText.innerText = getMsgText();
  copyMsg.classList.remove('invisible');
  copyMsg.classList.add('animate-swell-single');

  setTimeout(() => {
    copyMsg.classList.add('invisible');
    copyMsg.classList.remove('animate-swell-single');
    btn.disabled = false;
  }, 1000);
}

function copyText() {
  // Grab the text; Add 2 new lines for formatting
  const paragraphNodes = document.querySelectorAll('p');
  const formattedText = Array.from(paragraphNodes)
    .map((p) => p.innerText)
    .join('\n\n');

  // Create temp element and append
  const el = document.createElement('textarea');
  el.value = formattedText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  // Select, copy to clipboard, then remove the temp element
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function getMsgText() {
  return Math.random() < 0.5 ? 'Ohhhh yeeeeah!!!' : 'Copied!!!';
}
