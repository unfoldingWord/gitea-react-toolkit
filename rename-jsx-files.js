const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const rename = promisify(fs.rename)

// Function to check if file contains JSX
async function containsJSX(filePath) {
  try {
    const content = await readFile(filePath, 'utf8')

    // Common patterns that indicate JSX usage
    const jsxPatterns = [
      /\s+from\s+['"]react['"]/, // React import
      /<[a-zA-Z]+.*>/, // JSX HTML element
      /\breturn\s*\(/, // return statement with parentheses (common in JSX)
      /className=/, // className attribute
      /props\./, // props usage
    ]

    return jsxPatterns.some(pattern => pattern.test(content))
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return false
  }
}

// Function to walk through directory recursively
async function walk(dir) {
  try {
    const files = await fs.promises.readdir(dir)
    const results = []

    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = await fs.promises.stat(filePath)

      if (
        stat.isDirectory() &&
        !file.includes('node_modules') &&
        !file.includes('.git')
      ) {
        results.push(...(await walk(filePath)))
      } else if (file.endsWith('.js')) {
        results.push(filePath)
      }
    }

    return results
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error)
    return []
  }
}

// Main function
async function renameJsxFiles() {
  try {
    // Get the src directory path
    const srcDir = path.join(process.cwd(), 'src')

    // Check if src directory exists
    if (!fs.existsSync(srcDir)) {
      console.error('Error: src directory not found in the current working directory')
      return
    }

    console.log(`Starting to scan files in ${srcDir}`)
    const files = await walk(srcDir)
    console.log(`Found ${files.length} .js files to check in the src directory`)
    let count = 0

    for (const file of files) {
      if (await containsJSX(file)) {
        const newPath = file.replace(/\.js$/, '.jsx')
        await rename(file, newPath)
        console.log(`Renamed: ${file} -> ${newPath}`)
        count++
      }
    }

    console.log(`\nCompleted! Renamed ${count} files to .jsx`)
  } catch (error) {
    console.error('Error:', error)
  }
}

// Run the script
renameJsxFiles()
