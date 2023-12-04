Suppose your project contains a package.json file, no api directory, and no vercel.json configuration. In that case, it is expected to provide a build script that performs a static build of your frontend and outputs it to a public directory at the root of your project.

When properly configured, your package.json file would look similar to this:

```json
{
  "scripts": {
    "build": "[my-framework] build --output public"
  }
}
```
