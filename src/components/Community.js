import Image from "next/image";

const Card = ({ imgSrc, title, content }) => {
  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt='community image'
        className='mx-auto'
      />
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='leading-loose'>{content}</p>
    </div>
  );
};

// TODO :- Make add the content

const Community = () => {
  return (
    <section className='container mx-auto px-16 lg:px-32'>
      <div>
        <span className='service-name text-center '>Perperation</span>
        <h2 className='title text-center pb-11 '>METHODOLOGY</h2>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto'>
        <Card
          imgSrc='/community/1.svg'
          title='Chapter Wise Tests'
          content='CH1+CH2+CH3+CH4'
        />
        <Card
          imgSrc='/community/2.svg'
          title='Unit Test'
          content='Unit Revision'
        />
        <Card imgSrc='/community/3.svg' title='Final Test' content='Testing' />
      </div>
    </section>
  );
};

export default Community;
