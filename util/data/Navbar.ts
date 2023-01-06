import { StaticImageData } from "next/image"
import Home from '../../public/home-w.webp'
import Forum from '../../public/forum-w.webp'
import Resource from '../../public/resource-w.webp'
import Activity from '../../public/activity-w.webp'

type NavLinks = {
    links: Array<{
        label: string,
        imgSrc: StaticImageData,
        url: string
    }>
    dropdowns: Array<{
        label: string,
        imgSrc: StaticImageData,
        url: string,
        items: Array<{
            label: string,
            url: string
        }>
    }>
}

export const NavLinkData: NavLinks = {
    links: [
        { label: 'Home', imgSrc: Home, url: '/'}
    ],
    dropdowns: [
        { 
            label: 'Forum', 
            imgSrc: Forum, 
            url: '/forum',
            items: [
                { label: 'New Threads', url: '/forum/threads' },
                { label: 'New Posts', url: '/forum/posts' },
                { label: 'Search Forums', url: '/forum/search' }
            ]
        },
        { 
            label: 'Resource', 
            imgSrc: Resource, 
            url: '/resources',
            items: [
                { label: 'Latest Reviews', url: '/activity'},
                { label: 'Search Resources', url: '/search'}
            ]
        },
        { label: 'Activity', 
            imgSrc: Activity, 
            url: '/activity',
            items: [
                { label: 'Latest Posts', url: '/activity'},
                { label: 'Latest Media', url: '/activity'},
                { label: 'Latest Comments', url: '/activity'},
                { label: 'Latest Blogs', url: '/activity'},
                { label: 'Newest Users', url: '/activity'}
            ]
        }
    ]
}