#pragma strict

public var mm : SceneScript;  		// Game Object: Platform Prefab
public var doors: GameObject[];
public var player : GameObject;
public var nearDoor : boolean;
public var success : boolean;

function Start () {
	nearDoor = false;
    mm = GameObject.Find("MenuManager").GetComponent(SceneScript); //ASK BAKER (GameManager doesn't exist in some scenes)
    doors = GameObject.FindGameObjectsWithTag("door");
    player = GameObject.Find("Hero");
}

function Update () {
	if(success == true){
	Debug.Log("SUCCESS");
	}

	nearDoor = false;
	if(!nearDoor){
		success = false;
	}

	for(var i=0; i<doors.Length; i++){
		if(Vector3.Distance(player.transform.position, doors[i].transform.position) <=20){
			//Debug.Log("NEASR");
			nearDoor = true;
			}
	}


	if (Input.GetKeyDown(KeyCode.Return) && nearDoor){
		var num = Random.Range(1,3);
		mm.AddScene(num);
		//Debug.Log(num);
	}

	if(GameObject.Find("Cube") != null){
		//Debug.Log("Won");
		Destroy(GameObject.Find("Cube"));
	}
}
