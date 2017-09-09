import * as React from 'react'
import styled from 'styled-components'
import {IconButton} from 'material-ui';

interface ChatSendButtonProps extends React.HTMLProps<HTMLDivElement> {
  inputValue: string
}

const ChatSendButton: React.SFC<ChatSendButtonProps> = ({inputValue, onClick, ...props}) => {
  return (
    <div {...props}>
      <IconButton onClick={onClick} color='accent' aria-label='Add an alarm' type='submit'>
        <i className='material-icons'>send</i>
      </IconButton>
    </div>
  )
}

const StyledChatSendButton = styled(ChatSendButton)`
  width: 60px;
  height: 50px;
  display: unset;
  position: absolute !important;
  right: 5px !important;
  transition: opacity 0.3s ease;
  opacity: ${(props: ChatSendButtonProps) => props.inputValue !== '' ? 1 : 0};
`

export default StyledChatSendButton
