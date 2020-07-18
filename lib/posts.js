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
    // get frontmatter from markdown
    const fileContent = fs.readFileSync(file, "utf-8")
    const result = matter(fileContent)

    return {
      slug: file.replace(/^.*posts\//, "").replace(/\.md$/, ""),
      ...result.data
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  // return filenames
}

export const getAllPostsSlug = () => {
  let filenames = glob.sync(path.join(process.cwd(), "posts", "**/*.md"))
  return filenames.map(file => {
    return {
      params: {
        category: file.replace(/^.*posts\//, "").replace(/\/[0-9].*/, ""),
        id: file.replace(/[^0-9]/g, "")
      }
    }
  })
}

export const getPostData = (category, id) => {
  const fullPath = path.join(process.cwd(), "posts", `${category}/${id}.md`)

  // convert markdown to html
  const fileContent = fs.readFileSync(fullPath, "utf-8")
  const result = matter(fileContent)

  return {
    category,
    id,
    ...result.data
  }
}
