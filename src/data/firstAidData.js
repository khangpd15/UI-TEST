import { eyeIllustrations } from './eyeImages';

/**
 * firstAidData.js - Chuẩn hóa kịch bản cấp cứu nhãn khoa REMiCare (Đồng bộ 21/09/2026)
 * Cấu trúc ưu tiên: LÀM GÌ NGAY? -> KHÔNG ĐƯỢC LÀM GÌ? -> KHI NÀO CẦN ĐI CẤP CỨU?
 * Danh mục: EM-01 đến EM-06
 */

const em01 = {
  id: "EM-01",
  audio_id: "EM-01",
  title: "Sơ cứu dị vật nhỏ vào mắt",
  leadHeading: "RỬA MẮT BẰNG NƯỚC SẠCH HOẶC NƯỚC MUỐI SINH LÝ",
  instruction: "Tuyệt đối không dụi mắt. Rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý.",
  image: eyeIllustrations.smallForeignObject,
  category: "emergency",
  priority: "high",
  severity: "high",
  priorityLabel: "Khẩn cấp",
  badgeLabel: "KHẨN CẤP",
  audioScript: "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
  script: "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
  steps: [
    {
      num: "01",
      icon: "💧",
      title: "LÀM GÌ NGAY: RỬA MẮT NGAY LẬP TỨC",
      desc: "Rửa mắt ngay bằng nước sạch hoặc nước muối sinh lý NaCl 0.9%, chớp mắt trong bát nước sạch để cuốn trôi dị vật."
    },
    {
      num: "02",
      icon: "🚫",
      title: "KHÔNG ĐƯỢC LÀM: TUYỆT ĐỐI KHÔNG DỤI MẮT",
      desc: "Không dùng tay day dụi vì hạt bụi sẽ cào xước bề mặt giác mạc. Không dùng kim, tăm hay dụng cụ gắp dị vật."
    },
    {
      num: "03",
      icon: "🏥",
      title: "KHI NÀO CẤP CỨU: CÒN CỘM RÁT KÉO DÀI",
      desc: "Nếu sau khi rửa vẫn còn cảm giác cộm xót, đau rát, nhìn mờ hoặc sợ ánh sáng, cần đến cơ sở y tế kiểm tra ngay."
    }
  ],
  doList: [
    { icon: "💧", text: "Rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý" },
    { icon: "👁️", text: "Chớp mắt nhẹ nhàng trong bát nước sạch để dị vật trôi ra ngoài" },
    { icon: "🏥", text: "Đến cơ sở y tế nếu vẫn còn cảm giác cộm xót sau khi rửa" }
  ],
  dontList: [
    { icon: "🚫", text: "Tuyệt đối không dụi mắt dưới bất kỳ hình thức nào" },
    { icon: "🪝", text: "Không tự ý dùng kim, tăm hay dụng cụ khác để lấy dị vật ra" },
    { icon: "💨", text: "Không nhờ người khác thổi mạnh vào mắt tránh lây nhiễm khuẩn" }
  ],
  disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp."
};

