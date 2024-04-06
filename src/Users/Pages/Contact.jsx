import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-48 pl-16 pr-16">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-lg mb-3 text-justify font-medium">
          We are dedicated to providing exceptional customer service and addressing any inquiries or concerns you may have. 
          Our team is committed to ensuring that your experience with us is positive and satisfactory. Whether you have questions 
          about our products, need assistance with an order, or simply want to provide feedback, we're here to help. Please feel free
           to reach out to us via phone, email, or the contact form below. We look forward to hearing from you!
          </p>
       
        </div>
        <div className="flex justify-center items-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.1778666080427!2d85.36014989678954!3d27.7426594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bfac9183291%3A0xa0d797e00f59ad4b!2sKopan%20Monastery!5e0!3m2!1sen!2snp!4v1709653784788!5m2!1sen!2snp"
            width="500"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
        <p className="text-lg mb-3">
          Address: 123 Main Street, City, Country
        </p>
        <p className="text-lg mb-3">Phone: +123 456 7890</p>
        <p className="text-lg mb-3">Email: info@example.com</p>
      </div>
    </div>
  );
};

export default Contact;
