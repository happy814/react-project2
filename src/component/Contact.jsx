import React from "react";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="select-none text-white mb-8 text-center text-3xl lg:text-4xl">
        Contact Us
      </h2>
      <div className="text-neutral-400">
        <p
          key={CONTACT}
          className="my-20 border-neutral-700  border-dotted border-b-2  pb-12 text-center text-2xl lg:text-3xl"
        >
          Address: 123 Main Street, Paris, France, 345678
        </p>
        {CONTACT.map((detail) => (
          // <p
          //   key={detail.key}
          //   className="my-20 border-neutral-700  border-dotted border-b-2  pb-12 text-center text-2xl lg:text-3xl"
          // >
          //   {detail.p}
          // </p>
          <a
            className="flex   justify-center lg:flex-row gap-2  my-20 border-neutral-700 hover:text-blue-700  border-dotted border-b-2  pb-12 text-center text-xl lg:text-3xl"
            href={`tel:${detail.value}`}
            onClick={() => {
              navigator.clipboard.writeText(detail.value);
              alert("Phone number copied");
            }}
          >
            <p key={detail.key}>{detail.p}</p>
            {detail.value}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
