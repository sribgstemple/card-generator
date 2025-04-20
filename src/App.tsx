// src/App.tsx
import React, { useState } from "react";
import html2canvas from "html2canvas-pro";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [date, setDate] = useState("2024-11-15");
  const [startTime, setStartTime] = useState("09:30 AM");
  const [endTime, setEndTime] = useState("12:30 PM");
  const [topText, setTopText] = useState("Om Namashivaya 🙏");
  const [eventTitle, setEventTitle] = useState(
    "Sakala Dhravyam Maha Abhishekham and Rudra Homam"
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [additionalNote, setAdditionalNote] = useState(
    "If anyone is interested in contributing Pooja Dhravyam, Deepam Oil, Ghee, or items for Prasadam, you are welcome to contribute and receive divine blessings."
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("card");
    if (!element) return;
    const canvas = await html2canvas(element, {
      scale: 3, // 3x resolution
    });
    const link = document.createElement("a");
    link.download = "temple_invitation_card.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };

  const formattedDate = format(new Date(date), "do MMMM yyyy");
  const day = format(new Date(date), "EEEE");

  return (
    <div className="flex flex-col items-center min-h-screen px-2 py-6 font-sans bg-gray-100">
      <h1 className="mb-4 text-xl font-bold">Temple Card Editor</h1>

      <div className="w-full max-w-md mb-6 space-y-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-2">
          <input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="Start Time"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="End Time"
            className="w-1/2 p-2 border rounded"
          />
        </div>
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Top Line"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="Event Title"
          className="w-full h-16 p-2 border rounded resize-none"
        />
        <textarea
          value={additionalNote}
          onChange={(e) => setAdditionalNote(e.target.value)}
          placeholder="Additional Note"
          className="w-full h-20 p-2 border rounded resize-none"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="flex items-center w-full p-4 bg-white border rounded"
        />
      </div>

      <div
        id="card"
        className="w-[360px] h-fit px-2 py-3 pb-4 shadow-lg border relative overflow-hidden space-y-2  bg-[url('/bg.jpg')] bg-cover bg-center text-black"
      >
        {/* <div className="flex items-center justify-center px-2 py-2 mt-3 border-b border-orange-300">
          <img src="/logo.png" alt="Temple Logo" className="w-12 h-12 mr-2" />
          <h2 className="font-bold leading-tight text-red-700 uppercase text-md">
            Sri Balagurunadheeswara Swamy
          </h2>
        </div> */}
        <div className="flex items-center gap-2 mb-2 border-b border-orange-300">
          <img
            src="/logo.png"
            alt="Temple Logo"
            className="object-contain w-16 h-16"
          />
          <div className="flex flex-col items-center justify-center py-2 mt-3">
            <p className="font-bold leading-tight text-red-700 uppercase text-[.875rem]">
              Sri Balagurunadheeswara Swamy
            </p>
            <p className="text-[.6563rem] leading-normal text-gray-700 mt-2">
              Rachapalyam Village (SBR Puram),
              <br />
              Palasamudram Mandal, Chittoor, AP-517599
            </p>
          </div>
        </div>

        <div className="w-full text-[13px] leading-normal">
          <p className="font-semibold text-center">{topText}</p>
          <p className="mt-2.5 text-justify">
            On <strong>{formattedDate}</strong> (<strong>{day}</strong>),{" "}
            <span className="font-semibold">{eventTitle}</span> will begin at{" "}
            <strong>{startTime}</strong> and may end by{" "}
            <strong>{endTime}</strong>.
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center w-1/3 ">
            <img
              src="/swamy.png"
              alt="Swamy"
              className="object-contain w-full h-40 rounded-lg shadow-sm"
            />
          </div>
          <div className="w-2/3 px-1 mt-1 text-[13px] leading-normal">
            <p className="text-justify">
              With your family, you're warmly invited to join this divine
              occasion and receive Sri Balagurunadheeswara Swamy's blessings.
              After the Pooja, Prasadam will be distributed to all devotees.
            </p>
            <div className="flex items-center justify-center w-full my-2">
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="Uploaded Content"
                  className="object-contain h-24 rounded-lg shadow-md"
                />
              )}
            </div>
          </div>
        </div>
        <div className="my-2 ">
          <p className="mt-2 text-justify text-[13px] leading-normal">
            {additionalNote}
          </p>
        </div>

        <div className="flex items-center justify-between px-2 py-2 text-xs border-t border-orange-300">
          <div>
            <p className="mb-1 font-semibold">Scan to Contribute</p>
            <p className="text-[0.75rem] leading-[20px]">
              Sri Balagurunadheeswara Trust – RBL Bank
              <br />
              <strong>A/C No:</strong> 409002116953 | <strong>IFSC:</strong>{" "}
              RATN0000484
              <br />
              <strong>Branch:</strong> Sadashiv Nagar, Bengaluru
            </p>
          </div>
          <img src="/qr.png" alt="QR Code" className="w-16 h-18" />
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="px-4 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700"
      >
        Download Card
      </button>
    </div>
  );
}

export default App;