const em02 = {
  id: "EM-02",
  audio_id: "EM-02",
  title: "Sơ cứu dị vật nhọn / Vật cắm vào mắt",
  leadHeading: "TUYỆT ĐỐI KHÔNG TỰ Ý RÚT DỊ VẬT RA NGOÀI",
  instruction: "KHÔNG RÚT DỊ VẬT - KHÔNG XOAY - KHÔNG ẤN - KHÔNG BĂNG ÉP LÊN NHÃN CẦU!",
  image: eyeIllustrations.penetratingObject,
  category: "emergency",
  priority: "critical",
  severity: "critical",
  priorityLabel: "Cực kỳ khẩn cấp",
  badgeLabel: "CỰC KỲ KHẨN CẤP",
  audioScript: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
  script: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
  steps: [
    {
      num: "01",
      icon: "🛡️",
      title: "LÀM GÌ NGAY: CHE CHẮN BẢO VỆ MẮT BẰNG CỐC SẠCH",
      desc: "Đặt nhẹ một chiếc cốc giấy sạch hình vòm úp trùm lên mắt để bảo vệ dị vật khỏi va quẹt bên ngoài, không tì đè lên mắt."
    },
    {
      num: "02",
      icon: "🚫",
      title: "KHÔNG ĐƯỢC LÀM: KHÔNG RÚT - KHÔNG XOAY - KHÔNG BĂNG ÉP",
      desc: "Tuyệt đối không cố rút dị vật, không kéo, không xoay, không chạm tay vào dị vật và không băng ép đè lên nhãn cầu."
    },
    {
      num: "03",
      icon: "🏥",
      title: "KHI NÀO CẤP CỨU: CHUYỂN VIỆN MẮT KHẨN CẤP TỨC THÌ",
      desc: "Đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt để bác sĩ vi phẫu xử lý."
    }
  ],
  doList: [
    { icon: "🛡️", text: "Che chắn nhẹ nhàng bằng cốc giấy sạch hình vòm, không tạo áp lực" },
    { icon: "🩹", text: "Dán băng dính cố định vành cốc quanh xương hốc mắt" },
    { icon: "🏥", text: "Đưa người bị nạn đến cơ sở chuyên khoa mắt cấp cứu ngay" }
  ],
  dontList: [
    { icon: "🚫", text: "Tuyệt đối không cố tự lấy dị vật ra, không kéo, không xoay" },
    { icon: "✋", text: "Không chạm bất kỳ dụng cụ nào vào dị vật đang cắm" },
    { icon: "🩹", text: "Không ấn hoặc băng ép trực tiếp lên nhãn cầu" }
  ],
  disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp."
};

const em03 = {
  id: "EM-03",
  audio_id: "EM-03",
  title: "Sơ cứu hóa chất bắn vào mắt",
  leadHeading: "RỬA MẮT NGAY LẬP TỨC DƯỚI NƯỚC SẠCH LIÊN TỤC 15 - 20 PHÚT",
  instruction: "RỬA MẮT NGAY LẬP TỨC - TUYỆT ĐỐI KHÔNG CHỜ ĐẾN BỆNH VIỆN MỚI BẮT ĐẦU RỬA!",
  image: eyeIllustrations.chemicalSplash,
  category: "emergency",
  priority: "critical",
  severity: "critical",
  priorityLabel: "Cực kỳ khẩn cấp",
  badgeLabel: "CỰC KỲ KHẨN CẤP",
  audioScript: "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
  script: "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
  steps: [
    {
      num: "01",
      icon: "💧",
      title: "LÀM GÌ NGAY: RỬA MẮT NGAY LẬP TỨC THẬT NHIỀU NƯỚC",
      desc: "Xối rửa mắt ngay lập tức bằng nguồn nước sạch gần nhất liên tục trong 15-20 phút. Cố gắng mở to mi mắt trong lúc rửa."
    },
    {
      num: "02",
      icon: "🚫",
      title: "KHÔNG ĐƯỢC LÀM: KHÔNG CHỜ ĐẾN VIỆN - KHÔNG TRUNG HÒA",
      desc: "Tuyệt đối không chờ đến viện mới rửa. Không tự ý dùng chất khác trung hòa (gây phản ứng nhiệt), không dụi mắt."
    },
    {
      num: "03",
      icon: "🏥",
      title: "KHI NÀO CẤP CỨU: ĐI CẤP CỨU NGAY SAU KHI RỬA",
      desc: "Sau khi rửa sơ cứu, đến ngay cơ sở y tế khẩn cấp. Tiếp tục rửa mắt trên đường di chuyển nếu có thể."
    }
  ],
  doList: [
    { icon: "💧", text: "Rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn trong 15-20 phút" },
    { icon: "👁️", text: "Cố gắng mở to mi mắt và chớp liên tục trong dòng nước chảy" },
    { icon: "🧪", text: "Mang theo bao bì hoặc mẫu hóa chất đến bệnh viện" }
  ],
  dontList: [
    { icon: "⏳", text: "Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt" },
    { icon: "⚗️", text: "Không tự ý dùng các chất khác để trung hòa hóa chất" },
    { icon: "🚫", text: "Không dụi mắt và không áp dụng các phương pháp dân gian" }
  ],
  disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp."
};

