export interface User {
    activity: {
        registerDate: string,
        lastSeen: string
    },
    profile: {
        id: number
        name: string
    }
}