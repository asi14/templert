int ledPin = 8;
int val = 0;
int buzzPin = 4;
const int tempPin=0;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(buzzPin,OUTPUT);
  pinMode(tempPin,INPUT);
  
}

void loop() {
float voltage, degreesC, degreesF, resistance;
voltage = getVoltage(tempPin) ; // from 0V to 5V, convert -40C to 125C
//Serial.println(voltage);
//resistance=(float)(1023-voltage)*10000/voltage; //get the resistance of the sensor;
//  degreesC=1/(log(resistance/10000)/3976/298.15)-273.15;//convert to temperature via datasheet&nbsp;;
//voltage = (voltage - 3.3) * 1.7;
degreesC = voltage * 165.0;
degreesC -= 61.5;
//degreesC=(voltage-0.5)*100.0;
//Serial.println(degreesC);
degreesF=degreesC*(9.0/5.0)+32.0;
Serial.println(degreesF);
if(degreesF >= 82){
  digitalWrite(buzzPin, HIGH); 
  digitalWrite(ledPin, HIGH);
  delay(val);
  digitalWrite(ledPin, LOW);
  digitalWrite(buzzPin, LOW);
  delay(val);

}
}
float getVoltage(int pin){
return analogRead(pin) / 1024.0;


}




/* if(rotaryValue==0){
   digitalWrite(ledPin,58);
  }
  else if(rotaryValue>=500){
     digitalWrite(ledPin, 58);
  }
  else{
   digitalWrite(ledPin, 20);
  }*/




//  // put your main code here, to run repeatedly:
//if(touchPin==6){
//touchPin++;
//}
//if(touchPin==7){
//ledPin=6;
//}
//if(ledPin==6){
//digitalWrite(ledPin,HIGH);
//delay(150);


//}



