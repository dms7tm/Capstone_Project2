#pragma strict
import System;
import System.IO;
  
function Start () {

}

function Update () {

}

function WriteFile (click: int){
  System.IO.File.AppendAllText("C:/Users/Kristen/Desktop/Prototype/InputLog",click + "," + Time.time+ Environment.NewLine);
}