import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <div className="w-screen max-w-full h-[10vh] sticky top-0 z-[999] px-4 flex items-center justify-between bg-[#343434] text-primary_text">
      <div></div>
      <div className="flex flex-row items-center justify-center gap-4">
        <span className="text-6xl font-monaco text-custom-orange uppercase font-bold ">Hola!</span>
        <p className="text-6xl font-monaco">I am Praveen Raj</p>
      </div>

      <div className="flex flex-row">
        <SocialIcon url="https://github.com/praveen-raj-m" bgColor="transparent" />
        <SocialIcon url="https://https://www.linkedin.com/in/praveenraj-m/" bgColor="transparent" />
        <SocialIcon
        url="mailto:pmohanr4@asu.edu"
          bgColor="transparent"
          type="email"
        />
      </div>
    </div>
  );
}

export default Navbar;
