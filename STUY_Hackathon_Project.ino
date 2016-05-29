int ledPin = 8;
int buzzPin = 4;
const int tempPin=0;
const int buttonPin = 3;
int buttonState=0;
int s =1;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(buzzPin,OUTPUT);
  pinMode(tempPin,INPUT);
  pinMode(buttonPin,INPUT);
}

void loop() {
buttonState=digitalRead(buttonPin);
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

if(s==1){
if(degreesF >= 82){
  digitalWrite(buzzPin, HIGH); 
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  digitalWrite(buzzPin, LOW);
  delay(1000);
  if(buttonState==HIGH){
  digitalWrite(ledPin, LOW);
  digitalWrite(buzzPin, LOW);
  s!=1;  
  
}
}
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



