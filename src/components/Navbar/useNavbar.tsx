import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function useNavbar() {
    // I don't set default activeTab state so the home tab won't be active forever for users with JS disabled
    const [activeTab, setActiveTab] = useState('');

    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;
        if (pathname === '/' || pathname === '') setActiveTab('home');
        else if (pathname.startsWith('/blog')) setActiveTab('blog');
        else if (pathname.startsWith('/about')) setActiveTab('about');
        else setActiveTab('');
    }, [pathname]);

    return { activeTab };
}

export default useNavbar;