import { combineReducers, Reducer } from 'redux'
import todos from './todos'
import chatMessages, {ChatMessagesState} from './chatMessages';
import chatTextField, {ChatTextFieldState} from './chatTextField'

export interface RootState {
  todos: TodoStoreState
  chatTextField: ChatTextFieldState
  chatMessages: ChatMessagesState
}

export default combineReducers<RootState>({
  todos,
  chatTextField,
  chatMessages,
})
