import { StaticImageData } from "next/image"
import Home from '../public/home-w.png'
import Forum from '../public/forum-w.png'
import Resource from '../public/resource-w.png'
import Activity from '../public/activity-w.png'

type ForumMenu = {
    label: string,
    items?: Array<ForumItem>,
    img: StaticImageData
    href: string
}

type ForumItem = {
    label: string,
    href: string
}

export const ForumMenus: Array<ForumMenu> = [
    { label: 'Home', img: Home, href: '/' },
    { label: 'Forums', img: Forum, href: '/forum', items: [
        { label: 'New posts', href: '/activity' },
        { label: 'Search Forums', href: '/search' }
    ]},
    { label: 'Resources', img: Resource, href: '/resources', items: [
        { label: 'Latest Reviews', href: '/activity' },
        { label: 'Search Resources', href: '/search' }
    ]},
    { label: 'Activity', img: Activity, href: '/activity', items: [
        { label: 'Latest Posts', href: '/activity' },
        { label: 'Latest Media', href: '/activity' },
        { label: 'Latest Comments', href: '/activity' } ,
        { label: 'Latest Blogs', href: '/activity' },
        { label: 'Newest Users', href: '/activity'}
    ]}
]