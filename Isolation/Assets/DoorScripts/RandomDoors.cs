using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomDoors : MonoBehaviour {

    private List<BaseDoor> Children;
    public int minOpen;
    public int maxOpen;

    // Use this for initialization
    void Start () {
        Children = new List<BaseDoor>();

        foreach (BaseDoor child in gameObject.GetComponentsInChildren<BaseDoor>())
        {
            if (child.tag == "door")
            {
                Children.Add(child);
            }
        }

        int rand = Random.Range(minOpen, maxOpen);

        for (int i = 0; i < rand; i++)
        {
            int randDoor = Random.Range(0, Children.Count);

            Children[randDoor].Unlock();
            Children[randDoor].Open();
            Children.RemoveAt(randDoor);
        }
    }
}
