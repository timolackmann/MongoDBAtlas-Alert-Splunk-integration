// This function receives Atlas alerts and forward it to Splunk HTTPS Event Handler.
exports = async function(request, response) {

    // extract alert message from body 
    const alertMessage = JSON.parse(request.body.text());

    // create auth header to include the Splunk token 
    var auth = 'Basic ' + Buffer.from('Splunk:'+ context.values.get("splunkEventToken")).toString('base64');

    //Post to Splunk HTTP Event Collector endpoint provided in Atlas App Services Value 'url'
    try {
      const splunkResponse = await context.http.post({
        url: context.values.get("url"),
        headers: {"Authorization": [auth]},
        body: { event: alertMessage },
        encodeBodyAsJSON: true
      })
      console.log(splunkResponse.statusCode);
      response.setStatusCode(200);
      return {
        "text": "Success",
        "code": 0
      }
    }catch (error) {
      console.log(error);
      response.setStatusCode(400);
      response.setBody(error.message);     
    }
    console.log("api response is: " +splunkResponse);

};
