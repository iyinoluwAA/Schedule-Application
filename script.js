   let  todoLIst = []
   var newNumber = 0
   if(localStorage.users){
    todoLIst = JSON.parse(localStorage.getItem("users"))
}


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
     todoLIst.push(todoContainer)
      console.log(todoLIst);
      document.getElementById("Todo").value =''
      document.getElementById("TodoTwo").value = ''
      localStorage.setItem("users", JSON.stringify(todoLIst))
      window.location.href="result.html"
      
    }
    // displayITem()
   }
//    function displayITem(){
//     newTodo.value = Todo.value
//     newTodoTwo.value = TodoTwo.value
//     show.innerHTML = '';  
    
//     todoLIst.map(
//         (todoContainer,number)=>{
//           var time = new Date().toLocaleTimeString()
//           var date = new Date().toLocaleDateString()
  
//         show.innerHTML += `
//         <div class="card bg-secondary text-white " ">
//        <div class="card-body">
//        <h5 class="card-title"> ${number + 1}</h5>
//        <p class="card-text border-bottom border-dark">${todoContainer.inputTag} </p>
//        <p class="card-text border-bottom border-dark">${todoContainer.inputTagTwo}<br></p>
//        <p class="card-text border-bottom border-dark "> ${date} ${time}</p>
//        <a href="#" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square" onclick="edit(${number})"></i></a>
//        <a href="#" class="btn btn-danger"  onclick="delTodo(${number})"><i class="fa-solid fa-trash"></i></a>
//        </div>
//       </div>
//         `
//         }
//     )
//    }

