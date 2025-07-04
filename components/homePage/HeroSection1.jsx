"use client";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import bg from "@/public/hero-bg.jpg";
import icsccatLogo from "@/public/icsccat.png";
import icsccatLogotransparent from "@/public/icsccatlogo.png";
import styles from './AddressCard.module.css';
import './CountdownTimer.css';
import ImportantDates from "./ImportantDates";
import { dates } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import bg6 from "@/public/banners/4.png";
import bg1 from "@/public/banners/6.png";
import bg2 from "@/public/banners/7.png";
import bg3 from "@/public/banners/8.png";
import bg4 from "@/public/banners/9.png";
import bg5 from "@/public/banners/10.png";

const sliderImages = [bg6, bg1, bg2, bg3, bg4, bg5];    

export default function HeroSection() {
  return (
    <>
      {/* <section
        className="bg-no-repeat bg-cover relative"
        id="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(233, 233, 245, 0.7), rgba(233, 233, 245, 0.8)), url(${bg.src})`,
        }}
      >
        <div className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-0 md:justify-start">
          <div className="flex flex-col mb-8 mx-auto items-center">
            <div className="flex flex-col items-center mb-2">
              {/* <Image
                className="w-32 md:w-64 mb-4 p-4 rounded-lg shadow-md flex items-center object-contain"
                src={icsccatLogotransparent}
                width={256}
                quality={100}
                priority
              /> }
              <div className="flex flex-col mx-auto md:mx-0">
                <p className="font-bold text-4xl text-center md:text-5xl">
                  2<sup>nd</sup> 
                </p>
                <p className=" text-4xl text-center md:text-5xl font-bold">
                <span className="text-blue-800">I</span>nternational  
                <span className="text-blue-800"> C</span>onference
                </p>
                
                <p className="font-bold text-center text-lg text-black md:text-xl my-2">
                  on
                </p>
                <h1 className="text-center text-2xl text-black md:text-3xl mt-4">
                  <span className="font-[Ananda] font-semibold">Pioneering Developments in</span>
                  </h1>
                <h1 className="text-center text-3xl text-black md:text-5xl mt-4">
                  <p className="font-bold mt-4"><span className="text-blue-800"> C</span>omputer 
                  <span className="text-blue-800"> S</span>cience & 
                  <span className="text-blue-800"> D</span>igital 
                  <span className="text-blue-800"> T</span>echnologies <br />
                  </p>
                </h1>
                <p className="font-bold text-center text-lg text-black md:text-2xl mt-4 mb-2">
                  26<sup>th</sup> - 28<sup>th</sup> December, 2025
                </p>
                <p className="text-center text-base text-black md:text-lg">
                  (Physical Mode)
                </p>
                {/* <p className="text-2xl text-center md:text-3xl">
                    Coming Soon
                </p> }
              </div>
            </div>
            <div className="flex justify-center">
            </div>
            {/* <div className="flex pt-8 justify-center">
              <Link href="/register"
                  className="p-3 pt-3 text-xl uppercase text-primary05 bg-gray-400 rounded-full baseline md:block px-6 disabled">Registration Closed
              </Link>
            </div> }
          </div>
        </div>
          <div className={styles.addressCard}>
            <h2 className={styles.addressTitle}>Venue</h2>
            <div className={styles.addressDetails}>
              <p className={styles.addressText}>
                Department of Computer Science & Engineering<br />
                Administrative Block, National Institute of Technology Delhi <br />
                Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
              </p>
            </div>
          </div><br />
      </section> */}
      {/* <section className="relative w-full h-[500px]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src = "../../public/banners/6.png"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/background2.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/background3.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/background4.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section> */}
      <section className="relative w-full h-[500px]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <ImportantDates></ImportantDates>
    </>
  );
}


