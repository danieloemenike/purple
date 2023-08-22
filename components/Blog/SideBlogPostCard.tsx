
import Image, { StaticImageData } from "next/image"
import { Badge } from "../ui/badge";


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

export default function SideBlogPostCard({ post }: blogProps) {
    
    
   
    return (
        <>
       
            <main className="w-full flex space-x-[24px]" key={post.id}>
                <div>
                    <Image src={ post.imageSrc } alt="blog post image" className="w-[320px] h-[200px]  " />
                    </div>
                <div className="w-[248px]   ">
                    <h4 className="text-[14px] font-semibold text-[#8019B0] leading-[20px]"> { post.author } <span> • </span>  { post.date} </h4>
                
               
                <div className="my-[12px]">
                    <h3 className="font-semibold text-[18px] leading-[28px]"> { post.Title }
                    </h3>
                   
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
            </div>
        </main>
        </>
    )
}