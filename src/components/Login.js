import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getMe, logOut, usernameLogin } from '../api';
import "./Login.css"

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLoading, data, isError } = useQuery(["me"], getMe, {
        retry: false
    });
    const queryClient = useQueryClient();
    const onLogOut = async() => {
        await logOut();
        queryClient.refetchQueries(["me"]); 
    };
    const onChange = (event) => {
        const { name, value } = event.currentTarget;
        if (name === "username") {
          setUsername(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };
    const onSubmit = async (event) => {
        event.preventDefault();
        await usernameLogin({username, password});
        queryClient.refetchQueries(["me"]); 
      };
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
                    <form onSubmit={onSubmit}>
                        <div className="login_input">
                            <input 
                                required 
                                name="username"
                                value={username}
                                onChange={onChange}
                                placeholder="아이디"
                            />
                            <input
                                required
                                name="password"
                                value={password}
                                onChange={onChange}
                                placeholder="비밀번호"
                            />
                        </div>
                        <div className="login_option">
                            <p>o 아이디 저장</p>
                            <p>o 로그인 상태 유지</p>
                        </div>
                        <div>
                            <button type="submit" className="login_bt">로그인</button>
                        </div>
                    </form>
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