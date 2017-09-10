export interface ChatMessage {
  timeSent: number
  userMessage: boolean
  message: {
    translatedResponseMessage: string
  }
}
