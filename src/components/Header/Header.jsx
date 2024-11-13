import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div>
                <img className='w-[300px]' src={logo} alt="" srcset="" />
            </div>
            <h2 className='text-gray--400'>
                Journalism Without Fear or Favor
            </h2>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;