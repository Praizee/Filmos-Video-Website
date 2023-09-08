import React from "react";
import WhiteLogo from "../../assets/5ffffadf6ee51c8077d3388b_logo-white.svg"
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  // date for copyright
  const theDate = new Date().getFullYear();
  // end of date

  return (
    <div className="bg-[black] text-white ">
      <footer
        className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[7rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10 w-full py-12">
          <h1 className="laptop:text-[5rem] laptop:leading-[6rem] pb-16 font-black">
            Got a project? <br />
            Let's talk.
          </h1>

        </div>
      </footer>


      <footer className="footer laptop:p-10 laptop:py-16 p-6 max-w-[90%] laptop:mx-[7.1rem] mx-0 border border-white/25 border-x-transparent">

        <div className="laptop:-mr-[9rem] laptop:-ml-10">
          <img src={WhiteLogo} className="" alt="web-logo" />
          <p className="w- text-[1rem] font-normal leading-[1.6rem] laptop:mt-5">
            Showcase your portfolio. Perfect for Video Production and Creative
            <br className="hidden laptop:flex" />
            Studios.

          </p>

        </div>

        <div className=" hidden laptop:footer tablet:footer">
          <div className="laptop:ml-[2.5rem]">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">ADDRESS</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Dummy Street 12</a>
            <a className="link link-hover font-normal leading-[1.6rem]">80636 City</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Country</a>
          </div>
          <div className="laptop:ml-[2.5rem]">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">CONTACT</span>
            <a href="mailto:sayhi@template.com" className="link link-hover font-normal leading-[1.6rem]">sayhi@template.com</a>
            <a href="tel:+49 152 3475 67" className="link link-hover font-normal leading-[1.6rem]">+49 152 3475 67</a>
          </div>
        </div>

      </footer>


      <footer className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[7.1rem] mx-0">
        <div className="laptop:-mr-[9rem] laptop:-ml-10">

          <div className="tablet:hidden min-w-[26rem] laptop:block">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">
              SUBSCRIBE TO NEWSLETTER
            </span>
            <div className="flex-col w-[18rem] laptop:mt-12 tablet:w-[14rem] laptop:w-[18rem]">
              <div className="relative border border-x-transparent border-t-transparent border-white/25">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="py-3 px-0 bg-black text-white/75 w-full input rounded-none "
                />

                <button className="btn hover:bg-transparent hover:translate-x-4 absolute -top-0 right-4 rounded-none bg-transparent text-white border-none">
                  <FiArrowRight size="1.5rem" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className=" laptop:footer tablet:footer">
          <div className="laptop:ml-[2.5rem]">
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">DEMOS</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Home v.1</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Home v.2</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Home v.3</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Contact</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Privacy Policy</a>
          </div>
          <div>
            <span className="text-[0.85rem] text-white/50 font-medium laptop:mb-4">UTILITY</span>
            <a className="link link-hover font-normal leading-[1.6rem]">Style Guide</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Instructions</a>
            <a className="link link-hover font-normal leading-[1.6rem]">Licenses</a>
            <a className="link link-hover font-normal">Changelog</a>
          </div>
        </div>

      </footer>



      {/* <img src={FooterLine} className="w-[80%] laptop:mx-[8rem]" alt="footer-line" /> */}

      <div className="laptop:flex tablet:flex tablet:mx-6 tablet:justify-between laptop:mx-[7.1rem] laptop:py-6 mx-auto">

        {/* copyright */}
        <p className="py-4 copyright laptop:mr-[31rem] hidden laptop:block tablet:block text-[#ffffff74] text-center">
          <span>{theDate} </span>
          @
          Filmos.
          All rights reserved.
        </p>

        <p className="py-4 copyright laptop:mr-[31rem] laptop:hidden tablet:hidden text-[#ffffff74] text-left mx-6">
          <span>{theDate} </span>
          @
          Filmos.
          All rights reserved.
        </p>
        {/* end of copyright */}


      </div>

    </div>

  );
};

export default Footer;