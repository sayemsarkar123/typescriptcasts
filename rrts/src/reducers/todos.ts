import { Action, ActionTypes, Todo } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo): Boolean => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};
