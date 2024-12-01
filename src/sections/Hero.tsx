import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
export const HeroSection = () => {
  return <div>
    <div className="container">
      <Image src={memojiImage} alt="Computer with emoji" width={400} height={400} />
      <div>
        <div></div>
        <div>Availabe for new projects</div>
      </div>
      <h1>Building Exceptional User Experiences</h1>
      <p>
        I specialize in transforming designs into functional, high-performing web applications.
      </p>
      
    </div>
  </div>;
};
