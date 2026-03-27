import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns:[{protocol:"http",
      hostname:"localhost",
      port :"1337",
      pathname :"/uploads/**"
    }],
      dangerouslyAllowLocalIP: true
  },


};

export default nextConfig;
