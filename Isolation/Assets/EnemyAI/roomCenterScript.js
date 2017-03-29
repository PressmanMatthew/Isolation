#pragma strict

var neighborN: GameObject;
var neighborE: GameObject;
var neighborS: GameObject;
var neighborW: GameObject;
var neighbors = new Array();

function Start () {

	if(neighborN){
		neighbors.Push(neighborN);
	}
	if(neighborE){
		neighbors.Push(neighborE);
	}
	if(neighborS){
		neighbors.Push(neighborS);
	}
	if(neighborW){
		neighbors.Push(neighborW);
	}

}

function Update () {
	
}

function next(previousTarget: GameObject){
	var nextTarget : GameObject;

	var nextRand = Random.value*neighbors.length;
	var nextNum = Mathf.Floor(nextRand);

	Debug.Log(nextNum);

	nextTarget = neighbors[nextNum];

	if(nextTarget == previousTarget){
		nextNum++;

		if(nextNum >=neighbors.length){
			nextNum = 0;
		}

		nextTarget = neighbors[nextNum];
	}

	return nextTarget;
}