
import React from 'react';
import Logo from '../../assets/imagens/Logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';


function Menu() {

return(
<nav className="Menu">
    <Link to= "/" >
        <img className= "Logo" src={Logo} alt="hfflix logo" />
    </Link>
    
   
</nav>
    );
}

export default Menu;

/*
 <Button as={Link} className ="ButtonLink" to="/cadastro/video">
    Novo Video
    </Button>
*/