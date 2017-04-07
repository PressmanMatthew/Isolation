#pragma strict
public var controller : GameObject;
public var container : GameObject;
public var targ : GameObject;
private var rand : float;
private var score : int;
public var mm : SceneScript;  				// Game Object: Platform Prefab
private var cam : GameObject;

function Start () {
	rand = Random.Range(-100,100);
	container.transform.Rotate(Vector3.up * rand);
    mm = GameObject.Find("MenuManager").GetComponent(SceneScript); //ASK BAKER (GameManager doesn't exist in some scenes)
	score = 0;


	cam = GameObject.Find("Main Camera");
	controller.transform.position.x += cam.transform.position.x;
	container.transform.position.x += cam.transform.position.x;
	GameObject.Find("Plane").transform.position.x += cam.transform.position.x;
	controller.transform.position.z += cam.transform.position.z;
	container.transform.position.z += cam.transform.position.z;
	GameObject.Find("Plane").transform.position.z += cam.transform.position.z;
}

function Update () {
	if (Input.GetKey(KeyCode.LeftArrow)){
		controller.transform.Rotate(Vector3.up * Time.deltaTime* -100);
	}
	else if (Input.GetKey(KeyCode.RightArrow)){
		controller.transform.Rotate(Vector3.up * Time.deltaTime* 100);
	}

	if(Input.GetKeyDown(KeyCode.Space)){
		var cursor = GameObject.Find("selecter");

		Debug.Log(targ.GetComponent.<Lock_TargetScript>().inTheZone);

		if(targ.GetComponent.<Lock_TargetScript>().inTheZone == true){
			Debug.Log("WON");
			score++;
			rand = Random.Range(-100,100);
			container.transform.Rotate(Vector3.up * rand);
		}
	}
	if(score >=3 || Input.GetKeyDown(KeyCode.Q)){
			GameObject.Find("GameManager").GetComponent(Temp_GM).success = true;
		mm.UnloadScene(2);
	}
}
