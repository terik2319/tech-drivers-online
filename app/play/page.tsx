"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLCanvasElement,
      config: Record<string, unknown>,
      onProgress?: (progress: number) => void
    ) => Promise<{ SetFullscreen: (value: number) => void }>;
  }
}

const BUILD_BASE = "/webgl/Build/Build_TechDriverCheck_WebGL";

export default function PlayPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${BUILD_BASE}.loader.js`;
    script.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas || !window.createUnityInstance) return;

      window
        .createUnityInstance(
          canvas,
          {
            arguments: [],
            dataUrl: `${BUILD_BASE}.data.br`,
            frameworkUrl: `${BUILD_BASE}.framework.js.br`,
            codeUrl: `${BUILD_BASE}.wasm.br`,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "FTCSim",
            productVersion: "0.1.0",
          },
          (p) => setProgress(p)
        )
        .then(() => setLoaded(true))
        .catch((message: unknown) => setError(String(message)));
    };
    script.onerror = () => setError("No se pudo cargar el loader del simulador.");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0d12",
        color: "#f2f4f8",
        fontFamily: "system-ui, sans-serif",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <canvas
        ref={canvasRef}
        width={960}
        height={600}
        style={{ background: "#000", borderRadius: 8, maxWidth: "100%" }}
      />
      {!loaded && !error && (
        <p style={{ color: "#9aa4b2" }}>
          Cargando TECH DRIVER... {Math.round(progress * 100)}%
        </p>
      )}
      {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
    </main>
  );
}
