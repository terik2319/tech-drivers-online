import type { NextConfig } from "next";

const BUILD_PATH = "/webgl/Build/Build_TechDriverCheck_WebGL";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    return [
      {
        source: `${BUILD_PATH}.framework.js.br`,
        headers: [
          { key: "Content-Encoding", value: "br" },
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
        ],
      },
      {
        source: `${BUILD_PATH}.data.br`,
        headers: [
          { key: "Content-Encoding", value: "br" },
          { key: "Content-Type", value: "application/octet-stream" },
        ],
      },
      {
        source: `${BUILD_PATH}.wasm.br`,
        headers: [
          { key: "Content-Encoding", value: "br" },
          { key: "Content-Type", value: "application/wasm" },
        ],
      },
    ];
  },
};

export default nextConfig;
