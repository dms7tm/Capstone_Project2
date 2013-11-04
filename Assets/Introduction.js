#pragma strict
var yes : AudioClip;
var no : AudioClip;
var intro2 : AudioClip;
var isButtonVisible  :  boolean  =  true;
var first : boolean = true;
var arr = new Array();

function Start () {

}

function OnGUI () {
 if (!audio.isPlaying && isButtonVisible){
   if(first){
     audio.PlayOneShot(intro2);
     first = false;
   }
   var oldColor = GUI.backgroundColor;
   GUI.backgroundColor = Color.blue;
   var y = GUI.Button(Rect (650,60,100,50), "Yes");
   GUI.backgroundColor = Color.red;
   var n = GUI.Button(Rect (650,180,100,50), "No");
   GUI.backgroundColor = oldColor;
    if (y) {  	  
   	 audio.PlayOneShot(yes);
   	 isButtonVisible = false;
   	 gameObject.SendMessage("WriteFile","Y1"); 
   	 gameObject.SendMessage("setPressed");
   }
    if(n) {
     audio.PlayOneShot(no);
     isButtonVisible = false;   	 
     gameObject.SendMessage("WriteFile","N1"); 
     gameObject.SendMessage("setPressed");
  }
   
}
}

