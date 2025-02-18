import { contactsData } from "@/lib/constants";
import SectionHeader from "./fragments/SectionHeader";
import Link from "next/link";
import Modal from "./fragments/Modal";
import { useState } from "react";

function ContactMe() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div id="Contact" className="px-10 md:px-24 lg:px-36 xl:px-64 pt-32 pb-20">
      <SectionHeader title="Contact Me" subTitle="Get In Touch" />
      <h1 className=" font-mono text-base sm:text-xl w-full md:w-[90%] lg:w-3/4 mb-16">
        I’d love to hear from you. Whether you have a question or just want to
        chat about work & tech — shoot me a message. I’ll get back to you as
        soon as I can.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 mt-8">
        {/* Contacts section*/}
        <div>
          <p className="text-3xl block tracking-[0.2rem] mb-2">REACH ME AT</p>
          <div className=" overflow-hidden">
            <p
              onClick={() => setModalOpen(true)}
              className="text-neutral-700 hover:text-yellow-600 font-mono text-lg block mb-2 w-fit cursor-pointer"
            >
              {contactsData.email}
            </p>
            <p className="text-neutral-700 hover:text-yellow-600 font-mono text-lg w-fit">
              {contactsData.phone}
            </p>
          </div>
        </div>
        {/* Socials section*/}
        <div>
          <p className="text-3xl block tracking-[0.2rem] mb-2">SOCIALS</p>
          <div className="text-neutral-700">
            {contactsData.socials.map((social, index) => (
              <div key={social.name} className="inline">
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  className=" hover:text-yellow-600 font-mono text-xl"
                >
                  {social.name}
                </Link>
                {index + 1 < contactsData.socials.length && " | "}
              </div>
            ))}
          </div>
        </div>
        {/* Email Button*/}
        <div className="items-center pt-5 xl:pt-0">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full md:w-4/5 bg-neutral-800 text-yellow-500 hover:scale-105 transition-all p-5 rounded-md text-2xl"
          >
            SAY HELLO.
          </button>
        </div>
        <Modal isOpen={modalOpen} modalState={setModalOpen} />
      </div>
    </div>
  );
}

export default ContactMe;
