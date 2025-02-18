"use client";

import { navData } from "@/lib/constants";
import { Mail } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="p-5 sm:p-10 relative z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl">
          <Link href={""}>
            {"<"}
            <span className="text-yellow-500">{navData.heading}</span>
            {" />"}
          </Link>
        </h1>

        <Link
          className="flex gap-2 hover:scale-110 transition-all hover:text-yellow-500 text-sm sm:text-xl items-center"
          href="#Contact"
        >
          <Mail />
          <span className="hidden sm:inline">Get in touch</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
