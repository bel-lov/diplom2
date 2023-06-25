export default function AboutUs() {
    return (
        <section className="aboutUs" id="aboutUs">
            <div className="container">
                <h1 className="aboutUs__title">О нас</h1>
                <div className="aboutUs__block">
                    <div className="line"></div>
                    <div className="aboutUs__text">
                        <p>
                            {/* {" "} */}
                            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
                            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
                            через интернет.
                        </p>
                        <p>
                            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                            клика, но стоит ли это делать?
                            <br /> Мы расскажем о преимуществах заказа через интернет.
                        </p>
                        <p>
                            <strong>
                                Покупать жд билеты дешево можно за 90 суток до отправления
                                поезда.
                                <br />
                                Благодаря динамическому ценообразованию цена на билеты в это
                                время самая низкая.
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}