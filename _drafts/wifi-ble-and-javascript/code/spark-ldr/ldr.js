var spark = require('spark');

spark.login({
  username: process.env.EMAIL,
  password: process.env.PASSWORD
}).then(
  function(token) {
    console.log('Connected to your light sensor successfully!');
    // console.log('Access Token: ' + token.access_token);

    spark.listDevices().then(
      function(devices){
        // console.log('\nDevices: ', devices);
        var device = devices[0];

        // cover and uncover the LDR and see the values change
        device.onEvent('getLight', function(reply) {
          var now = new Date();

          if (reply && reply.data) {
          	// some fun derivations based on the sensor value
            if (parseInt(reply.data) < 1000) {
            	// shine a torch light on the LDR
              console.log(now.getSeconds() + ': ' + reply.data + ' bright!');
            } else if (parseInt(reply.data) > 2000) {
            	// cover the LDR
              console.log(now.getSeconds() + ': ' + reply.data + ' dark! ');
            } else {
              console.log(now.getSeconds() + ': ' + reply.data);
            }
          }

        });

      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );

  }, function(err) {
    console.log('Ooops error: ' + err);
  }
);
