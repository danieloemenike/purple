
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
       
            <main className="md:w-full md:flex md:space-x-[24px]  md:h-full space-x-4 mt-2" key={post.id}>
                <div className = "bg-black md:h-200 md:w-320">
                    <Image src={ post.imageSrc } alt="blog post image" className="h-full w-auto object-cover" />
                </div>
                
                <div className="md:w-[248px] md:h-[200px]  ">
                    <h4 className="text-[14px] font-semibold text-[#8019B0] leading-[20px]"> { post.author } <span> • </span>  { post.date} </h4>
                
               
                <div className="md:my-[12px]">
                    <h3 className="font-semibold text-[18px] leading-[28px]"> { post.Title }
                    </h3>
                   
                </div>
                
                <p className="text-[14px] leading-[24px] text-[#667085] " >
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