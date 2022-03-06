import { Loader } from './';

const commonStyles = "min-h-[40px] sm:px-1 px-2 sm:min-w-[120px] flex justify-center items-center border-white border-2 p-1 bg-yellow-600 text-sm font-normal text-white";

const Welcome = () => {  
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start items-start flex-col md:mr-10'>
                    <h1 className='text-7xl sm:text-7xl text-white py-5'>
                        Crpyto Insights <br /> brought to you simply.
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-full w-full text-base'>
                        Explore our Dashboard and gain Alpha from our Insights.
                    </p>

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10 m-auto'>
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
