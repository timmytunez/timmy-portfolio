import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="sm:w-full sm:h-[80px] h-[60px] px-10 flex items-center justify-between bg-[black]">
            <h1 className="font-alex sm:text-[30px] text-white">Timmy Tunez</h1>
            <div className="">
                <Link className='text-white text-[15px] font-quick ml-8'>Front-end Developer</Link>
                <Link className='text-white text-[15px] font-quick ml-8'>Content-Writer</Link>
                <Link className='text-white text-[15px] font-quick ml-8'>Music Producer</Link>
            </div>
            <div className="text-white flex space-x-4">
                <i className="bi bi-github"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
            </div>
        </div>
    )
}

export default Navbar