import * as React from 'react'
import styled from 'styled-components'

interface ChatHintTextProps extends React.HTMLProps<HTMLDivElement> {
  inputValue: string
  activeChat: boolean
}

const ChatHintText: React.SFC<ChatHintTextProps> = ({activeChat, inputValue, ...props}) => {
  return (
    <div {...props}>
      {activeChat ? 'Skriv ett meddelande...' : 'Vad behöver du hjälp med idag?'}
    </div>
  )
}

// language=SCSS
const StyledChatHintText = styled(ChatHintText)`
  & {
    width: calc(100% - 80px);
    text-align: ${({activeChat}) => activeChat ? 'left' : 'center'};
    font-family: Roboto,sans-serif;
    padding-left: 40px;
    padding-right: 40px;
    position: absolute;
    color: #555;
    font-size: 16px;
    font-weight: 200;
    pointer-events: none;
    transition-property: transform,opacity;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    opacity: ${(props) => props.inputValue === '' ? 1 : 0};
    transform: ${(props) => props.inputValue === '' ? 'translateY(0px)' : 'translateY(25px)'};
  }
`

export default StyledChatHintText
