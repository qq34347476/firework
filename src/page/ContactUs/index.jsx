import React from 'react';
import ContactUsForm from './components/ContactUsForm';
import BrandsCarousel from './components/BrandsCarousel';
import ProductCards from './components/ProductCards';
import CTASection from './components/CTASection';
const ContactUs = () => {
    

    return (
        <div className='dark_page'>
            <ContactUsForm />
            <BrandsCarousel />
            <ProductCards />
            <CTASection />
        </div>
    );
};

export default ContactUs;
