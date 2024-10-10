import { FC } from 'react'
import { ILiseneseIconsProps } from '../../Types/interfaces'
import { Link } from 'react-router-dom'



const LiseneseIcons: FC<ILiseneseIconsProps> = ({icon}) => {
  return <li><Link to= {"/"}    className='text-textColor block  text-center    p-2 text-lg  rounded-full' style={{border :  `1px  solid  var(--secondary-color) `}}>{icon}</Link></li>
}

export default LiseneseIcons


