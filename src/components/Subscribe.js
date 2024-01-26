import { useState } from "react";

const Subscribe = () => {
  const [data, setData] = useState({
    name: "",
    Phone_no: "",
    message: "",
    date: new Date().toString(),
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/82fcd852-d325-4f16-b4ff-82d7e62bebca",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        alert("done");
        console.log("Form submitted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='container mx-auto px-5 md:px-16' data-aos='fade-up'>
      <div className='bg-rose-600 rounded-lg text-white py-16 sm:py-24'>
        <div className='flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto'>
          <h2 className='text-2xl sm:text-4xl font-semibold'>Contact us</h2>
          <p className='leading-loose font-[500]'>
            Reach out to us and we will get back
          </p>
          <form className='relative w-full mb-8' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              name='Name'
              value={data.Name}
              onChange={handleChange}
              className='rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black mb-4'
            />

            <input
              type='number'
              placeholder='Phone Number'
              name='Phone_no'
              value={data.Phone_no}
              onChange={handleChange}
              className='rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black mb-4'
            />

            <textarea
              placeholder='Message'
              name='Message'
              value={data.Message}
              onChange={handleChange}
              className='rounded-lg bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black mb-4'
              rows={4} // Adjust the number of rows as needed
            />
            <button className='sm:w-fit w-full capitalize md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-rose-600 bg-white hover:border-rose-600 hover:shadow-2xl hover:shadow-rose-600  rounded-full'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
