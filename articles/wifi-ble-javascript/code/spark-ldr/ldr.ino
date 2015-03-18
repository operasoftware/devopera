// See the firmware code API for more functions!
// http://docs.spark.io/firmware/#spark-core-firmware

int light = 0;
char str[10];
int led = D7;

void setup()
{
	pinMode(led, OUTPUT);	// http://docs.spark.io/firmware/#setup-pinmode
	Spark.variable("light", &light, INT); // http://docs.spark.io/firmware/#spark-variable
	pinMode(A0, INPUT); // LDR is linked to this analog pin
}

void loop()
{
	light = analogRead(A0); // http://docs.spark.io/firmware/#i-o-analogread

	sprintf(str, "%i", light);		// http://linux.die.net/man/3/sprintf
	Spark.publish("getLight", str, PRIVATE); // http://docs.spark.io/firmware/#spark-publish

	digitalWrite(led, HIGH); 	// for easy debugging, we turn on / off the LED with each publish
	delay(200);
	digitalWrite(led, LOW);
	delay(200);
}
