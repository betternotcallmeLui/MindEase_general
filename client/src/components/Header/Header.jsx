import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PrincipalButton from '../UI/PrincipalButton/PrincipalButton';

import './Header.scss'

function Header() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop < 100 && !isTop) {
                setIsTop(true);
            } else if (scrollTop >= 100 && isTop) {
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isTop]);

    const headerStyle = isTop ? 'me_header-top' : 'me_header'
    const buttonHeaderStyle = isTop ? 'principal_button--green' : 'principal_button--green_lighter'
    const buttonHeaderStyleSecondary = isTop ? 'principal_button--green_lighter' : 'principal_button--green'

    return (
        <header className={headerStyle}>
            <div className="header">
                <div className="header_container">
                    <div className="header_logo">
                        MindEase
                    </div>
                    <div className="header_links">
                        <Link className="header_link link   a" to="/directory">Directorio</Link>
                        <Link className="header_link link" to="/contact">Contacto</Link>
                        <Link className="header_link link" to="/tools">Herramientas</Link>
                        <Link className="header_link link" to="/about">Acerca de</Link>
                    </div>
                    <div className="header_buttons">
                        <PrincipalButton buttonName="Crear cuenta" redirectionName="signup" classButtonName={buttonHeaderStyle} />
                        <PrincipalButton buttonName="Iniciar Sesión" redirectionName="login" classButtonName={buttonHeaderStyleSecondary} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header