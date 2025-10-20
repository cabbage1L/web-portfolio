import React, { useEffect, useState } from "react";
import PdfViewer from "./PdfViewer";

const StoriesScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://us-central1-backen-cokesite.cloudfunctions.net/api/Stories")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">กำลังโหลด...</div>;
  if (!data || data.length === 0) return <div className="text-center mt-10">ไม่พบข้อมูล</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 py-20">
      {data.map((doc) => (
        <div key={doc.id} className="w-full max-w-3xl mb-8 ">
          {/* หัวข้อเอกสาร */}
          <div className="bg-gray-200 rounded-xl py-3 text-center text-lg font-semibold mb-4 shadow">
            {doc.description || "ไม่มีคำอธิบาย"}
          </div>

          {/* แสดงไฟล์ทั้งหมด */}
          <div className="bg-gray-400 w-full rounded-md overflow-hidden shadow p-0">
            {doc.files && doc.files.length > 0 ? (
              doc.files.map((file, index) => {
                const type = file.contentType;
                if (type.includes("pdf")) {
                  return <PdfViewer key={index} url={file.url} />;
                } else if (type.includes("image")) {
                  return <img key={index} src={file.url} alt={file.fileName} className="w-full mb-4 rounded" />;
                } else if (type.includes("image")) {
                  return (
                    <img
                      key={index}
                      src={file.url}
                      alt={file.fileName}
                      className="w-full mb-0 rounded"
                    />
                  );
                } else if (type.includes("svg")) {
                  return (
                    <object
                      key={index}
                      type="image/svg+xml"
                      data={file.url}
                      className="w-full mb-4"
                    />
                  );
                } else {
                  return (
                    <p key={index} className="text-white mb-2">
                      ❌ ไม่รองรับไฟล์ประเภทนี้: {file.fileName}
                    </p>
                  );
                }
              })
            ) : (
              <p className="text-white text-center">ไม่มีไฟล์ในเอกสารนี้</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesScreen;
