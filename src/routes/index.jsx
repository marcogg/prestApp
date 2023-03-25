import {Route, Routes} from 'react-router-dom'
// import { Login } from '../pages/Login'
import {Login, Dashboard} from '@/pages'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />

        </Routes>
    )
}

export default RoutesIndex
