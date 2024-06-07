/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/siiga',
                destination: '/siiga/index.html',
            },
        ]
    },
};

export default nextConfig;
