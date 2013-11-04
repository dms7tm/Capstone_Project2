#pragma strict
 var pressed : int;
 var first : boolean = true;
 var second : boolean = false;
 var repeatAudio : AudioClip;
 var transAudio : AudioClip;
 var yes : AudioClip;
 var no : AudioClip;
 var arr = new Array();
function Start () {
  
}

function OnGUI () {
  if(pressed == 1){
  if(first){
   audio.PlayOneShot(repeatAudio);
   first = false;
   playTransAudio();
   }
   GUI.backgroundColor = Color.green;
   var help = GUI.Button(Rect(750,0,100,50),"Repeat");
  if(second){
   var oldColor = GUI.backgroundColor;
   GUI.backgroundColor = Color.blue;
   var y = GUI.Button(Rect (650,60,100,50), "Yes");
   GUI.backgroundColor = Color.red;
   var n = GUI.Button(Rect (650,180,100,50), "No");
   GUI.backgroundColor = oldColor;
    if (y) {  	  
   	 audio.PlayOneShot(yes);
   	 gameObject.SendMessage("WriteFile","Y2"); 
   }
    if(n) {
     audio.PlayOneShot(no);
     gameObject.SendMessage("WriteFile","N2"); 
  }
  }     
   }
}

function setPressed (){
   yield WaitForSeconds(1);
   pressed = 1;
}

function playTransAudio() {
 yield WaitForSeconds(9.5);
  audio.PlayOneShot(transAudio);
 yield WaitForSeconds(12);
  second = true;
}