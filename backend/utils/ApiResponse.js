/**
 * ApiResponse.js
 *
 * Purpose:
 * --------
 * This file defines a reusable `ApiResponse` class that standardizes how
 * successful API responses are sent from the backend to the client.
 *
 * Why we need it:
 * ---------------
 * - Instead of sending inconsistent response objects from different routes,
 *   this class ensures every API returns a consistent JSON structure.
 * - Helps frontend developers easily parse responses because the format
 *   is predictable across the entire project.
 *
 * Fields:
 * -------
 * - statusCode : HTTP status code (e.g., 200, 201, 400, 500)
 * - data       : The actual response payload (object, array, or value)
 * - message    : A descriptive message about the response (default = "Success")
 * - success    : Boolean flag, `true` if statusCode < 400, otherwise `false`
 *
 * How to use it:
 * --------------
 * 1. Import the class in your controller or service:
 *    const ApiResponse = require("../utils/ApiResponse");
 *
 * 2. Return a successful response:
 *    res.status(200).json(new ApiResponse(200, { user: userData }, "User fetched successfully"));
 *
 * 3. For errors, you should use ApiError.js (custom error handler).
 */

class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400; // true for success, false for errors
    }
}

// Exporting the class directly (not wrapped in an object)
// because this file is only responsible for a single class.
module.exports = ApiResponse;
