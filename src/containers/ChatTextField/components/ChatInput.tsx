import * as React from 'react'
import styled from 'styled-components'

interface ChatInputProps extends React.HTMLProps<HTMLInputElement> {
  inputValue: string
}

const ChatInput: React.SFC<ChatInputProps> = ({inputValue, ...props}) => {
  const inputRefAssignment = (input) => inputValue === '' && input && input.blur()
  return <input {...props} value={inputValue} />
}

// language=SCSS
const StyledChatInput = styled(ChatInput)`
  & {
    width: calc(100% - 20px);
    height: ${(props: ChatInputProps) => '50px'};
    outline: none;
    border: 0px;
    font-size: 17px;
    padding-left: 10px;
    padding-right: 10px;
    ::-webkit-input-placeholder {
       text-align: center;
       font-size: 20px;
    }
  }
`

export default StyledChatInput
