import { cn } from "@/lib/utils";

function MobileNav({ links, isOpen }: { links: string[]; isOpen: boolean }) {
  return (
    <div
      className={cn(
        "flex text-3xl flex-col mt-10 w-full border-t-2 border-e-gray-500",
        !isOpen && "hidden"
      )}
    >
      {links.map((link, index) => (
        <a
          className=" hover:text-blue-500 hover:scale-105 ps-6 pt-8 transition-all"
          key={index}
          href={"#" + link}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default MobileNav;
