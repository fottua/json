
var unirest = require('unirest');

unirest.get("http://stats.zello.com/channels-suggest/ru")
  .send()
  .end(response=> {
    if (response.ok) {
      
	  var obj = JSON.parse(response.raw_body);
	  console.log("Got a response: ", obj[0].categories[0])
    } else {
      console.log("Got an error: ", response.error)
    }
  })
  
