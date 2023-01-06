import { useRouter } from "next/router"
import { useEffect, useState } from "react";

const useRoute = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<Array<{
        breadcrumb: string,
        href: string
    }>>([]);

    useEffect(() => {
        if(router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();
            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });
            setBreadcrumbs(pathArray);
        }
    }, [router]);

    return breadcrumbs;
}

export default useRoute;