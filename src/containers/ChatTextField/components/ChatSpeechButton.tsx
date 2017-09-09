import * as React from 'react'
import styled from 'styled-components'
import {IconButton} from 'material-ui';

declare const webkitSpeechRecognition

interface ChatSpeechButtonProps extends React.HTMLProps<HTMLDivElement> {
}

const ChatSpeechButton: React.SFC<ChatSpeechButtonProps> = ({...props}) => {
  const startDictation = () => {
    console.log(window.hasOwnProperty('webkitSpeechRecognition'))
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      const recognition = new webkitSpeechRecognition()

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = 'en-US'
      recognition.start()

      recognition.onresult = (e) => {
        console.log(e)
      }

      recognition.onerror = (e) => {
        console.log('error', e)
        recognition.stop()
      }
    }
  }
  return (
    <div {...props}>
      <IconButton onClick={startDictation} color='accent'>
        <i className='material-icons'>mic</i>
      </IconButton>
    </div>
  )
}

// language=SCSS
const StyledChatSpeechButton = styled(ChatSpeechButton)`
  & {
    width: 60px;
    height: 50px;
    display: unset;
    position: absolute !important;
    left: 5px !important;
  }
`

export default StyledChatSpeechButton
