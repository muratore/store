import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react'
interface SocialMediaProps{
  className?:string
}
const SocialMedia = (props:SocialMediaProps) => {
  return (
    <div className={`${props.className?? ''} flex  gap-5 text-white`}>
        <span><IconBrandFacebook stroke={1} /></span>
        <span><IconBrandInstagram stroke={1}/></span>
        <span><IconBrandTwitter stroke={1}/></span>
    </div>
  )
}

export default SocialMedia