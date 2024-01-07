const initialState = {
    todoList=[{id:new Date().getTime(),text:"ToDo Redux",completed:false}]
}

export const todoReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}
