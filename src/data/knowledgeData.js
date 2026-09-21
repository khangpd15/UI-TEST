import { eyeIllustrations } from './eyeImages';

export const eyeDiseases = [
  {
    id: "red-eye-knowledge",
    title: "Mắt đỏ (Đau mắt đỏ)",
    category: "Viêm nhiễm",
    image: eyeIllustrations.redEye,
    icon: "bi-eye",
    summary: "Viêm kết mạc do virus lây lan nhanh, mắt đỏ cộm và nhiều ghèn.",
    keyPoints: [
      "Triệu chứng: Mắt đỏ hoe, cộm rát, rỉ mắt dính mí vào buổi sáng",
      "Phòng tránh: Rửa tay sạch, không dùng chung khăn mặt hoặc gối",
      "Xử trí: Nhỏ nước muối 0.9% và khám bác sĩ mắt sớm"
    ],
    audioScript: "Bệnh đau mắt đỏ là viêm kết mạc do virus hoặc vi khuẩn gây ra. Mắt có màu đỏ và cộm ngứa. Bạn cần dùng khăn riêng, rửa tay sạch và không tự ý dùng thuốc nhỏ chứa corticoid."
  },
  {
    id: "cataract",
    title: "Đục thủy tinh thể",
    category: "Lão hóa mắt",
    image: eyeIllustrations.cloudyEye,
    icon: "bi-circle-half",
    summary: "Nguyên nhân hàng đầu gây mờ mắt ở người cao tuổi, chữa khỏi nhờ phẫu thuật Phaco.",
    keyPoints: [
      "Triệu chứng: Mắt nhìn mờ dần như qua màn sương che, lóa mắt khi ra nắng",
      "Điều trị: Phẫu thuật Phaco thay thủy tinh thể nhân tạo chỉ mất 10-15 phút",
      "Lưu ý: Không có thuốc nhỏ nào làm tan được đục thủy tinh thể"
    ],
    audioScript: "Đục thủy tinh thể là hiện tượng thủy tinh thể bị mờ đục theo tuổi tác khiến mắt nhìn mờ như có sương mù. Phẫu thuật Phaco thay thủy tinh thể nhân tạo là phương pháp an toàn và sáng mắt trở lại."
  },
  {
    id: "glaucoma",
    title: "Glôcôm (Cườm nước)",
    category: "Cấp cứu nhãn khoa",
    image: eyeIllustrations.blurryVision,
    icon: "bi-exclamation-octagon",
    summary: "Nhãn áp tăng cao làm teo dây thần kinh thị giác, cần hạ áp khẩn cấp.",
    keyPoints: [
      "Triệu chứng: Đau nhức mắt dữ dội lan lên nửa đầu, nhìn thấy quầng cầu vồng",
      "Nguy cơ: Mất thị lực vĩnh viễn nếu không hạ áp kịp thời trong vài giờ",
      "Khuyến cáo: Đo nhãn áp định kỳ hàng năm cho người trên 40 tuổi"
    ],
    audioScript: "Bệnh Glôcôm làm tăng áp lực trong mắt gây đau nhức nửa đầu dữ dội và có nguy cơ mù lòa vĩnh viễn nếu không được hạ nhãn áp cấp cứu kịp thời tại bệnh viện mắt."
  },
  {
    id: "dry-eye",
    title: "Khô mắt & Mỏi mắt",
    category: "Chăm sóc hàng ngày",
    image: eyeIllustrations.dryFatigueEye,
    icon: "bi-droplet-slash",
    summary: "Thiếu hụt màng phim nước mắt, thường gặp ở người dùng thiết bị điện tử.",
    keyPoints: [
      "Triệu chứng: Mắt khô rát, cay mắt, chớp mắt thường xuyên, nhìn mờ thoáng qua",
      "Chăm sóc: Áp dụng quy tắc 20-20-20, nhỏ nước mắt nhân tạo không chất bảo quản",
      "Thói quen: Uống đủ 2 lít nước mỗi ngày và chườm ấm mi mắt"
    ],
    audioScript: "Khô mắt xảy ra khi mắt không tiết đủ nước mắt chất lượng để bôi trơn. Bạn nên cho mắt nghỉ ngơi sau mỗi 20 phút làm việc và nhỏ nước mắt nhân tạo không chất bảo quản."
  },
  {
    id: "retinopathy",
    title: "Bệnh võng mạc tiểu đường",
    category: "Bệnh lý mạn tính",
    image: eyeIllustrations.bluntTrauma,
    icon: "bi-activity",
    summary: "Đường huyết cao làm tổn thương mạch máu võng mạc gây giảm thị lực.",
    keyPoints: [
      "Đối tượng: Người mắc bệnh tiểu đường trên 5 năm",
      "Dấu hiệu: Thấy chấm đen lơ lửng trước mắt, hình ảnh bị méo mó",
      "Lời khuyên: Khám đáy mắt định kỳ 6 tháng một lần tại bệnh viện"
    ],
    audioScript: "Bệnh võng mạc tiểu đường do đường huyết cao làm tổn thương mạch máu đáy mắt. Người bệnh tiểu đường cần kiểm soát đường huyết và khám đáy mắt định kỳ sáu tháng một lần."
  },
  {
    id: "eye-trauma-general",
    title: "Chấn thương mắt học đường & lao động",
    category: "Phòng ngừa",
    image: eyeIllustrations.foreignObject,
    icon: "bi-shield-shaded",
    summary: "Hơn 90% tổn thương mắt có thể phòng ngừa bằng cách đeo kính bảo hộ.",
    keyPoints: [
      "Nguyên nhân: Mạt kim loại khi mài cắt, hóa chất tẩy rửa, thể thao va đập",
      "Biện pháp: Luôn đeo kính bảo hộ khi lao động kỹ thuật hoặc cắt cỏ",
      "Xử trí: Nắm vững quy tắc không dụi mắt và gọi hỗ trợ y tế ngay"
    ],
    audioScript: "Hơn chín mươi phần trăm chấn thương mắt có thể phòng ngừa bằng việc đeo kính bảo hộ lao động. Khi xảy ra tai nạn, tuyệt đối không dụi mắt và chuyển bệnh nhân đến viện ngay."
  }
];
