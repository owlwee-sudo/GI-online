// ============================================================
//  GI OPEN HOUSE — SITE CONTENT
//  Edit this file to change what the website says.
//  Every text has a Thai (th) and English (en) version.
//  Anything marked "TODO" is a placeholder: replace it with real info.
//  This file is also read by the server (for session capacity),
//  so registration limits stay in sync with what visitors see.
// ============================================================

export const EVENT = {
  name: { th: "GI Open House 2027", en: "GI Open House 2027" },
  tagline: {
    th: "เปิดบ้าน GI — มาดูว่าเราเรียน คิด และสร้างอะไรกัน", // TODO
    en: "Come see how GI students learn, think and build.", // TODO
  },
  // ISO date-time with Thai timezone. Used for the countdown.
  startsAt: "2027-01-16T08:30:00+07:00", // TODO: real date & time
  dateText: { th: "วันเสาร์ที่ 16 มกราคม 2570", en: "Saturday, 16 January 2027" }, // TODO
  timeText: { th: "08:30 – 15:30 น.", en: "8:30 AM – 3:30 PM" }, // TODO
  venue: {
    th: "โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร (ฝ่ายมัธยม)", // TODO: building / room
    en: "Srinakharinwirot University Prasarnmit Demonstration School (Secondary)", // TODO
  },
  mapsUrl: "https://maps.google.com/?q=Satit+Prasarnmit+Secondary", // TODO: exact pin
  contactEmail: "gi.openhouse@example.com", // TODO
  instagram: "", // TODO e.g. "https://instagram.com/gi.spsm" (leave "" to hide)
};

export const ABOUT = {
  title: { th: "GI คืออะไร", en: "What is GI?" },
  body: {
    th: "TODO: เขียนอธิบายโครงการ GI สั้น ๆ 2–3 ประโยค — เป้าหมาย จุดเด่น และนักเรียนแบบไหนที่เหมาะกับ GI",
    en: "TODO: Describe the GI program in 2–3 sentences — its goals, what makes it different, and who it's for.",
  },
  // Up to 4 highlight cards
  highlights: [
    { icon: "🔬", title: { th: "โครงงานวิจัย", en: "Research projects" }, text: { th: "TODO", en: "TODO" } },
    { icon: "💻", title: { th: "เทคโนโลยีและโค้ดดิ้ง", en: "Tech & coding" }, text: { th: "TODO", en: "TODO" } },
    { icon: "🧠", title: { th: "การคิดเชิงวิเคราะห์", en: "Critical thinking" }, text: { th: "TODO", en: "TODO" } },
    { icon: "🌏", title: { th: "กิจกรรมนอกห้องเรียน", en: "Beyond the classroom" }, text: { th: "TODO", en: "TODO" } },
  ],
  // Optional numbers row. Remove items you don't want.
  stats: [
    { value: "TODO", label: { th: "นักเรียน", en: "Students" } },
    { value: "TODO", label: { th: "โครงงาน", en: "Projects" } },
    { value: "TODO", label: { th: "ปีที่ก่อตั้ง", en: "Founded" } },
  ],
};

export const SCHEDULE = [
  // time, title, place
  { time: "08:30", title: { th: "ลงทะเบียน / รับบัตร", en: "Check-in" }, place: { th: "TODO", en: "TODO" } },
  { time: "09:00", title: { th: "พิธีเปิด และแนะนำโครงการ GI", en: "Opening & GI introduction" }, place: { th: "TODO", en: "TODO" } },
  { time: "10:00", title: { th: "เยี่ยมชมบูธ / นิทรรศการโครงงาน", en: "Booths & project exhibition" }, place: { th: "TODO", en: "TODO" } },
  { time: "12:00", title: { th: "พักกลางวัน", en: "Lunch break" }, place: { th: "", en: "" } },
  { time: "13:00", title: { th: "Workshop และ Q&A กับรุ่นพี่", en: "Workshops & Q&A with students" }, place: { th: "TODO", en: "TODO" } },
  { time: "15:30", title: { th: "ปิดงาน", en: "Closing" }, place: { th: "", en: "" } },
];

// Registration sessions. "capacity" is enforced by the server.
// Changing an "id" after people register will orphan their records — add new ids instead.
export const SESSIONS = [
  { id: "morning", label: { th: "รอบเช้า (08:30–12:00)", en: "Morning (8:30–12:00)" }, capacity: 150 },
  { id: "afternoon", label: { th: "รอบบ่าย (13:00–15:30)", en: "Afternoon (13:00–15:30)" }, capacity: 150 },
];

