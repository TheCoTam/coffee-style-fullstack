import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import BlogBreadCrumb from "@/components/blog-id/blog-breadcrumb";
import BlogIdHeader from "@/components/blog-id/blog-id-header";
import Author from "@/components/blog-id/author";
import BlogContent from "@/components/blog-id/blog-content";
import FeaturedPost from "@/components/blog/featured-post";
import { Button } from "@/components/ui/button";
import BlogDetailSkeleton from "@/components/blog-id/blog-detail-skeleton";

const url = import.meta.env.VITE_BACKEND_URL;

const BlogDetail = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPostData() {
      try {
        const res = await axios.get(url + "/api/post/detail/" + blogId);
        console.log(res.data);

        if (res.data.success) {
          setPost(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[get-post-by-id]", error);
        toast.error("Something went wrong");
      }
    }

    fetchPostData();
  }, [blogId]);

  if (!post) {
    return <BlogDetailSkeleton />;
  }

  return (
    <div className="min-h-[calc(100vh-68px)] flex flex-col my-16 gap-10">
      <BlogBreadCrumb category={post.category} />
      <BlogIdHeader
        title={post.title}
        description={post.description}
        src={post.image_url}
      />
      <div className="flex flex-col-reverse lg:flex-row gap-5 mx-10 lg:border lg:border-solid lg:border-t-0">
        <Author />
        <BlogContent value={post.content} createdAt={post.createdAt} />
      </div>
      <FeaturedPost />
      <Link to="/blog" className="self-center">
        <Button size="lg" className="uppercase">
          view all articles
        </Button>
      </Link>
    </div>
  );
};

export default BlogDetail;
