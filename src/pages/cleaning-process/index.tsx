import Container from "@/components/container";

const CleaningProcess: React.FC = () => {

    const processSteps = [
        {
            index: 1,
            title: "Personalized Assessment",
            description: "We begin our journey by conducting a personalized assessment of your home. Understanding your specific cleaning needs and preferences allows us to tailor our services to match your lifestyle. Whether it's a busy family household or a peaceful retreat, we adapt our cleaning approach to ensure maximum satisfaction."
        },
        {
            index: 2,
            title: "Comprehensive Cleaning Plan",
            description: "Based on the assessment, we create a comprehensive cleaning plan that covers all areas of your home. Our team pays attention to detail and leaves no corner untouched, ensuring a thorough and consistent cleaning experience."
        },
        {
            index: 3,
            title: "Eco-Friendly Cleaning Solutions",
            description: "We use eco-friendly cleaning solutions that are safe for your family and pets. Our products are non-toxic and free from harsh chemicals, ensuring a clean and healthy home environment."
        },
        {
            index: 4,
            title: "Professional Cleaning Team",
            description: "Our team of professional cleaners is trained to deliver exceptional results. We are committed to providing a seamless experience and will go above and beyond to ensure your satisfaction."
        },
        {
            index: 5,
            title: "100% Satisfaction Guarantee",
            description: "We are confident that you will love our services. If you are not satisfied with our work, we will come back and clean your home again at no additional cost."
        },
    ]

    return (
        <Container>
            <div className="min-h-screen">
                <div className="container mx-auto py-10">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Cleaning Process</h1>
                    <p className="text-lg text-center mb-8">
                        At Clean Bee, we believe that a clean home is more than just an orderly living space; it&apos;s a sanctuary that nurtures well-being and happiness. Our meticulous cleaning process is designed to transform spaces and create an environment where you can thrive. Here&apos;s a glimpse into the steps we take to ensure every corner of your home radiates cleanliness:
                    </p>
                    <section className="space-y-8">
                        {processSteps.map((step) => (
                            <div key={`${step.index}-process`} className="bg-white rounded-lg p-8">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                                        {step.index}
                                    </div>
                                    <h2 className="text-2xl font-bold ml-2"> {step.title}</h2>
                                </div>
                                <p>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </section>
                    <section className="space-y-8">
                        <div className="p-4 md:p-12">

                            <p className="text-lg text-center mb-8">
                                At Clean Bee, we are dedicated to making your home a place of joy, comfort, and happiness. Through our professional cleaning services and our belief in the importance of cleanliness, we strive to create a positive impact on your life and the spaces you cherish the most. Let us be your partners in embracing a cleaner, healthier, and happier home.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
};

export default CleaningProcess;
