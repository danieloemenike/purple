import Image from "next/image";
import Linkedin from "@/public/assets/Linkedin.png"
import Facebook from "@/public/assets/Facebook.png"
import Twitter from "@/public/assets/Twitter.png"


export default function SocialIcons() {
    const socialImages = [
        {
            id: 1,
            image: Twitter
        },
        {
            id: 2,
            image: Facebook
        },
        {
            id: 3,
            image: Linkedin
        },
    ]
    return (
        <>
            <section className="flex mt-[24px]">
                { socialImages.map(social => (
                    <Image key = {social.id} src={ social.image} alt = "Social Icon" className = "mr-[30px]" />
                ))}
               
            </section>
        </>
    )
}