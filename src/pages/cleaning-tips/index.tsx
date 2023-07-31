import Container from '@/components/container'
import React from 'react'
import Image from "next/image";
import { Benefit } from '@/components/benefit';

const CleaningTips = () => {
    return (
        <Container>
            <div className="min-h-screen">
                <div className="container mx-auto py-10">
                    <h1 className="text-4xl font-bold text-center mb-8">The Importance of Cleaning Your Home</h1>
                    <p className="text-lg text-center mb-8">
                        A clean home is not just a matter of aesthetics; it profoundly impacts your physical and mental well-being. Here are some reasons why investing in regular home cleaning is a wise choice:
                    </p>
                    <section className="space-y-8">
                        <Benefit title="Health Benefits"
                            description="A clean home reduces the presence of dust, allergens, and harmful pathogens, leading to improved indoor air quality and a healthier living environment. It minimizes the risk of respiratory issues and allergies, allowing you to breathe easy and live comfortably."
                            image="/img/benefits/woman-and-boy-muscle.jpg"
                            noRotation
                        />
                        <Benefit title="Mental Clarity and Relaxation"
                            description="A clutter-free and clean space promote mental clarity and relaxation. Coming home to an organized and tidy environment reduces stress and anxiety, allowing you to unwind and recharge after a busy day."
                            image="/img/benefits/model-brain-on-orange.jpg"
                            reverse />
                        <Benefit title="Enhanced Productivity"
                            description="A clean and well-organized home fosters productivity and efficiency. It provides a clear mind and space for you to focus on your daily tasks and achieve your goals."
                            image="/img/benefits/school-and-study-supplies.jpg" />
                        <Benefit title="Welcoming Environment"
                            description="A clean home is a welcoming space for both residents and guests. It sets a positive impression and creates a warm ambiance for everyone who enters."
                            image="/img/benefits/small-business-open-sign.jpg"
                            reverse />
                        <Benefit title="Improved Sleep"
                            description="A clean and comfortable bedroom is conducive to a good night&apos;s sleep. It helps you relax and unwind, allowing you to get the rest you need to wake up feeling refreshed and energized."
                            image="/img/benefits/woman-in-beauty-rest-mask-in-pillow.jpg" />
                        <Benefit title="Sense of Pride"
                            description="Maintaining a clean home instills a sense of pride and ownership. It reflects your values and the care you have for your living space."
                            image="/img/benefits/a-woman-in-her-shop.jpg"
                            reverse />
                    </section>
                </div>
            </div >
        </Container>
    )
}

export default CleaningTips