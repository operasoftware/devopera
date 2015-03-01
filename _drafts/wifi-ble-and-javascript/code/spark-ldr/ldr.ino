int light = 0;
char str[10];
int led = D7;

void setup()
{
	pinMode(led, OUTPUT);
	Spark.variable("light", &light, INT); // http://docs.spark.io/firmware/#spark-variable
	pinMode(A0, INPUT); // http://docs.spark.io/firmware/#setup-pinmode
}

void loop()
{
	light = analogRead(A0); // http://docs.spark.io/firmware/#i-o-analogread

	sprintf(str, "%i", light);
	Spark.publish("getLight", str, PRIVATE); // http://docs.spark.io/firmware/#spark-publish
	digitalWrite(led, HIGH);
	delay(200);

	digitalWrite(led, LOW);
	delay(200);
}
