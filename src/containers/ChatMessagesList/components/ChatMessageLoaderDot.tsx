import * as React from 'react'
import styled, {keyframes} from 'styled-components';

interface ChatMessageLoaderDotProps extends React.HTMLProps<HTMLDivElement> {
  animationDelay: number
}

const ChatMessageLoaderDot: React.SFC<ChatMessageLoaderDotProps> = ({className, animationDelay, ...props}) => {
  return (
    <span className={className}>
      <i style={{ fontSize: '13px' }} className='material-icons'>&#xE836;</i>
    </span>
  )
}

// language=SCSS
const opacityAnim = keyframes`  
  0% {  opacity: 0; }
  50% { opacity: 1; }¨
  100% { opacity: 0; }
`

// language=SCSS
const StyledChatMessageLoaderDot = styled(ChatMessageLoaderDot)`
  & {
    animation: ${opacityAnim} 1.5s ease-in-out infinite;
    animation-delay: ${({animationDelay}) => animationDelay}s;
    opacity: 0;
    font-size: 13px;
  }
`

export default StyledChatMessageLoaderDot
