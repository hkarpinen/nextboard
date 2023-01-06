export interface ForumCardHref {
    label: string,
    href: string
}

export interface ForumCardItem {
    title: ForumCardHref,
    stats: {
        threads: ForumCardHref,
        posts: ForumCardHref
    },
    latest: {
        thread: ForumCardHref & {
            timestamp: string
        },
        user: ForumCardHref
    }
}

export interface ForumCard {
    header: string,
    items: Array<ForumCardItem>
}