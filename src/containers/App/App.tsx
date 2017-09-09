import * as React from 'react'
import * as TodoActions from '../../actions/todos'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router'
import {RootState} from '../../reducers'
import {AppAnimatedBackground, AppChatContent, AppChatTextFieldWrapper, AppContent} from './App.style';
import ChatTextField from '../ChatTextField/ChatTextField'
import ChatMessagesList from '../ChatMessagesList/ChatMessagesList'
import AppHeader from './components/AppHeader'

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoItemData[]
    actions: typeof TodoActions
    activeChat: boolean
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, {}> {

  render() {
    const { activeChat } = this.props
    console.log(activeChat)
    return (
      <AppContent>
        <AppAnimatedBackground />
        <AppChatContent>
          <ChatMessagesList />
          {/*<div style={{position: 'absolute', width: '100%', height: '100%', top: 0}}>*/}
            {/*<AppHeader activeChat={activeChat} />*/}
          {/*</div>*/}
          {/*<div style={{position: 'absolute', width: '100%', height: '100%', top: 0}}>*/}
            <ChatTextField />
          {/*</div>*/}
        </AppChatContent>
      </AppContent>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    activeChat: state.chatTextField.activeChat,
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  }
}
