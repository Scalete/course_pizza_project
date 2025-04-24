import { FC } from "react";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between pb-10 mb-10 border-b border-b-[#EDEDED]">
      <Link href={""} className="flex items-center gap-4">
        <Image
          width={35}
          height={35}
          src="/logo-pizza.png"
          alt="Header Pizza Logo"
        />
        <div className="max-md:hidden">
          <h2 className="text-2xl font-black">BUFFET</h2>
          <span className="text-base font-normal text-[#7B7B7B]">
            смачніще вже нема куди
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Button className="cursor-pointer border-r-accent">
          <User />
          <span>Увійти</span>
        </Button>
        <Button className="cursor-pointer">
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
};

export default Header;
