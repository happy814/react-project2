import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="text-yellow-100 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <p className="mt-8  tracking-[.1rem] text-neutral-500">
          &copy;comileTab.All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
