
import Image, { StaticImageData } from "next/image"
import { Badge } from "../ui/badge";
import icon from "@/public/assets/Icon.png"

type blogProps = {
    post: {
        id: number,
        imageSrc: StaticImageData,
        author: string,
        date: string,
        Title: string,
        description: string,
        category: {
            name: string;
            color: string;
            backgroundColor: string
        }[]
    }
}

export default function BlogPostCard({ post }: blogProps) {
    
    
   
    return (
        <>
       
            <main className="w-full" key = {post.id} >
                <Image src={ post.imageSrc } alt="blog post image" className="mb-[32px]" />
                <div className="">
                    <h4 className="text-[14px] font-semibold text-[#8019B0] leading-[20px]"> { post.author } <span> • </span>  { post.date} </h4>
                
                </div>
                <div className="flex items-center  justify-between my-[12px]">
                    <h3 className="font-semibold text-[24px] leading-[32px]"> { post.Title }
                    </h3>
                    <div className="w-[24px] h-[24px]">   
                        <Image src={ icon } alt="arrow-up-icon"  className="bg-white h-[10px] w-[10px] "  />
                        </div>
                </div>
                
                <p className="text-[16px] leading-[24px] text-[#667085] " >
                    { post.description }
                </p>
                <div className = "mt-[24px] ">
                    { post.category.map(tag => (
                      
                        
                <Badge className =" mr-[8px]" style = {{color: tag.color, backgroundColor: tag.backgroundColor}}>
                           
                            { tag.name } 
                        </Badge>
                            
                    ))}
              </div>
        </main>
        </>
    )
}