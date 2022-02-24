import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
        placeholder = {placeholder}
        type = {type}
        step='0.0001'
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    />
);

const handleSubmit = () => {

}

const CryptoCard = () => {
    return (
        <div className='flex w-full justify-center items-center'>
        <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 px-10'>
            <div className='flex flex-1 justify-start items-start flex-col mf:mr-10 mt-10'>
                <h1 className='text-3xl sm:text-5xl text-white py-5'>
                    Subscribe today to start benefiting.
                </h1>
                <p className='text-left mt-5 text-white font-light md:w-full w-full text-base'>
                    P.S. Payments are Secured and Powered by Ethereum, we go the fees covered.
                </p>
                <p className='text-left mt-5 text-white font-light md:w-full w-full text-base'>
                    You can monitor our progress transparently, we post our trades online for you <br/> to view. So rest assured that we are not just dumping the stock right after.
                </p>
            </div>
            <div className="flex flex-row flex-col flex-1 items-center justify-start w-full mf:mt-10 mt-0">
                    <div className="p-3 flex-row flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className='w-5 flex justify-center items-center'>
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className='text-white font-light text-sm'>
                                    Address
                                </p>
                                <p className='text-white font-semibokd text-lg mt-1'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                        <Input placeholder='Address To' name='addressTo' type='text' handleChange={() => {}} />
                        <Input placeholder='Amount (ETH)' name='amounteth' type='number' handleChange={() => {}} />
                        <Input placeholder='Keyworld (Gif)' name='gif' type='text' handleChange={() => {}} />
                        <Input placeholder='Twitter @' name='twitter' type='text' handleChange={() => {}} />
                        <Input placeholder='Enter Message' name='message' type='text' handleChange={() => {}} />

                        <div className='h-[1px] w-full bg-gray-400 my-2' />

                        {false ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                            Send now
                            </button>
                        )}                
                    </div>
                </div>
             </div>
        </div>
    );
}

export default CryptoCard;
