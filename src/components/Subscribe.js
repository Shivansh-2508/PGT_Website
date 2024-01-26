import { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Import emailjs-com instead of '@emailjs/browser'

const Subscribe = () => {
  const form = useRef(); // Move form useRef inside the component

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91l538e', 'template_7cvoylt', form.current, 'ZdrZwGjBnX6p6Q9Jw')
      .then((result) => {
          console.log(result.text)
          alert(done);
      })
      .catch((error) => { // Use .catch instead of passing a second argument to .then
          console.log(error.text);
      });
  };

  return (
    <section className="container mx-auto px-5 md:px-16">
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
            
            <input type="text" name="user_name"
            placeholder='Name'
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black mb-4"
            />

            <input type="email" name="user_email"
            placeholder='Email ID'
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black mb-4"
            />

            <textarea
            placeholder='Message'
              name="message"
              className="rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black mb-4"
              rows={4} // Adjust the number of rows as needed
            />
            <input type="submit" value="Send" className="sm:w-fit w-full capitalize md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-rose-600 bg-white hover:border-rose-600 hover:shadow-2xl hover:shadow-rose-600  rounded-full"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
