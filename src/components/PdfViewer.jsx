import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker"; // ✅ import worker แบบ Vite

// ตั้งค่า workerSrc
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfjsWorker();

const PdfViewer = ({ url }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;

        const container = containerRef.current;
        container.innerHTML = "";

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.2 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          await page.render({ canvasContext: context, viewport }).promise;

          container.appendChild(canvas);
          const divider = document.createElement("div");
          divider.style.margin = "20px 0";
          container.appendChild(divider);
        }

        setLoading(false);
      } catch (err) {
        console.error("PDF render error:", err);
        setLoading(false);
      }
    };

    loadPdf();
  }, [url]);

  if (loading) return <div className="text-center text-gray-500">กำลังโหลด PDF...</div>;

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center bg-white rounded-md shadow p-4"
    />
  );
};

export default PdfViewer;
