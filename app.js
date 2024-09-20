const blockQuote = document.querySelector("blockquote");
const author = document.querySelector(".author");
const appLink =  "https://quotes-api-self.vercel.app/quote";
const newQuote = document.querySelector("#new_quote");
const tweetBtn = document.querySelector("#tweet");
let temp;
const getData = async()=>{
    const res = await fetch(appLink);
    const data = await res.json();
    temp = data.quote;
    // document.wirte(data);
    return data;
}

newQuote.addEventListener('click',()=>{
    getData().then((data)=>{
        blockQuote.innerText = data.quote;
        author.innerText = data.author;
        // console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
})

tweetBtn.addEventListener('click',()=>{
    window.open("https://twitter.com/intent/tweet?text="+ temp,"tweet post","widht=400, height=400");
})