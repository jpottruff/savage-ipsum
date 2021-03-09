function copyToClipboard() {
  // Grab the text; add 2 new lines for formatting
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
