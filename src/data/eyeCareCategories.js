// Danh mục phân loại sự cố mắt chuẩn y khoa ReMiCare (Đồng bộ 21/09/2026)
// Mapping câu nói tự nhiên của người dùng vào các tình huống chuẩn EM-01 đến EM-06 và DIS-01 đến DIS-10

export const EYE_CARE_CATEGORIES = {
  // EM-03: HÓA CHẤT BẮN VÀO MẮT (Critical - Tối khẩn cấp)
  CHEMICAL_EYE_EXPOSURE: {
    id: "CHEMICAL_EYE_EXPOSURE",
    audio_id: "EM-03",
    caseId: "EM-03",
    title: "Sơ cứu hóa chất bắn vào mắt",
    subtitle: "Xà phòng, nước lau sàn, axit, bazơ, thuốc nhuộm, nước tẩy bồn cầu, vôi",
    severity: "critical",
    priority: "critical",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    priorityLabel: "Cực kỳ khẩn cấp",
    recommendedVideoId: "V002",
    keywords: ["hóa chất", "xà phòng", "nước tẩy", "axit", "bazo", "vôi", "nước rửa chén", "nước lau sàn", "thuốc tẩy", "bắn vào mắt", "EM-03"],
    summary: "Cấp cứu tối khẩn cấp: Hóa chất có thể phá hủy mô mắt trong vòng vài phút. Cần xối rửa ngay lập tức!",
    audioScript: "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
    script: "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: RỬA MẮT NGAY LẬP TỨC THẬT NHIỀU NƯỚC",
        desc: "Đưa mắt ngay dưới vòi nước máy hoặc ca nước sạch. Xối rửa liên tục 15-20 phút, cố gắng mở to mắt khi rửa.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: KHÔNG CHỜ ĐẾN VIỆN - KHÔNG TRUNG HÒA",
        desc: "Tuyệt đối không chờ đến viện mới rửa. Không tự ý dùng chất khác để trung hòa hóa chất và không dụi mắt.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: TÌM KIẾM CHĂM SÓC Y TẾ KHẨN CẤP",
        desc: "Đến ngay cơ sở y tế khẩn cấp sau khi rửa sơ cứu và tiếp tục rửa mắt trên đường đi nếu có thể.",
        isDo: true
      }
    ],
    warningSigns: [
      "Giác mạc chuyển sang màu trắng mờ đục",
      "Không thể mở mắt, đau rát dữ dội lan lên nửa đầu",
      "Mất thị lực hoặc chỉ thấy bóng mờ"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp."
  },

  // EM-02: DỊ VẬT NHỌN / CẮM VÀO MẮT (Critical - Tối khẩn cấp)
  PENETRATING_OBJECT: {
    id: "PENETRATING_OBJECT",
    audio_id: "EM-02",
    caseId: "EM-02",
    title: "Sơ cứu dị vật nhọn / Vật cắm vào mắt",
    subtitle: "Mạt kim loại, mảnh kính, cành cây, móc câu, vật nhọn cắm vào nhãn cầu",
    severity: "critical",
    priority: "critical",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    priorityLabel: "Cực kỳ khẩn cấp",
    recommendedVideoId: "V005",
    keywords: ["dị vật nhọn", "mạt sắt", "mảnh kính", "cành cây", "vật cắm vào mắt", "móc câu", "găm vào mắt", "xuyên thấu", "EM-02"],
    summary: "Cấp cứu khẩn cấp: Tuyệt đối không cố tự lấy dị vật ra. Che chắn bảo vệ và chuyển viện ngay.",
    audioScript: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    script: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: CHE CHẮN NHẸ NHÀNG BẰNG CỐC GIẤY SẠCH",
        desc: "Dùng cốc giấy sạch hình vòm úp nhẹ lên mắt để bảo vệ dị vật, không tạo áp lực lên nhãn cầu.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: KHÔNG RÚT - KHÔNG XOAY - KHÔNG BĂNG ÉP",
        desc: "Tuyệt đối không tự ý rút dị vật ra, không dùng dụng cụ chạm vào dị vật và không ấn hay băng ép lên mắt.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: ĐẾN NGAY CƠ SỞ CHUYÊN KHOA MẮT",
        desc: "Đưa người bị nạn đến ngay bệnh viện chuyên khoa mắt càng sớm càng tốt để cấp cứu.",
        isDo: true
      }
    ],
    warningSigns: [
      "Dị vật cắm sâu vào giác mạc hoặc củng mạc",
      "Chảy dịch hoặc máu từ vết đâm",
      "Đồng tử méo mó hoặc mất thị lực tức thì"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp."
  },

  // EM-01: DỊ VẬT NHỎ / BỤI VÀO MẮT (High - Khẩn cấp)
  FOREIGN_BODY_DUST: {
    id: "FOREIGN_BODY_DUST",
    audio_id: "EM-01",
    caseId: "EM-01",
    title: "Sơ cứu dị vật nhỏ vào mắt",
    subtitle: "Hạt cát, bụi đường, hạt mạt nhỏ bay vào mắt gây cộm xót",
    severity: "high",
    priority: "high",
    severityLabel: "KHẨN CẤP",
    priorityLabel: "Khẩn cấp",
    recommendedVideoId: "V001",
    keywords: ["bụi", "cát", "cộm", "xót", "dị vật nhỏ", "hạt bụi", "bụi đường", "chảy nước mắt", "bay vào mắt", "EM-01"],
    summary: "Dị vật nhỏ bám vào bề mặt kết mạc/giác mạc gây cộm xót, đỏ và chảy nước mắt. Cần rửa sạch và không dụi mắt.",
    audioScript: "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
    script: "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: RỬA MẮT BẰNG NƯỚC SẠCH HOẶC NƯỚC MUỐI",
        desc: "Rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý NaCl 0.9%, chớp mắt trong bát nước sạch.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: TUYỆT ĐỐI KHÔNG DỤI MẮT",
        desc: "Không dụi mắt vì có thể làm xước bề mặt giác mạc. Không dùng kim, tăm hay dụng cụ gắp dị vật.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: ĐẾN CƠ SỞ Y TẾ NẾU VẪN CỘM RÁT",
        desc: "Đến cơ sở y tế kiểm tra nếu sau khi rửa vẫn còn cảm giác cộm rát, đau buốt, sợ sáng hoặc nhìn mờ.",
        isDo: true
      }
    ],
    warningSigns: [
      "Vẫn còn cảm giác cộm xót như có gai đâm sau khi đã rửa mắt",
      "Mắt đỏ rực, phù nề mí mắt hoặc chảy ghèn",
      "Nhìn mờ hoặc thị lực giảm rõ rệt"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp."
  },

  // EM-04: BỎNG NHIỆT Ở MẮT (High - Khẩn cấp)
  THERMAL_BURN: {
    id: "THERMAL_BURN",
    audio_id: "EM-04",
    caseId: "EM-04",
    title: "Sơ cứu bỏng nhiệt ở mắt",
    subtitle: "Nước sôi, dầu mỡ nóng, tia lửa nhiệt tạt vào mắt",
    severity: "high",
    priority: "high",
    severityLabel: "KHẨN CẤP",
    priorityLabel: "Khẩn cấp",
    recommendedVideoId: "V004",
    keywords: ["bỏng nhiệt", "nước sôi", "dầu mỡ nóng", "dầu ăn sôi", "tia lửa", "nóng rát", "bỏng mắt", "EM-04"],
    summary: "Bỏng nhiệt làm tổn thương mi mắt và giác mạc. Cần làm mát và rửa mắt bằng nước sạch ngay.",
    audioScript: "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    script: "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: LẬP TỨC LÀM MÁT VÀ RỬA BẰNG NƯỚC SẠCH",
        desc: "Dùng nước mát sạch rửa và làm dịu ngay vùng mắt bị bỏng nhiệt do nước sôi hay dầu mỡ.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: KHÔNG DỤI MẮT - KHÔNG BÔI MẸO DÂN GIAN",
        desc: "Tuyệt đối không dụi mắt và không tự ý bôi mỡ trăn, lòng trắng trứng, kem đánh răng hay thuốc dân gian.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: ĐẾN NGAY CƠ SỞ Y TẾ ĐỂ BÁC SĨ ĐÁNH GIÁ",
        desc: "Đến ngay cơ sở y tế chuyên khoa để bác sĩ đánh giá mức độ tổn thương của giác mạc.",
        isDo: true
      }
    ],
    warningSigns: [
      "Bỏng rộp mi mắt, sưng nề dữ dội",
      "Giác mạc mờ đục hoặc đau rát không mở được mắt",
      "Thị lực suy giảm đột ngột"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."
  },

  // EM-05: CHẤN THƯƠNG DO VA ĐẬP (High - Khẩn cấp)
  BLUNT_EYE_TRAUMA: {
    id: "BLUNT_EYE_TRAUMA",
    audio_id: "EM-05",
    caseId: "EM-05",
    title: "Sơ cứu chấn thương do va đập vào mắt",
    subtitle: "Bị đấm, bóng đá / tennis đập vào mắt, té ngã va đập vào hốc mắt",
    severity: "high",
    priority: "high",
    severityLabel: "KHẨN CẤP",
    priorityLabel: "Khẩn cấp",
    recommendedVideoId: "V003",
    keywords: ["va đập", "bị đấm", "bóng đập", "đập vào mắt", "té ngã", "bầm tím", "sưng mắt", "chấn thương mắt", "đụng dập", "EM-05"],
    summary: "Lực va chạm cơ học mạnh có thể gây xuất huyết, giảm thị lực hoặc tổn thương nội nhãn. Cần nghỉ ngơi và chườm lạnh nhẹ.",
    audioScript: "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    script: "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: CHO NGHỈ NGƠI VÀ CHƯỜM LẠNH NHẸ",
        desc: "Cho người bị nạn nghỉ ngơi, chườm lạnh nhẹ nhàng quanh vùng hốc mắt bằng khăn bọc đá để giảm sưng.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: KHÔNG ẤN TRỰC TIẾP LÊN NHÃN CẦU",
        desc: "Tuyệt đối không ấn trực tiếp lên nhãn cầu, không day dụi và không tự uống thuốc aspirin gây chảy máu.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: DẤU HIỆU CẦN ĐI CẤP CỨU NGAY",
        desc: "Cấp cứu ngay nếu: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi/thụt bất thường, không vận động mắt được.",
        isDo: true
      }
    ],
    warningSigns: [
      "Thị lực giảm sút, nhìn đôi (song thị)",
      "Thấy máu trong mắt (xuất huyết tiền phòng)",
      "Mắt lồi hoặc thụt bất thường, không vận động mắt bình thường được"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."
  },

  // EM-06: TỔN THƯƠNG DO TIA HÀN / TIA UV (Medium - Cần lưu ý)
  WELDING_UV_EXPOSURE: {
    id: "WELDING_UV_EXPOSURE",
    audio_id: "EM-06",
    caseId: "EM-06",
    title: "Tổn thương mắt do tia hàn / tia UV",
    subtitle: "Bỏng giác mạc do tia hồ quang điện, đèn UV, ánh sáng hàn",
    severity: "medium",
    priority: "medium",
    severityLabel: "CẦN LƯU Ý",
    priorityLabel: "Cần lưu ý",
    recommendedVideoId: "V004",
    keywords: ["hàn", "tia hàn", "hồ quang", "hàn sắt", "hàn điện", "bỏng hàn", "rát mắt sau khi hàn", "chói mắt", "tia uv", "EM-06"],
    summary: "Tổn thương do ánh sáng hàn/UV xuất hiện sau vài giờ gây đau mắt, cộm rát, sợ ánh sáng và chảy nước mắt.",
    audioScript: "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    script: "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: RỜI NGUỒN SÁNG VÀ CHƯỜM MÁT",
        desc: "Rời khỏi nguồn sáng ngay, nhắm mắt nghỉ nơi phòng tối, chườm mát nhẹ nhàng và nhỏ nước mắt nhân tạo.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: TUYỆT ĐỐI KHÔNG TỰ DÙNG THUỐC TÊ NHỎ MẮT",
        desc: "Không dụi mắt. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt vì gây ức chế tế bào và hoại tử biểu mô giác mạc.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: TÌM KIẾM CHĂM SÓC Y TẾ NẾU KHÔNG ĐỠ",
        desc: "Nếu các triệu chứng nghiêm trọng hoặc không cải thiện sau 12-24 giờ, hãy tìm kiếm chăm sóc y tế.",
        isDo: true
      }
    ],
    warningSigns: [
      "Mắt đau nhức buốt dữ dội kéo dài quá 12 tiếng không thuyên giảm",
      "Thị lực suy giảm, nhìn mờ",
      "Nhạy cảm với ánh sáng cực độ không thể mở mắt"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."
  },

  // Aliases cho các ID cũ
  METAL_FOREIGN_BODY: {
    id: "METAL_FOREIGN_BODY",
    audio_id: "EM-02",
    caseId: "EM-02",
    title: "Sơ cứu dị vật nhọn / Vật cắm vào mắt",
    subtitle: "Mạt sắt mài cơ khí, mảnh vụn kim loại găm vào giác mạc",
    severity: "critical",
    priority: "critical",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    priorityLabel: "Cực kỳ khẩn cấp",
    recommendedVideoId: "V005",
    keywords: ["mạt sắt", "kim loại", "máy mài", "cắt sắt", "EM-02"],
    summary: "Dị vật cắm vào mắt là cấp cứu khẩn cấp. Tuyệt đối không tự ý rút ra.",
    audioScript: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: CHE CHẮN NHẸ NHÀNG BẰNG CỐC GIẤY SẠCH",
        desc: "Dùng cốc giấy sạch hình vòm che chở dị vật khỏi va chạm, không tì đè lên mắt.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: KHÔNG RÚT - KHÔNG XOAY - KHÔNG DÙNG NAM CHÂM",
        desc: "Tuyệt đối không tự ý rút dị vật, không dùng nam châm hay tăm bông tự cạy gắp.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: ĐẾN NGAY CƠ SỞ CHUYÊN KHOA MẮT",
        desc: "Đến ngay bệnh viện mắt để bác sĩ gắp dị vật và nạo sạch vòng rỉ dưới kính hiển vi.",
        isDo: true
      }
    ],
    warningSigns: [
      "Nhìn thấy chấm đen kim loại bám chặt trên tròng đen",
      "Đau buốt nhức mắt khi chớp mắt, giảm thị lực"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp."
  },

  FISH_HOOK_INJURY: {
    id: "FISH_HOOK_INJURY",
    audio_id: "EM-02",
    caseId: "EM-02",
    title: "Sơ cứu dị vật nhọn / Móc câu vào mắt",
    subtitle: "Lưỡi câu cá có ngạnh sắc nhọn cắm vào mô mắt",
    severity: "critical",
    priority: "critical",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    priorityLabel: "Cực kỳ khẩn cấp",
    recommendedVideoId: "V005",
    keywords: ["móc câu", "câu cá", "ngạnh", "EM-02"],
    summary: "Cấp cứu khẩn cấp: Ngạnh móc câu giữ chặt trong mô mắt. Tuyệt đối không được kéo giật móc ra.",
    audioScript: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    steps: [
      {
        num: "01",
        title: "LÀM GÌ NGAY: CẮT DÂY CƯỚC VÀ CHE CỐC BẢO VỆ",
        desc: "Cắt sát dây cước, úp cốc bảo vệ nhẹ nhàng quanh móc câu.",
        isDo: true
      },
      {
        num: "02",
        title: "KHÔNG ĐƯỢC LÀM: TUYỆT ĐỐI KHÔNG GIẬT MÓC CÂU RA",
        desc: "Ngạnh ngược sẽ xé rách giác mạc và thoát dịch kính gây mù lòa nếu giật ra.",
        isDo: false
      },
      {
        num: "03",
        title: "KHI NÀO CẤP CỨU: CHUYỂN BỆNH VIỆN MẮT KHẨN CẤP",
        desc: "Đến viện mắt ngay để bác sĩ phẫu thuật vi phẫu lấy dị vật ra an toàn.",
        isDo: true
      }
    ],
    warningSigns: [
      "Móc găm trực tiếp vào tròng đen hoặc tròng trắng",
      "Chảy dịch hoặc máu từ vết đâm"
    ],
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp."
  },

  RED_EYE_INFECTION: {
    id: "RED_EYE_INFECTION",
    audio_id: "DIS-08B",
    caseId: "DIS-08B",
    title: "Thông tin tham khảo: Đau mắt đỏ (Viêm kết mạc)",
    subtitle: "Dấu hiệu thường gặp của viêm kết mạc do virus, vi khuẩn",
    severity: "low",
    priority: "low",
    severityLabel: "THÔNG TIN",
    priorityLabel: "Thông tin",
    recommendedVideoId: "V008",
    keywords: ["mắt đỏ", "ghèn", "đau mắt đỏ", "viêm kết mạc", "DIS-08"],
    summary: "Thông tin tham khảo: Viêm kết mạc lây lan qua tiếp xúc. Bạn nên được bác sĩ kiểm tra để có phương án thích hợp.",
    audioScript: "Viêm kết mạc, hay đau mắt đỏ, cũng thường do virus gây ra với các dấu hiệu như mắt đỏ nhiều, chảy nước mắt, sưng, và cảm giác có dị vật trong mắt. Bệnh thường ảnh hưởng cả hai mắt, có thể kèm theo hạch ở tai hoặc các triệu chứng giống cảm cúm. Loại viêm kết mạc này rất dễ lây lan qua đường hô hấp hoặc tiếp xúc với dịch tiết của người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    steps: [
      {
        num: "01",
        title: "RỬA MẮT BẰNG NƯỚC MUỐI SINH LÝ",
        desc: "Dùng NaCl 0.9% nhỏ rửa làm sạch dịch tiết ghèn mắt.",
        isDo: true
      },
      {
        num: "02",
        title: "DÙNG KHĂN VÀ ĐỒ DÙNG RIÊNG",
        desc: "Dùng đồ riêng, rửa tay sạch thường xuyên tránh lây cho người thân.",
        isDo: true
      },
      {
        num: "03",
        title: "BẠN NÊN ĐƯỢC BÁC SĨ KIỂM TRA",
        desc: "Khám bác sĩ mắt để được hướng dẫn điều trị chính xác, không tự mua thuốc chứa corticoid.",
        isDo: true
      }
    ],
    warningSigns: [
      "Mắt đau nhức sâu kèm đau đầu",
      "Giảm thị lực hoặc nhìn thấy quầng màu quanh ánh sáng"
    ],
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ."
  }
};
