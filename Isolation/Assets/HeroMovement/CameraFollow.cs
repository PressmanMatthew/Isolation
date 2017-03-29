using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour {
    

    public Transform target;
    public float cameraSpeed = 10;
    public bool smoothFollow = true;
    private float yOffset = 10;

    // Use this for initialization
    void Start()
    {
        target = GameObject.FindGameObjectWithTag("Player").transform;
    }

    // Update is called once per frame
    void Update()
    {
        if (target)
        {
            Vector3 newPos = transform.position;
            newPos.x = target.position.x;
            newPos.z = target.position.z;

            if (!smoothFollow)
            {
                transform.position = newPos;
            }
            else
            {
                transform.position = Vector3.Lerp(transform.position, newPos, cameraSpeed * Time.deltaTime);
            }
            


            transform.position.Set(transform.position.x, transform.position.y, transform.position.z);
        }
    }
}