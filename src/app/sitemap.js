import { blogs } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = "https://iqraconsultancy.in"; // use single canonical domain

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date || Date.now()),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}



// import { blogs } from "@/data/blogs"; // adjust path if needed

// export default function sitemap() {
//   const baseUrl = "https://www.iqraconsultancy.in";

//   const blogUrls = blogs.map((blog) => ({
//     url: `${baseUrl}/blog/${blog.slug}`,
//     lastModified: new Date(),
//   }));

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/blog`,
//       lastModified: new Date(),
//     },
//     ...blogUrls,
//   ];
// }
