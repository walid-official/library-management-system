import Blog from "@/components/blog/Blog";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import HomeBooks from "@/components/homeBooks/HomeBooks";
import States from "@/components/states/States";

export const Home = () => {
    return (
        <div className="">
            <Hero />
            <Features />
            <HomeBooks />
            <States />
            <Blog />
        </div>
    );
};

