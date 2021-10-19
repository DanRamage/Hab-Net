import HomePage from '@/components/home-page'
import Residents from '@/components/residents'
import PondOwners from '@/components/pond-owners'
import WaterUtilities from '@/components/water-utilities'
import Agriculture from '@/components/agriculture'
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/Residents',
        name: 'Residents',
        component: Residents
    },
    {
        path: '/PondOwners',
        name: 'PondOwners',
        component: PondOwners
    },
    {
        path: '/WaterUtilities',
        name: 'WaterUtilities',
        component: WaterUtilities
    },
    {
        path: '/Agriculture',
        name: 'Agriculture',
        component: Agriculture
    },

];

export default routes
