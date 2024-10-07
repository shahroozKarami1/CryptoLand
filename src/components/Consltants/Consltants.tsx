import { FC } from 'react'
import { IConsltantsProps } from '../../Types/interfaces'


const Consltants: FC<IConsltantsProps> = ({name  ,  cover  ,  jobPosition  ,  socialMediaIcon}) => {
  return   (
    <main>
     <div className='bg-consltants'>
        <img src= {cover} alt="" />
        <div  className='flex  flex-col  gap-4'>
            <span>{name}</span>
            <span>{jobPosition}</span>
        </div>
     </div>
    </main>
  )
}

export default Consltants