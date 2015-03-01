int led = D7;

void setup()
{
	pinMode(led, OUTPUT);
}

void loop()
{
	digitalWrite(led, HIGH);
	delay(1000);
	digitalWrite(led, LOW);
	delay(1000);
}
