// run in command line:
// EMAIL="{SPARK_EMAIL}" PASSWORD="SPARK_PASSWORD" node ldr.js

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

        // getLight is an event published by the firmware code in ldr.ino file
        device.onEvent('getLight', function(reply) {
          var now = new Date();

          if (reply && reply.data) {
          	// some fun derivations based on the sensor value
            if (parseInt(reply.data) < 1000) {
            	// shine a torch light on the LDR
            	// amend 1000 according to your environment lighting
              console.log(now.getSeconds() + ': ' + reply.data + ' bright!');
            } else if (parseInt(reply.data) > 2000) {
            	// cover the LDR with your finger
            	// amend 2000 according to your environment lighting
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
