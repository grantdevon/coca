export interface IChatProps {
    _id: number,
    text: string,
    createdAt: Date,
    user: User
}

interface User {
    _id: number,
    name: string,
    avatar: string
}