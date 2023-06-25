import Navbar from "./Navbar";

export default function SuccesOrderHeader() {
    return (
        <header className="header-orderEnd">
            <Navbar />
            <div className="header-orderEnd__thanks container">
                <h1 style={{ color: '#FFFFFF' }}>Благодарим Вас за заказ!</h1>
            </div>
        </header>
    );
}