
public var card1 : GameObject;  		// Game Object: Platform Prefab
public var card2 : GameObject;  		// Game Object: Platform Prefab
public var card3 : GameObject;  		// Game Object: Platform Prefab
public var card4 : GameObject;  		// Game Object: Platform Prefab
public var cardBlank : GameObject;  	// Game Object: Platform Prefab

private var cards : GameObject[];		//array to hold all cards

private var cardWidth: float;
private var cardHeight: float;

//window size is 740, 560
//740/5 = 148
function Start () {

	var render = card1.GetComponent("Renderer"); //save the width and height of cards
	cardWidth = render.bounds.size.x/2;
	cardHeight = render.bounds.size.z/2;

	for(var i=0; i<8; i++){ //create teh cards
		if(i<2)
			Instantiate(card1, Vector3(i*2, 0, 0), Quaternion.Euler(90f,0,0));
		else if(i<4)
			Instantiate(card2, Vector3(i*2, 0, 0), Quaternion.Euler(90f,0,0));
		else if(i<6)
			Instantiate(card3, Vector3(i*2-8, 0, -2.5), Quaternion.Euler(90f,0,0));
		else
			Instantiate(card4, Vector3(i*2-8, 0, -2.5), Quaternion.Euler(90f,0,0));
	}

	cards = GameObject.FindGameObjectsWithTag("Card"); //save all cards to the array

	Shuffle(); 

	Hide();
	
}

function Update () {
	if(Input.GetMouseButtonDown(0))
		OnMouseDown();
}

function Shuffle(){
	for(var i=0; i<cards.length/2; i++){
		var holder1 = cards[i].transform.position;

		var rand = Random.Range(0, cards.length);
		if(i == rand)
			rand = Random.Range(0, cards.length);

		var holder2 = cards[rand].transform.position;

		cards[i].transform.position = holder2;
		cards[rand].transform.position = holder1;
	}
}

function Hide(){ //puts a blank card over the front facing ones
	for(var i=0; i<cards.length; i++){
		Instantiate(cardBlank, Vector3(cards[i].transform.position.x, 0.01, cards[i].transform.position.z), Quaternion.Euler(90f,0,0));
	}
}

public function OnMouseDown(){ //checks the position of the mouse when clicked
	if(Input.mousePosition.x < 740/4 && Input.mousePosition.y < 560/2)
		Debug.Log("1st bottom");
	else if(Input.mousePosition.x < 740/4 && Input.mousePosition.y > 560/2)
		Debug.Log("1st top");
	else if(Input.mousePosition.x < 740/2 && Input.mousePosition.y < 560/2)
		Debug.Log("2nd bottom");
	else if(Input.mousePosition.x < 740/2 && Input.mousePosition.y > 560/2)
		Debug.Log("2nd top");
	else if(Input.mousePosition.x > 740-(740/4) && Input.mousePosition.y < 560/2)
		Debug.Log("4th bottom");
	else if(Input.mousePosition.x > 740-(740/4) && Input.mousePosition.y > 560/2)
		Debug.Log("4th top");
	else if(Input.mousePosition.x > 740/2 && Input.mousePosition.y < 560/2)
		Debug.Log("3rd bottom");
	else if(Input.mousePosition.x > 740/2 && Input.mousePosition.y > 560/2)
		Debug.Log("3rd top");
}