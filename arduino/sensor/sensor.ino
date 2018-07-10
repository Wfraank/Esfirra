/*
 * Copyright (c) 2016, CESAR.
 * All rights reserved.
 *
 * This software may be modified and distributed under the terms
 * of the BSD license. See the LICENSE file for details.
 *
 */

/*
 * The default behavior for a Thing is to send data every 30 seconds.
 * To change its behavior on the firmware side, use the function
 * registerDefaultConfig(). See the documentation and lib examples.
 */

#include <KNoTThing.h>
#include <Adafruit_Fingerprint.h>
#include <SoftwareSerial.h>


#define SENSOR_BIOMETRIC_PIN1      2
#define SENSOR_BIOMETRIC_PIN2      3
#define SENSOR_BIOMETRIC_ID        1
#define SENSOR_BIOMETRIC_NAME      "Biometria_ID"

SoftwareSerial mySerial(SENSOR_BIOMETRIC_PIN1, SENSOR_BIOMETRIC_PIN2);

KNoTThing thing;
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

uint8_t id;
static int32_t ID_USER = 0;

/*static int light_write(uint8_t *val)
{
    digitalWrite(LIGHT_BULB_PIN, *val);
    Serial.print(F("Light Status: "));
    if (*val)
      Serial.println(F("ON"));
    else
      Serial.println(F("OFF"));
      /* TODO: Save light status in EEMPROM in to handle when reboot 
    return 0;
}*/
static int ID_read(int32_t *val, int32_t *multiplier){
    
    *val = ID_USER;
    *multiplier = 1;
    Serial.print(F("ID do usuario cadastrado: #"));
    Serial.println(*val);
    return 0;
}

void setup()
{
    Serial.begin(9600);
    while (!Serial);  
    delay(100);
    finger.begin(57600);
    if (finger.verifyPassword()) {
      Serial.println(F("Found fingerprint sensor!"));
    } else {
      Serial.println(F("Did not find fingerprint sensor :("));
      while (1) { delay(1); }
    }
    Serial.print(F("Entrou"));
    Serial.println(F("Ready to enroll a fingerprint!"));
    Serial.println(F("Please type in the ID # (from 1 to 127) you want to save this finger as..."));
    id = readnumber();
    if (id == 0) {// ID #0 not allowed, try again!
       return;
    }
    Serial.print(F("Enrolling ID #"));
    Serial.println(id);
    getFingerprintEnroll();
    ID_USER = id;
    
    /* TODO: Read lamp status from eeprom for reboot cases */
    thing.init("AoTorcedor_SB");
    thing.registerIntData(SENSOR_BIOMETRIC_NAME, SENSOR_BIOMETRIC_ID, KNOT_TYPE_ID_NONE,
        KNOT_UNIT_NOT_APPLICABLE, ID_read, NULL);
    
    /* Send data every 10 seconds*/
    thing.registerDefaultConfig(SENSOR_BIOMETRIC_ID, KNOT_EVT_FLAG_TIME, 5, 0, 0, 0, 0);

    Serial.println(F("Remote Biometria KNoT Demo"));
}

void loop()
{
    thing.run();
}

uint8_t readnumber(void) {
  uint8_t num = 0;
  
  while (num == 0) {
    while (! Serial.available());
    num = Serial.parseInt();
  }
  return num;
}

uint8_t getFingerprintEnroll() {

  int p = -1;
  Serial.print(F("Waiting for valid finger to enroll as #")); Serial.println(id);
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println(F("Image taken"));
      break;
    case FINGERPRINT_NOFINGER:
      Serial.println(F("."));
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println(F("Communication error"));
      break;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println(F("Imaging error"));
      break;
    default:
      Serial.println(F("Unknown error"));
      break;
    }
  }

  // OK success!

  p = finger.image2Tz(1);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println(F("Image converted"));
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println(F("Image too messy"));
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println(F("Communication error"));
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println(F("Could not find fingerprint features"));
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println(F("Could not find fingerprint features"));
      return p;
    default:
      Serial.println(F("Unknown error"));
      return p;
  }
  
  Serial.println(F("Remove finger"));
  delay(2000);
  p = 0;
  while (p != FINGERPRINT_NOFINGER) {
    p = finger.getImage();
  }
  Serial.print(F("ID ")); Serial.println(id);
  p = -1;
  Serial.println(F("Place same finger again"));
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println(F("Image taken"));
      break;
    case FINGERPRINT_NOFINGER:
      Serial.print(F("."));
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println(F("Communication error"));
      break;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println(F("Imaging error"));
      break;
    default:
      Serial.println(F("Unknown error"));
      break;
    }
  }

  // OK success!

  p = finger.image2Tz(2);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println(F("Image converted"));
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println(F("Image too messy"));
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println(F("Communication error"));
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println(F("Could not find fingerprint features"));
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println(F("Could not find fingerprint features"));
      return p;
    default:
      Serial.println(F("Unknown error"));
      return p;
  }
  
  // OK converted!
  Serial.print(F("Creating model for #"));  Serial.println(id);
  
  p = finger.createModel();
  if (p == FINGERPRINT_OK) {
    Serial.println(F("Prints matched!"));
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println(F("Communication error"));
    return p;
  } else if (p == FINGERPRINT_ENROLLMISMATCH) {
    Serial.println(F("Fingerprints did not match"));
    return p;
  } else {
    Serial.println(F("Unknown error"));
    return p;
  }   
  
  Serial.print(F("ID ")); Serial.println(id);
  p = finger.storeModel(id);
  if (p == FINGERPRINT_OK) {
    Serial.println(F("Stored!"));
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println(F("Communication error"));
    return p;
  } else if (p == FINGERPRINT_BADLOCATION) {
    Serial.println(F("Could not store in that location"));
    return p;
  } else if (p == FINGERPRINT_FLASHERR) {
    Serial.println(F("Error writing to flash"));
    return p;
  } else {
    Serial.println(F("Unknown error"));
    return p;
  }   
}
