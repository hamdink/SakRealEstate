"use client";

import Blog from "@app/components/Blog";
import { useSearchParams } from "next/navigation";

const BlogPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <section className="w-full">
      <Blog id={id} />
    </section>
  );
};

export default BlogPage;
