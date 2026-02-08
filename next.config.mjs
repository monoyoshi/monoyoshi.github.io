/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://cdn.bladewyrm.dev/images/**')],
    }
};

export default nextConfig;