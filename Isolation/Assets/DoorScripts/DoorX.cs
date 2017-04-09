using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorX : BaseDoor {

    public GameObject player;
    private Vector3 initialPos;
    private bool open = false;
    private bool opened = false;
    protected bool unlocked = false;
    public Light lt;
    private bool gameWon = false;

	// Use this for initialization
	void Start () {
        initialPos = this.transform.position;
        lt = lt.GetComponent<Light>();
	}
	
	// Update is called once per frame
	void Update () {
        gameWon = GameObject.Find("GameManager").GetComponent<Temp_GM>().success;

        if(gameWon && Vector3.Distance(initialPos, player.transform.position) < 25)
        {
            Unlock();
            Open();
        }

        if (open)
        {
            if(Vector3.Distance(this.transform.position, initialPos) < 17)
            {
                gameObject.transform.Translate(new Vector3(10f * Time.deltaTime, 0f, 0f));
            }
        }
        else if (!open)
        {
            if (Vector3.Distance(this.transform.position, initialPos) > 0.5)
            {
                gameObject.transform.Translate(new Vector3(-10f * Time.deltaTime, 0f, 0f));
            }
        }

        if (unlocked)
        {
            lt.color = Color.green;
        }
        else
        {
            lt.color = Color.red;
        }

        if (Input.GetKeyDown("e") && Vector3.Distance(player.transform.position, initialPos) < 15)
        {
            Open();
        }
        else if (Input.GetKeyDown("q") && Vector3.Distance(player.transform.position, initialPos) < 15)
        {
            Close();
        }
    }

    public override void Open()
    {
        if (!opened && unlocked)
        {
            open = true;
            opened = true;
        }
    }

    public override void Close()
    {
        if (opened && unlocked)
        {
            open = false;
            opened = false;
        }
    }

    public override void Unlock()
    {
        unlocked = true;
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.tag == "monster")
        {
            if(unlocked)
            {
                Open();
            }
            else
            {
                unlocked = true;
                Open();
                unlocked = false;
            }
            
        }
    }
}
