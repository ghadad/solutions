class Node {
    constructor() {
      this.data = 0;
      this.next = null;
    }
  }

  // Function to common nodes which have
  // same value node(s) both list
  function countCommonNodes(head1, head2) {
    var current1 = head1;
    var current2 = head2;
    var count = 0;
    var map = [];
    while (current1 != null) {
      map.push(current1.data);
      current1 = current1.next;
    }

    while (current2 != null) {
      if (map.includes(current2.data)) count++;
      current2 = current2.next;
    }
    return count;
  }

  /* Utility function to insert a node at the beginning */
  function push(head_ref, new_data) {
    var new_node = new Node();
    new_node.data = new_data;
    new_node.next = head_ref;
    head_ref = new_node;

    return head_ref;
  }

  /* Utility function to print a linked list */
  function printList(head) {
    while (head != null) {
        console.log(head.data + " ");
      head = head.next;
    }
    console.log("<br>");
  }

  /* Driver code */
  var head1 = null;
  var head2 = null;

  /* Create following linked list
List A = 3 . 4 . 12 . 10 . 17
*/

  head1 = push(head1, 17);
  head1 = push(head1, 10);
  head1 = push(head1, 12);
  head1 = push(head1, 4);
  head1 = push(head1, 3);

  // List B = 10 . 4 . 8 . 575 . 34 . 12
  head2 = push(head2, 12);
  head2 = push(head2, 34);
  head2 = push(head2, 575);
  head2 = push(head2, 8);
  head2 = push(head2, 4);
  head2 = push(head2, 10);

  // print list A
  console.log("Given Linked List A: <br>");
  printList(head1);

  // print list B
  console.log("Given Linked List B: <br>");
  printList(head2);

  // call function for count common node
  var count = countCommonNodes(head1, head2);

  // print number of common node in both list
  console.log("Number of common node in both list is = " + count);
   
  // This code is contributed by rdtank.