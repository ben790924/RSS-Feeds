const Parser = require('rss-parser')

export function handler(event, context, callback){
  const FEEDS = [
    'http://rss.news.yahoo.com/rss/entertainment',
    'http://movies.yahoo.com/rss',
    'http://music.yahoo.com/rss/'
  ]


  let parser = new Parser()

const feedRequests = FEEDS.map(feed=>{
  return parser.parseURL(feed)
})

Promise.all(feedRequests).then(response=>{
  callback(null,{
    statusCode:200,
    body:JSON.stringify(response)
  })

})

}