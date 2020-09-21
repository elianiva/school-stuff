import fs from "fs"
import path from "path"
import matter from "gray-matter"
import glob from "glob"
import remark from "remark"
import html from "remark-html"

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

  return allPostsData.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  )
}

export const getAllPostsSlug = () => {
  let filenames = glob.sync(path.join(process.cwd(), "posts", "**/*.md"))
  return filenames.map(file => {
    return {
      params: {
        category: file.replace(/^.*posts\//, "").replace(/\/[0-9].*/, ""),
        id: file.replace(/^.*\//g, "").replace(/\.md$/, "")
      }
    }
  })
}

export const getPostData = async (category, id) => {
  const fullPath = path.join(process.cwd(), "posts", `${category}/${id}.md`)

  // convert markdown to html
  const fileContent = fs.readFileSync(fullPath, "utf-8")
  const result = matter(fileContent)
  const remarkResult = await remark()
    .use(html)
    .process(result.content)
  const body = remarkResult.toString()

  return {
    category,
    id,
    body,
    ...result.data
  }
}
