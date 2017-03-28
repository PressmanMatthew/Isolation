#pragma strict

var testObject = 2;
var centersList;
var currentTarget;

function Start () {

	var centers : GameObject[];

	centers = GameObject.FindGameObjectsWithTag("roomCenter");

	centersList = centers;

	var roomNum = 1;
	for(var i : GameObject in centers){
		i.name = "room"+roomNum+"center";

		roomNum++;
	}

}

function Update () {
	if(!currentTarget){
		print("Finding new center");
		currentTarget = findNearestCenter();
	}
}

function findNearestCenter () {
	var closest : GameObject;
	var dist = Mathf.Infinity;
	var position = transform.position;

	for(var i : GameObject in centersList){
		var diff = (i.transform.position - position);
		var curDistance = diff.sqrMagnitude;

		if(curDistance < dist) {
			closest = i;
			dist = curDistance;
		}
	}

	return closest;
}
