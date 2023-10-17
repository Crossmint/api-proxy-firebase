/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
      return [
          {
              // matching all API routes
              source: "/api/:path*",
              headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                  { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "authorization, content-type" },
              ]
          }
      ]
  }
}

module.exports = nextConfig
