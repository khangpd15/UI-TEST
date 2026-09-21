// Danh mục phân loại sự cố mắt chuẩn y khoa ReMiCare
// AI map câu nói tự nhiên của người dùng vào các category cố định này

export const EYE_CARE_CATEGORIES = {
  WELDING_UV_EXPOSURE: {
    id: "WELDING_UV_EXPOSURE",
    title: "Tiếp xúc với tia UV từ quá trình hàn",
    subtitle: "Bỏng giác mạc do tia hồ quang điện, đèn UV, ánh sáng hàn",
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    recommendedVideoId: "V004",
    keywords: ["hàn", "tia hàn", "hồ quang", "hàn sắt", "hàn điện", "bỏng hàn", "rát mắt sau khi hàn", "chói mắt", "tia uv"],
    summary: "Mắt bị đau rát, chảy nước mắt, sợ ánh sáng do tổn thương biểu mô giác mạc từ tia UV hồ quang hàn.",
    audioScript: "Hướng dẫn xử trí khi bị bỏng mắt do tia lửa hàn: Bước một, ngừng ngay công việc và nghỉ ngơi trong phòng tối. Bước hai, chườm lạnh nhẹ xung quanh mắt để giảm cảm giác nóng rát. Bước ba, nhỏ nhiều nước mắt nhân tạo không chất bảo quản và đến khám chuyên khoa mắt để được kê đơn thuốc giảm đau màng phim giác mạc an toàn.",
    steps: [
      {
        num: "01",
        title: "NGHỈ NGƠI TRONG PHÒNG TỐI",
        desc: "Đeo kính râm hoặc ở nơi ánh sáng dịu, nhắm mắt nghỉ ngơi để giảm phản xạ co thắt đồng tử và sợ sáng.",
        isDo: true
      },
      {
        num: "02",
        title: "CHƯỜM MÁT QUANH MẮT",
        desc: "Dùng khăn sạch bọc đá chườm nhẹ nhàng quanh vùng mi và hốc mắt để làm dịu cơn nóng rát dữ dội.",
        isDo: true
      },
      {
        num: "03",
        title: "NHỎ NƯỚC MẮT NHÂN TẠO",
        desc: "Bổ sung độ ẩm liên tục bằng nước mắt nhân tạo vô trùng dạng tép để hỗ trợ làm lành lớp biểu mô giác mạc.",
        isDo: true
      },
      {
        num: "04",
        title: "TUYỆT ĐỐI KHÔNG DỤI MẮT",
        desc: "Không dùng tay day dụi và không đắp các loại lá cây, nha đam hay sữa mẹ dân gian kẻo nhiễm trùng bội nhiễm.",
        isDo: false
      },
      {
        num: "05",
        title: "ĐẾN BỆNH VIỆN MẮT KIỂM TRA",
        desc: "Bác sĩ chuyên khoa mắt sẽ nhuộm huỳnh quang giác mạc kiểm tra độ trầy trợt và chỉ định thuốc giảm đau thích hợp.",
        isDo: true
      }
    ],
    warningSigns: [
      "Mắt đau nhức buốt dữ dội kéo dài quá 12 tiếng không thuyên giảm",
      "Thị lực suy giảm, nhìn mờ như qua màn sương",
      "Xuất hiện mủ hoặc ghèn vàng dính chặt mi mắt",
      "Nhạy cảm với ánh sáng cực độ không thể mở mắt"
    ]
  },

  FOREIGN_BODY_DUST: {
    id: "FOREIGN_BODY_DUST",
    title: "Bụi hoặc dị vật nhỏ vào mắt",
    subtitle: "Hạt cát, bụi đường, hạt mạt nhỏ bay vào mắt gây cộm xót",
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    recommendedVideoId: "V001",
    keywords: ["bụi", "cát", "cộm", "xót", "dị vật nhỏ", "hạt bụi", "bụi đường", "chảy nước mắt", "bay vào mắt"],
    summary: "Bụi hoặc hạt mạt nhỏ bám vào bề mặt kết mạc hoặc giác mạc gây cộm xót, đỏ và chảy nước mắt.",
    audioScript: "Hướng dẫn sơ cứu bụi hoặc dị vật nhỏ vào mắt: Bước một, tuyệt đối không dụi mắt. Dụi mắt làm hạt bụi cào rách giác mạc. Bước hai, nhỏ liên tục nước muối sinh lý hoặc úp mặt chớp mắt trong bát nước sạch để bụi trôi ra ngoài. Bước ba, nếu sau ba mươi phút vẫn cộm xót, hãy đến bệnh viện chuyên khoa mắt.",
    steps: [
      {
        num: "01",
        title: "TUYỆT ĐỐI KHÔNG DỤI MẮT",
        desc: "Mọi động tác day, dụi sẽ chà xát hạt bụi sắc nhọn vào biểu mô giác mạc gây trầy xước và loét giác mạc.",
        isDo: false
      },
      {
        num: "02",
        title: "CHỚP MẮT TRONG NƯỚC SẠCH",
        desc: "Nhỏ nhiều giọt nước muối sinh lý NaCl 0.9% hoặc chớp mắt trong cốc/bát nước sạch để kích thích dòng nước cuốn trôi bụi.",
        isDo: true
      },
      {
        num: "03",
        title: "KÉO NHẸ MI MẮT TRÊN",
        desc: "Nhìn xuống dưới, kéo nhẹ mi trên trùm ra ngoài mi dưới để lông mi gạt bớt dị vật đọng ở mặt trong mi.",
        isDo: true
      },
      {
        num: "04",
        title: "KHÔNG DÙNG TĂM BÔNG NGOÁY",
        desc: "Không dùng tăm bông, góc khăn hay lưỡi liếm để lấy bụi vì rất dễ gây xước lòng đen và nhiễm khuẩn nặng.",
        isDo: false
      },
      {
        num: "05",
        title: "ĐI KHÁM NẾU CÒN CỘM RÁT",
        desc: "Nếu sau 30 phút mắt vẫn cộm cấn, nhìn mờ hoặc đỏ, cần đến cơ sở y tế để bác sĩ gắp dị vật dưới kính hiển vi.",
        isDo: true
      }
    ],
    warningSigns: [
      "Vẫn còn cảm giác cộm xót như có gai đâm sau khi đã rửa mắt",
      "Mắt đỏ rực, phù nề mí mắt hoặc chảy ghèn",
      "Nhìn mờ hoặc thị lực giảm rõ rệt",
      "Đau nhức tăng dần khi chớp mắt"
    ]
  },

  CHEMICAL_EYE_EXPOSURE: {
    id: "CHEMICAL_EYE_EXPOSURE",
    title: "Hóa chất bắn vào mắt",
    subtitle: "Xà phòng, nước lau sàn, axit, bazo, thuốc nhuộm, nước tẩy bồn cầu",
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    recommendedVideoId: "V002",
    keywords: ["hóa chất", "xà phòng", "nước tẩy", "axit", "bazo", "vôi", "nước rửa chén", "nước lau sàn", "thuốc tẩy", "bắn vào mắt"],
    summary: "Cấp cứu khẩn cấp: Hóa chất có thể phá hủy mô mắt trong vòng vài phút. Cần xối rửa ngay lập tức.",
    audioScript: "Cảnh báo cấp cứu: Hóa chất bắn vào mắt cần hành động tức thì. Bước một, xối nước sạch liên tục vào mắt ngay lập tức trong mười lăm đến hai mươi phút không ngừng nghỉ. Bước hai, vạch mi mắt chớp liên tục trong dòng nước chảy. Bước ba, mang theo vỏ hóa chất và đến cơ sở y tế gần nhất.",
    steps: [
      {
        num: "01",
        title: "XỐI NƯỚC SẠCH NGAY LẬP TỨC",
        desc: "Đưa mắt ngay dưới vòi nước máy, vòi sen hoặc ca nước sạch. Xối rửa liên tục từ 15 đến 20 phút không được chậm trễ.",
        isDo: true
      },
      {
        num: "02",
        title: "VẠCH MI MẮT KHI RỬA",
        desc: "Dùng ngón tay mở to mi trên và mi dưới để nước rửa sạch toàn bộ hóa chất đọng lại ở cùng đồ kết mạc.",
        isDo: true
      },
      {
        num: "03",
        title: "KHÔNG DÙNG DUNG DỊCH TRUNG HÒA",
        desc: "Tuyệt đối không tìm chất kiềm để trung hòa axit hay ngược lại. Phản ứng sinh nhiệt sẽ làm cháy giác mạc nặng hơn.",
        isDo: false
      },
      {
        num: "04",
        title: "MANG THEO NHÃN HÓA CHẤT",
        desc: "Cầm theo bao bì, chai lọ hóa chất để bác sĩ nhận biết chính xác nồng độ pH và phác đồ điều trị.",
        isDo: true
      },
      {
        num: "05",
        title: "ĐẾN BỆNH VIỆN CẤP CỨU NGAY",
        desc: "Sau khi xối nước 15 phút, gọi cấp cứu hoặc đến bệnh viện mắt ngay lập tức.",
        isDo: true
      }
    ],
    warningSigns: [
      "Giác mạc chuyển sang màu trắng đục (dấu hiệu hoại tử giác mạc)",
      "Không thể mở mắt, sưng phù mí mắt dữ dội",
      "Mất thị lực hoặc chỉ thấy bóng mờ",
      "Đau nhức dữ dội lan lên nửa đầu"
    ]
  },

  BLUNT_EYE_TRAUMA: {
    id: "BLUNT_EYE_TRAUMA",
    title: "Chấn thương mắt do va đập",
    subtitle: "Bị đấm, bóng đá / tennis đập vào mắt, té ngã va đập vào hốc mắt",
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    recommendedVideoId: "V003",
    keywords: ["va đập", "bị đấm", "bóng đập", "đập vào mắt", "té ngã", "bầm tím", "sưng mắt", "chấn thương mắt", "đụng dập"],
    summary: "Lực va chạm cơ học mạnh có thể gây xuất huyết tiền phòng, đứt chân mống mắt hoặc rách vỡ võng mạc.",
    audioScript: "Hướng dẫn sơ cứu mắt bị va đập: Bước một, tuyệt đối không ấn tì hoặc dụi tay lên nhãn cầu. Bước hai, dùng khăn sạch bọc đá chườm lạnh nhẹ quanh vùng xương hốc mắt. Bước ba, đến bệnh viện chuyên khoa mắt ngay để soi đáy mắt và tầm soát xuất huyết.",
    steps: [
      {
        num: "01",
        title: "KHÔNG ẤN HOẶC TÌ ĐÈ LÊN MẮT",
        desc: "Tuyệt đối không đè mạnh tay lên nhãn cầu vì có thể làm tăng áp lực nội nhãn và vỡ nhãn cầu kín.",
        isDo: false
      },
      {
        num: "02",
        title: "CHƯỜM LẠNH NHẸ QUANH HỐC MẮT",
        desc: "Bọc đá vào khăn mềm sạch, chườm quanh vùng xương gò má và cung mày để giảm phù nề và máu tụ.",
        isDo: true
      },
      {
        num: "03",
        title: "NGỒI NGHỈ NỬA NẰM NỬA NGỒI",
        desc: "Kê đầu cao khoảng 30–45 độ giúp máu đọng trong tiền phòng lắng xuống, hạn chế che khuất đồng tử.",
        isDo: true
      },
      {
        num: "04",
        title: "KHÔNG DÙNG THUỐC ASPIRIN",
        desc: "Không tự ý uống các loại thuốc chống đông máu như Aspirin hay Ibuprofen vì làm tăng nguy cơ chảy máu ồ ạt.",
        isDo: false
      },
      {
        num: "05",
        title: "KHÁM CHUYÊN KHOA MẮT TẦM SOÁT",
        desc: "Đến viện mắt kiểm tra nhãn áp, tiền phòng và đáy mắt để phát hiện sớm bong võng mạc.",
        isDo: true
      }
    ],
    warningSigns: [
      "Nhìn thấy một lớp máu đỏ ngập trước lòng đen (xuất huyết tiền phòng)",
      "Thị lực giảm sút rõ rệt, nhìn đôi (song thị)",
      "Đồng tử méo mó hoặc không co nhỏ khi có ánh sáng",
      "Đau nhức dữ dội kèm buồn nôn"
    ]
  },

  CORNEAL_SCRATCH: {
    id: "CORNEAL_SCRATCH",
    title: "Trầy xước giác mạc / Cành cây quẹt",
    subtitle: "Cành cây, lá mía, giấy cào, móng tay quẹt trúng tròng đen",
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    recommendedVideoId: "V006",
    keywords: ["cây quẹt", "cành cây", "lá quẹt", "móng tay", "cào xước", "trầy xước giác mạc", "rách giác mạc", "xước mắt"],
    summary: "Biểu mô giác mạc bị rách trợt do vật sắc quẹt qua, có nguy cơ cao nhiễm nấm và vi khuẩn mủ xanh.",
    audioScript: "Hướng dẫn sơ cứu khi bị cành cây hay móng tay quẹt vào mắt: Bước một, không dụi mắt. Bước hai, nhỏ nước muối sinh lý làm sạch dịch tiết. Bước ba, nhắm mắt nghỉ ngơi và đến khám bác sĩ mắt để được kê đơn thuốc kháng sinh phòng nhiễm nấm giác mạc.",
    steps: [
      {
        num: "01",
        title: "KHÔNG DỤI MẮT",
        desc: "Dụi mắt làm bong rộng thêm vạt biểu mô giác mạc đang tổn thương.",
        isDo: false
      },
      {
        num: "02",
        title: "RỬA MẮT BẰNG NƯỚC MUỐI SINH LÝ",
        desc: "Dùng NaCl 0.9% rửa sạch bụi bẩn và chất bẩn hữu cơ từ cành cây bám lại.",
        isDo: true
      },
      {
        num: "03",
        title: "KHÔNG TỰ MUA THUỐC CHỨA CORTICOID",
        desc: "Tuyệt đối không nhỏ thuốc có Dexamethasone/Prednisolone vì sẽ gây bùng phát nấm giác mạc dẫn đến thủng mắt.",
        isDo: false
      },
      {
        num: "04",
        title: "ĐẾN CƠ SỞ CHUYÊN KHOA MẮT",
        desc: "Bác sĩ cần nhuộm huỳnh quang đánh giá độ sâu vết xước và kê thuốc kháng sinh đặc hiệu chống nhiễm nấm thực vật.",
        isDo: true
      }
    ],
    warningSigns: [
      "Đau nhức dữ dội khi mở mắt, chảy nước mắt giàn giụa",
      "Xuất hiện đốm trắng hoặc đục trên tròng đen",
      "Mắt đỏ rực xung quanh lòng đen (cương tụ rìa)",
      "Mắt tiết nhiều ghèn mủ vàng xanh"
    ]
  },

  FISH_HOOK_INJURY: {
    id: "FISH_HOOK_INJURY",
    title: "Dị vật móc câu găm vào mắt",
    subtitle: "Lưỡi câu cá, móc kim loại có ngạnh sắc nhọn xuyên thấu mi mắt hoặc giác mạc",
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    recommendedVideoId: "V005",
    keywords: ["móc câu", "câu cá", "lưỡi câu", "ngạnh", "móc sắt", "găm vào mắt", "xuyên thấu"],
    summary: "Cấp cứu ngoại khoa: Ngạnh móc câu giữ chặt trong mô mắt. Tuyệt đối không được kéo giật móc ra.",
    audioScript: "Cảnh báo cấp cứu khẩn cấp dị vật móc câu: Bước một, tuyệt đối không được giật hoặc kéo móc câu ra ngoài vì ngạnh câu sẽ xé rách nhãn cầu. Bước hai, cắt dây cước câu cá. Bước ba, cố định cán móc câu bằng cốc giấy và đưa bệnh nhân đi cấp cứu ngay.",
    steps: [
      {
        num: "01",
        title: "TUYỆT ĐỐI KHÔNG GIẬT MÓC RA",
        desc: "Móc câu có ngạnh ngược, hành động giật kéo ra sẽ xé toạc toàn bộ giác mạc và thoát dịch kính gây mù vĩnh viễn.",
        isDo: false
      },
      {
        num: "02",
        title: "CẮT DÂY CƯỚC CÂU CÁ",
        desc: "Dùng kéo cắt đứt dây cước câu để loại bỏ lực kéo căng tác động lên đầu móc đang găm trong mắt.",
        isDo: true
      },
      {
        num: "03",
        title: "CHẮN BẢO VỆ BẰNG CỐC GIẤY",
        desc: "Đặt đáy cốc giấy hoặc nắp chụp bảo vệ úp trùm lên móc câu rồi dán băng dính xung quanh, tránh va quẹt bên ngoài.",
        isDo: true
      },
      {
        num: "04",
        title: "ĐẾN BỆNH VIỆN MẮT CẤP CỨU NGAY",
        desc: "Đến ngay bệnh viện chuyên khoa mắt để bác sĩ phẫu thuật lấy móc câu bằng dụng cụ vi phẫu vô trùng.",
        isDo: true
      }
    ],
    warningSigns: [
      "Móc găm trực tiếp vào tròng đen (giác mạc) hoặc tròng trắng (củng mạc)",
      "Chảy dịch trong suốt hoặc chảy máu từ vết đâm",
      "Mắt xẹp hoặc đồng tử méo mó hướng về vết thương",
      "Mất thị lực tức thì"
    ]
  },

  METAL_FOREIGN_BODY: {
    id: "METAL_FOREIGN_BODY",
    title: "Mạt sắt / kim loại bắn vào mắt",
    subtitle: "Mạt sắt mài cơ khí, mảnh vụn kim loại tốc độ cao găm vào giác mạc",
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    recommendedVideoId: "V007",
    keywords: ["mạt sắt", "kim loại", "máy mài", "cắt sắt", "mảnh kim loại", "sắt bắn", "gọt sắt"],
    summary: "Mạt sắt nóng bắn tốc độ cao găm sâu vào giác mạc và nhanh chóng tạo vòng rỉ sét gây độc tế bào mắt.",
    audioScript: "Hướng dẫn xử lý mạt sắt bắn vào mắt: Bước một, không dụi mắt và không dùng nam châm hay tăm bông cạy gắp. Bước hai, che nhẹ mắt bằng gạc vô trùng. Bước ba, đến ngay bệnh viện mắt trong vòng 24 giờ để bác sĩ gắp mạt sắt và nạo sạch vòng rỉ sét.",
    steps: [
      {
        num: "01",
        title: "KHÔNG DỤI MẮT",
        desc: "Dụi mắt làm mạt sắt ấn sâu hơn qua các lớp giác mạc, thậm chí đâm thủng vào tiền phòng.",
        isDo: false
      },
      {
        num: "02",
        title: "KHÔNG DÙNG NAM CHÂM TỰ HÚT",
        desc: "Lực hút không định hướng từ nam châm bên ngoài có thể làm rách rộng vết thương giác mạc.",
        isDo: false
      },
      {
        num: "03",
        title: "CHE BẢO VỆ BẰNG GẠC SẠCH",
        desc: "Dùng gạc sạch che nhẹ mắt, không băng ép chặt để tránh đè nén dị vật.",
        isDo: true
      },
      {
        num: "04",
        title: "ĐI KHÁM ĐỂ NẠO VÒNG RỈ SẮT",
        desc: "Chỉ sau vài giờ, mạt sắt sẽ oxy hóa tạo thành vòng rỉ nâu ăn sâu. Cần bác sĩ nạo sạch dưới kính sinh hiển vi.",
        isDo: true
      }
    ],
    warningSigns: [
      "Nhìn thấy chấm đen hoặc nâu kim loại bám chặt trên tròng đen",
      "Đau buốt nhức mắt khi chớp mắt",
      "Mắt đỏ rực, phù nề mi mắt",
      "Nhìn mờ hoặc sợ ánh sáng"
    ]
  },

  RED_EYE_INFECTION: {
    id: "RED_EYE_INFECTION",
    title: "Mắt đỏ nhiều ghèn (Viêm kết mạc)",
    subtitle: "Đau mắt đỏ, viêm kết mạc do virus, vi khuẩn, ghèn dính mí buổi sáng",
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    recommendedVideoId: "V008",
    keywords: ["mắt đỏ", "ghèn", "đau mắt đỏ", "viêm kết mạc", "rỉ mắt", "dính mí", "chảy dịch"],
    summary: "Viêm kết mạc nhiễm trùng lây lan nhanh qua tiếp xúc. Cần cách ly đồ dùng và khám bác sĩ.",
    audioScript: "Hướng dẫn khi bị mắt đỏ có ghèn: Bước một, nhỏ nước muối sinh lý ngày 4 đến 6 lần để làm sạch dịch ghèn. Bước hai, dùng khăn mặt riêng và rửa tay thường xuyên. Bước ba, đi khám bác sĩ mắt để được kê đúng loại thuốc nhỏ.",
    steps: [
      {
        num: "01",
        title: "RỬA MẮT BẰNG NƯỚC MUỐI SINH LÝ",
        desc: "Dùng NaCl 0.9% nhỏ rửa từ 4–6 lần mỗi ngày để tống xuất vi khuẩn và ghèn ứ đọng.",
        isDo: true
      },
      {
        num: "02",
        title: "DÙNG KHĂN VÀ ĐỒ DÙNG RIÊNG",
        desc: "Sử dụng khăn mặt riêng, gối riêng, thường xuyên giặt phơi nắng để tránh lây bệnh cho các thành viên trong gia đình.",
        isDo: true
      },
      {
        num: "03",
        title: "KHÔNG TỰ MUA THUỐC CÓ CORTICOID",
        desc: "Dùng sai thuốc nhỏ chứa corticoid có thể làm trầm trọng thêm viêm giác mạc do virus herpes và gây đục thủy tinh thể.",
        isDo: false
      },
      {
        num: "04",
        title: "KHÁM BÁC SĨ MẮT NẾU KHÔNG ĐỠ",
        desc: "Nếu sau 2–3 ngày mắt vẫn đỏ nhiều, xuất hiện giả mạc hoặc nhìn mờ, cần đến bệnh viện mắt kiểm tra ngay.",
        isDo: true
      }
    ],
    warningSigns: [
      "Mắt đau nhức sâu trong hốc mắt kèm đau đầu",
      "Giảm thị lực hoặc nhìn thấy quầng màu quanh bóng đèn",
      "Ghèn mủ đặc màu xanh vàng chảy liên tục",
      "Mí mắt sưng húp không mở được"
    ]
  }
};
