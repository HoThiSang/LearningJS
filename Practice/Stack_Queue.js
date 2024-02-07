function createStack(){
    const stack = [];
    function getTop(){
        return stack.length>0 ? stack[stack.length-1] : undefined;
    }
    function getSize(){
        return stack.length;
    }
    function isEmpty(){
        return stack.length===0;
    }
    function push(data){
        stack.push(data);
    }
    function pop(){
        return stack.pop();
    }
    return {
        getTop,
        getSize,
        isEmpty,
        push,
        pop,
    };

    
}

// Tạo đối tượng stack
const myStack = createStack();

// Thử nghiệm các phương thức
console.log("Is stack empty?", myStack.isEmpty()); // true

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log("Top of the stack:", myStack.getTop()); // 3
console.log("Stack size:", myStack.getSize()); // 3
console.log("Is stack empty?", myStack.isEmpty()); // false

console.log("Pop element:", myStack.pop()); // 3
console.log("Top of the stack after pop:", myStack.getTop()); // 2
console.log("Stack size after pop:", myStack.getSize()); // 2
console.log("Is stack empty after pop?", myStack.isEmpty()); // false

// Tiếp tục thêm và loại bỏ phần tử để kiểm tra
myStack.push(4);
console.log("Top of the stack after push:", myStack.getTop()); // 4
console.log("Stack size after push:", myStack.getSize()); // 3

myStack.pop();
console.log("Top of the stack after pop:", myStack.getTop()); // 2
console.log("Stack size after pop:", myStack.getSize()); // 2

//------------------Queue--------------------------
function createQueue(){
    const queue = [];
    function getFront(){
        return queue.length > 0 ? queue[0] : undefined;
    }
    function getBack(){
        return queue.length > 0 ? queue[queue.length-1] : undefined;
    }
    function getSize(){
        return queue.length;
    }
    function enqueue(data){
        queue.push(data);
    }
    function dequeue(){
        return queue.shift();
    }
    return {
        getFront,
        getBack,
        getSize,
        enqueue,
        dequeue,
    };
}