const em04 = {
  id: "EM-04",
  audio_id: "EM-04",
  title: "Sơ cứu bỏng nhiệt ở mắt",
  leadHeading: "LẬP TỨC LÀM MÁT VÀ RỬA MẮT BẰNG NƯỚC SẠCH",
  instruction: "Lập tức làm mát và rửa bằng nước sạch - Đến ngay cơ sở y tế để bác sĩ đánh giá!",
  image: eyeIllustrations.thermalBurn,
  category: "emergency",
  priority: "high",
  severity: "high",
  priorityLabel: "Khẩn cấp",
  badgeLabel: "KHẨN CẤP",
  audioScript: "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  script: "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  steps: [
    {
      num: "01",
      icon: "🧊",
      title: "LÀM GÌ NGAY: LẬP TỨC LÀM MÁT VÀ RỬA BẰNG NƯỚC SẠCH",
      desc: "Dùng nước mát sạch chảy nhẹ nhàng rửa và làm mát vùng mắt bị bỏng nhiệt do nước sôi, dầu mỡ nóng."
    },
    {
      num: "02",
      icon: "🚫",
      title: "KHÔNG ĐƯỢC LÀM: KHÔNG DỤI MẮT - KHÔNG BÔI MẸO DÂN GIAN",
      desc: "Tuyệt đối không day dụi mắt. Không tự ý bôi mỡ trăn, lòng trắng trứng, kem đánh răng hay thuốc lá lên mắt."
    },
    {
      num: "03",
      icon: "🏥",
      title: "KHI NÀO CẤP CỨU: ĐẾN NGAY CƠ SỞ Y TẾ ĐÁNH GIÁ",
      desc: "Sau bước làm mát ban đầu, cần đến ngay cơ sở y tế để bác sĩ chuyên khoa mắt đánh giá mức độ tổn thương."
    }
  ],
  doList: [
    { icon: "🧊", text: "Lập tức làm mát và rửa mắt bằng dòng nước sạch" },
    { icon: "🧼", text: "Giữ sạch vùng da mi mắt bị bỏng nhiệt" },
    { icon: "🏥", text: "Đến ngay cơ sở y tế để bác sĩ chuyên khoa đánh giá tổn thương" }
  ],
  dontList: [
    { icon: "🚫", text: "Tuyệt đối không day dụi lên mắt đang bị bỏng" },
    { icon: "🍳", text: "Không tự ý bôi mỡ trăn, lòng trắng trứng hay thảo dược dân gian" },
    { icon: "💊", text: "Không tự ý nhỏ các loại thuốc mỡ khi chưa có chỉ định bác sĩ" }
  ],
  disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."
};

const em05 = {
  id: "EM-05",
  audio_id: "EM-05",
  title: "Sơ cứu chấn thương do va đập vào mắt",
  leadHeading: "CHO NGHỈ NGƠI - CHƯỜM LẠNH NHẸ QUANH HỐC MẮT",
  instruction: "Cho người bị nạn nghỉ ngơi - Chườm lạnh nhẹ quanh hốc mắt, không ấn lên nhãn cầu!",
  image: eyeIllustrations.bluntTrauma,
  category: "emergency",
  priority: "high",
  severity: "high",
  priorityLabel: "Khẩn cấp",
  badgeLabel: "KHẨN CẤP",
  audioScript: "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  script: "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  steps: [
    {
      num: "01",
      icon: "🧊",
      title: "LÀM GÌ NGAY: CHO NGHỈ NGƠI VÀ CHƯỜM LẠNH NHẸ",
      desc: "Cho người bị nạn nghỉ ngơi, hạn chế tối đa tác động lên mắt. Chườm lạnh nhẹ nhàng quanh hốc mắt bằng khăn bọc đá."
    },
    {
      num: "02",
      icon: "🚫",
      title: "KHÔNG ĐƯỢC LÀM: KHÔNG ẤN TRỰC TIẾP LÊN NHÃN CẦU",
      desc: "Không ấn hoặc tì đè vật nặng lên nhãn cầu. Không tự ý uống thuốc aspirin gây nguy cơ chảy máu nội nhãn."
    },
    {
      num: "03",
      icon: "🏥",
      title: "KHI NÀO CẤP CỨU: DẤU HIỆU BÁO ĐỘNG ĐỎ",
      desc: "Cần đi cấp cứu ngay nếu: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, không vận động mắt được."
    }
  ],
  doList: [
    { icon: "🛋️", text: "Cho người bị nạn ngồi nghỉ ngơi, hạn chế cử động mắt" },
    { icon: "🧊", text: "Chườm lạnh nhẹ nhàng quanh hốc mắt để giảm sưng bầm" },
    { icon: "🏥", text: "Đưa đi cấp cứu ngay nếu có các dấu hiệu cảnh báo đỏ" }
  ],
  dontList: [
    { icon: "🚫", text: "Không ấn trực tiếp lên nhãn cầu hoặc dụi mắt" },
    { icon: "💊", text: "Không tự ý uống aspirin hay thuốc chống đông máu" },
    { icon: "🏃", text: "Không để người bệnh tiếp tục vận động mạnh hay làm việc" }
  ],
  disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."
};

