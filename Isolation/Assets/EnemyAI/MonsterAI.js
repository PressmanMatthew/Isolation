#pragma strict

var speed = 2;
var centersList;
var previousPreviousTarget : GameObject;
var previousTarget : GameObject;
var currentTarget : GameObject;

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
		previousPreviousTarget = previousTarget;
		previousTarget = currentTarget;
		currentTarget = findNearestCenter();
	}

	seek(currentTarget);
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

function findNextCenter() {

	var nextTarget : GameObject;

	//Debug.Log(currentTarget.GetComponents(Component)[1]);
	//Debug.Log(currentTarget.GetComponents(roomCenterScript));
	//var currentScript = currentTarget.GetComponents(roomCenterScript) as roomCenterScript;
	var currentScript = currentTarget.GetComponent(typeof(roomCenterScript))as roomCenterScript;

	nextTarget = currentScript.next(previousPreviousTarget);

	return nextTarget;
}

function seek (target : GameObject) {

	var seekVector = (target.transform.position - transform.position);
	var seekVectorNorm = seekVector.normalized;
	transform.position += (seekVectorNorm *speed*.01);

	if(seekVector.sqrMagnitude < 3){
		previousPreviousTarget = previousTarget;
		previousTarget = currentTarget;
		currentTarget = findNextCenter();
	}

	Debug.DrawLine(transform.position, target.transform.position, Color.red);
}