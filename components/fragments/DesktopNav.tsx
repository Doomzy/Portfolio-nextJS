function DesktopNav({ links }: { links: string[] }) {
  return (
    <div className={"flex text-2xl w-full"}>
      {links.map((link, index) => (
        <a
          className=" hover:text-blue-500 hover:scale-110 ps-6 pt-0 transition-all"
          key={index}
          href={"#" + link}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default DesktopNav;
