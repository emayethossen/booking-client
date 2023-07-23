import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-900 pt-6'>
            <div className='flex justify-center'>
                <h2 className='text-white text-4xl font-bold'>SimplyBook</h2>
            </div>
            <footer className='grid lg:grid-cols-4 gap-12 md:grid-cols-2 w-3/4 p-10 mx-auto text-white'>

                <div className='text-center lg:text-left space-y-4'>

                    <h2 className='footer-title'>Our Social Links</h2>
                    <div className='space-y-6'>
                        <Link to='https://www.facebook.com/emayethossen4/' className='flex items-center justify-center'>
                            <img className='w-8 h-8' src="https://i.ibb.co/Y7CjmHF/linkedin.png" alt="" />
                            <p className='ml-3'>Facebook</p>
                        </Link>
                        <Link to='https://twitter.com/emayethossen' className='flex items-center justify-center'>
                            <img className='w-8 h-8' src="https://i.ibb.co/Y7CjmHF/linkedin.png" alt="" />
                            <p className='ml-3'>Twitter</p>
                        </Link>
                        <Link to='https://www.linkedin.com/in/emayethossen' className='flex items-center justify-center'>
                            <img className='w-8 h-8' src="https://i.ibb.co/Y7CjmHF/linkedin.png" alt="" />
                            <p className='ml-3'>LinkedIn</p>
                        </Link>
                    </div>
                </div>
                <div className='text-center lg:text-left space-y-4 hidden lg:flex flex-col'>
                    <h2 className='footer-title'>Company</h2>
                    <Link to='/' className="link link-hover block">About Us</Link>
                    <Link to='/' className="link link-hover block">Work
                    </Link>
                    <Link to='/' className="link link-hover block">Latest News</Link>
                    <Link to='/' className="link link-hover block">Contact Us</Link>
                </div>
                <div className='text-center lg:text-left space-y-4 hidden lg:flex flex-col'>
                    <h2 className='footer-title'>Product</h2>
                    <Link to='/' className="link link-hover block">College</Link>
                    <Link to='/' className="link link-hover block">Admission</Link>
                    <Link to='/' className="link link-hover block">Booking</Link>
                    <Link to='/' className="link link-hover block">About</Link>
                </div>
                <div className='text-center lg:text-left space-y-4'>
                    <h2 className='footer-title'>Contact</h2>
                    <Link to='/' className="link link-hover block">Chattoggram, Bangladesh</Link>
                    <Link to='/' className="link link-hover block">+8801881870749</Link>
                    <Link to='/' className="link link-hover block">Email: emayet@gmail.com</Link>
                </div>
            </footer>
            <hr className='border w-3/4 mx-auto mt-6' />
            <div className='w-3/4 text-sm text-white mx-auto flex justify-between py-12'>
                <p>@2023 SimplyBook. All Rights Reserved</p>
                <p className='text-right'>Powered by EMAYET</p>
            </div>
        </div>
    );
};

export default Footer;