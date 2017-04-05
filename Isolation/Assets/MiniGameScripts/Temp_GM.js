#pragma strict

public var mm : SceneScript;  		// Game Object: Platform Prefab

function Start () {
    mm = GameObject.Find("MenuManager").GetComponent(SceneScript); //ASK BAKER (GameManager doesn't exist in some scenes)
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Return)){
		mm.AddScene(1);
	}

	if(GameObject.Find("Cube") != null){
		Debug.Log("Won");
		Destroy(GameObject.Find("Cube"));
	}
}
