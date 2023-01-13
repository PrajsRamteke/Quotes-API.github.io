const btn = document.getElementById("btn");
const sound = document.getElementById("sound");
const copy = document.getElementById("copy");
const twitter = document.getElementById("twitter");

const QuotesText = document.getElementById("text");
const authorText = document.getElementById("author");

const url = "https://api.quotable.io/random";

function RandomQuote(){

    fetch(url).then(data=>data.json()).then(result=>{
    // console.log(result);

    QuotesText.innerText = result.content;
    authorText.innerText = result.author;

    });
}
sound.addEventListener("click",()=>{
    let loud = new SpeechSynthesisUtterance(`${QuotesText.innerText} by ${authorText.innerText}`);
    speechSynthesis.speak(loud);
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(QuotesText.innerText);
});

twitter.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${QuotesText.innerText}`;
    window.open(tweetUrl, "_blank");
});

btn.addEventListener("click",RandomQuote);
RandomQuote();