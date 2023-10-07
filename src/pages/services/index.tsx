import React from 'react'
import Image from "next/image";
import Container from "@/components/container";
import Head from 'next/head';
import Card from '@/components/card';

const Services = () => {

    const services = [
        {
            title: "Residential Cleaning",
            description: "Experience the bliss of a clean and organized home without lifting a finger. Our residential cleaning service covers all areas of your home, leaving no dust bunny unturned. Our expert cleaners will dust, vacuum, mop, and sanitize every corner, ensuring your living spaces shine brightly like never before.",
            image: "/img/services/kitchen_accents.png"
        },
        {
            title: "Commercial Cleaning",
            description: "A clean and hygienic workplace promotes productivity and positivity among your team. Let us take care of your office, so you can focus on growing your business. From desks to restrooms, we'll keep your office space pristine and inviting, creating the perfect environment for success.",
            image: "/img/services/dentists-office.jpg"
        },
        {
            title: "Deep Cleaning",
            description: "For a comprehensive refresh, our deep cleaning service is the answer. Our team will go above and beyond to make every inch of your home or office spotless. We tackle hard-to-reach areas, grime buildup, and more, leaving your space buzzing with newfound freshness.",
            image: "/img/services/deep_hazmat_clean.png"
        },
        {
            title: "Special Occasion Cleaning",
            description: "Planning a special event? We'll ensure your home is guest-ready with our special occasion cleaning service. Let us handle the cleaning while you focus on hosting and making wonderful memories with your loved ones.",
            image: "/img/services/9.png"
        }
    ]


    return (
        <div id="services" className="min-h-screen">
            <Head>
                <title>Just Clean Bee - Our Services</title>
            </Head>
            <Container>
                <main className="container mx-auto py-10">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
                    <p className="text-lg text-center mb-8">
                        At Just Clean Bee, we offer a range of cleaning services to cater to your unique needs. Choose from our list of services below to experience the magic of a sparkling clean home or office.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} title={service.title} description={service.description} image={service.image} />
                        ))}
                    </div>
                </main>
            </Container>
        </div>
    );
};

export default Services



