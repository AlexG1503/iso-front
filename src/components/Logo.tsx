import { useNavigate } from 'react-router-dom'
import image from '../../public/Radixnt.svg'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/home')} className='cursor-pointer'>
      <img src={image} alt="Radixnt" />
    </div>
  )
}

export default Logo