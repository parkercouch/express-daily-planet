const db = require("./models");

const articleTitles = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
articleTitles.forEach(article => {
  db.article.create({
    title: `Generic Article ${article}`,
    content: `This is content. ${article} There should be ${article} a lot more, but this ${article} will do for now. Maybe?`,
    author: `Parker ${article}`,
  }).then(data => {
    console.log(`Created article: ${data.title}`);
  }).catch(err => {
    console.log(`Error: ${err}`);
  });
});