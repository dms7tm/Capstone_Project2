#pragma strict
import System;
import System.IO;
var yes : AudioClip;
var no : AudioClip;
var intro2 : AudioClip;
var isButtonVisible  :  boolean  =  false;
var count : int = 0;
public var clipArray : AudioClip[] = new AudioClip[20];
public var game : GameObject[] = new GameObject[10];
var change : int = 0;
var isRepeatVisible : boolean = false;
var index : int = 0;
var isReviewOne : boolean = false;
var isEnd : boolean = false;
var r1q1 : boolean = true;
var r1q2 : boolean = true;
var r1done : boolean = false;
var r2q1 : boolean = true;
var r2q2 : boolean = true;

function Start () {
  Wait(2);
}

function OnGUI () {
   //this if block handles the repeat button
 if(isRepeatVisible){  
   GUI.backgroundColor = Color.green;
   var repeat = GUI.Button(Rect(750,0,100,50),"Repeat");
   if(repeat){
     audio.PlayOneShot(clipArray[index]);
   }
 }
  //this if block handles the yes and no buttons
 if(isButtonVisible && count>0){
   var oldColor = GUI.backgroundColor;
   GUI.backgroundColor = Color.blue;
   var y = GUI.Button(Rect (650,60,100,50), "Yes");
   GUI.backgroundColor = Color.red;
   var n = GUI.Button(Rect (650,180,100,50), "No");
   GUI.backgroundColor = oldColor;
      if (y) {
        if(index == 0)
           count = 2;
        if(index == 4)
           count = 5;
        if(index == 6)
           count = 7;
        if(index == 8)
           count = 11;
        if(index == 9)
           count = 9;
		if(index == 11||index == 12)
		   count = 11;
		if(index == 13)
		   count = 13;
		if(index == 23)
		   count = 23;
		if(index == 24)
		   count = 27;
		if(index == 25)
		   count = 26;
		if(index == 27)
		   count = 27;
		if(index == 37)
		   count = 37;
		if(index == 38)
		   count = 43;
		if(index == 39)
		   count = 49;
		if(index == 40)
		   count = 51;
		if(index == 45)
		   count = 57; 
		if(index == 53)
		   count = 51;
		if(index == 51)
		   count = 52;
		if(index == 62)
		   count = 60;
		if(index == 63)
		   count = 62;
		if(index == 64)
		   count = 64;
		if(index == 66)
		   count = 64;
   	 isButtonVisible = false;
   	 gameObject.SendMessage("WriteFile",index); 
      }
      if(n) {
        if(index == 0)
           count = 2;
        if(index == 4)
           count = 7;
        if(index == 6)
           count = 9;
        if(index == 8){ //if not r1done go to review 1, else go to why it is important to get the pap
           if(!r1done)
		    count = 28;
		   else count = 34;   
		   }
        if(index == 9)
           count = 8;
        if(index == 11)
           count = 27;
		if(index == 12)
	       count = 4;
		if(index == 23)
		   count = 24;
		if(index == 24){ //if not r1done go to review 1, else go to why it is important to get the pap
		  if(!r1done)
		    count = 28;
		  else count = 34;
		}
		if(index == 25)
		   count = 26;
		if(index == 27){ //if not r1done go to review 1, else go to why it is important to get the pap
		  if(!r1done)
		    count = 28;
		  else count = 34;
		}
	    if(index == 37)
		   count = 36;
		if(index == 38)
		   count = 38;
		if(index == 39)
		   count = 39;
		if(index == 40)
		   count =78;
		if(index == 45)
		   count = 57;
		if(index == 53)
		   count = 48;
		if(index == 51)
		   count = 51;
		if(index == 62)
		   count = 62;
		if(index == 63)
		   count = 61;
		if(index == 64)
		   count = 65;
		if(index == 66)
		   count = 65;
     isButtonVisible = false;   	 
     gameObject.SendMessage("WriteFile",index); 
      }
 }
   //this if block handles the buttons for review one
 if(isReviewOne){
   GUI.backgroundColor = Color.blue;
   var yes = GUI.Button(Rect (650,60,100,50), "Yes");
   GUI.backgroundColor = Color.red;
   var no = GUI.Button(Rect (650,130,100,50), "No");
   GUI.backgroundColor = Color.magenta;
   var idk = GUI.Button(Rect (650,200,100,50), "Don't Know");
   if(yes){
     if(index == 30)
       count = 30;
     if(index == 34) {
       count = 27;
       r1q2 = false;
       }
     if(index == 56)
       count = 54;
     if(index == 58)
       count = 56;
     if(index == 71)
       count = 69;
     isReviewOne = false;
     gameObject.SendMessage("WriteFile",index); 
   }
   if(no){
     if(index == 30) {
       count = 31;
       r1q1 = false;
       }
     if(index == 34)
       count = 33;
     if(index == 56){
       count = 31;
       r2q1 = false;
     }
     if(index == 58){
       count = 31;
       r2q2 = false;
     }
     if(index == 69)
       count = 67;
     isReviewOne = false;
     gameObject.SendMessage("WriteFile",index); 
   }
   if(idk){
     if(index == 30) {
       count = 31;
       r1q1 = false;
       }
     if(index == 34)
       count = 33;
     if(index == 56){
       count = 31;
       r2q1 = false;
     }
     if(index == 58){
       count = 31;
       r2q2 = false;
     }
     isReviewOne = false;
     gameObject.SendMessage("WriteFile",index); 
   }
 }
 
    //this if block handles the buttons for transition 13 (the end)
 if(isEnd){
   GUI.backgroundColor = Color.red;
   var cervix = GUI.Button(Rect (650,40,100,50), "Cervix");
   GUI.backgroundColor = Color.blue;
   var cervCan = GUI.Button(Rect (650,100,100,50), "Cervical Cancer");
   GUI.backgroundColor = Color.green;
   var hpv = GUI.Button(Rect (650,160,100,50), "HPV");
   GUI.backgroundColor = Color.yellow;
   var pap = GUI.Button(Rect (650,220,100,50), "HPV");
   GUI.backgroundColor = Color.grey;    //need to find orange
   var embarrassed = GUI.Button(Rect (650,280,100,50), "Embarrassed");
   GUI.backgroundColor = Color.magenta;
   var understand = GUI.Button(Rect (650,340,100,50), "I understand");
   if(cervix)
     count = 9;
   if(cervCan)
     count = 11;
   if(hpv)
     count = 13;
   if(pap)
     count = 34;
   if(embarrassed)
     count = 49;
   if(understand)
     count = 77;
   }
 if (count == 1)
     doIt(0,3);
 if (count == 2){
     index = 3;
     count = 4;
     audio.PlayOneShot(clipArray[3]);
     isRepeatVisible = true;
     Wait(10);
 }
 if (count == 3)
     doIt(4,12);
 if(count == 5)
     doIt(6,7);
 if(count == 6)
    doIt(5,0);
 if(count == 7)
    doIt(9,2);
 if(count == 8)
 	doIt(8,4);
 if(count == 9){  // B. The Cervix
    index = 10;
    audio.PlayOneShot(clipArray[10]);
    count =4;
    if(!r1q1){   // Wrong answer to R1Q1 (redirected from Review 1)
      r1q1 = true;
      doIt(34,9);
    }
    if(!r1done)  // First time
      doIt(11,4);
 }
 if(count == 10)
 	doIt(11,4);
 if(count == 11)
 	doIt(12,29);
 if(count == 12)
    doIt(13,3);
 if(count == 13) 
	doIt(14,17);
 if(count == 14)
 	doIt(15,6);
  if(count == 15)
	doIt(16,12);
  if(count == 16)
	doIt(17,5);
  if(count == 17)
	doIt(18,6);
  if(count == 18)
	doIt(19,3);
  if(count == 19)
	doIt(20,4);
  if(count == 20)
	doIt(21,11);
  if(count == 21)
	doIt(22,28);
  if(count == 22)
	doIt(23,5);
  if(count == 23)
	doIt(25,20);
  if(count == 24)
	doIt(24,8);
  if(count == 25)
	doIt(26,3);
  if(count == 26)
	doIt(27,3);
  if(count == 27) { // F. HPV and HIV
	doIt(28,18);
	}
  if(count == 28)  //review #1
    doIt(29,16);
  if(count == 29)
    doIt(30,9);
  if(count == 30)
    doIt(33,6);
  if(count == 31)
    doIt(32,2);
  if(count == 32)
    doIt(34,9);
  if(count == 33)
    doIt(35,9);
  if(count == 34)
    doIt(36,52);
  if(count == 35)
    doIt(37,5);
  if(count == 36)
    doIt(38,8);
  if(count == 37)
    doIt(42,16);
  if(count == 38)
    doIt(39,6);
  if(count == 39)
    doIt(40,6);
  if(count == 40)
    doIt(41,4);
  if(count == 41)
    doIt(43,13);
  if(count == 42)
    doIt(44,4);
  if(count == 43)
    doIt(46,9);
  if(count == 44)
    doIt(47,7);
  if(count == 45)
    doIt(48,8);
  if(count == 46)
    doIt(49,4);
  if(count == 47)
    doIt(50,11);
  if(count == 48)
    doIt(51,6);
  if(count == 49)
    doIt(52,21);
  if(count == 50)
    doIt(53,7);
  if(count == 51)
    doIt(54,26);
  if(count == 52)
    doIt(55,17);
  if(count == 53)
    doIt(56,7);
  if(count == 54)
    doIt(57,11);
  if(count == 55)
    doIt(58,7);
  if(count == 56)
    doIt(59,11);
  if(count == 57)
    doIt(60,11);
  if(count == 58)
    doIt(61,9);
  if(count == 59)
    doIt(62,8);
  if(count == 60)
    doIt(63,5);
  if(count == 61)
    doIt(64,5);
  if(count == 62)
    doIt(65,17);
  if(count == 63)
    doIt(66,9);
  if(count == 64)
    doIt(67,14);
  if(count == 65)
    doIt(68,18);
  if(count == 66)
    doIt(69,9);
  if(count == 67)
    doIt(70,13);
  if(count == 68)
    doIt(71,7);
  if(count == 69)
    doIt(72,10);
  if(count == 70)
    doIt(73,9);
  if(count == 71) 
    doIt(74,3);
  if(count == 72)
    doIt(75,4);
  if(count == 73)
    doIt(76,3);
  if(count == 74)
    doIt(77,3);
  if(count == 75)
    doIt(78,5);
  if(count == 76)
    doIt(79,4);
  if(count == 77)
    doIt(80,55);
  if(count == 78)
    doIt(45,7);
}
function doIt(ind:int,time:int){
    index = ind;
    audio.PlayOneShot(clipArray[ind]);
    count = 4;
    Wait(time);
}

