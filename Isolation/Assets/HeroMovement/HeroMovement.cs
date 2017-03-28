using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HeroMovement : MonoBehaviour {
    
    private float inputDirection; //X Value of moveVector
    private float verticalVelocity; //Y Value of moveVector
    private Vector3 moveVector;
    private CharacterController controller;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

        // w key
        if (Input.GetKeyDown("w"))
        {
            moveVector += new Vector3(0, 0, 1);
        }
        if (Input.GetKeyUp("w"))
        {
            moveVector -= new Vector3(0, 0, 1);
        }

        // s key
        if (Input.GetKeyDown("s"))
        {
            moveVector += new Vector3(0, 0, -1);
        }
        if (Input.GetKeyUp("s"))
        {
            moveVector -= new Vector3(0, 0, -1);
        }

        // d key
        if (Input.GetKeyDown("d"))
        {
            moveVector += new Vector3(1, 0, 0);
        }
        if (Input.GetKeyUp("d"))
        {
            moveVector -= new Vector3(1, 0, 0);
        }

        // a key
        if (Input.GetKeyDown("a"))
        {
            moveVector += new Vector3(-1, 0, 0);
        }
        if (Input.GetKeyUp("a"))
        {
            moveVector -= new Vector3(-1, 0, 0);
        }

        transform.Translate((moveVector * Time.deltaTime) * 15);
    }
}
