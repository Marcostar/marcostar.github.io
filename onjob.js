let Parser = require('rss-parser');
let parser = new Parser();

var feed, feed1;

// function openNewWindow(link)
// {
//     window.open(link, "_blank");
// }

function feedTheList()
{

    document.getElementsByClassName("totalJobs")[0].innerHTML = feed.items.length;
    //onCampus.innerHTML = " "+feed.items.length;
    var list = document.getElementById("list");

    feed.items.forEach(item => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.link;
        a.title = item.title;
        a.appendChild(document.createTextNode(item.title));
        li.appendChild(a);
        list.appendChild(li);
    });

}

function feedTheList1()
{

    document.getElementsByClassName("totalJobs1")[0].innerHTML = feed1.items.length;
    //onCampus.innerHTML = " "+feed.items.length;
    var list = document.getElementById("list1");

    feed1.items.forEach(item => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.link;
        a.title = item.title;
        a.appendChild(document.createTextNode(item.title));
        li.appendChild(a);
        list.appendChild(li);
    });

}

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

(async () => {
  feed = await parser.parseURL(CORS_PROXY + 'https://binghamton.joinhandshake.com/external_feeds/2631/public.rss?token=2XhufjIYzTcXOYoWyCgu9_BNP6XMi0G99d9Hx_-pLZLL4RcFK-K5lw');
  feedTheList();
  feed1 = await parser.parseURL(CORS_PROXY+ 'https://app.joinhandshake.com/external_feeds/3228/public.rss?token=PJDm9yeM8ynxH8L6phyT8c0igpTts-seY8hX6HkHSAa9qN90pVpQEw');
  feedTheList1();
})();

// (async () => {
  
// })();
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