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
 if(count == 9){
    index = 10;
    audio.PlayOneShot(clipArray[10]);
    count =4;
    if(first)
      Wait(26);
//    else
//      Let's Review #1
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
  if(count == 27)
	doIt(28,18);
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

