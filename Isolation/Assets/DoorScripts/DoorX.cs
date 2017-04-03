using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorX : BaseDoor {

    public GameObject player;
    private Vector3 initialPos;
    private bool open = false;
    private bool opened = false;

	// Use this for initialization
	void Start () {
        initialPos = this.transform.position;
	}
	
	// Update is called once per frame
	void Update () {
        if (open)
        {
            if(Vector3.Distance(this.transform.position, initialPos) < 17)
            {
                gameObject.transform.Translate(new Vector3(10f * Time.deltaTime, 0f, 0f));
            }
        }
        else if (!open)
        {
            if (Vector3.Distance(this.transform.position, initialPos) > 0.1)
            {
                gameObject.transform.Translate(new Vector3(-10f * Time.deltaTime, 0f, 0f));
            }
        }

        if (Input.GetKeyDown("e") && Vector3.Distance(player.transform.position, this.transform.position) < 15)
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
        if (!opened)
        {
            open = true;
            opened = true;
        }
    }

    public override void Close()
    {
        if (opened)
        {
            open = false;
            opened = false;
        }
    }
}
