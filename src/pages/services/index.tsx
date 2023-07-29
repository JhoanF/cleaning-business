import React from 'react'
import Image from "next/image";
import Container from "@/components/container";
import Head from 'next/head';

const Services = () => {
    return (
        <div id="services" className="min-h-screen">
            <Head>
                <title>Clean Bee - Our Services</title>
            </Head>
            <main className="container mx-auto py-10">
                <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
                <p className="text-lg text-center mb-8">
                    At Clean Bee, we offer a range of cleaning services to cater to your unique needs. Choose from our list of services below to experience the magic of a sparkling clean home or office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg">
                        <div className="p-8">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/services/family-time-in-the-kitchen.jpg"
                                    alt="N"
                                    width="200"
                                    height="200"
                                    className="w-32"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-center mb-4 mt-4">Residential Cleaning</h2>
                            <p className="mb-4">
                                Experience the bliss of a clean and organized home without lifting a finger. Our residential cleaning service covers all areas of your home, leaving no dust bunny unturned.
                            </p>
                            <p className="mb-4">
                                Our expert cleaners will dust, vacuum, mop, and sanitize every corner, ensuring your living spaces shine brightly like never before.
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <div className="p-8">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/services/dentists-office.jpg"
                                    alt="N"
                                    width="200"
                                    height="200"
                                    className="w-32"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-center mb-4 mt-4">Commercial Cleaning</h2>
                            <p className='mb-4'>
                                A clean and hygienic workplace promotes productivity and positivity among your team. Let us take care of your office, so you can focus on growing your business.
                            </p>
                            <p className='mb-4'>
                                From desks to restrooms, we&apos;ll keep your office space pristine and inviting, creating the perfect environment for success.
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg">
                        <div className="p-8">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/services/cleaning-supply-flatlay-white.jpg"
                                    alt="N"
                                    width="200"
                                    height="200"
                                    className="w-32"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-center mb-4 mt-4">Deep Cleaning</h2>
                            <p className='mb-4'>
                                For a comprehensive refresh, our deep cleaning service is the answer. Our team will go above and beyond to make every inch of your home or office spotless.
                            </p>
                            <p className='mb-4'>
                                We tackle hard-to-reach areas, grime buildup, and more, leaving your space buzzing with newfound freshness.
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <div className="p-8">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/services/party-decorations.jpg"
                                    alt="N"
                                    width="200"
                                    height="200"
                                    className="w-32"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-center mb-4 mt-4">Special Occasion Cleaning</h2>
                            <p className='mb-4'>
                                Planning a special event? We&apos;ll ensure your home is guest-ready with our special occasion cleaning service.
                            </p>
                            <p className='mb-4'>
                                Let us handle the cleaning while you focus on hosting and making wonderful memories with your loved ones.
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Services



