import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const commonStyles = "min-h-[40px] sm:px-1 px-2 sm:min-w-[120px] flex justify-center items-center border-white border-2 p-1 bg-yellow-600 text-sm font-normal text-white";

const Welcome = () => {
    const connectWallet = () => {

    }
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start items-start flex-col md:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white py-1'>
                        Crpyto Insights <br /> brought to you simply.
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-full w-full text-base'>
                        Explore our Dashboard and gain Alpha from our Insights.
                    </p>
                    <button
                        type='button'
                        onClick = {connectWallet}
                        className='flex flex-row justify-center items-center my-5 w-full bg-yellow-600 p-3 rounded-full cursor-pointer hover:bg-yellow-700 border-transparent'
                    >
                        <p className='text-white text-base font-semibold'> Connect Wallet </p>
                    </button>

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl rounded-bl-2xl ${commonStyles}`}>
                           Data Driven
                        </div>
                        <div className={commonStyles}>Independent Research</div>
                        <div className={`sm:rounded-tr-2xl rounded-br-2xl ${commonStyles}`}>
                            Daily Reports
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
