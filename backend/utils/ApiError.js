/**
 * ApiError.js
 *
 * Purpose:
 * --------
 * This file defines a custom error class `ApiError` that extends the default
 * JavaScript `Error` object. It is used throughout the backend to handle
 * errors in a consistent and structured way for API responses.
 *
 * Why we need it:
 * ---------------
 * - The default `Error` object only gives a message and stack trace.
 * - In an API, we usually need more information:
 *   -> HTTP status code (e.g., 400, 401, 500)
 *   -> Error message (user-friendly or developer message)
 *   -> Extra details (`errors` array) if multiple validation issues occur
 *   -> A flag (`success = false`) to indicate failure in JSON response
 *
 * How to use it:
 * --------------
 * 1. Import the class:
 *    const  ApiError  = require("../utils/ApiError");
 *
 * 2. Throw an error in routes or services when something goes wrong:
 *    throw new ApiError(404, "User not found");
 *
 * 3. Use an Express error-handling middleware to catch it and send a proper JSON response:
 *    app.use((err, req, res, next) => {
 *      if (err instanceof ApiError) {
 *        return res.status(err.statusCode).json({
 *          success: err.success,
 *          message: err.message,
 *          errors: err.errors,
 *          data: err.data
 *        });
 *      }
 *      // fallback for unexpected errors
 *      return res.status(500).json({ success: false, message: "Internal Server Error" });
 *    });
 */

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.errors = errors;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError ;
