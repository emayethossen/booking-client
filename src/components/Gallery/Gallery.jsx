
const Gallery = () => {

    return (
        <div>
            <h2 className='lg:text-5xl text-3xl text-center font-bold my-6 lg:my-12 text-[#FF69B4]'>College Image Gallery</h2>
            <div className='grid lg:grid-cols-4 grid-cols-3 lg:gap-4 gap-1 mb-6  lg:space-y-0 lg:mx-16'>
                {/* card one */}
                <div className="carousel-item relative w-full lg:col-span-2">
                    <img src="https://i.ibb.co/nzYkqq1/istockphoto-1307457391-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card two */}
                <div className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sK3Cr82/istockphoto-1083161184-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card three */}
                <div className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zf1ZtQf/istockphoto-171271182-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 4 */}
                <div className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KzZj3hT/istockphoto-1338737959-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 5 */}
                <div className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Tb4SFdb/istockphoto-1456729829-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 6 */}
                <div className="carousel-item relative w-full lg:col-span-2">
                    <img src="https://i.ibb.co/cwYVkSP/istockphoto-1426558991-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>

                {/* card one */}
                <div className="carousel-item relative lg:hidden w-full lg:col-span-2">
                    <img src="https://i.ibb.co/09k2bqt/istockphoto-1419580307-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card two */}
                <div className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/m4Rb7Sb/istockphoto-1390975349-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card three */}
                <div className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/Mhh4D28/istockphoto-1353372838-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 4 */}
                <div className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/d6Xwhbn/istockphoto-1433624442-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 5 */}
                <div className="carousel-item relative lg:hidden w-full">
                    <img src="https://i.ibb.co/23x06Sp/istockphoto-1390813037-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
                {/* card 6 */}
                <div className="carousel-item relative lg:hidden w-full lg:col-span-2">
                    <img src="https://i.ibb.co/ky4hKsT/istockphoto-1387703013-170667a.webp" className="h-20 lg:h-72 w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;