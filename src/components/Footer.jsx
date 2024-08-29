/* eslint-disable react/no-unescaped-entities */
import email from "/src/img/email.svg";
import phone from "/src/img/phone.svg";
const Footer = () => {
  return (
    <footer className="bg-[#CBC3E3] font-serif rounded-tl-3xl rounded-tr-3xl p-10 flex flex-col space-y-4 px-24 test-base">
      <div>
        <h1 className="font-serif text-purple-900 text-2xl whitespace-nowrap">Contact Me!</h1>
      </div>
      <div>
        <div className="flex flex-row items-center space-x-3">
          <img src={email} />
          <p>anc76@cornell.edu</p>
        </div>

        <div className="flex flex-row items-center space-x-3">
          <img src={phone} />
          <p>908-240-0531</p>
        </div>
      </div>
      <div>
        <p className="flex justify-center text-sm">
          &copy; 2024 WICC Technical Committee Workshop
        </p>
      </div>
    </footer>
  );
};

export default Footer;
