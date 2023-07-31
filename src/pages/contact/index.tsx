import ContactForm from '@/components/contactForm'
import ContactInfo from '@/components/contactInfo'
import React from 'react'


const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center">
            <div className="mb-4 md:mb-0 md:w-1/3">
                <ContactInfo />
            </div>
            <div className="md:w-1/3">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact