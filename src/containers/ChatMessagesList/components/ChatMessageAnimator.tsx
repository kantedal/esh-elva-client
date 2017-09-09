import * as React from 'react'
import Transition from 'react-transition-group/Transition'

interface ChatMessageAnimatorProps extends React.HTMLProps<HTMLDivElement> {
  in?: any
}

const ChatMessageAnimator: React.SFC<ChatMessageAnimatorProps> = ({in: inProp, children}) => {
  const defaultStyle = {
    transitionProperty: 'transform,opacity',
    transitionDuration: '500ms',
    transitionTimingFunction: 'ease',
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: 'translateY(-50px) scale(1.0)',
  }

  const transitionStyles = {
    entering: { opacity: 1, transform: 'translate(0px) scale(1)' },
    entered:  { opacity: 1, transform: 'translateY(0px) scale(1)' },
  }

  return (
    <Transition in={inProp} duration={500} timeout={500}>
      {(state) => <div style={{...defaultStyle, ...transitionStyles[state]}}>{children}</div>}
    </Transition>
  )
}

export default ChatMessageAnimator
