import Hero from "../components/home/Hero/page";
import NewsCarousel from "../components/home/NewsCarousel/page";
import ServicesGrid from "../components/home/ServicesGrid/page";
import FeaturedNews from "../components/home/FeaturedNews/page";
import SocialBanner from "../components/home/SocialBanner/page";

export default function Home() {
    return (
        <div>
            <Hero />
            <ServicesGrid />
            <FeaturedNews />
            <NewsCarousel />
            <SocialBanner />

            
            Page starts here

            
        </div>
    )
}