function Wait (time:int){
  yield WaitForSeconds(time);
  if(count == 0)
    count++;
  if(index == 3)
    count = 3;
  if(index == 10){
    if(r1q1 && r1q2)
    count = 10;
    if(!r1q1 && r1q2)
    count = 32;
    if(r1q1 && !r1q2)
    count = 27;
    }
  if(index == 11)
    count = 12;
  if(index == 12)
    count = 12;
  if(index == 14)
    count = 14;
  if(index == 15)
    count = 15;
  if(index == 16)
    count = 16;
  if(index == 17)
    count = 17;
  if(index == 18)
    count = 18;
  if(index == 19)
    count = 19;
  if(index == 20)
    count = 20;
  if(index == 21)
    count = 21;
  if(index == 22)
    count = 22;
  if(index == 23)
    count = 25;
  if(index == 28){
    if(r1q1 && r1q2)
      count = 28;
    if(!r1q2){
      r1done = true;
      count = 34;
      }
  }
  if(index == 29)
    count = 29;
  if(index == 32){  //Let's review
    if(!r1q1)
      count = 9;
    if(!r1q2)
      count = 27;
    if(!r2q1 || !r2q2)
      count = 34;
  }
  if(index == 33)
    count = 32;
  if(index == 35) {
    count = 34;
    r1done = true;
    }
  if(index == 36) {
      if(!r2q1){
      r2q1 = true;
      count = 55;
      }
      if(!r2q2){
      r2q2 = true;
      count = 57;
      }
    count = 35;
    }
  if(index == 42)
    count = 41;
  if(index == 43)
    count = 42;
  if(index == 44)
    count = 36;
  if(index == 45)
    count = 43;
  if(index == 46)
    count = 44;
  if(index == 47)
    count = 45;
  if(index == 48)
    count = 46;
  if(index == 49)
    count = 47;
  if(index == 50)
    count = 38;
  if(index == 52)
    count = 50;
  if(index == 54)
    count = 0;   //need to fill in transition 10 here
  if(index == 55)
    count = 53;
  if(index == 57)
    count = 55;
  if(index == 59)
    count = 57;
  if(index == 60)
    count = 58;
  if(index == 61)
    count = 59;
  if(index == 65)
    count = 63;
  if(index == 67)
    count = 65;
  if(index == 68)
    count = 66;
  if(index == 70)
    count = 68;
  if(index == 72)
    count = 70;
  if(index == 73){
    isEnd = true;
    count = 71;  
    }
  if(index == 74)
    count = 72;
  if(index == 75)
    count = 73;
  if(index == 76)
    count = 74;
  if(index == 77)
    count = 75;
  if(index == 78)
    count = 76;
  if(index == 4 || index == 6 || index == 8 || index == 9 || index == 11 || index == 12 || index == 13 || 
     index ==23 || index == 24 || index == 25 || index == 27 || index == 37 || index == 38 ||index == 39|| index == 40
     || index == 53 || index == 51 || index == 62 || index == 63 || index == 64 || index == 66 || index == 45){
    isButtonVisible = true;
    if(index != 4){
    audio.PlayOneShot(clipArray[7]);
      }
    }
  if(index == 30 || index == 34 || index == 56 || index == 58 || index == 69 || index == 71){ //review questions
    isReviewOne = true;
    audio.PlayOneShot(clipArray[31]);
    }
}

function WriteFile (click: int){
  if(index == 0)
  System.IO.File.AppendAllText("C:/Users/Kristen/Desktop/Prototype/InputLog",System.DateTime.Now+ Environment.NewLine);
  System.IO.File.AppendAllText("C:/Users/Kristen/Desktop/Prototype/InputLog",click + "," + Time.time+ Environment.NewLine);
}

