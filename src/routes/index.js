// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/following', component: Following, name: 'Following' },
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/upload', component: Upload, name: 'Upload', layout: HeaderOnly },
    { path: '/search', component: Search, name: 'Search', layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
