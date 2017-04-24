using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class HeroMovement : MonoBehaviour
{

    public GameObject flashLight;
    public GameObject enemy;
    public GameObject winBox;
    private float lightDirection;
    private float inputDirection; //X Value of moveVector
    private float verticalacceleration; //Y Value of moveVector
    private Vector3 acceleration;
    private Vector3 velocity;
    private CharacterController controller;
    private bool wDown;
    private bool aDown;
    private bool sDown;
    private bool dDown;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

        acceleration = Vector3.zero;

        // w key
        if (Input.GetKeyDown("w"))
        {
            acceleration += new Vector3(0, 0, 1);
            wDown = true;
            print("w down");
        }
        if (Input.GetKeyUp("w"))
        {
            acceleration -= new Vector3(0, 0, 1);
            wDown = false;
            print("w up");
        }

        // s key
        if (Input.GetKeyDown("s"))
        {
            acceleration += new Vector3(0, 0, -1);
            sDown = true;
            print("s down");
        }
        if (Input.GetKeyUp("s"))
        {
            acceleration -= new Vector3(0, 0, -1);
            sDown = false;
            print("s up");
        }

        // d key
        if (Input.GetKeyDown("d"))
        {
            acceleration += new Vector3(1, 0, 0);
            dDown = true;
            print("d down");
        }
        if (Input.GetKeyUp("d"))
        {
            acceleration -= new Vector3(1, 0, 0);
            dDown = false;
            print("d up");
        }

        // a key
        if (Input.GetKeyDown("a"))
        {
            acceleration += new Vector3(-1, 0, 0);
            aDown = true;
            print("a down");
        }
        if (Input.GetKeyUp("a"))
        {
            acceleration -= new Vector3(-1, 0, 0);
            aDown = false;
            print("a up");
        }


        // flashlight direction
        if (wDown)
        {
            if (aDown)
            {
                lightDirection = 315;
            }
            else if (dDown)
            {
                lightDirection = 45;
            }
            else
            {
                lightDirection = 0;
            }
        }


        if (aDown)
        {
            if (wDown)
            {
                lightDirection = 315;
            }
            else if (sDown)
            {
                lightDirection = 225;
            }
            else
            {
                lightDirection = 270;
            }
        }


        if (sDown)
        {
            if (aDown)
            {
                lightDirection = 225;
            }
            else if (dDown)
            {
                lightDirection = 135;
            }
            else
            {
                lightDirection = 180;
            }
        }


        if (dDown)
        {
            if (wDown)
            {
                lightDirection = 45;
            }
            else if (sDown)
            {
                lightDirection = 135;
            }
            else
            {
                lightDirection = 90;
            }
        }



        velocity += acceleration;

        // update the rotation of the flashlight
        flashLight.transform.localEulerAngles = new Vector3(0, lightDirection, 0);

        // update position every frame
        transform.Translate((velocity * Time.deltaTime) * 15);

        // stop the hero from rotating on edges
        transform.localEulerAngles = new Vector3(0, 0, 0);

        // checking for player death
        if (Vector3.Distance(enemy.transform.position, transform.position) < 15)
        {
            print("Our hero has died!");
            SceneManager.LoadScene("youLose");

        }

        // checking for the player winning
        if (Vector3.Distance(winBox.transform.position, transform.position) < 15)
        {
            print("You win!");
            SceneManager.LoadScene("youWin");
        }



        // ALL BELOW CODE IS THROW AWAY CODE, PREVIOUSLY USED TO SOLVE BUGS.
        // INTENTION IS TO BE USED AS A REMINDER OF THINGS ALREADY ATTEMPTED TO SOLVE A KNOWN BUG.


        // sets the hero's y position to the default value over time
        /*
        Vector3 newPosition = new Vector3(0, 0.1f, 0);
        if(transform.position.y > 10.8f)
        {
            transform.position -= newPosition;
        } else if (transform.position.y < 10.8f) {
            transform.position += newPosition;
        }*/

        /*
        if (acceleration.x > 0)
        {
            acceleration.x -= 0.01f;
        }
        if (acceleration.x < 0)
        {
            acceleration.x += 0.01f;
        }
        if (acceleration.z > 0)
        {
            acceleration.z -= 0.01f;
        }
        if (acceleration.z < 0)
        {
            acceleration.z += 0.01f;
        }*/


    }
}
