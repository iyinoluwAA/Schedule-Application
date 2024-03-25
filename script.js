   var  todoLIst = []
   var newNumber = 0



   function submitBtn() {
    var inputTag = document.getElementById('Todo').value
    if (inputTag === ''){
      err.style.display = 'block'
      
    } else {
      err.style.display = 'none'
      errnoItem.style.display = 'none'
      noItem.style.display = 'none'
     todoLIst.push(inputTag)
      console.log(todoLIst);
     displayITem()
     document.getElementById("Todo").value =''
    }
   }
   function displayITem(){
    show.innerHTML = '';  
    
    todoLIst.map(
        (items,number)=>{
        show.innerHTML += `
        <div class="card" style="width: 10rem;">
       <div class="card-body">
       <h5 class="card-title"> ${number + 1}</h5>
       <p class="card-text">${items} </p>
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
    if (newTodo.value == "") {
        alert("No way")
    } else {
        var newValue = document.getElementById('newTodo').value
        todoLIst.splice(newNumber, 1, newValue)
       displayITem()
    }
}
