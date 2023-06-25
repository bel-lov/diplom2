import website from "../../img/icons/website.svg";
import office from "../../img/icons/office.svg";
import directions from "../../img/icons/directions.svg";

export default function Advantages() {
    return (
        <section className="advantages" id="advantages">
            <div className="container">
                <div className="advantag__header">
                    <a href="foo" className="advantag__link">
                        Как это работает
                    </a>
                    <button className="advantag__know">УЗНАТЬ БОЛЬШЕ</button>
                </div>
                <div className="advantag__content">
                    <div className="advantag__options">
                        <div className="advantag__item__1">
                            <img src={website} alt="Удобный заказ на сайте" />
                        </div>
                        <span className="advantag__item-description">
                            Удобный заказ на сайте
                        </span>
                    </div>
                    <div className="advantag__options">
                        <div className="advantag__item__2">
                            <img src={office} alt="Нет необходимости ехать в офис" />
                        </div>
                        <span className="advantag__item-description">
                            Нет необходимости ехать в офис
                        </span>
                    </div>
                    <div className="advantag__options">
                        <div className="advantag__item__3">
                            <img src={directions} alt="Огромный выбор направлений" />
                        </div>
                        <span className="advantag__item-description">
                            Огромный выбор направлений
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}