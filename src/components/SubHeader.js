import './SubHeader.css'

function subheader(){
    return(
        <header className='subheader'>
            <nav className='subnav'>
                <ul id='sub_ul'>
                    <img className='sub_btn' src={require('../assets/img/menu.png')}/>
                    <li>베스트</li>
                    <li>신상</li>
                    <li>아우터</li>
                    <li>상의</li>
                    <li>셔츠/블라우스</li>
                    <li>트레이닝</li>
                    <li>베이직</li>
                    <li>원피스</li>
                    <li>스커트</li>
                    <li>팬츠</li>
                    <li>가방</li>
                    <li>악세사리</li>
                    <div id='today_start'>오늘출발</div>
                </ul>
            </nav>
        </header>
    )
}
export default subheader;