/*
/* here comes the money
/*
*/

async function purchase(stock){

    try{
      
    } catch(error){
      console.log('error purchasing amazon out', error);
    }
  
  }
  
async function testPrice(){
  try {
    const request = require('request');

    request('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bve1ac748v6qmf0gufcg', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body.url);
      console.log(body.explanation);
    });


  }
  catch(err){
    console.log(err)
  }
}