import ContactForm from '@/components/contactForm'
import ContactInfo from '@/components/contactInfo'
import Container from '@/components/container'
import React from 'react'

const Contact = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row">
                <div className='w-11/12'>
                    <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                    <ContactForm />
                </div>
                <div className="w-full">
                    <ContactInfo />
                </div>
            </div>

        </Container>

    )
}

export default Contact