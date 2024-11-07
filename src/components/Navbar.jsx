import Link from "next/link";


const Navbar = () => {
    return (
        <div className="p-4">
            <nav>
      <ul className="flex flex-row items-center justify-evenly h-20 bg-[#2434ec] text-white font-semibold rounded-lg">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/service">Service</Link></li>
      </ul>
    </nav>
        </div>
    );
};

export default Navbar;