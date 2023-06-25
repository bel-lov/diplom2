import { HashLink } from "react-router-hash-link";

import MainHeader from "../../components/Header/MainHeader";
import AboutUs from "./AboutUs";
import Advantages from "./Advantages";
import Feedbacks from "./Feedbacks";
import Footer from "../../components/Footer/Footer";
import './MainPage.css'

export default function MainPage() {

    return (
        <>
            <MainHeader />
            <main className="main">
                <AboutUs />
                <Advantages />
                <Feedbacks />
            </main>
            <Footer />
        </>
    );
}