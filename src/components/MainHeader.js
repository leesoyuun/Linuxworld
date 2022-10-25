import React from 'react';
import './MainHeader.css';

function mainheader(){
    return(
        <header className='mainheader'>
            <nav className='nav'>
                <img id='nav-logo' src={require('../assets/img/Logo.jpg')}/>
                <input id='input'/>
                <ul>
                    <img id='check' src={require('../assets/img/check-mark.png')}/>
                    <li>출첵</li>
                </ul>
                <ul>
                    <img id='like' src={require('../assets/img/heart.png')}/>
                    <li>좋아요</li>
                </ul>
                <ul>
                    <img id='cart' src={require('../assets/img/shopping-cart.png')}/>
                    <li>장바구니</li>
                </ul>
                <ul>
                    <img id='fashion' src={require('../assets/img/fashion.png')}/>
                    <li>기획전</li>
                </ul>
            </nav>
        </header>
    )
}
export default mainheader