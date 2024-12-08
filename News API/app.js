// News API


const cardDiv = document.getElementById(`cardSec`)
const input = document.getElementById(`input`)
let searchNews = ()=>{

    
    const API_KEY =`https://newsapi.org/v2/everything?q=${input.value}&from=2024-12-07&to=2024-12-07&sortBy=popularity&apiKey=043a5228dda44b1a99b90e2954b1f23b`;
    
    fetch(API_KEY)
    .then((res)=>res.json())
    .then((data)=>{
        data.articles.map((e,i)=>{
            console.log(e);
        cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${e.urlToImage} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class=${e.title}>Card title</h5>
        <p class="card-text">${e.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
    })
    
})
.catch((err)=>{
    console.log(err);
    
})
};