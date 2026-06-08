import React from 'react'

const AddTodo = () => {
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
    <form >

  <div class="mb-3">
    <label for="title" class="form-label">Todo Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Todo Description</label>
    <input type="text" class="form-control" id="description"/>
  </div>
  
  <button type="submit" class="btn btn-primary btn-success">Submit</button>
</form>
</div>
  )
}

export default AddTodo
