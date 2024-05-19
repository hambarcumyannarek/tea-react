import { useLocation, useNavigate } from 'react-router-dom';
import './styles/navbar.css';
import { useCallback, useRef, useState } from 'react';
import logo from "../../images/logo.png";



export function Navbar({ productCount }) {
    const [active, setActive] = useState(false);
    const links = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    window.addEventListener('scroll', function (evn) {
        if (window.scrollY > 0) {
            setActive(true)
        } else {
            setActive(false);
        }
    })

    const onClick = useCallback((path) => {
        return () => {
            navigate(path)
        }
    }, [])

    return (
        <nav className={`navbar ${active ? 'active' : null}`}>
            <div className="navbarContainer container">
                <div className="logo">
                    <img src={logo} alt='...' />
                </div>
                <ul ref={links} className="links">
                    <li className={`link ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`} onClick={onClick('/')}><span>Գլխավոր</span></li>
                    <li className={`link ${location.pathname === '/shop' ? 'active' : ''}`} onClick={onClick('/shop')}><span>Առևտուր</span></li>
                    <li className='walletCartBtn' onClick={onClick('/wallet')}>
                        <div className='wlaletProductCount'>
                            <span>{productCount}</span>
                        </div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}