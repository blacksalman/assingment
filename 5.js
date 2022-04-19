const request = require('request'); 

async function getGoogleHomePage(finalCallBack){ 
    await request('http://www.google.com', function (error, response, body) { 
    console.error('error:', error); // Print the error if one occurred 
    if (error) return finalCallBack(error); 
    else finalCallBack({body: body})
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    // console.log('body:', body); // Print the HTML for the Google homepage. finalCallBack(null,body); 
    }); 
}; 
getGoogleHomePage((result)=> result).then(r=> console.log(r)); 
