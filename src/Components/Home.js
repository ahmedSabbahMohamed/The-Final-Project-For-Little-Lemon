import HeroAbout from "./HeroAbout";
import heroImage from '../Assets/icons-logo/heroImage.jpg';
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from '../Assets/icons-logo/About.jpg';
import MobileNav from "./MobileNav";

function Home () {
    return (
        <>
            <HeroAbout heroOrAbout="hero" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={heroImage} />
            <Highlights />
            <Testimonials />
            <HeroAbout heroOrAbout="about" paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." image={About} />
            <MobileNav />
        </>
    );
}

export default Home;