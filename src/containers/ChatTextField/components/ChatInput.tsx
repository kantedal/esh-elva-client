import * as React from 'react'
import styled from 'styled-components'

interface ChatInputProps extends React.HTMLProps<HTMLInputElement> {
  inputValue: string
  inputFocus: (focused: boolean) => void
}

const ChatInput: React.SFC<ChatInputProps> = ({inputValue, inputFocus, ...props}) => {
  const onKeyboardFocus = (e) => inputFocus(true)
  const onKeyboardBlur = (e) => inputFocus(false)
  return <input onFocus={onKeyboardFocus} onBlur={onKeyboardBlur} {...props} value={inputValue} />
}

// language=SCSS
const StyledChatInput = styled(ChatInput)`
  & {
    width: calc(100% - 80px);
    height: ${(props: ChatInputProps) => '40px'};
    outline: none;
    border: 0px;
    background: transparent;
    font-size: 16px;
    padding-left: 40px;
    padding-right: 40px;
    ::-webkit-input-placeholder {
       text-align: center;
       font-size: 20px;
    }
  }
`

export default StyledChatInput
