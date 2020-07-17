import fs from "fs"
import path from "path"
import matter from "gray-matter"
import glob from "glob"

const postsDir = path.join(process.cwd(), "posts")

export const getSortedPostsData = () => {
  // get filenames from /posts dir
  let filenames = glob.sync(path.join(process.cwd(), "posts", "**/*.md"))

  // extract data from markdown files
  const allPostsData = filenames.map(file => {
    // create slug
    const slug = file.replace(/\.md$/, "")

    // get frontmatter from markdown
    const fileContent = fs.readFileSync(path.join(`${slug}.md`), "utf-8")
    const result = matter(fileContent)

    return {
      slug: slug.replace(/^.*posts/, ""),
      ...result.data
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  // return filenames
}
