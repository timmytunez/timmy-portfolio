const Home = () => {
    return (
        <div className="relative w-full">
            <div>
                <div className="p-[5%] w-full bg-[#273036] sm:flex items-center justify-around">
                    <div className="">
                        <h1 className="xl:text-[60px] text-[40px] font-bold xl:leading-[65px] leading-[50px] md:text-[50px] md:w-[315px] w-[315px] xl:w-[557px] text-custom-purple">Welcome to My Portfolio</h1>
                        <p className="text-[white] md:w-[360px] xl:w-[450px] w-[315px] mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur similique a ut pariatur error iste obcaecati quis quos! Omnis.
                        </p>
                    </div>
                    <img src="img/home.png" alt="" className="xl:w-[400px] md:w-[300px] xl:h-[300px] w-[300px] h-[200px]" />
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute xl:top-[420px] md:top-[270px] top-[440px] bottom-0 left-0 z-0"
                >
                    <path
                        fill="#273036"
                        fillOpacity="1"
                        d="M0,32L48,42.7C96,53,192,75,288,106.7C384,139,480,181,576,186.7C672,192,768,160,864,170.7C960,181,1056,235,1152,218.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>
            {/* about me */}
            <div className="xl:mt-[200px] w-full h-[500px] flex flex-col items-center mt-[100px] ">
                <h1 className="xl:text-[40px ml-[200px] xl:ml-[400px] text-[30px] font-bold xl:leading-[65px] leading-[50px] md:text-[50px] md:w-[315px] font-alex w-[315px] xl:w-[557px] text-custom-purple">About me</h1>
                <div className="xl:flex items-center justify-center xl:mt-[40px]">
                    <div className="relative ml-[270px] xl:ml-10 h-500px flex w-[600px]">
                        <div className="xl:w-[400px] bg-[#5A6C6C] xl:h-[400px] w-[300px] h-[300px]"></div>
                        <img src="img/myimg.jpg" className=" ml-5 mt-5 absolute w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]" alt="" />
                    </div>
                    <div className="flex flex-col items-start xl:ml-0 mt-[30px] ml-[280px]">
                        <h1 className="xl:text-[40px] text-[30px] font-bold xl:leading-[65px] leading-[50px] md:text-[50px] font-quick md:w-[315px] w-[315px] xl:w-[557px] text-[#2D2D2D]">About</h1>
                        <p className="text-[#2D2D2D] md:w-[360px] xl:w-[450px] w-[300px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusamus ipsum, enim molestias veniam possimus explicabo autem qui nihil eius voluptatem sequi consequatur, officia totam inventore esse voluptate fuga cum. Quo necessitatibus nemo alias voluptatum excepturi at eligendi blanditiis corporis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores inventore fuga, veniam labore voluptatum atque necessitatibus soluta! Adipisci cum nostrum possimus ea et, eveniet amet reprehenderit placeat cumque voluptatum doloremque consequatur, quos recusandae hic excepturi. Libero debitis similique ab placeat.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
