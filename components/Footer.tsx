import Logo from "@/public/assets/Purple.png"
import Image from "next/image"
import SocialIcons from "./SocialIcons"
import CopyrightNote from "./CopyrightNote"

export default function Footer() {
    return (
        <>
            <footer className= "mt-[96px] mb-[75px]">
                <div className="ml-[-18px]">
                    <Image src = {Logo} alt = "Purple Logo" />
                </div>
                <p className="text-[14px] font-medium leading-[150%] text-[#6E6D7A] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur. Eget feugiat purus arcu nisl nibh varius diam. Dignissim dolor porttitor elit ornare et habitasse pellentesque diam suspendisse. Vitae sagittis nisi condimentum volutpat sagittis. Magna leo semper in faucibus. Non diam est lorem urna amet id. Integer sit tellus in faucibus ipsum. Ipsum diam viverra at amet massa lectus enim eget vel. Velit eget ac pellentesque accumsan risus fames augue nulla dignissim. Sed praesent in tortor diam suspendisse.
Amet ac vitae eu vestibulum vulputate. Eu pulvinar scelerisque elit enim et. Arcu at enim nulla urna facilisis arcu ullamcorper quis. Nibh donec pellentesque neque volutpat tristique. Urna nisl eget id feugiat. Nec aenean turpis non venenatis tempor dictum et enim dictumst.
                </p>
                <nav className="flex gap-[24px]">
                    <h6 className="text-[14px] font-medium text-[#6E6D7A]"> About Us</h6>
                    <h6 className="text-[14px] font-medium text-[#6E6D7A]"> Careers</h6>
                    <h6 className="text-[14px] font-medium text-[#6E6D7A]"> Contact Us </h6>
                </nav>
                <hr className="underline underline-offset-2 w-100 h-[2px] my-[30px]"/>

                <SocialIcons />
                <CopyrightNote />
            </footer>
        </>
    )
}