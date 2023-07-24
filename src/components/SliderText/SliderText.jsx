
const SliderText = () => {
    return (
        <div className='space-y-6 lg:text-left text-center'>
            <h2 className='text-5xl text-white font-bold'>Search Your Favourite College</h2>
            <div className="flex justify-center">
          <input
            type="text"
            className="border-none  pl-4 pr-10 lg:w-full py-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Search..."
          />
          <button className="bg-[#FF69B4] text-xl lg:text-2xl text-white px-4 rounded-lg -ml-8">
            Search
          </button>
        </div>
        </div>
    );
};

export default SliderText;