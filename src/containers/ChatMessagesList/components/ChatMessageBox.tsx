import * as React from 'react'
import styled from 'styled-components'
import {ChatMessage} from '../../../models/ChatMessage'
import Transition from 'react-transition-group/Transition'

interface ChatMessageBoxProps extends React.HTMLProps<HTMLDivElement> {
  message?: ChatMessage
}

const ChatMessageBox: React.SFC<ChatMessageBoxProps> = ({message, children, ...props}) => {
  return (
    <div {...props}>
      {message && !message.userMessage && message.message.translatedResponseMessage}
      {message && message.userMessage && message.message}
      {!message && children}
    </div>
  )
}

// language=SCSS
const StyledChatMessageBox = styled(ChatMessageBox)`
  & {
    float: ${({message}) => message && message.userMessage ? `right` : `left`};
    clear: both;
    display: block;
    position: relative;
    background-color: ${({message}) => !message ? `rgba(255, 255, 255, 0.75)` :  message && message.userMessage ? `rgba(255, 255, 255, 0.75)` : `rgba(255, 255, 255, 0.75)`};
    color:${({message}) => !message ? `#333` : message && message.userMessage ? `#333` : `#333`};
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.15);
    margin-right: 15px;
    margin-left: 15px;
    padding: 15px;
    max-width: 50%;
    font-family: Roboto,sans-serif;
    margin-top: 4px;
  }
`

export default StyledChatMessageBox
