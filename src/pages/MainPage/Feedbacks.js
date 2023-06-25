import Slider from "../../components/Slider/Slider";
export default function Feedbacks() {
    return (
        <section className="feedbacks" id="reviews">
            <div className="container">
                <div className="feedbacks-title">
                    <h2 className="feedbacks-title-h2">ОТЗЫВЫ</h2>
                </div>
                <Slider />
            </div>
        </section>
    );
}