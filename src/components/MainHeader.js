import React, { useState } from 'react';
import { getMe } from '../api';
import './MainHeader.css';

function Mainheader(){
    getMe().then(res => setCheckUsername(res.username));
    const [checkUsername, setCheckUsername] = useState();
    return(
        <header className='mainheader'>
            <nav className="topNav">
                <span>회원가입</span>
                <span>고객센터</span>
                {checkUsername ?
                <span>로그아웃</span> :
                <a href="/login">로그인</a>
                }
            </nav>
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
export default Mainheader