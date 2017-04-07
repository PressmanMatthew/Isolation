#pragma strict
//public var cursor : GameObject;
public var inTheZone : boolean;

function Start () {
	inTheZone = false;
}

function Update () {

		inTheZone = false;
}

function OnTriggerStay( col : Collider){
	if(col.gameObject.name == "selecter"){
			inTheZone = true;
			//Debug.Log("Touching");
		}
	else{
		inTheZone = false;
	}

	
}