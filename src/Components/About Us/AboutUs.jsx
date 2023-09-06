//<br className="hidden laptop:block" />
import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BreadCrumb from "../../assets/Breadcrumb.png"
import SeparatingLine from "../../assets/Separating Line.png"
import ThinnerSeparatingLine from "../../assets/ThinnerSeparatingLine.png"
import EvenThinnerSeparatingLine from "../../assets/EvenThinnerSeparatingLine.png"
import LocationPin from "../../assets/u_location-pin-alt.svg"
import MoneyStack from "../../assets/u_money-stack.svg"
import Users from "../../assets/u_users-alt.svg"
import ArrowUp from "../../assets/Arrow up.svg"
import ArrowDown from "../../assets/Arrow down.svg"

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const AboutUs = () => (
  <section className=" bg-[#010886]">

    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      {/* <div className='min-h-screen'> */}
      <div className="hero place-content-start ">
        <div className="hero-content w-full mt-10 laptop:mb-12 tablet:mb-12 h-[16.1875rem] bg-[#010886] laptop:mt- laptop:mx-[8rem]">
          {/* <div className="max-w-lg"> */}
          <div className="w-full laptop:mx-[7rem] top-0 laptop:mt-[3rem]">

            <Link to="/" className="">
              <img src={BreadCrumb} className='' alt="Breadcrumb" />
            </Link>
            <h1
              className="text-[3rem] leading-[3.4375rem] tablet:mb-0 laptop:mb-0 mb-8 font-bold text-[#fff] mt-8">
              About Us
            </h1>
          </div>

        </div>
      </div>

      <div className='bg-white px-6 py-12 absolute laptop:w-auto w-[92.5%] mx-3  laptop:block -mt-[4.5rem] h-auto laptop:mx-[8rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {/* <div className='grid grid-cols-2 gap-0'> */}
        <div class="laptop:flex justify-between">

          <span className='px-8 border-2 laptop:py-0 py-4 laptop:mr-4 h-12 rounded-[6.25rem] text-[#999999] border-[#999999] w-[35%] max-w-[40%] mr-10'>
            <button className='py-2 font-bold text-[1rem] mb-8 cursor-default leading-[1.6rem]'>
              EXPLORE WITH CO-HABIT
            </button>
          </span>

          <div className='laptop:px-4  w-full '>
            <h1 className='text-[#1A1A1A] text-[2.5rem] font-bold leading-[2.75rem] mb-4'>
              OUR STORY
            </h1>

            <p className='text-[1rem] text-[#7C8493] leading-[1.6rem]'>
              A ground-breaking platform that transforms the way
              we think about living arrangements is Co-Habit.
              In addition to simplifying the apartment search process,
              Co-Habit additionally creates a cutting-edge method for matching
              up compatible roommates. This is a dual-purpose technology that is
              unique in its design. Co-Habit simplifies this process by providing a
              user-friendly interface that
              enables people to find their ideal living place with ease.
              Co-Habit makes sure the flat search process is simple and effective
              with advanced search filters, interactive maps, and real-time updates
              This concept becomes a reality thanks to Co-Habit. The platform wants
              to improve its members' quality of life by cultivating a peaceful living
              environment and encouraging gratifying connections and shared experiences.
              Welcome to Co-Habit, the place where your quest for the ideal flat and your
              quest for the ideal flatmate collide. Discover new opportunities for cohabitation,
              and open the doors to shared experiences, shared places, and shared aspirations.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className='laptop:h-[30rem] tablet:h-[30rem] h-[60rem] bg-[#EFEFEF]'>

      </div>


      {/* BENEFIT OF USING CO-HABIT */}
      <div className='py-8 bg-[#010886] text-white'>
        <div className='laptop:mx-[8rem] mx-4 tablet:mx-2 laptop:pt-4'>
          <span className='px-8 border-2 py-4 rounded-[6.25rem] border-[#999999] w-[35%] max-w-[40%] mr-10'>
            <button className='py-2 font-bold text-[1rem] cursor-default leading-[1.6rem]'>
              BENEFIT OF USING CO-HABIT
            </button>
          </span>

          <img src={SeparatingLine} className='py-8' alt='separating-line' />

          <h1 className='laptop:w-[39.75rem] tablet:mx- text-[2.5rem] font-bold leading-[2.75rem]'>
            Finding Your Ideal Space: Easy Apartment Search
          </h1>

          {/* text-in-shapes */}
          <div className="grid grid-cols-1 gap-4 tablet:gap-8 laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-[4rem] laptop:-ml-">

            {/* styled rectangle 1 */}
            <div className="laptop:relative">
              <p className="absolute laptop:w-auto text-[#515B6F] laptop:px-1 tablet:w-[37%] w-[75%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                The apartment appeared to be well-cared-
                for and professionally managed. The
                overall maintenance of the house and the
                surrounding landscape reflected a high
                level of attention to detail.
              </p>
              <h2 className="absolute text-[#25324B] w-auto ml-[2rem] laptop:px-1 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                Save money with friend
              </h2>
              <img src={LocationPin} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[1.5rem] tablet:ml-[2rem] mt-[4.5rem] laptop:ml-[1rem] laptop:mt-[3.5rem]" alt="location-pin" />

              {/* className="w-[95%] laptop:w-full mx-2 */}

              <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] laptop:w-full mx-2">
                <path d="M0.5 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60C27.1391 349.5 0.5 322.861 0.5 290V0.5Z" fill="#EEF4FD" stroke="#B8C9C9" />
                <path d="M277 1H289C322.137 1 349 27.8629 349 61V92H337C303.863 92 277 65.1371 277 32V1Z" fill="white" />
                <path d="M310.44 44.216C311.059 43.9707 311.677 43.656 312.296 43.272C312.925 42.888 313.48 42.4347 313.96 41.912H315.32V53H313.384V44.504C313.096 44.728 312.733 44.9467 312.296 45.16C311.859 45.3733 311.437 45.5493 311.032 45.688L310.44 44.216Z" fill="black" />
              </svg>

            </div>
            {/* end of styled rectangle 1 */}

            {/* arrow up */}
            {/* <svg width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="-my-10 -py- mx-auto tablet:mx-0 tablet:hidden laptop:hidden" alt="arrow-up">
                <path id="Vector 1" d="M54.3333 3.5C54.3333 4.97276 55.5272 6.16667 57 6.16667C58.4728 6.16667 59.6667 4.97276 59.6667 3.5C59.6667 2.02724 58.4728 0.833333 57 0.833333C55.5272 0.833333 54.3333 2.02724 54.3333 3.5ZM1.12127 63.4851C46.1722 52.2223 57.5 18.8656 57.5 3.5H56.5C56.5 18.4678 45.4278 51.3777 0.878732 62.5149L1.12127 63.4851Z" fill="#92BFEB" />
              </svg> */}

            {/* <img src={ArrowUp} className="-my-10 -py- mx-auto tablet:mx-0 tablet:hidden laptop:hidden" alt="arrow-up" /> */}

            <span className='hidden laptop:block w-[] absolute z-50 mx-[21.5rem] mt-32'>
              <svg width="428" height="65" viewBox="0 0 488 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* width="488" height="65" */}
                <path d="M54.3333 3.5C54.3333 4.97276 55.5272 6.16667 57 6.16667C58.4728 6.16667 59.6667 4.97276 59.6667 3.5C59.6667 2.02724 58.4728 0.833333 57 0.833333C55.5272 0.833333 54.3333 2.02724 54.3333 3.5ZM1.12127 63.4851C46.1722 52.2223 57.5 18.8656 57.5 3.5H56.5C56.5 18.4678 45.4278 51.3777 0.878732 62.5149L1.12127 63.4851Z" fill="#92BFEB" />
                <path d="M484.428 59.0833C482.955 59.0833 481.761 60.2772 481.761 61.75C481.761 63.2228 482.955 64.4167 484.428 64.4167C485.9 64.4167 487.094 63.2228 487.094 61.75C487.094 60.2772 485.9 59.0833 484.428 59.0833ZM424.515 5.87113C435.764 50.9218 469.08 62.25 484.428 62.25V61.25C469.479 61.25 436.609 50.1782 425.485 5.62887L424.515 5.87113Z" fill="#92BFEB" />
              </svg>

            </span>

            {/* styled rectangle 2 */}
            <div className="laptop:relative">
              <p className="absolute laptop:w-auto text-[#515B6F] laptop:px-1 tablet:w-[37%] w-[75%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                The apartment appeared to be well-cared-
                for and professionally managed. The
                overall maintenance of the house and the
                surrounding landscape reflected a high
                level of attention to detail.
              </p>
              <h2 className="absolute text-[#25324B] w-auto ml-[2rem] laptop:px-1 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                Find Verified Partners
              </h2>
              <img src={Users} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[2rem] tablet:ml-[2.5rem] mt-[4.5rem] laptop:ml-[1.5rem] laptop:mt-[3.5rem]" alt="location-pin" />

              <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] laptop:w-full mx-2">
                <path d="M0.5 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60C27.1391 349.5 0.5 322.861 0.5 290V0.5Z" fill="#EEF4FD" stroke="#B8C9C9" />
                <path d="M277 1H289C322.137 1 349 27.8629 349 61V92H337C303.863 92 277 65.1371 277 32V1Z" fill="white" />
                <path d="M316.696 44.792C316.696 45.176 316.616 45.5547 316.456 45.928C316.296 46.2907 316.088 46.648 315.832 47C315.587 47.3413 315.304 47.6773 314.984 48.008C314.664 48.328 314.344 48.6427 314.024 48.952C313.853 49.112 313.661 49.304 313.448 49.528C313.235 49.752 313.032 49.976 312.84 50.2C312.648 50.424 312.483 50.6427 312.344 50.856C312.205 51.0587 312.131 51.2293 312.12 51.368H317.048V53H309.992C309.981 52.9147 309.976 52.8133 309.976 52.696C309.976 52.568 309.976 52.472 309.976 52.408C309.976 51.896 310.056 51.4267 310.216 51C310.387 50.5627 310.605 50.1573 310.872 49.784C311.139 49.4107 311.437 49.0587 311.768 48.728C312.099 48.3973 312.429 48.072 312.76 47.752C313.016 47.5067 313.261 47.2667 313.496 47.032C313.731 46.7973 313.933 46.568 314.104 46.344C314.285 46.1093 314.429 45.8747 314.536 45.64C314.643 45.3947 314.696 45.144 314.696 44.888C314.696 44.3333 314.536 43.9387 314.216 43.704C313.896 43.4693 313.507 43.352 313.048 43.352C312.749 43.352 312.472 43.3947 312.216 43.48C311.96 43.5653 311.731 43.6667 311.528 43.784C311.336 43.9013 311.165 44.024 311.016 44.152C310.867 44.2693 310.755 44.3653 310.68 44.44L309.72 43.08C310.168 42.6533 310.691 42.312 311.288 42.056C311.896 41.7893 312.547 41.656 313.24 41.656C314.424 41.656 315.293 41.9387 315.848 42.504C316.413 43.0587 316.696 43.8213 316.696 44.792Z" fill="black" />
              </svg>

            </div>

            {/* arrow up */}
            {/* <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="-my-10 laptop:hidden tablet:hidden tablet:mx-0 mx-auto" alt="arrow-down">
                <path id="Vector 2" d="M60.4277 54.0833C58.9549 54.0833 57.761 55.2772 57.761 56.75C57.761 58.2228 58.9549 59.4167 60.4277 59.4167C61.9005 59.4167 63.0944 58.2228 63.0944 56.75C63.0944 55.2772 61.9005 54.0833 60.4277 54.0833ZM0.514893 0.871129C11.7639 45.9218 45.0801 57.25 60.4277 57.25V56.25C45.4788 56.25 12.6089 45.1782 1.4851 0.628871L0.514893 0.871129Z" fill="#92BFEB" />
              </svg> */}

            {/* <img src={ArrowDown} className="-my-10 laptop:hidden tablet:hidden tablet:mx-0 mx-auto" alt="arrow-down" /> */}

            {/* styled rectangle 3 */}
            <div className="laptop:relative">
              <p className="absolute laptop:w-auto text-[#515B6F] laptop:px-1 tablet:w-[37%] w-[75%] ml-[2rem] mt-[10.5rem] tablet:mt-[12rem] tablet:ml-[2.5rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                The apartment appeared to be well-cared-
                for and professionally managed. The
                overall maintenance of the house and the
                surrounding landscape reflected a high
                level of attention to detail.
              </p>
              <h2 className="absolute text-[#25324B] w-auto ml-[2rem] laptop:px-1 mt-[8.3rem] laptop:ml-[1.1rem] tablet:mt-[9.5rem] tablet:ml-[2.5rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                Close The Deal
              </h2>
              <img src={MoneyStack} className="absolute laptop:w-[2.5rem] tablet:w-[2rem] tablet:mt-[5.5rem] w-[10%] ml-[2rem] tablet:ml-[2.5rem] mt-[4.5rem] laptop:ml-[1.5rem] laptop:mt-[3.5rem]" alt="location-pin" />

              <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] laptop:w-full mx-2">
                <path d="M0.925293 0.5H290C322.861 0.5 349.5 27.1391 349.5 60V349.5H60.4252C27.5643 349.5 0.925293 322.861 0.925293 290V0.5Z" fill="#EEF4FD" stroke="#B8C9C9" />
                <path d="M277.089 1H289.001C322.138 1 349.001 27.8629 349.001 61V92H337.089C303.952 92 277.089 65.1371 277.089 32V1Z" fill="white" />
                <path d="M312.826 53.24C312.538 53.24 312.239 53.2187 311.93 53.176C311.631 53.144 311.343 53.096 311.066 53.032C310.799 52.9787 310.554 52.92 310.33 52.856C310.106 52.7813 309.935 52.712 309.818 52.648L310.202 51C310.426 51.1067 310.751 51.2293 311.178 51.368C311.604 51.496 312.132 51.56 312.762 51.56C313.604 51.56 314.212 51.4 314.586 51.08C314.959 50.7493 315.146 50.312 315.146 49.768C315.146 49.416 315.071 49.1227 314.922 48.888C314.783 48.6533 314.586 48.4667 314.33 48.328C314.084 48.1787 313.796 48.0773 313.466 48.024C313.146 47.96 312.804 47.928 312.442 47.928H311.786V46.36H312.586C312.831 46.36 313.076 46.3387 313.322 46.296C313.578 46.2427 313.807 46.1573 314.01 46.04C314.212 45.912 314.378 45.7467 314.506 45.544C314.634 45.3413 314.698 45.08 314.698 44.76C314.698 44.504 314.65 44.2853 314.554 44.104C314.458 43.9227 314.33 43.7733 314.17 43.656C314.02 43.5387 313.844 43.4533 313.642 43.4C313.439 43.3467 313.226 43.32 313.002 43.32C312.522 43.32 312.095 43.3947 311.722 43.544C311.348 43.6827 311.018 43.8427 310.73 44.024L310.026 42.584C310.175 42.488 310.356 42.3867 310.57 42.28C310.783 42.1733 311.018 42.072 311.274 41.976C311.54 41.88 311.823 41.8053 312.122 41.752C312.42 41.688 312.735 41.656 313.066 41.656C313.684 41.656 314.218 41.7307 314.666 41.88C315.114 42.0293 315.482 42.2427 315.77 42.52C316.068 42.7867 316.287 43.1067 316.426 43.48C316.575 43.8427 316.65 44.2427 316.65 44.68C316.65 45.192 316.506 45.6507 316.218 46.056C315.94 46.4613 315.578 46.7707 315.13 46.984C315.706 47.1867 316.18 47.5227 316.554 47.992C316.938 48.4613 317.13 49.064 317.13 49.8C317.13 50.2907 317.044 50.7493 316.874 51.176C316.703 51.592 316.442 51.9547 316.09 52.264C315.738 52.5627 315.29 52.8027 314.746 52.984C314.212 53.1547 313.572 53.24 312.826 53.24Z" fill="black" />
              </svg>

            </div>

          </div>

        </div>
      </div>
      {/* END OF BENEFIT OF USING CO-HABIT */}


      {/* OUR STORY */}
      <div className='py-8 bg-[#EFEFEF] h-auto text-[#333333]'>
        <div className='laptop:mx-[8rem] mx-4 laptop:pt-4'>

          <span className='px-8 border-2 py-4 rounded-[6.25rem] border-[#999999] w-[35%] max-w-[40%] mr-10'>
            <button className='py-2 mb-6 font-bold mt-8 cursor-default text-[1rem] leading-[1.6rem]'>
              OUR STORY
            </button>
          </span>

          <img src={SeparatingLine} className='py-8' alt='separating-line' />

          <h1 className='laptop:w-[39.75rem] text-[2.5rem] font-bold leading-[2.75rem]'>
            Although founded in 2023, our story
            dates farther than that.
          </h1>

          <img src={ThinnerSeparatingLine} className='py-8' alt='thinner-separating-line' />

          <div className="grid grid-cols-1 gap-12 tablet:gap-8 laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-8 laptop:pb-6">

            {/* 01 */}
            <div className='flex gap-4'>
              <span className=''>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1105_15899)">
                    <path opacity="0.4" d="M34.9493 24.863L34.9425 24.8741L34.9362 24.8856L34.8144 25.1089C34.8087 25.1188 34.803 25.1284 34.7973 25.1378C34.7889 25.1233 34.7803 25.1082 34.7716 25.0924L34.7671 25.0842L34.7622 25.0761L34.6392 24.871C34.1127 23.9638 33.2739 23.3421 32.2765 23.0799C31.2524 22.7952 30.197 22.9377 29.3091 23.4649C29.3084 23.4653 29.3078 23.4657 29.3071 23.4661L27.4185 24.566C26.4465 25.1126 25.7592 26.0154 25.4754 27.0795L25.4747 27.0822C25.1923 28.1645 25.3336 29.2767 25.8766 30.2447L25.8812 30.2528L25.886 30.2608C25.8923 30.2711 25.8984 30.2812 25.9042 30.2911C25.8881 30.2915 25.8715 30.2917 25.8543 30.2917C23.5592 30.2917 21.6877 32.1595 21.6877 34.4375V36.3959C21.6877 38.6739 23.5592 40.5417 25.8543 40.5417C25.8715 40.5417 25.8881 40.5419 25.9041 40.5423C25.8983 40.5522 25.8923 40.5623 25.886 40.5726L25.8789 40.5843L25.8724 40.5963C25.7776 40.7725 25.6835 40.9622 25.6072 41.1667H18.7502C13.2763 41.1667 8.8335 36.7239 8.8335 31.25V18.75C8.8335 13.2762 13.2763 8.83337 18.7502 8.83337H31.2502C36.724 8.83337 41.1668 13.2762 41.1668 18.75V23.9677L40.2921 23.463C40.2919 23.4629 40.2918 23.4629 40.2917 23.4628C38.7638 22.5797 36.8577 22.8419 35.6169 24.0307C35.344 24.28 35.1297 24.5699 34.9493 24.863Z" fill="#333333" stroke="#333333" />
                    <path d="M35.9582 20.2916V24.3958C35.729 24.6041 35.5415 24.8541 35.3748 25.125L35.2498 25.3541C35.0207 25.75 34.8332 25.8541 34.8123 25.875C34.7707 25.8541 34.5623 25.75 34.3332 25.3333L34.2082 25.125C33.7498 24.3333 33.0207 23.7916 32.1457 23.5625C31.2498 23.3125 30.3332 23.4375 29.5623 23.8958L27.6665 25C26.8123 25.4791 26.2082 26.2708 25.9582 27.2083C25.7082 28.1666 25.8332 29.1458 26.3123 30C26.5415 30.375 26.5415 30.6041 26.5415 30.6458C26.5207 30.6666 26.3123 30.7916 25.854 30.7916C23.8332 30.7916 22.1873 32.4375 22.1873 34.4375V35.9583H20.2915C16.854 35.9583 14.0415 33.1458 14.0415 29.7083L14.0415 20.2916C14.0415 16.8541 16.854 14.0416 20.2915 14.0416L29.7082 14.0416C33.1457 14.0416 35.9582 16.8541 35.9582 20.2916Z" fill="#333333" />
                    <path d="M18.875 5.72913V8.33329H18.75C17.7083 8.33329 16.7083 8.47913 15.75 8.77079V5.72913C15.75 4.87496 16.4375 4.16663 17.3125 4.16663C18.1667 4.16663 18.875 4.87496 18.875 5.72913Z" fill="#333333" />
                    <path d="M26.5625 5.72913V8.33329H23.4375V5.72913C23.4375 4.87496 24.1458 4.16663 25 4.16663C25.8542 4.16663 26.5625 4.87496 26.5625 5.72913Z" fill="#292D32" />
                    <path d="M34.271 5.72913V8.77079C33.3127 8.47913 32.2918 8.33329 31.2502 8.33329H31.146V5.72913C31.146 4.87496 31.8543 4.16663 32.7085 4.16663C33.5627 4.16663 34.271 4.87496 34.271 5.72913Z" fill="#292D32" />
                    <path d="M45.8332 17.2916C45.8332 18.1666 45.1457 18.8541 44.2707 18.8541H41.6665V18.75C41.6665 17.7083 41.5207 16.6875 41.229 15.7291H44.2707C45.1457 15.7291 45.8332 16.4375 45.8332 17.2916Z" fill="#292D32" />
                    <path d="M18.875 41.6666V44.2708C18.875 45.125 18.1667 45.8333 17.3125 45.8333C16.4375 45.8333 15.75 45.125 15.75 44.2708V41.2291C16.7083 41.5208 17.7083 41.6666 18.75 41.6666H18.875Z" fill="#292D32" />
                    <path d="M8.77067 15.7291C8.479 16.6875 8.33317 17.7083 8.33317 18.75V18.8541H5.729C4.87484 18.8541 4.1665 18.1666 4.1665 17.2916C4.1665 16.4375 4.87484 15.7291 5.729 15.7291H8.77067Z" fill="#292D32" />
                    <path d="M8.33317 23.4375V26.5625H5.729C4.87484 26.5625 4.1665 25.8542 4.1665 25C4.1665 24.125 4.87484 23.4375 5.729 23.4375H8.33317Z" fill="#292D32" />
                    <path d="M8.77067 34.2709H5.729C4.87484 34.2709 4.1665 33.5625 4.1665 32.7084C4.1665 31.8334 4.87484 31.1459 5.729 31.1459H8.33317V31.25C8.33317 32.2917 8.479 33.3125 8.77067 34.2709Z" fill="#292D32" />
                    <path opacity="0.4" d="M43.7292 32.3542C42.3125 32.3542 41.5 31.6459 41.5 30.6042C41.5 30.1876 41.625 29.7084 41.9167 29.2084C42.5 28.2084 42.1458 26.9167 41.1458 26.3542L39.25 25.2501C38.375 24.7292 37.25 25.0417 36.7292 25.9167L36.6042 26.1251C35.6042 27.8542 33.9792 27.8542 32.9792 26.1251L32.8542 25.9167C32.3542 25.0417 31.2083 24.7292 30.3542 25.2501L28.4375 26.3542C27.7708 26.7292 27.375 27.4376 27.375 28.1667C27.375 28.5209 27.4792 28.8751 27.6667 29.2084C27.9583 29.7084 28.1042 30.1876 28.1042 30.6042C28.1042 31.6459 27.2708 32.3542 25.8542 32.3542C24.7083 32.3542 23.75 33.2917 23.75 34.4376V36.3959C23.75 37.5417 24.7083 38.4792 25.8542 38.4792C27.2708 38.4792 28.1042 39.1876 28.1042 40.2292C28.1042 40.6459 27.9583 41.1251 27.6667 41.6251C27.0833 42.6251 27.4375 43.9167 28.4375 44.4792L30.3542 45.5834C31.2083 46.1042 32.3542 45.7917 32.8542 44.9167L32.9792 44.7084C33.9792 42.9792 35.6042 42.9792 36.6042 44.7084L36.7292 44.9167C37.25 45.7917 38.375 46.1042 39.25 45.5834L41.1458 44.4792C41.8125 44.1042 42.2083 43.3959 42.2083 42.6667C42.2083 42.3126 42.1042 41.9584 41.9167 41.6251C41.625 41.1251 41.5 40.6459 41.5 40.2292C41.5 39.1876 42.3125 38.4792 43.7292 38.4792C44.8958 38.4792 45.8333 37.5417 45.8333 36.3959V34.4376C45.8333 33.2917 44.8958 32.3542 43.7292 32.3542ZM34.7917 39.0001C32.8125 39.0001 31.2083 37.3959 31.2083 35.4167C31.2083 33.4376 32.8125 31.8334 34.7917 31.8334C36.7708 31.8334 38.375 33.4376 38.375 35.4167C38.375 37.3959 36.7708 39.0001 34.7917 39.0001Z" fill="#292D32" />
                    <path d="M38.3752 35.4167C38.3752 37.3959 36.771 39 34.7918 39C32.8127 39 31.2085 37.3959 31.2085 35.4167C31.2085 33.4375 32.8127 31.8334 34.7918 31.8334C36.771 31.8334 38.3752 33.4375 38.3752 35.4167Z" fill="#292D32" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1105_15899">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span>
                <h2 className='font-medium text-[1.5rem] mb-2 leading-[1.8rem]'>
                  ADMINISTRATION
                </h2>
                <p className='font-normal text-[1rem] leading-[1.6rem]'>
                  Very dedicated team ensuring the smooth flow of
                  operation inline with standard practices.
                </p>
              </span>

            </div>

            {/* 02 */}
            <div className='flex gap-4'>
              <span className=''>
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1105_15904)">
                    <path opacity="0.4" d="M43.8543 26.625L43.8543 26.627C43.8949 36.8694 35.5581 45.1875 25.3335 45.1875C15.1093 45.1875 6.771 36.8693 6.771 26.625L6.771 22.7083C6.771 22.1766 7.20915 21.75 7.72933 21.75C8.24485 21.75 8.68766 22.1928 8.68766 22.7083V26.625C8.68766 35.797 16.1407 43.25 25.3127 43.25C34.4846 43.25 41.9377 35.797 41.9377 26.625V22.7083C41.9377 22.1766 42.3758 21.75 42.896 21.75C43.4115 21.75 43.8543 22.1928 43.8543 22.7083L43.8543 26.625Z" fill="#333333" stroke="#333333" />
                    <path d="M25.3333 4.16663C18.3333 4.16663 12.625 9.87496 12.625 16.875V26.6458C12.625 33.6458 18.3333 39.3541 25.3333 39.3541C32.3333 39.3541 38.0417 33.6458 38.0417 26.6458V16.875C38.0417 9.87496 32.3333 4.16663 25.3333 4.16663ZM29.875 22.0625C29.7292 22.625 29.2083 23 28.6458 23C28.5417 23 28.4167 22.9791 28.3125 22.9583C26.1875 22.375 23.9375 22.375 21.8125 22.9583C21.125 23.1458 20.4375 22.75 20.25 22.0625C20.0625 21.3958 20.4583 20.6875 21.1458 20.5C23.7083 19.7916 26.4167 19.7916 28.9792 20.5C29.6667 20.6875 30.0625 21.375 29.875 22.0625ZM31.6458 16.2916C31.4583 16.8125 30.9792 17.125 30.4583 17.125C30.3125 17.125 30.1667 17.1041 30.0208 17.0416C26.8333 15.875 23.3333 15.875 20.1458 17.0416C19.4792 17.2916 18.75 16.9583 18.5 16.2916C18.2708 15.6458 18.6042 14.9166 19.2708 14.6666C23.0208 13.3125 27.1458 13.3125 30.875 14.6666C31.5417 14.9166 31.875 15.6458 31.6458 16.2916Z" fill="#333333" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1105_15904">
                      <rect width="50" height="50" fill="white" transform="translate(0.333496)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span>
                <h2 className='font-medium text-[1.5rem] mb-2 leading-[1.8rem]'>
                  MEDIA & MARKETING
                </h2>
                <p className='font-normal text-[1rem] leading-[1.6rem]'>
                  Excellent content delivery without bias. We take
                  pride in being of service to others at our best.
                </p>
              </span>

            </div>

            {/* 03 */}
            <div className='flex gap-4'>
              <span className=''>
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1105_15909)">
                    <path opacity="0.4" d="M5.33301 17.1872L45.9997 17.1669V33.7291C45.9997 37.4214 44.901 40.3082 42.9378 42.2714C40.9745 44.2347 38.0877 45.3333 34.3955 45.3333H16.9372C13.2449 45.3333 10.3581 44.2347 8.39489 42.2714C6.43164 40.3082 5.33301 37.4214 5.33301 33.7291L5.33301 17.1872Z" fill="#333333" stroke="#333333" />
                    <path d="M19.4167 36.9792C19.1875 36.9792 18.9375 36.9167 18.7292 36.8125C17.125 36 15.75 34.7917 14.75 33.2917C13.9167 32.0417 13.9167 30.4375 14.75 29.1875C15.75 27.6875 17.125 26.4792 18.7292 25.6875C19.5 25.2917 20.4375 25.625 20.8333 26.3959C21.2292 27.1667 20.9167 28.1042 20.125 28.5C19 29.0625 18.0417 29.9167 17.3542 30.9584C17.2292 31.1459 17.2292 31.3959 17.3542 31.6042C18.0417 32.6459 19 33.5 20.125 34.0625C20.8958 34.4584 21.2083 35.3959 20.8333 36.1667C20.5417 36.6667 19.9792 36.9792 19.4167 36.9792Z" fill="#333333" />
                    <path d="M32.3542 36.9792C31.7709 36.9792 31.2292 36.6667 30.9584 36.125C30.5625 35.3542 30.875 34.4167 31.6667 34.0208C32.7917 33.4583 33.75 32.6042 34.4375 31.5625C34.5625 31.375 34.5625 31.125 34.4375 30.9167C33.75 29.875 32.7917 29.0208 31.6667 28.4583C30.8959 28.0625 30.5834 27.125 30.9584 26.3542C31.3542 25.5833 32.2917 25.2708 33.0625 25.6458C34.6667 26.4583 36.0417 27.6667 37.0417 29.1667C37.875 30.4167 37.875 32.0208 37.0417 33.2708C36.0417 34.7708 34.6667 35.9792 33.0625 36.7708C32.8125 36.9167 32.5834 36.9792 32.3542 36.9792Z" fill="#333333" />
                    <path d="M46.4997 16.2708V16.6666L4.83301 16.6875V16.2708C4.83301 8.68746 9.35384 4.16663 16.9372 4.16663L34.3955 4.16663C41.9788 4.16663 46.4997 8.68746 46.4997 16.2708Z" fill="#292D32" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1105_15909">
                      <rect width="50" height="50" fill="white" transform="translate(0.666504)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span>
                <h2 className='font-medium text-[1.5rem] mb-2 leading-[1.8rem]'>
                  TECH ENGINEERING
                </h2>
                <p className='font-normal text-[1rem] leading-[1.6rem]'>
                  Our hands-on engineering team employing the
                  best technology to solve problems everyday.
                </p>
              </span>

            </div>

          </div>


          <img src={EvenThinnerSeparatingLine} className='py-8' alt='even-thinner-separating-line' />

        </div>
      </div>
      {/* END OF OUR STORY */}


    </motion.div>


  </section>
)

export default AboutUs