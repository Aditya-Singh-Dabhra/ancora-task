import { React, useRef, useState } from 'react';
import './table.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, Snackbar } from '@mui/material';

const headerData = ['Name', 'CRN', 'Group', 'Billing', 'Action'];

const Data = [
    [{ name: 'abc', email: 'abc@abc.com', img: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' }, 'abc', 'abc', 'abc', true],
    [{ name: 'mnl', email: 'mnl@mnl.com', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0YPNvDPMgqcsDb48GCzTudWD3v_K0hP_Ok09gr7W&s' }, 'def', 'def', 'def', true],
    [{ name: 'jkl', email: 'jkl@jkl.com', img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' }, 'ghi', 'ghi', 'ghi', true],
    [{ name: 'def', email: 'def@def.com', img: 'https://www.w3schools.com/w3css/img_lights.jpg' }, 'jkl', 'jkl', 'jkl', true]

];


const Table = () => {
    const [anchorEle, setAnchorEle] = useState(null);
    const [snackbar, setSnackBar] = useState(false)

    const clickDot = (e) => {
        setAnchorEle(e.currentTarget);
    }

    const closeMenu = () => {
        setAnchorEle(null);
    }

    const openSnackBar = () => {
        setSnackBar(true);
        closeMenu();
    }
    const closeSnackBar = () => {
        setSnackBar(false);
    }
    return (
        <div className="table-outer-wrapper">
            <div className="table-header-wrapper" >
                {
                    headerData.map((ele, index) => {
                        return <span key={index} className="header-data" style={{ width: `${100 / headerData.length}%` }}>{ele}</span>
                    })
                }
            </div>
            {
                Data.map((row, index) => {
                    return <div className="row-wrapper" key={index}>
                        {
                            row.map((data, index) => {
                                if (index !== 0 && index <= 3) {
                                    return <div key={index} className="row-data" style={{ width: `${100 / row.length + 1}%` }}>
                                        <span>{data}</span>
                                    </div>
                                }

                                if (index > 3) {
                                    return <div key={index} className="row-data" style={{ width: `${100 / row.length + 1}%` }}>
                                        <span onClick={clickDot}><MoreVertIcon /></span>

                                    </div>
                                }

                                return <div key={index} className="row-data" style={{ width: `${100 / row.length + 1}%` }}>
                                    <div className="center">
                                        <img height="30px" width="30px" style={{ borderRadius: '15px' }} src={data.img} alt="" />
                                    </div>
                                    <div className="column">
                                        <span >{data.name}</span>
                                        <span style={{ fontSize: '0.7rem', color: 'grey', }}>{data.email}</span>
                                    </div>
                                </div>


                            })
                        }
                        <Menu anchorEl={anchorEle} open={anchorEle ? true : false} onClose={closeMenu}>
                            <MenuItem onClick={openSnackBar}>See Details</MenuItem>
                            <MenuItem onClick={openSnackBar}>Wallet History</MenuItem>
                            <MenuItem onClick={openSnackBar}>Mark Importance</MenuItem>
                            <MenuItem onClick={openSnackBar}>Copy Deatils</MenuItem>
                            <MenuItem onClick={openSnackBar}>Reverse</MenuItem>
                        </Menu>
                    </div>
                })
            }
            <Snackbar
                open={snackbar}
                autoHideDuration={4000}
                onClose={closeSnackBar}
                message={'Thank You'}
            />
        </div>

    )
}

export default Table;