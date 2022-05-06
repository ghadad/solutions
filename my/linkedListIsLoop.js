function hasLoop(head) {

    if(first == null) 
        return false;

    let slow, fast; 

    slow = fast = head; 

    while(true) {

        slow = slow.next;  

        if(fast.next != null)
            fast = fast.next.next;
        else
            return false;         

        if(slow == null || fast == null) 
            return false;

        if(slow == fast) 
            return true;
    }
}