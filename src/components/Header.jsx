import githublogo from "/src/img/github.svg";
import instalogo from "/src/img/instagram.svg";
import figmalogo from "/src/img/figma.svg";
import linkedinlogo from "/src/img/linkedin.svg";
const Header = () => {
    return (
        <header className="bg-[#CBC3E3] font-serif rounded-tl-3xl rounded-tr-3xl p-10 flex flex-row space-y-4 px-24 test-base">
            <div className="mr-[80%]">
                <h1 className="font-serif text-purple-900 text-2xl whitespace-nowrap">Annie Chen</h1>
            </div>
            <div className="flex flex-row h-5 space-x-2">
              <a href="https://github.com/anchen9">
                <img src={githublogo} />
              </a>
              <a href="https://www.instagram.com/_anniec0912_/">
                <img src={instalogo} />
              </a>
              <a href="https://www.figma.com/files/team/1295077482462729641">
                <img src={figmalogo} />
              </a>
              <a href="https://www.linkedin.com/in/annie-chen09">
                <img src={linkedinlogo} />
              </a>
            </div>
        </header>
    );
};

export default Header;