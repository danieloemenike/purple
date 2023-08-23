import BlogPostCard from "./BlogPostCard";
import { RecentBlogPosts } from "@/data/blogPosts";
import { RecentBlogPostsSecondary } from "@/data/blogPosts";
import SideBlogPostCard from "./SideBlogPostCard";


export default function RecentBlog() {
    return (
        <>
            <section className="mt-[122px]">
                <h2 className=  "text-[24px] text-[#101828]leading-[32px] font-semibold mb-[32px] leading-[32px]" >
                    Recent blog posts
                </h2>
                <main className="grid grid-flow-row auto-rows-max md:grid-cols-2 md:gap-x-[32px] space-y-4">
                { RecentBlogPosts.map(post => (
                    <BlogPostCard post = {post}  />
                )) }
                    <div className="md:flex md:flex-col md:justify-between gap-y-4 ">
                { RecentBlogPostsSecondary.map(post => (
                    <SideBlogPostCard post = {post} key={post.id}  />
                )) }
                        </div>
                </main>
            </section>
        </>
    )
}