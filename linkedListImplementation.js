class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    add(element)
    {
     
        var node = new Node(element);
       
        var current;
     
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
  
            while (current.next) {
                current = current.next;
            }
    
            current.next = node;
        }
        this.size++;
    }

insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        var node = new Node(element);
        var curr, prev;
  
        curr = this.head;
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
  
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
  
 
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    removeElement(element)
{
    var current = this.head;
    var prev = null;
  
    // iterate over the list
    while (current != null) {
  
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}
}
}