export interface ForumThread {
    slug: Number,
    author: {
        name: String,
        userSlug: String
    },
    content: {
        title: String,
        body: String
    },
    activity: {
        createdAt: Date,
        updatedAt: Date,
        likes: Number
    },
    comments: [{
        user: {
            name: String,
            slug: Number
        },
        content: String,
        likes: Number
    }]
}

export interface ForumPost {
    user: {
        name: String,
        slug: Number
    },
    content: String,
    likes: Number
}

export type ForumPosts = ForumPost[]