import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle}) => (
    <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover-shadow-xl overflow-hidden'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color} `}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='mt-2 text-white text-lg'>{title}</h1>
            <p className='mt=2 text-white text-sm md:w-9/12'>{subtitle}</p>
            </div>
    </div>
);

const Services = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center gradient-bg-services py-20 overflow-hidden'>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-9/12 mt-10'>">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white"></BsShieldFillCheck> }
                    subtitle="Security is guaranteed. Always maintain privacy of Portfolios."
                />
                <ServiceCard
                    color="bg-[#02C919]"
                    title="Innovative Insights"
                    icon={<BiSearchAlt fontSize={21} className="text-white"></BiSearchAlt> }
                    subtitle="We make sure to provide only the breakthrough information."
                />
                <ServiceCard
                    color="bg-[#EB5304]"
                    title="Completely Free"
                    icon={<RiHeart2Fill fontSize={21} className="text-white"></RiHeart2Fill> }
                    subtitle="Service is free and so are all of our Portfolio analytics. Great!"
                />
            </div>
        </div>
    );
}

export default Services;
