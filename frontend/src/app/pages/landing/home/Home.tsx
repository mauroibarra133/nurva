import Image from "next/image";
import MarsImage from '../../../../../public/mars.svg';
import Mars2Image from '../../../../../public/planet-red.png';
import BluePlanetImage from '../../../../../public/blue-planet.svg';
import VioletPlanetImage from '../../../../../public/violet-planet.svg';
import SaturnImage from '../../../../../public/saturn.png';
import Ellipse from '../../../../../public/Ellipse 22.svg';

import { jost,orbitron } from "@/fonts";
import styles from '../../../styles/home.module.css';

function Home() {
    return ( 
        <div className={`${styles.homeContainer} relative`}>
            <div className="flex flex-col gap-8 md:gap-16" data-aos='fade-right'>
                <div className="flex flex-col gap-4 md:gap-16">
                    <h2 className={`${jost.className} text-blue-600 font-medium text-xl md:text-3xl`}>Tu éxito en ventas, en la orbita de</h2>
                    <h1 className={`${orbitron.className} text-nurva-violet font-light text-4xl md:text-6xl`}>NURVA</h1>
                </div>
             <button className="bg-nurva-violet rounded-md w-fit py-2 px-12 text-white md:text-2xl md:py-4 md:px-16 hover:brightness-110 hover:scale-105 transition-all">Start</button>
            </div>
            <div className={`${styles.heroContainer} `} data-aos= 'fade-down'>
                <div className="relative w-full">
                <Image src={Ellipse} alt="ellipse" className="scale-105 md:scale-150"></Image>
                <Image src={SaturnImage} alt="saturn-image" className="absolute top-3  -left-2 md:scale-110"></Image>
                <Image src={BluePlanetImage} alt="blue-planet-image" className={`absolute -top-4 scale-50 right-16 md:-top-16 md:scale-75`}></Image>
                <Image src={VioletPlanetImage} alt="violet-planet-image" className={`${styles.fadeUp} absolute -top-2 scale-50 -left-8 md:-left-16 md:-top-8 md:scale-90`} ></Image>
                <Image src={Mars2Image} alt="mars2-image" className={` ${styles.fadeUp} absolute bottom-0 scale-75 left-20 md:scale-90 md:-bottom-10` } ></Image>
                <Image src={MarsImage} alt="mars2-image" className={` absolute -bottom-8 scale-50 left-32 mdx2:left-52 mdx2:scale-75`} ></Image>

                </div>
            </div>
        </div>
    );
}

export default Home;
 