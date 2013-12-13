#pragma strict
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
var first : boolean = true;

function Start () {
  Wait(2);
}

function OnGUI () {
 if(isRepeatVisible){
   GUI.backgroundColor = Color.green;
   var repeat = GUI.Button(Rect(750,0,100,50),"Repeat");
   if(repeat){
     audio.PlayOneShot(clipArray[index]);
   }
 }
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
        if(index == 8)
           count = 12;
        if(index == 9)
           count = 10;
		if(index == 12)
		   count = 13;
		if(index == 23)
		   count = 24;
		if(index == 25)
		   count = 26;
     isButtonVisible = false;   	 
     gameObject.SendMessage("WriteFile",index); 
      }
 }
 if (count == 1){
     index = 0;
     audio.PlayOneShot(clipArray[0]);
     count=4;
     Wait(3);
     doIt(0,3);
 }
 if (count == 2){
     index = 3;
     count = 4;
     audio.PlayOneShot(clipArray[3]);
     isRepeatVisible = true;
     Wait(10);
 }
 if (count == 3){
     index = 4;
     count=4;
     audio.PlayOneShot(clipArray[4]);
     Wait(12);
 }
 if(count == 5){
     index = 6;
     audio.PlayOneShot(clipArray[6]);
     count =4;
     Wait(7);
 }
 if(count == 6){
    index = 5;
    audio.PlayOneShot(clipArray[5]);
    count =4;
 }
 if(count == 7){
    index = 9;
    audio.PlayOneShot(clipArray[9]);
    count =4;
    Wait(2);
 }
 if(count == 8){
 	index = 8;
 	audio.PlayOneShot(clipArray[8]);
 	count =4;
 	Wait(4);
 }
 if(count == 9){
    index = 10;
    audio.PlayOneShot(clipArray[10]);
    count =4;
    if(first)
      Wait(26);
//    else
//      Let's Review #1
 }
 if(count == 10){
 	index = 11;
 	audio.PlayOneShot(clipArray[11]);
 	count =4;
 	Wait(4);
 }
 if(count == 11){
 	index = 12;
 	audio.PlayOneShot(clipArray[12]);
 	count = 4;
 	Wait(29);
 }
 if(count == 12){
    index = 13;
    audio.PlayOneShot(clipArray[13]);
    count = 4;
    Wait(3);
 }
 if(count == 13){
	index = 14;
	audio.PlayOneShot(clipArray[14]);
	count = 4;
	Wait(17); 
 }
 if(count == 14){
    index = 15;
    audio.PlayOneShot(clipArray[15]);
    count = 4;
	Wait(6);
 }
  if(count == 15){
    index = 16;
    audio.PlayOneShot(clipArray[16]);
    count = 4;
	Wait(12);
 }
  if(count == 16){
    index = 17;
    audio.PlayOneShot(clipArray[17]);
    count = 4;
	Wait(5);
 }
  if(count == 17){
    index = 18;
    audio.PlayOneShot(clipArray[18]);
    count = 4;
	Wait(6);
 }
  if(count == 18){
    index = 19;
    audio.PlayOneShot(clipArray[19]);
    count = 4;
	Wait(3);
 }
  if(count == 19){
    index = 20;
    audio.PlayOneShot(clipArray[20]);
    count = 4;
	Wait(4);
 }
  if(count == 20){
    index = 21;
    audio.PlayOneShot(clipArray[21]);
    count = 4;
	Wait(11);
 }
  if(count == 21){
    index = 22;
    audio.PlayOneShot(clipArray[22]);
    count = 4;
	Wait(28);
 }
  if(count == 22){
    index = 23;
    audio.PlayOneShot(clipArray[23]);
    count = 4;
	Wait(5);
 }
  if(count == 23){
    index = 25;
    audio.PlayOneShot(clipArray[25]);
    count = 4;
	Wait(20);
 }
  if(count == 24){
    index = 24;
    audio.PlayOneShot(clipArray[24]);
    count = 4;
	Wait(8);
 }
  if(count == 25){
    index = 26;
    audio.PlayOneShot(clipArray[26]);
    count = 4;
	Wait(3);
 }
  if(count == 26){
    index = 27;
    audio.PlayOneShot(clipArray[27]);
    count = 4;
	Wait(3);
 }
  if(count == 27){
    index = 28;
    audio.PlayOneShot(clipArray[28]);
    count = 4;
	Wait(18);
 }
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
  if(index == 10)
    count = 10;
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
  if(index == 4 || index == 6 || index == 8 || index == 9 || index == 11 || index == 12 || index == 13 || 
     index ==23 || index == 24 || index == 25 || index == 27){
    isButtonVisible = true;
    if(index != 4)
    audio.PlayOneShot(clipArray[7]);
    }
}

