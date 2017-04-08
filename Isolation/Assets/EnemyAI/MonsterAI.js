#pragma strict

var speed = 2;
var sightDist = 1000;
var centersList;
var previousPreviousTarget : GameObject;
var previousTarget : GameObject;
var currentTarget : GameObject;
var hero : GameObject;

function Start () {

	var centers : GameObject[];

	centers = GameObject.FindGameObjectsWithTag("roomCenter");
	hero = GameObject.FindWithTag("Player");

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

	var rayCastBool = findHero();

	Debug.Log(rayCastBool.transform.gameObject);

	if(rayCastBool.transform.gameObject === hero){

		Debug.Log("seeking hero");

		seekHero();

		previousPreviousTarget = previousTarget;
		previousTarget = currentTarget;
		currentTarget = findNearestCenter();
	} else {

		Debug.Log("seeking center");
		seek(currentTarget);

	}
}

function findHero() {
	var hit : RaycastHit;

	var direction  = (hero.transform.position - transform.position);
	direction = direction.normalized;
	Debug.DrawLine(transform.position, hero.transform.position, Color.red);

	Physics.Raycast(transform.position, direction, hit, sightDist);


	return hit;
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

function seekHero () {

	var seekVector = (hero.transform.position - transform.position);
	var seekVectorNorm = seekVector.normalized;
	transform.position += (seekVectorNorm *speed*.01);

	Debug.DrawLine(transform.position, hero.transform.position, Color.red);
}
