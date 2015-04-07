int led = D7; 	// D7 is the on-board Blue LED

void setup()
{
	pinMode(led, OUTPUT); 		// http://docs.spark.io/firmware/#setup-pinmode
}

void loop()
{
	digitalWrite(led, HIGH); 	// http://docs.spark.io/firmware/#i-o-digitalwrite
	delay(1000);							// http://docs.spark.io/firmware/#time-delay
	digitalWrite(led, LOW);
	delay(1000);
}
