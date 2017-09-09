import { combineReducers, Reducer } from 'redux'
import todos from './todos'
import chatMessages, {ChatMessagesState} from './chatMessages';
import chatTextField, {ChatTextFieldState} from './chatTextField'
import chatServer, {ChatServerState} from './chatServer';

export interface RootState {
  todos: TodoStoreState
  chatTextField: ChatTextFieldState
  chatServer: ChatServerState
  chatMessages: ChatMessagesState
}

export default combineReducers<RootState>({
  todos,
  chatTextField,
  chatServer,
  chatMessages,
})
