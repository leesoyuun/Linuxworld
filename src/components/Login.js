import React from 'react';
import "./Login.css"

function Login(props) {
    return (
        <div className="login_wrapper">
            <h1>로그인</h1>
            <p className="kakao_des">카카오로 1초안에 로그인 하세요.<br/>
                아래 버튼 클릭만 하면 끝!</p>
            <div>
                <button className="kakao_bt">카카오 1초 로그인/회원가입</button>
            </div>
            <div className="join_coupon">
                <img src={require('../join_coupon.png')} />
            </div>
            <div className="line">
                <span>또는</span>
            </div>
            <div>
                <div className="member_choice">
                    <a>소나 회원이세요?</a>
                    <a className="on">비회원이세요?</a>
                </div>
                <div>
                    <div className="login_input">
                        <input placeholder="아이디"/>
                        <input placeholder="비밀번호"/>
                    </div>

                    <div className="login_option">
                        <p>o 아이디 저장</p>
                        <p>o 로그인 상태 유지</p>
                    </div>
                    <div>
                        <button className="login_bt">로그인</button>
                    </div>
                    <div className="join_box">
                        <p>회원가입 |</p>
                        <p> 아이디찾기 | </p>
                        <p>비밀번호 찾기</p>
                    </div>
                    <div className="line">
                        <span>또는</span>
                    </div>
                    <div>
                        <button className="naver_bt">네이버 로그인</button>
                        <button className="google_bt">구글 로그인</button>
                    </div>
                    <div className="kakao_one">
                        <b>카카오 1초 로그인 / 회원가입이란?</b>
                        <br/>
                        <span>카카오 싱크를 활용한 간편 로그인 / 가입 기능입니다.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;