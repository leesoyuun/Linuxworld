import React from 'react';
import "./Login.css"

function Login(props) {
    return (
        <div className="login_wrapper">
            <h2>로그인</h2>
            <p className="kakao_des">카카오로 1초안에 로그인 하세요.<br/>
                아래 버튼 클릭만 하면 끝!</p>
            <div>
                <button className="kakao_bt">카카오 1초 로그인/회원가입</button>
            </div>
            <div>
                <p>banner</p>
            </div>
            <div>
                <span>-----------또는-----------</span>
            </div>
            <div>
                <div>
                    <p>회원 비회원</p>
                </div>
                <div>
                    <div className="login_input">
                        <input placeholder="아이디"/>
                        <input placeholder="비밀번호"/>
                    </div>

                    <div>
                        <p>옵션</p>
                    </div>
                    <div>
                        <button className="login_bt">로그인</button>
                    </div>
                    <div className="join_box">
                        <p>회원가입 |</p>
                        <p> 아이디찾기 | </p>
                        <p>비밀번호 찾기</p>
                    </div>
                    <div>
                        <span>-----------또는-----------</span>
                    </div>
                    <div>
                        <p>
                            네이버
                        </p>
                        <p>
                            구글
                        </p>
                    </div>
                    <div>
                        <b>카카오 1초 로그인 / 회원가입이란?</b>
                        <br/>
                        카카오 싱크를 활용한 간편 로그인 / 가입 기능입니다.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;