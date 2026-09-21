// ReMiCare - Video Knowledge Base
// Danh mục video hướng dẫn sơ cứu mắt được kiểm duyệt y khoa

export const eyeCareVideos = [
  {
    id: "V001",
    category: "FOREIGN_BODY_DUST",
    title: "Hướng dẫn xử trí bụi và dị vật nhỏ bay vào mắt an toàn",
    embedUrl: "https://www.youtube-nocookie.com/embed/g2Jd1U22Bfg",
    youtubeId: "g2Jd1U22Bfg",
    duration: "02:15",
    language: "vi",
    verified: true,
    source: "Hội Nhãn khoa Quốc tế & Bệnh viện Mắt KHANGEYE",
    description: "Cách rửa mắt đúng kỹ thuật bằng nước muối sinh lý, không làm trầy xước giác mạc khi có hạt bụi bẩn bay vào."
  },
  {
    id: "V002",
    category: "CHEMICAL_EYE_EXPOSURE",
    title: "Cấp cứu khẩn cấp: Xối rửa mắt tức thì khi dính hóa chất tẩy rửa / axit",
    embedUrl: "https://www.youtube-nocookie.com/embed/G6g3rQx0ZcE",
    youtubeId: "G6g3rQx0ZcE",
    duration: "03:40",
    language: "vi",
    verified: true,
    source: "Cấp cứu Y khoa St John & KHANGEYE Medical",
    description: "Kỹ thuật vạch mi mắt và tư thế xối dòng nước liên tục 15-20 phút bảo vệ thị lực khi dính xà phòng, hóa chất độc hại."
  },
  {
    id: "V003",
    category: "BLUNT_EYE_TRAUMA",
    title: "Sơ cứu chấn thương mắt do va đập thể thao, té ngã, đụng dập",
    embedUrl: "https://www.youtube-nocookie.com/embed/5F_1nO9cM5A",
    youtubeId: "5F_1nO9cM5A",
    duration: "02:50",
    language: "vi",
    verified: true,
    source: "Chuyên khoa Chấn thương Mắt KHANGEYE",
    description: "Nguyên tắc không tì đè nhãn cầu, cách chườm lạnh giảm tụ máu và tư thế nghỉ ngơi chờ khám chuyên sâu."
  },
  {
    id: "V004",
    category: "WELDING_UV_EXPOSURE",
    title: "Xử trí đau rát, chói mắt do bỏng tia hồ quang hàn (Flash Burn / Arc Eye)",
    embedUrl: "https://www.youtube-nocookie.com/embed/KxN74c_e850",
    youtubeId: "KxN74c_e850",
    duration: "03:10",
    language: "vi",
    verified: true,
    source: "Bảo hộ Lao động & Nhãn khoa ReMiCare",
    description: "Các bước chăm sóc màng phim nước mắt, chườm lạnh và nghỉ ngơi trong bóng râm khi bị chói rát sau buổi hàn kim loại."
  },
  {
    id: "V005",
    category: "FISH_HOOK_INJURY",
    title: "Quy tắc an toàn sống còn khi dị vật sắc nhọn / móc câu găm vào mắt",
    embedUrl: "https://www.youtube-nocookie.com/embed/XqEZyfB2Uv8",
    youtubeId: "XqEZyfB2Uv8",
    duration: "02:30",
    language: "vi",
    verified: true,
    source: "Hội Phẫu thuật Chấn thương Mắt",
    description: "Tuyệt đối không tự ý rút móc câu; cách dùng cốc giấy cố định vật xuyên thấu trước khi chuyển viện cấp cứu."
  },
  {
    id: "V006",
    category: "CORNEAL_SCRATCH",
    title: "Chăm sóc vết trầy xước giác mạc do cành cây, móng tay quẹt",
    embedUrl: "https://www.youtube-nocookie.com/embed/MlhL9j6yJ6w",
    youtubeId: "MlhL9j6yJ6w",
    duration: "02:45",
    language: "vi",
    verified: true,
    source: "Nhãn khoa Lâm sàng ReMiCare",
    description: "Vệ sinh làm sạch dịch tiết, phòng ngừa bội nhiễm nấm giác mạc khi bị cây cối hay giấy quẹt qua mắt."
  },
  {
    id: "V007",
    category: "METAL_FOREIGN_BODY",
    title: "Xử lý mạt sắt mài cơ khí bắn vào lòng đen mắt",
    embedUrl: "https://www.youtube-nocookie.com/embed/PZ0vQh_Hj9M",
    youtubeId: "PZ0vQh_Hj9M",
    duration: "03:05",
    language: "vi",
    verified: true,
    source: "Y học Lao động & Nhãn khoa Bệnh viện",
    description: "Vì sao không được dùng nam châm tự hút mạt sắt và thời gian vàng để bác sĩ nạo vòng rỉ sét giác mạc."
  },
  {
    id: "V008",
    category: "RED_EYE_INFECTION",
    title: "Vệ sinh đúng cách khi bị đau mắt đỏ, nhiều ghèn dính mí",
    embedUrl: "https://www.youtube-nocookie.com/embed/T4P3L1FwEw4",
    youtubeId: "T4P3L1FwEw4",
    duration: "02:20",
    language: "vi",
    verified: true,
    source: "Khoa Dịch tễ & Nhãn khoa Cộng đồng KHANGEYE",
    description: "Cách nhỏ mắt không chạm đầu lọ vào lông mi, cách ly khăn mặt và phòng tránh lây nhiễm cho cả gia đình."
  }
];

/**
 * Tìm video theo category ID hoặc video ID
 */
export function findVideoByCategory(categoryId) {
  if (!categoryId) return null;
  return eyeCareVideos.find(v => v.category === categoryId) || null;
}

export function findVideoById(videoId) {
  if (!videoId) return null;
  return eyeCareVideos.find(v => v.id === videoId) || null;
}
