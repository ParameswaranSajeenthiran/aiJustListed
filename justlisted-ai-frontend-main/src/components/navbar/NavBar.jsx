import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import logo from "../../assets/logo.png"
import { NAVITEM } from '../../utils/navitem/navItem'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import userIcon from "../../assets/profile/profile.png";
import { HouseSvg, LogOutSvg, MenuIconSvg, ProfileSvg, ReferralSvg } from '../../assets/icon'
import baseUrl from '../../baseURL'

function NavBar() {
    const navigate = useNavigate()
    const [profile, setprofile] = useState(false)
    const location = useLocation();
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const userImage = localStorage.getItem("userImage");
    const [navOpen, setnavOpen] = useState(false)
    const [count, setcount] = useState(0);
    useEffect(() => {
        if (token) {
            baseUrl
                .get("usermade/findall")
                .then((response) => {
                    setcount(response.data.data.length);
                })
                .catch((e) => {
                    console.log(e);
                });
        }

    }, []);
    const handleClick = async (id) => {
        const target = document.getElementById(id);
        setnavOpen(!navOpen)
        if (id.includes('/')) {
            navigate(id)
        } else {
            if (location.pathname === '/') {
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate("/")
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }

        }
    };
    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userImage');
        navigate("/")

    }
    return (
        <div className='navbar'>
            <div className="nav-container">
                <div className="nav-logo" onClick={() => navigate('/')}>
                    <img src={logo} />
                </div>
                <div className="nav-item">
                    <div className={`nav-links ${navOpen ? "mobile-navopen " : "mobile-navclose"}`} >
                        {NAVITEM.map((ITEM, i) => (
                            <NavLink key={i} to={ITEM.PATH}
                                className={({ isActive }) =>
                                    isActive ? "nav-buttonactive nav-button" : "nav-button"
                                }>
                                {ITEM.TITLE}
                            </NavLink>

                        ))}
                    </div>
                    {token !== null && token?.length > 10 ?
                        <div className="houses">
                            <div className="house">
                                {count}
                                <HouseSvg />
                            </div>
                            <div className="userImage" onClick={() => setprofile(e => !e)}>
                                {((userName != null && userName?.length > 10) ? userName?.slice(0, 10) + "..." : userName?.slice(0, 10)) ?? "user"}
                                {userImage ? <img src={`${process.env.REACT_APP_API}${userImage}`} /> : <img src={userIcon} />}
                                {profile ?
                                    <ul>
                                        <li onClick={() => navigate("/profile")}><ProfileSvg />Profile</li>
                                        <li onClick={() => navigate("/referral")}><ReferralSvg />Referral</li>
                                        <li onClick={() => logOut()}><LogOutSvg />Logout</li>
                                    </ul>
                                    : null}

                            </div>
                            <MenuIconSvg className="menuhumber" onClick={() => setnavOpen(!navOpen)} />

                        </div> :
                        <div className="auth-buttons">
                            <button className='login' onClick={() => navigate('/login')}>LogIn</button>
                            <button className='start-for-free' onClick={() => navigate('/register')}>Start for Free</button>
                            <MenuIconSvg className="menuhumber" onClick={() => setnavOpen(!navOpen)} />
                        </div>

                    }
                </div>
            </div>

        </div >
    )
}

export default NavBar
