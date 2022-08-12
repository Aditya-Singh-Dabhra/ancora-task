import { React, useState } from 'react';
import CustomerManagment from '../mains/CustomerManagement/CustomerManagment';
import NotFound from '../shared/404/NotFound404';
import Header from '../shared/Header/Header';
import './layout.css';




const Layout = () => {
    const [currentSelectedpage, setCurrentSelectedPage] = useState('Customer Managment');
    return (
        <div className="layout">
            <Header currentValue={currentSelectedpage} updateValue={setCurrentSelectedPage} />
            <div className="main-content">
                {currentSelectedpage === 'Customer Managment' && <CustomerManagment />}
                {currentSelectedpage === 'Customer List' && <NotFound />}
                {currentSelectedpage === 'Groups' && <NotFound />}
                {currentSelectedpage === 'Profile' && <NotFound />}
            </div>

        </div>
    )
}

export default Layout;
