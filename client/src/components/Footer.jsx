import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from "react-icons/bs";
import Logo from "../assets/logo.png"; // Importing the logo

export default function FooterCom() {
  return (
    <Footer
      container
      className="mb-0 mt-16 max-h-48 border border-t-8 border-amber-400"
    >
      <div className="w-full max-w-7xl mx-auto ">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-14 w-14 mr-2" />
            </Link>
          </div>

            <Footer.LinkGroup className="mt-8">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Soumya"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon
              href="https://github.com/sahandghavidel"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
