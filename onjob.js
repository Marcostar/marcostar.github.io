let Parser = require('rss-parser');
let parser = new Parser();

var feed;

function feedTheList()
{

    document.getElementById("on_campus").innerHTML = "On Campus Jobs: "+ feed.items.length;
    //onCampus.innerHTML = " "+feed.items.length;
    
    
    console.log(feed.items.length);
    var list = document.getElementById("list");

    feed.items.forEach(item => {
      
        console.log(" " + item.title);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item.title));
        list.appendChild(li);
  
    });

}

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

(async () => {
  feed = await parser.parseURL(CORS_PROXY + 'https://binghamton.joinhandshake.com/external_feeds/2631/public.rss?token=2XhufjIYzTcXOYoWyCgu9_BNP6XMi0G99d9Hx_-pLZLL4RcFK-K5lw');
  feedTheList();
})();

//feedTheList();
// setTimeout(function() {
//   //your code to be executed after 1 second
//   feedTheList();

// }, 5000);






// let Parser = require('rss-parser');
// let parser = new Parser();

// let feed;
// (async () => {

//   feed = await parser.parseURL('https://binghamton.joinhandshake.com/external_feeds/2631/public.rss?token=2XhufjIYzTcXOYoWyCgu9_BNP6XMi0G99d9Hx_-pLZLL4RcFK-K5lw');
//   console.log(feed.items.length);

// })();



// setTimeout(function() {
//   //your code to be executed after 1 second

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// }, 3000);