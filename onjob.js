let Parser = require('rss-parser');
let parser = new Parser();

async () => {

    let feed = await parser.parseURL('https://binghamton.joinhandshake.com/external_feeds/2631/public.rss?token=2XhufjIYzTcXOYoWyCgu9_BNP6XMi0G99d9Hx_-pLZLL4RcFK-K5lw');
    
    var numberOfListItems = feed.items.length;
    document.body.innerHTML = "<h1>Today's date is " + feed.items.length + "</h1>";
  
    //console.log("Count: "+ feed.items.length);
    //console.log(feed.title);
  
    let list = document.getElementsByTagName('ul')[0];

    feed.items.forEach(item => {
      // console.log(item.title);
      // console.log(" ");
      // console.log(item.link);
      // console.log(" ");
  
  
        var listItem = document.createElement("li");
  
        // Add the item text
        var newText = document.createTextNode(item.title);
        listItem.appendChild(newText);
        //listItem.innerHTML =item.title;
  
        // Add listItem to the listElement
        list.appendChild(listItem);
  
    });
  
  };