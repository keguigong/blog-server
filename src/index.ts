import express, { type NextFunction, type Request, type Response } from "express"
import ogimageRoute from "./ogimage"

const app = express()
const port = process.env.PORT || 3000

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render("error", { error: err })
}

app.use(express.json())
app.use(errorHandler)

app.use("/api/ogimage", ogimageRoute)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

process.on("uncaughtException", (error: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
  console.log("==== Uncaught exception ====")
  console.log(error)
  console.log("==== Exception origin ====")
  console.log(origin)
})

process.on("unhandledRejection", (reason, promise) => {
  console.log("==== Unhandled Rejection at ====")
  console.log(promise)
  console.log("==== Reason ====")
  console.log(reason)
})

// Export the Express API
module.exports = app
