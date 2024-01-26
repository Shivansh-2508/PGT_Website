import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Perform validation
    if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    emailjs.sendForm('service_91l538e', 'template_7cvoylt', form.current, 'ZdrZwGjBnX6p6Q9Jw')
      .then((result) => {
          console.log(result.text);
          alert('Message sent');
      })
      .catch((error) => {
          console.log(error.text);
          alert('Error');
      });
  };

  return (
    <section className="container mx-auto px-8 md:px-20" id='Connect'>
    <div className="bg-rose-600 rounded-lg text-white py-16 sm:py-24">
      <div className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold">
          Contact us
        </h2>
        <p className="leading-loose font-[500]">
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor incididunt labore dolore.
        </p>
        <form ref={form} className="relative w-full mb-8" onSubmit={sendEmail}>
          <input 
            type="text" 
            name="user_name" 
            placeholder="Name" 
            required 
            className="rounded-lg bg-white px-3 py-4 text-black mb-4 w-full placeholder-right" // Add text-right class
          />
  
          <input 
            type="email" 
            name="user_email" 
            placeholder="Email ID" 
            required 
            className="rounded-lg bg-white px-3 py-4 text-black mb-4 w-full placeholder-right" // Add text-right class
          />
  
          <textarea 
            name="message" 
            placeholder="Message" 
            required 
            className="rounded-lg bg-white px-3 py-4 text-black mb-4 w-full placeholder-right" // Add text-right class
            rows={4} 
          />
          <input 
            type="submit" 
            value="Send" 
            className="sm:w-fit w-full capitalize md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-rose-600 bg-white hover:border-rose-600 hover:shadow-2xl hover:shadow-rose-600 rounded-full" 
          />
        </form>
      
  
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
