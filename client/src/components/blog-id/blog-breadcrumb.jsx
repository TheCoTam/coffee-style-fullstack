import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { POST_CATEGORIES } from "@/data/post-categories";

const BlogBreadCrumb = ({ category }) => {
  const currentCategory = POST_CATEGORIES.find((cat) => cat.value === category);

  if (!currentCategory) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList className="px-10 flex justify-center lg:justify-start uppercase font-semibold text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/blog?category=${currentCategory.value}`}>
            {currentCategory.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BlogBreadCrumb;
