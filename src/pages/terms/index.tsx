import Container from '@/components/container';
import React from 'react';

const Terms: React.FC = () => {
    return (
        <Container>
            <div className="">
                <div className="container mx-auto py-10">
                    <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
                    <p className="text-lg mb-8">
                        Welcome to Just Clean Bee Cleaning Service! By using our services, you agree to the following terms and conditions:
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Service Agreement</h2>
                    <p className="mb-4">
                        1. Just Clean Bee Cleaning Service agrees to provide professional cleaning services as outlined in the agreed-upon service plan.
                    </p>
                    <p className="mb-4">
                        2. The client agrees to provide access to the premises at the scheduled cleaning time and ensure a safe environment for our cleaning team.
                    </p>
                    <p className="mb-4">
                        3. Any changes or additions to the service plan must be communicated in advance and may be subject to additional charges.
                    </p>
                    <p className="mb-8">
                        4. The client agrees to receive text messages and emails from Just Clean Bee LLC. SMS and data rates may apply.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
                    <p className="mb-4">
                        1. Clients may cancel or reschedule cleaning appointments at least 24 hours before the scheduled time.
                    </p>
                    <p className="mb-4">
                        2. Failure to provide sufficient notice for cancellation may result in a cancellation fee.
                    </p>
                    <p className="mb-8">
                        3. Just Clean Bee Cleaning Service reserves the right to cancel or reschedule appointments in case of unforeseen circumstances or emergencies.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                    <p className="mb-4">
                        1. Payment for services is due at the time of booking or as otherwise agreed upon.
                    </p>
                    <p className="mb-4">
                        2. We accept various payment methods, including credit/debit cards and online payments.
                    </p>
                    <p className="mb-8">
                        3. Any outstanding balances or late payments may result in a delay or suspension of services.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Liability</h2>
                    <p className="mb-4">
                        1. Just Clean Bee Cleaning Service will take all reasonable precautions to ensure the safety of your home and belongings during the cleaning process.
                    </p>
                    <p className="mb-4">
                        2. We are not responsible for any damages or losses resulting from improper use or maintenance of your property.
                    </p>
                    <p className="mb-8">
                        3. Just Clean Bee Cleaning Service reserves the right to refuse service in situations where the safety of our team members is compromised.
                    </p>
                    <p className="text-lg mb-8">
                        Please read these terms and conditions carefully. If you have any questions or concerns, feel free to contact us. Your satisfaction is our priority, and we look forward to providing you with exceptional cleaning services.
                    </p>
                </div>
            </div>
        </Container>

    );
};

export default Terms;
