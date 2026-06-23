import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { useEffect, useRef, useState } from "react";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import GreenButton from "@/components/shared/GreenButton";

// 18-pointed star SVG component
const Star18 = ({ className }: { className?: string }) => {
    const points = 18;
    const outerRadius = 100;
    const innerRadius = 75;
    const cx = 100;
    const cy = 100;

    let pathData = "";
    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI * i) / points - Math.PI / 2;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        pathData += `${i === 0 ? "M" : "L"} ${x} ${y} `;
    }
    pathData += "Z";

    return (
        <svg viewBox="0 0 200 200" className={className}>
            <path d={pathData} fill="currentColor" />
        </svg>
    );
};

const AboutHero = () => {
    const ref = useRef(null);
    const lottieRef = useRef<ClientLottieRef>(null);
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("/animations/teamwork.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Failed to load animation:", err));
    }, []);

    const hasPlayedInitial = useRef(false);
    const hasLeftHero = useRef(false);

    const playAnimation = () => {
        if (!lottieRef.current) return;
        lottieRef.current.setSpeed(1.5);
        lottieRef.current.goToAndPlay(0, true);
    };

    useEffect(() => {
        if (animationData && !hasPlayedInitial.current) {
            playAnimation();
            hasPlayedInitial.current = true;
        }
    }, [animationData]);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // User came BACK into hero
                    if (hasLeftHero.current) {
                        playAnimation();
                        hasLeftHero.current = false;
                    }
                } else {
                    // User left hero
                    hasLeftHero.current = true;
                }
            },
            {
                threshold: 0.4,
            },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="px-4 relative min-h-[65vh] lg:min-h-[95vh] flex items-start justify-start flex-col overflow-hidden pt-40 pb-[100px]"
        >
            {/* Rotating 18-pointed star - centered upper area */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
            >
                <Star18 className="w-full h-full" />
            </motion.div>

            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative max-w-7xl mx-auto text-center z-10">
                <GreenButton>About Eyelevel</GreenButton>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="-mt-2 md:-mt-4 flex items-start justify-start gap-4 mb-10 relative"
                >
                    {animationData && (
                        <ClientLottie
                            lottieRef={lottieRef}
                            animationData={animationData}
                            autoPlay={false}
                            loop
                            className="absolute -top-[16px] md:-top-[62px] lg:-top-[95px] w-[280px] sm:w-[450px] md:w-[520px] md:-right-[-120px] lg:w-[700px] pointer-events-none"
                        />
                    )}

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-dela uppercase mt-8 text-primary">
                        BUILT FROM <WavyUnderline>THE CLIENT</WavyUnderline>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg max-w-2xl mx-auto font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                >
                    Eyelevel was not built by an agency chasing clients. It was built by a marketing head who spent 15 years hiring agencies, and knowing exactly what they failed to deliver.
                </motion.p>
                <div className="flex items-center rounded-full relative font-bricolage z-1000 mt-8 justify-center gap-4">
                    <Link to="/booking">
                        <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
                            Book a free 30-min diagnostic
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
