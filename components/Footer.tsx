import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

import footerFacebook from "@/public/footer_facebook.png";
import footerInstagram from "@/public/footer_instagram.png";
import footerTwitter from "@/public/footer_twitter.png";

const Footer = () => {
  return (
    <div className="container poppins py-20 px-5 min-h-[300px] flex items-start justify-between flex-wrap max-sm:justify-center max-sm:gap-5">
      {/* Social Media */}
      <div className="max-w-[325px]">
        <h3 className="text-themeRed text-[25px] font-medium pb-2">Foodhut</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="flex items-center justify-start gap-2 mt-3">
          <Image className="max-w-[20px] max-h-[20px] object-contain" src={footerFacebook} width={20} height={20} alt="Facebook" />
          <Image src={footerInstagram} width={20} height={20} alt="Instagram" />
          <Image src={footerTwitter} width={20} height={20} alt="Twitter" />
        </div>
      </div>

      {/* About Us */}

      <div>
        <h3 className="text-themeRed text-[20px] font-medium pb-2">About Us</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Service Us</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Company</Link>
          </li>
        </ul>
      </div>

      {/* Company */}

      <div>
        <h3 className="text-themeRed text-[20px] font-medium pb-2">Company</h3>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="#">Partnership</Link>
          </li>
          <li>
            <Link href="#">Terms of Use</Link>
          </li>
          <li>
            <Link href="#">Privacy</Link>
          </li>
          <li>
            <Link href="#">Sitemap</Link>
          </li>
        </ul>
      </div>

      {/* Get in touch */}

      <div className="max-w-[380px]">
        <h3 className="text-themeRed text-[20px] font-medium pb-2">Get in touch</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="flex mt-5 gap-3">
          <input className="bg-[rgba(255,255,255,0.1)] py-2 pl-5 rounded-full" type="email" placeholder="Email" />
          <Button type="submit" label="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