// Booth categories for the map legend + filter. Colors are CSS colors.
export const CATEGORIES = [
  { id: "science", label: { th: "วิทยาศาสตร์", en: "Science" }, color: "#2f7de1" },
  { id: "tech", label: { th: "เทคโนโลยี", en: "Technology" }, color: "#8b5cf6" },
  { id: "math", label: { th: "คณิตศาสตร์", en: "Math" }, color: "#f59e0b" },
  { id: "info", label: { th: "ข้อมูล / ลงทะเบียน", en: "Info / Check-in" }, color: "#10b981" },
  { id: "food", label: { th: "อาหาร / พักผ่อน", en: "Food / Rest" }, color: "#ef4444" },
];

// Floor plan. The map is a 100 × 60 grid. x,y = top-left corner, w,h = size.
// Rooms are grey background shapes; booths sit on top and are clickable.
export const MAP = {
  rooms: [
    { x: 2, y: 2, w: 60, h: 34, label: { th: "หอประชุม (TODO)", en: "Hall (TODO)" } },
    { x: 66, y: 2, w: 32, h: 34, label: { th: "ห้อง Lab (TODO)", en: "Lab room (TODO)" } },
    { x: 2, y: 40, w: 96, h: 18, label: { th: "ทางเดิน / ลาน (TODO)", en: "Walkway / Courtyard (TODO)" } },
  ],
  entrance: { x: 46, y: 58, label: { th: "ทางเข้า", en: "Entrance" } },
  booths: [
    { id: "A1", x: 6, y: 8, w: 14, h: 10, cat: "science", name: { th: "TODO ชื่อบูธ", en: "TODO booth name" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "A2", x: 24, y: 8, w: 14, h: 10, cat: "science", name: { th: "TODO ชื่อบูธ", en: "TODO booth name" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "A3", x: 42, y: 8, w: 14, h: 10, cat: "math", name: { th: "TODO ชื่อบูธ", en: "TODO booth name" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "A4", x: 6, y: 22, w: 14, h: 10, cat: "tech", name: { th: "TODO ชื่อบูธ", en: "TODO booth name" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "A5", x: 24, y: 22, w: 14, h: 10, cat: "tech", name: { th: "TODO ชื่อบูธ", en: "TODO booth name" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "A6", x: 42, y: 22, w: 14, h: 10, cat: "math", name: { th: "TODO ชื่อบูธ", en: "TODO booth name" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "B1", x: 70, y: 8, w: 24, h: 10, cat: "tech", name: { th: "TODO Workshop", en: "TODO Workshop" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "B2", x: 70, y: 22, w: 24, h: 10, cat: "science", name: { th: "TODO Lab demo", en: "TODO Lab demo" }, desc: { th: "TODO รายละเอียด", en: "TODO description" } },
    { id: "C1", x: 36, y: 44, w: 24, h: 10, cat: "info", name: { th: "จุดลงทะเบียน", en: "Check-in desk" }, desc: { th: "แสดงรหัสยืนยันการลงทะเบียนที่นี่", en: "Show your registration code here." } },
    { id: "C2", x: 6, y: 44, w: 22, h: 10, cat: "food", name: { th: "จุดพักผ่อน / น้ำดื่ม", en: "Rest area / Water" }, desc: { th: "TODO", en: "TODO" } },
    { id: "C3", x: 70, y: 44, w: 24, h: 10, cat: "info", name: { th: "Q&A กับรุ่นพี่", en: "Ask a GI student" }, desc: { th: "TODO", en: "TODO" } },
  ],
};

export const FAQ = [
  { q: { th: "ต้องลงทะเบียนล่วงหน้าไหม?", en: "Do I need to register?" }, a: { th: "แนะนำให้ลงทะเบียนล่วงหน้าเพื่อสำรองที่นั่ง (TODO: ยืนยันนโยบาย)", en: "Yes, please register to reserve a spot. (TODO: confirm policy)" } },
  { q: { th: "ผู้ปกครองเข้าร่วมได้ไหม?", en: "Can parents come?" }, a: { th: "ได้ (TODO)", en: "Yes. (TODO)" } },
  { q: { th: "มีที่จอดรถไหม?", en: "Is there parking?" }, a: { th: "TODO", en: "TODO" } },
  { q: { th: "ควรแต่งกายอย่างไร?", en: "What should I wear?" }, a: { th: "TODO", en: "TODO" } },
];
