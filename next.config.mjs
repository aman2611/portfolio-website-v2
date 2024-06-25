/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kllawingco.com',
          port: '',
        },
        
      ],
    },
  };
  
  export default nextConfig;
  