const inputUrl = document.querySelector(".inputUrl");
const shortBtn = document.querySelector(".shortBtn");
const resultEl = document.querySelector(".result__container");

resultEl.innerHTML = 'Shortened Url Will Appear Here'

shortBtn.addEventListener("click", () => {
  console.log(inputUrl.value);
  const apiURL =
    "https://tinyurl.com/api-create.php?url=" +
    encodeURIComponent(inputUrl.value);
  fetch(apiURL)
    .then((res) => res.text())
    .then((data) => {
      resultEl.innerHTML = `<span class="shortenedUrl">${data}</span>
      <i class="ri-clipboard-line"></i>`;
      resultEl.style.color = "#fff";
      resultEl.style.fontWeight = "600";
      resultEl.style.justifyContent = 'space-between'
    })
    .catch((error) => {
      resultEl.innerHTML = "Error in fetching URL";
    });
});

// clipBoard copy
async function copyContent() {
  const shortenedUrl = document.querySelector('.shortenedUrl');
  const storage = document.createElement('textarea');
  storage.value = shortenedUrl.innerHTML;
  shortenedUrl.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999); // for mobile devices
  document.execCommand('copy');
  shortenedUrl.removeChild(storage);
};


resultEl.addEventListener('click', ()=>{
  console.log('Hello')
  copyContent();
});