export type Message = {
    messageType: string
    type: 'text' | 'image' | 'video'
    content: string,
    from: number,
    from_user_name: string,
    target: string | number,
    time: number,
    isread: boolean
}

export type Conversation = {
    lastMessage: string,
    time: number,
    unreadCount: number,
    user_id: number,
    user_name: string,
    avatar: string
}

