import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="md:ml-4 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Information</h2>
            {/* <p className="text-lg mb-2">
                <span className="font-bold">Address:</span> 123 Main Street, City, State ZIP
            </p> */}
            <p className="text-lg mb-2">
                <span className="font-bold">Phone:</span> (239) 785-4923
            </p>
            <p className="text-lg mb-2">
                <span className="font-bold">Email:</span> cleanbee@gmail.com
            </p>
            <p className="text-lg">
                <span className="font-bold">Working Hours:</span> Mon-Sat: 7:00 AM - 8:00 PM
            </p>
        </div>
    );
};

export default ContactInfo;
