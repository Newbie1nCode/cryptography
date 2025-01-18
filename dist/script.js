const form = document.getElementById('hashForm');
const resultDiv = document.getElementById('result');
const resultText = resultDiv.querySelector('p:nth-child(2)');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputText = document.getElementById('inputText').value;


  const hash = CryptoJS.MD5(inputText).toString();

  resultText.textContent = hash;
  resultDiv.classList.remove('hidden');
});
