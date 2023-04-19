import { Link } from 'react-router-dom';

import './PrincipalButton.scss';

function PrincipalButton({ buttonName, redirectionName, classButtonName }) {
    return (
        <Link className={`principal_button ${classButtonName}`} to={`./${redirectionName}`}>
            {buttonName}
        </Link>
    )
}

export default PrincipalButton