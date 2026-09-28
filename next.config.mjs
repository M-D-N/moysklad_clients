/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Docker uchun: .next/standalone ichida minimal server yig‘iladi
  output: "standalone",
};

export default nextConfig;