const em06 = {
  id: "EM-06",
  audio_id: "EM-06",
  title: "Tổn thương mắt do tia hàn / tia UV",
  leadHeading: "RỜI KHỎI NGUỒN SÁNG - KHÔNG TỰ DÙNG THUỐC TÊ NHỎ MẮT",
  instruction: "Rời khỏi nguồn sáng ngay, không dụi mắt. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt!",
  image: eyeIllustrations.uvWelding,
  category: "emergency",
  priority: "medium",
  severity: "medium",
  priorityLabel: "Cần lưu ý",
  badgeLabel: "CẦN LƯU Ý",
  audioScript: "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  script: "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  steps: [
    {
      num: "01",
      icon: "🕶️",
      title: "LÀM GÌ NGAY: RỜI KHỎI NGUỒN SÁNG VÀ CHƯỜM MÁT",
      desc: "Nghỉ ngơi trong phòng tối hoặc ánh sáng dịu, chườm mát nhẹ nhàng quanh mắt, nhỏ nước mắt nhân tạo không chất bảo quản."
    },
    {
      num: "02",
      icon: "🚫",
      title: "KHÔNG ĐƯỢC LÀM: TUYỆT ĐỐI KHÔNG DÙNG THUỐC TÊ NHỎ MẮT",
      desc: "Không dụi mắt. Tuyệt đối không tự ý mua thuốc tê nhỏ mắt vì gây ức chế lành biểu mô và loét thủng giác mạc không hồi phục."
    },
    {
      num: "03",
      icon: "🏥",
      title: "KHI NÀO CẤP CỨU: TRIỆU CHỨNG KÉO DÀI KHÔNG ĐỠ",
      desc: "Nếu triệu chứng đau rát dữ dội, giảm thị lực hoặc không cải thiện sau 12-24 giờ, hãy tìm kiếm chăm sóc y tế."
    }
  ],
  doList: [
    { icon: "🕶️", text: "Rời khỏi nguồn sáng ngay lập tức, đeo kính mát nghỉ ngơi" },
    { icon: "🧊", text: "Chườm mát nhẹ nhàng quanh vùng mi mắt để làm dịu rát" },
    { icon: "💧", text: "Nhỏ nước mắt nhân tạo không chất bảo quản để bôi trơn" }
  ],
  dontList: [
    { icon: "🚫", text: "Tuyệt đối không dụi mắt làm bong rộng thêm biểu mô tổn thương" },
    { icon: "💊", text: "Tuyệt đối không tự ý mua hoặc xin thuốc tê nhỏ mắt giảm đau" },
    { icon: "🌿", text: "Không áp dụng các phương pháp xông lá hay đắp mẹo dân gian" }
  ],
  disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."
};

// Object map hỗ trợ cả ID chuẩn (EM-01 -> EM-06) và ID cũ (alias) để không làm lỗi router/UI
export const firstAidCases = {
  // Chuẩn EM IDs
  "EM-01": em01,
  "EM-02": em02,
  "EM-03": em03,
  "EM-04": em04,
  "EM-05": em05,
  "EM-06": em06,

  // Legacy aliases
  "dust-in-eye": em01,
  "foreign-body-dust": em01,
  "foreign-object": em02,
  "metal-foreign-body": em02,
  "fishhook": em02,
  "chemical-splash": em03,
  "chemical-burn": em03,
  "thermal-burn": em04,
  "eye-burn": em04,
  "blunt-trauma": em05,
  "welding-uv": em06,
  "WELDING_UV_EXPOSURE": em06
};

