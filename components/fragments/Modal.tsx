import { cn } from "@/lib/utils";
import { AppWindow, MailPlus, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import CopyToClipboard from "./CopyToClipboard";
import { contactsData } from "@/lib/constants";

function Modal({
  isOpen,
  modalState,
}: {
  isOpen: boolean;
  modalState: Dispatch<SetStateAction<boolean>>;
}) {
  const email = contactsData.email;
  const mailLinks = [
    {
      title: "Gmail in browser",
      link: `https://mail.google.com/mail/u/0/?fs=1&to=${email}&su&cc&bcc&body&tf=cm`,
    },
    {
      title: "Outlook in browser",
      link: `https://outlook.office.com/owa/?path=/mail/action/compose&amp;to=${email}&amp;subject=&amp;body=`,
    },
    {
      title: "Yahoo in browser",
      link: `https://compose.mail.yahoo.com/?to=${email}&amp;subject=&amp;cc=&amp;bcc=&amp;body=`,
    },
    {
      title: "Default email app",
      link: `mailto:${email}`,
      icon: <AppWindow />,
    },
  ];

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center z-40",
        isOpen ? "" : " hidden"
      )}
    >
      <div className="w-fit h-fit bg-black bg-opacity-15 z-30">
        <div className="flex justify-between px-6 py-4 text-md bg-black">
          <span className="font-mono">Select a method</span>
          <button
            className="text-neutral-600 hover:text-white transition-all"
            onClick={() => modalState(false)}
          >
            <X />
          </button>
        </div>
        <div className="grid gap-5 p-5">
          {mailLinks.map((item) => (
            <ModalBtn
              key={item.title}
              title={item.title}
              link={item.link}
              icon={item.icon}
            />
          ))}
          <CopyToClipboard text={email} />
        </div>
      </div>
      <div
        onClick={() => modalState(false)}
        className="bg-neutral-900 absolute w-full h-full"
      ></div>
    </div>
  );
}

export default Modal;

function ModalBtn({
  title,
  link,
  icon,
}: {
  link: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={link} target="_blank">
      <div className="flex p-5 text-2xl gap-4 items-center bg-neutral-800 hover:bg-yellow-600 hover:text-black">
        {icon ? icon : <MailPlus size={30} />}
        <span>{title}</span>
      </div>
    </Link>
  );
}
