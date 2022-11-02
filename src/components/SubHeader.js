import './SubHeader.css'

function subheader(){
    return(
        <header className='subheader'>
            <nav className='subnav'>
                <ul id='sub_ul'>
                    <li>
                        <img className='sub_btn' src={require('../assets/img/menu.png')}/>
                    </li>
                    <li>베스트</li>
                    <li>신상</li>
                    <li>
                        아우터
                        {/* <ul id='sub_outer_hide'>
                            <li>가디건/조끼</li>
                            <li>야상/점퍼</li>
                            <li>자켓/코트</li>
                            <li>패딩</li>
                            <li>플리스</li>
                        </ul> */}
                    </li>
                        
                    <li>상의</li>
                    <li>셔츠/블라우스</li>
                    <li>트레이닝</li>
                    <li>베이직</li>
                    <li>원피스</li>
                    <li>스커트</li>
                    <li>팬츠</li>
                    <li>가방</li>
                    <li>악세사리</li>
                </ul>
                <div id='today_start'>
                    <a id='today_start_text'>오늘 출발</a>
                </div>
            </nav>
        </header>
    )
}
export default subheader;