// Export alias map để tra cứu thuận tiện
export const firstAidMap = firstAidCases;

// Mảng danh sách sơ cứu cấp cứu chuẩn EM-01 đến EM-06
export const firstAidList = [
  {
    id: "EM-01",
    caseId: "EM-01",
    audio_id: "EM-01",
    title: "Sơ cứu dị vật nhỏ vào mắt",
    icon: "💨",
    priority: "high",
    severity: "high",
    priorityLabel: "Khẩn cấp",
    badgeText: "Khẩn cấp",
    brief: "Bụi, cát, hạt mạt nhỏ bay vào mắt gây cộm xót",
    action: "Rửa bằng nước sạch hoặc nước muối sinh lý. Không dụi mắt.",
    image: eyeIllustrations.smallForeignObject
  },
  {
    id: "EM-02",
    caseId: "EM-02",
    audio_id: "EM-02",
    title: "Sơ cứu dị vật nhọn / Vật cắm vào mắt",
    icon: "🪵",
    priority: "critical",
    severity: "critical",
    priorityLabel: "Cực kỳ khẩn cấp",
    badgeText: "Cực kỳ khẩn cấp",
    brief: "Mạt kim loại, mảnh kính, cành cây, vật nhọn cắm vào mắt",
    action: "KHÔNG TỰ RÚT DỊ VẬT - Che bằng cốc giấy sạch, đi viện ngay.",
    image: eyeIllustrations.penetratingObject
  },
  {
    id: "EM-03",
    caseId: "EM-03",
    audio_id: "EM-03",
    title: "Sơ cứu hóa chất bắn vào mắt",
    icon: "🧪",
    priority: "critical",
    severity: "critical",
    priorityLabel: "Cực kỳ khẩn cấp",
    badgeText: "Cực kỳ khẩn cấp",
    brief: "Hóa chất tẩy rửa, axit, vôi, xà phòng, nước lau sàn",
    action: "RỬA MẮT NGAY LẬP TỨC 15-20 phút, không chờ đến bệnh viện.",
    image: eyeIllustrations.chemicalSplash
  },
  {
    id: "EM-04",
    caseId: "EM-04",
    audio_id: "EM-04",
    title: "Sơ cứu bỏng nhiệt ở mắt",
    icon: "🔥",
    priority: "high",
    severity: "high",
    priorityLabel: "Khẩn cấp",
    badgeText: "Khẩn cấp",
    brief: "Nước sôi, dầu mỡ nóng, tia lửa nhiệt",
    action: "Lập tức làm mát và rửa bằng nước sạch, đến cơ sở y tế.",
    image: eyeIllustrations.thermalBurn
  },
  {
    id: "EM-05",
    caseId: "EM-05",
    audio_id: "EM-05",
    title: "Sơ cứu chấn thương do va đập vào mắt",
    icon: "⚽",
    priority: "high",
    severity: "high",
    priorityLabel: "Khẩn cấp",
    badgeText: "Khẩn cấp",
    brief: "Bị đấm, bóng đập, ngã đập vùng hốc mắt",
    action: "Nghỉ ngơi, chườm lạnh nhẹ quanh hốc mắt, không ấn lên nhãn cầu.",
    image: eyeIllustrations.bluntTrauma
  },
  {
    id: "EM-06",
    caseId: "EM-06",
    audio_id: "EM-06",
    title: "Tổn thương mắt do tia hàn / tia UV",
    icon: "⚡",
    priority: "medium",
    severity: "medium",
    priorityLabel: "Cần lưu ý",
    badgeText: "Cần lưu ý",
    brief: "Tia lửa hàn, hồ quang điện, đèn cực tím UV",
    action: "Rời nguồn sáng, không dụi mắt, TUYỆT ĐỐI KHÔNG DÙNG THUỐC TÊ.",
    image: eyeIllustrations.uvWelding
  }
];
