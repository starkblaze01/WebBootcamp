var todos = [];
window.setTimeout(function(){
    var input = prompt("What would you like to do?");

    while(input !== "quit"){
        //handle input
        if(input === "list"){
            console.log(todos);
        } else if(input === "new") {
            //ask for new todos
            var newTodo = prompt("Enter new todo:");
            //add to todos array
            todos.push(newTodo);
        }
        // ask again for new input
        var input = prompt("What would you like to do?");    
    }
    console.log("OK, YOU QUIT THE APP!");
    
},500);
