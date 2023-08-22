import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "@/data/blogPosts";
import { PaginatedItems } from "./Pagination";


export default function BlogPosts() {
    return (
        <>
            <section className="mt-[96px] mb-[64px]:">
                    <div className="mb-[32px]">
                <h2 className = "text-[24px] font-semibold leading-[32px] text-[#101828]" > All blog posts </h2>
         
                </div>
            <div className="grid grid-cols-3 mx-auto w-full  gap-y-[48px] gap-x-[32px] ">
               
                { blogPosts.map(post => (
                    <BlogPostCard post = {post} key={post.id}  />
                ))}
              
                </div>
                <hr className="underline underline-offset-2 w-100 h-[2px] mt-[64px]" />
                <PaginatedItems />
                </section>
        </>
    )
}