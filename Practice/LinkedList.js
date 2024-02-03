function createLinkedList(){
    let head =null;
    function inserHead(newData){
        const newNode={
            data: newData,
            next: null
        }
        if(head==null){
          head = newData;
            return;
        }
        newNode.next=head;
        head= newNode;

    }
    function printList(){
        if(head==null) return ;
        let current = head;
        while(current!=null){
           console.log(current.data);
            current=current.next;
        }
    }
    return {
        inserHead,
        printList,
    };
    
    
}
const gnumberLinkedList = createLinkedList();
numberLinkedList.inserHead(6);
numberLinkedList.inserHead(5);
numberLinkedList.inserHead(4);
numberLinkedList.inserHead(3);
numberLinkedList.inserHead(2);
numberLinkedList.inserHead(1);

numberLinkedList.printList();

// ------------------------------------------------
// 12-04: Setup common methods for linked list
// - getHead()
// - getTail()
// - getSize()
// - findIndexByData()
// - findWithCallback()
function createLinkedList() {
    let head = null;

    function getHead() {
        return head;
    }

    function getTail() {
        if (head == null) return;
        let tail = head;
        while (tail.next != null) {
            tail = tail.next;
        }
        return tail;
    }

    function getSize() {
        if (head == null) return 0;
        let current = head;
        let count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }

    function findIndexByData(data) {
        if (head == null) return -1;
        let current = head;
        let i = 0;
        while (current != null) {
            if (current.data === data) return i;
            i++;
            current = current.next;
        }
        return -1;
    }

    function findWithCallback(callback) {
        if (head == null) return undefined;
        let current = head;
        let i = 0;
        while (current != null) {
            if (callback(current.data, i)) return current.data;
            i++;
            current = current.next;
        }
        return undefined;
    }

    function insertHead(newData) {
        const newNode = {
            data: newData,
            next: null
        };
        if (head == null) {
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }

    function printList() {
        if (head == null) return;
        let current = head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    return {
        getHead,
        getTail,
        getSize,
        findIndexByData, // Corrected function name
        findWithCallback,
        insertHead,
        printList
    };
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);

console.log(numberLinkedList.findWithCallback((x) => x % 2 === 0)); // --> 2
console.log(numberLinkedList.findWithCallback((x) => x > 5)); // --> undefined
numberLinkedList.printList();

//============cài đặt Linked List - Insert ===============
function createLinkedList(){
    let head = null;
    function getTail(){
        if(head==null) return null;
        let tail = head;
        while(tail.next != null){
            tail = tail.next;
        }
        return tail;
    }
}
    function insertHead(newData){
        const newNode = {
            data: newData,
            next: null,
        };
        if(head == null){
            head = newNode;
            return ;
        }
        function inserTail(){
            if(head= null) return null;
            let tail = head;
            while(tail.next!=null){
                tail = tail.next;
            }
            return tail;
        }
    }
    function insertBeforePosition(newData, position) {
      if(position <=0 || head ==null){
        insertHead(newData);
        return head;
      }
      let prev = head;
      let curr = head;
      let i=0;
      while(curr!=null && i<position){
        prev = curr;
        curr = curr.next ;
        i++;
      }
      
      // Fund node to insert 
      const newNode = {
       data: newData,
       next: curr, 
      };
      prev.next = newNode;
      return head;
    
}

// Cài đặt link cho cả trừ và sữa ạ 
// - removeHead()
// - removeTail()
// - removeAtPosition(position)
function removeHead() {
    if (head != null) head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) return null;
    // has only 1 item
    if (head.next == null) {
      head = null;
      return head;
    }
    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    secondLast.next = null;
    return head;
  }
  
  function removeAtPosition(position) {
    if (position <= 0 || head == null) return removeHead();
    // has only 1 item
    if (head.next == null) {
      head = null;
      return head;
    }
    let prev = head;
    let curr = head;
    let i = 0;
    while (curr.next !== null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = curr.next;
    return head;
  }

  // cài đặt composer with winiadi ô
  // - some(isValidFn)
// - every(isValidFn)

function some(isValidFn) {
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (isValidFn(current.data)) return true;
      // move to the next item
      current = current.next;
    }
    return false;
  }

  function every(isValidFn) {
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (!isValidFn(current.data)) return false;
      // move to the next item
      current = current.next;
    }
    return true;
  }