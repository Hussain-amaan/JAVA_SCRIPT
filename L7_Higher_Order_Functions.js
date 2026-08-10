// Higher-Order Functions


// Function as an Argument

function sayHello(){
    console.log("HeLLO");
}

function execute (fn){
    fn();
}


execute(sayHello);