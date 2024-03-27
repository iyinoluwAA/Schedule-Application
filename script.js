   var  todoLIst = []
   var newNumber = 0



   function submitBtn() {
     if ((Todo.value && TodoTwo.value  )  === ''){
       err.style.display = 'block'
       
      } else {

        var todoContainer = {
           inputTag : document.getElementById('Todo').value,
           inputTagTwo : document.getElementById('TodoTwo').value
        }

        err.style.display = 'none'
      errnoItem.style.display = 'none'
      noItem.style.display = 'none'
     todoLIst.push(todoContainer)
      console.log(todoLIst);
      document.getElementById("Todo").value =''
      document.getElementById("TodoTwo").value = ''
    }
    displayITem()
   }
   function displayITem(){
    newTodo.value = Todo.value
    newTodoTwo.value = TodoTwo.value
    show.innerHTML = '';  
    
    todoLIst.map(
        (todoContainer,number)=>{
          var time = new Date().toLocaleTimeString()
          var date = new Date().toLocaleDateString()
  
        show.innerHTML += `
        <div class="card" ">
       <div class="card-body">
       <h5 class="card-title"> ${number + 1}</h5>
       <p class="card-text">${todoContainer.inputTag} </p>
       <p class="card-text">${todoContainer.inputTagTwo}<br> ${date} ${time}</p>
       <a href="#" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square" onclick="edit(${number})"></i></a>
       <a href="#" class="btn btn-danger"  onclick="delTodo(${number})"><i class="fa-solid fa-trash"></i></a>
       </div>
      </div>
        `
        }
    )
   }

   function delTodo(i){
    var confirmation = confirm("Are you sure you what to delete this item? if so click OK")
    if (confirmation == true){
      todoLIst.splice(i,1)
      displayITem()
    }
   }

   function edit(i) {
      newNumber = i
   }
   function editItem() {
    if ((newTodo.value && newTodoTwo.value) == "") {
        alert("No way")
    } else {
       var modalAll = {
        inputTag: document.getElementById("newTodo").value,
        inputTagTwo: document.getElementById("newTodoTwo").value
       }
        todoLIst.splice(newNumber, 1 , modalAll)
       displayITem()
    }
}
