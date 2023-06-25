

export default function Navbar() {
    return (
        <>
            <div className="header__logo container">
                <span className="header__logo__logo">Лого</span>
            </div>

            <nav className="header__navbar">
                <div className="container">
                    <ul className="header__navlist">
                        <a href="/#aboutUs"><li className="nav-link">О нас </li></a>
                        <a href="/#advantages"><li className="nav-link">Как это работает</li></a>
                        <a href="/#reviews"><li className="nav-link">Отзывы</li></a>
                        <a href="/#contacts"><li className="nav-link disabled">Контакты</li></a>
                    </ul>
                </div>
            </nav>
        </>
    )
}