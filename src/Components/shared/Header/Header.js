import { React } from 'react';
import './Header.css';

const headerData = ['Customer Managment', 'Customer List', 'Groups', 'Profile'];

const Header = (props) => {
    const updateValue = (e) => {
        props.updateValue(e.currentTarget.innerText);
    }
    return (
        <div className="header-wrapper">
            {
                headerData.map((ele, index) => {
                    return <div key={index} className="link-wrapper"><span className="link" onClick={updateValue} style={props.currentValue === ele ? { color: 'green' } : {}}>{ele}</span></div>

                })
            }

            <div className="user-badge">
                <div className="user-info">
                    <span>Dummy</span>
                    <span style={{ fontSize: '0.7rem', color: 'grey' }}>Dumy@dummy.cim</span>
                </div>
                <div>
                    <img height="40px" width='40px' style={{ borderRadius: '20px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0oQH_rw513mNazmCb2vK2TRDKbTjtwXzSKGpheExZQ&s" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;