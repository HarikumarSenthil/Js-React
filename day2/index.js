class Task {
    constructor(id, title, completed = false){
    this.id = id ,
    this.title = title, 
    this.completed = completed
    }
    toggle(){
        this.completed = !this.completed
    }
}

let tasks = [];

const addTask = (title)=>{
    const id = Date.now();
    const task = new Task(id,title);
    tasks = [...tasks,task];
    logTasks('Task Added!!!...')
}


const toggleTask = (id)=>{
    const task = tasks.find(t=> t.id === id)
    task?.toggle();
    logTasks(`Toggles Task : ${id}`)
}

const deleteTask = (id)=>{
    tasks =  tasks.filter((t)=> t.id !== id)
     logTasks(`Deleted Task : ${id}`)
}

const logTasks = (msg)=>{
    console.log(msg)
    tasks.forEach(eachtask => {
        console.log(eachtask.id,eachtask.title,eachtask.completed) 
    });
}





// Task 1 added
addTask("Learn React Native")
addTask("Build a Project")
toggleTask(tasks[0].id)