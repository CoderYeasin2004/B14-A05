import Logo from "../assets/logo-text.png"
const Navbar = () =>{
    return(
        <div className=" border-b-gray-300">

        <nav className="flex justify-between gap-4 container mx-auto py-4">
        <img src={Logo}className="w-[150px] h-[40px]"alt="" />
        <ul className="flex gap-4 items-center">
            <li className=" text-color">Home</li>
            <li>Technologies</li>
            <li>Project</li>
            <li>about</li>
            <li>Contact</li>
        </ul>

        <div>
            <button className=" text-white px-4 rounded-md">Sign In</button>
            <button className="bg-fuchsia-500 text-white px-4 py-2 rounded-3xl hover:bg-fuchsia-800 hover:scale-105 transition-transform duration-300">Sign Up</button>
        </div>
    </nav>
    </div>
    ) 
    
}

export default Navbar;