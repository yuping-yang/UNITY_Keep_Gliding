#pragma strict

function Start () {

}

function Update () {

}
function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2,50,20),"Start")){
		Application.LoadLevel("s1");
	}
	
	if (GUI.Button(Rect(Screen.width/2,Screen.height/2+30,50,20),"Exit")){
		Application.Quit();
	}
}
