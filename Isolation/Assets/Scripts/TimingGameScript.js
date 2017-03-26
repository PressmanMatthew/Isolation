public var successWidth : float;			//set the starting width 
public var barSpeed : float;				//sets the starting speed

private var maxBar: GameObject ;			//the full bar
private var successBar: GameObject;			//the success bar
private var cursor: GameObject;				//the cursor

private var speed: float;					//speed of the cursor
private var leftMax: float;					//max movement left position
private var rightMax: float;				//max movement right position

private var successLeft: float;				//max success left position
private var successRight: float;			//max success right position
private var stopped : boolean;				//keeps track of whether the cursor is moving or not
private var scorred : boolean;				//tracks if the cursor stopped in teh green

function Start () {
	stopped = false;
	scorred = false;

	//----------------	create the bars
	maxBar = GameObject.CreatePrimitive(PrimitiveType.Plane);
	maxBar.transform.position = Vector3(0, 0, -4.02);
	maxBar.transform.localScale = Vector3(1,1,0.064); 
	maxBar.GetComponent.<Renderer>().material.color = Color.red;

	successBar = GameObject.CreatePrimitive(PrimitiveType.Plane);
	successBar.transform.position = Vector3(0, 0.001, -4.02);
	successBar.transform.localScale = Vector3((successWidth/10),1,0.064); 
	successBar.GetComponent.<Renderer>().material.color = Color.green;

	cursor = GameObject.CreatePrimitive(PrimitiveType.Plane);
	cursor.transform.position = Vector3(0, 0.002, -4.02);
	cursor.transform.localScale = Vector3(0.01,1,0.064); 
	cursor.GetComponent.<Renderer>().material.color = Color.black;

	//sets the speed of the cursor
	speed = barSpeed/100;

	var render = maxBar.GetComponent("Renderer");
	var render2 = successBar.GetComponent("Renderer");

	// sets bounds for the cursor to move between
	leftMax = maxBar.transform.position.x - render.bounds.size.x/2;
	rightMax = maxBar.transform.position.x + render.bounds.size.x/2;

	//sets success bounds
	successLeft = successBar.transform.position.x - render2.bounds.size.x/2;
	successRight = successBar.transform.position.x + render2.bounds.size.x/2;

}

function Update () {

	//----------------CURSOR MOVEMENT
	if(cursor.transform.position.x <= leftMax){
		speed *= -1;
	}
	else if(cursor.transform.position.x >= rightMax){
		speed *= -1;
	}

	cursor.transform.position.x += speed;

	//----------------INPUT HANDLING
	if (Input.GetKeyDown(KeyCode.Space) && !stopped){
		stopped = true;
		speed = 0;

		if(cursor.transform.position.x > successLeft && cursor.transform.position.x < successRight){
			barSpeed *= 1.25; //increases the speed of the cursor
			scorred = true;
			Debug.Log("WIN!");
		}
		else
			scorred = false;
	}
	else if(Input.GetKeyDown(KeyCode.Space) && stopped){
		if(scorred){	//the green bar ONLY shrinks if the player won
			var render2 = successBar.GetComponent("Renderer");

			successWidth *= 0.75F;
			successBar.transform.localScale = Vector3((successWidth/10),1,0.064);
			successLeft = successBar.transform.position.x - render2.bounds.size.x/2;
			successRight = successBar.transform.position.x + render2.bounds.size.x/2;
		}
		// resumes movement of the cursor
		stopped = false;
		speed = barSpeed/100;
	}

}
