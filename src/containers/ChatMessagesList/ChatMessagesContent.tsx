import * as React from 'react';
import {ChatMessage} from '../../models/ChatMessage';
import ChatMessageAnimator from './components/ChatMessageAnimator'
import ChatMessageBox from './components/ChatMessageBox'
import ChatMessageLoader from './components/ChatMessageLoader'
import TG = require('react-transition-group/TransitionGroup')
const TransitionGroup: any = TG

export namespace ChatMessagesContent {
  export interface Props {
    messages: ChatMessage[]
    messageLoading: boolean
  }
}

class ChatMessagesContent extends React.Component<ChatMessagesContent.Props, {}> {
  componentDidUpdate(prevProps: ChatMessagesContent.Props, nextState: {}) {
    const prevMessages = prevProps.messages
    const { messages } = this.props
    if (prevMessages != null && messages != null) {
      if (prevMessages.length !== messages.length) {
        setTimeout(() => this.context.scrollArea.scrollBottom(), 10)
      }
    }
  }

  render() {
    const { messages, messageLoading } = this.props

    const messagesList = messages.map((message: ChatMessage, i: number) => (
      <ChatMessageAnimator key={i}>
        <div style={{order: -1, flexGrow: 1}}>
          <ChatMessageBox message={message} />
        </div>
      </ChatMessageAnimator>
    ))

    if (messageLoading) {
      messagesList.push((
        <ChatMessageAnimator key={-1}>
          <div style={{order: -1, flexGrow: 1}}>
            <ChatMessageLoader />
          </div>
        </ChatMessageAnimator>
      ))
    }

    {/*<div style={{ display: 'flex', flexDirection: 'column-reverse', marginTop: 'auto', minHeight: window.innerHeight - 100 }}>*/}
    return (
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto'  }}>
        <TransitionGroup>
          {messagesList}
        </TransitionGroup>
      </div>
    )
  }
}

const CMC: any = ChatMessagesContent
CMC.contextTypes = {
  scrollArea: React.PropTypes.object
}

export default CMC
