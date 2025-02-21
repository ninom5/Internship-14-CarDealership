import HeroImg from "../assets/cars_cropped.jpg";

const Hero = () => {
    return(   
        <div className="hero-contaner">
            <div className="hero-container__background">
                <img src={HeroImg} alt="hero garage background" />
            </div>
            <div className="forms">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>
    );
}

export default Hero;