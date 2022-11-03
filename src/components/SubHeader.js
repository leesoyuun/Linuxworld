import './SubHeader.css'

function subheader(){
    return(
        <header className='subheader'>
            <nav className='sub_nav'>
                <ul id='sub_ul'>
                    <li>
                        <img className='sub_btn' src={require('../assets/img/menu.png')}/>
                    </li>
                    <li>
                        <a>베스트</a>
                    </li>
                    <li>
                        <a>신상</a>
                    </li>
                    <li id='total_menu'>
                        <a>아우터</a>
                        <ul id='sub_menu'>
                            <li>가디건/조끼</li>
                            <li>야상/점퍼</li>
                            <li>자켓/코트</li>
                            <li>패딩</li>
                            <li>플리스</li>
                        </ul>
                    </li>
                    <li id='total_menu'>
                        <a>상의</a>
                        <ul id='sub_menu'>
                            <li>긴팔티셔츠</li>
                            <li>맨투맨</li>
                            <li>후드</li>
                            <li>반팔/민소매티셔츠</li>
                            <li>니트</li>
                        </ul>
                    </li>
                    <li>
                        <a>셔츠/블라우스</a>
                    </li>
                    <li>
                        <a>트레이닝</a>
                    </li>
                    <li>
                        <a>베이직</a>
                    </li>
                    <li>
                        <a>원피스</a>
                    </li>
                    <li>
                        <a>스커트</a>
                    </li>
                    <li id='total_menu'>
                        <a>팬츠</a>
                        <ul id='sub_menu'>
                            <li>청바지</li>
                            <li>롱팬츠</li>
                            <li>면바지</li>
                            <li>슬랙스</li>
                            <li>레깅스</li>
                            <li>숏팬츠</li>
                        </ul>
                    </li>
                    <li id='total_menu'>
                        <a>가방</a>
                        <ul id='sub_menu'>
                            <li>백팩/스쿨백</li>
                            <li>크로스/토트백</li>
                        </ul>
                    </li>
                    <li id='total_menu'>
                        <a>신발</a>
                        <ul id='sub_menu'>
                            <li>운동화/단화</li>
                            <li>구두/워커</li>
                            <li>샌들/슬리퍼/장화</li>
                        </ul>
                    </li>
                    <li id='total_menu'>
                        <a>악세사리</a>
                        <ul id='sub_menu'>
                            <li>주얼리</li>
                            <li>모자/벨트</li>
                            <li>양말/스타킹</li>
                        </ul>
                    </li>
                </ul>
                <div id='today_start'>
                    <a id='today_start_text'>오늘 출발</a>
                </div>
            </nav>
        </header>
    )
}
export default subheader;