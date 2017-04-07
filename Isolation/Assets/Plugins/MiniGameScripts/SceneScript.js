#pragma strict
import UnityEngine.SceneManagement;

function Start () {

}

/// Change Scene function: called through MenuManager in Button component
/// Closes all other scenes and opens target scenes by ID
public function ChangeScene (targetSceneID : int) {
	Debug.Log("ChangeScene called: #" + targetSceneID);
	SceneManager.LoadScene(targetSceneID, LoadSceneMode.Single);

}

public function AddScene (targetSceneID : int) {
	Debug.Log("AddScene called: #" + targetSceneID);
	SceneManager.LoadScene(targetSceneID, LoadSceneMode.Additive);
}

public function UnloadScene (targetSceneID : int) {
	Debug.Log("UnloadScene called: #" + targetSceneID);
	SceneManager.UnloadSceneAsync(targetSceneID);

}