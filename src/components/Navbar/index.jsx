import { paths } from "@/utils/paths";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-8 text-xl">
      {paths.map((item, index) => (
        <Link href={item.href} key={index}>
          {item.title}
        </Link>
      ))}
      <form>
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Navbar;
