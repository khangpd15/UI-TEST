import { eyeIllustrations } from './eyeImages';

export const emergencyCases = {
  "blunt-trauma": {
    id: "blunt-trauma",
    title: "MẮT BỊ VA ĐẬP",
    subtitle: "Do bị đấm, bóng tennis/bóng đá va vào, tai nạn sinh hoạt",
    image: eyeIllustrations.bluntTrauma,
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    leadText: "Va đập mạnh có thể gây xuất huyết trong mắt hoặc vỡ nhãn cầu kín.",
    audioScript: "Hướng dẫn sơ cứu mắt bị va đập: Bước một, tuyệt đối không dụi mắt hoặc ấn mạnh lên mắt. Bước hai, chườm lạnh nhẹ nhàng xung quanh hốc mắt bằng khăn bọc đá, không tì đè lên nhãn cầu. Bước ba, đến bệnh viện chuyên khoa mắt ngay lập tức.",
    steps: [
      {
        stepNumber: "01",
        icon: "🚫",
        title: "KHÔNG DỤI MẮT",
        detail: "Tuyệt đối không lấy tay day, dụi hoặc ấn mạnh lên nhãn cầu."
      },
      {
        stepNumber: "02",
        icon: "🧊",
        title: "CHƯỜM LẠNH NHẸ",
        detail: "Dùng khăn sạch bọc đá chườm quanh hốc mắt, giảm sưng và chảy máu."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "ĐẾN CƠ SỞ Y TẾ NGAY",
        detail: "Đến ngay bệnh viện mắt gần nhất để kiểm tra đáy mắt và giác mạc."
      }
    ],
    doList: [
      "Nhắm mắt thư giãn, ngồi nghỉ ở nơi thoáng mát",
      "Chườm mát quanh vùng xương ổ mắt để giảm phù nề",
      "Gọi người nhà hoặc hỗ trợ y tế đưa đi cấp cứu ngay"
    ],
    dontList: [
      "Không dụi tay lên mắt",
      "Không ấn hoặc tì đè vật nặng lên mắt",
      "Không tự ý uống thuốc giảm đau aspirin gây chảy máu thêm"
    ]
  },

  "foreign-object": {
    id: "foreign-object",
    title: "DỊ VẬT GĂM VÀO MẮT",
    subtitle: "Mạt sắt mài, dằm gỗ, mảnh thủy tinh, vật sắc nhọn xuyên thủng",
    image: eyeIllustrations.foreignObject,
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    leadText: "Dị vật găm sâu, tuyệt đối không được tự ý rút ra kẻo làm thủng nhãn cầu.",
    audioScript: "Hướng dẫn khẩn cấp dị vật găm vào mắt: Bước một, không được dụi mắt. Bước hai, tuyệt đối không tự rút dị vật ra ngoài. Bước ba, dùng cốc giấy hoặc gạc sạch che mắt lại và đến bệnh viện mắt cấp cứu ngay.",
    steps: [
      {
        stepNumber: "01",
        icon: "🚫",
        title: "KHÔNG DỤI MẮT",
        detail: "Mọi cử động day dụi sẽ làm dị vật cứa rách sâu hơn vào giác mạc."
      },
      {
        stepNumber: "02",
        icon: "🚫",
        title: "KHÔNG TỰ RÚT DỊ VẬT",
        detail: "Rút dị vật tự ý sẽ kéo theo màng mắt và dịch kính gây mù lòa."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "ĐẾN CƠ SỞ Y TẾ NGAY",
        detail: "Che nhẹ mắt bằng cốc giấy sạch rồi chuyển ngay đến bệnh viện mắt."
      }
    ],
    doList: [
      "Dùng cốc giấy sạch úp nhẹ lên mắt để bảo vệ dị vật không bị va quẹt",
      "Băng nhẹ nhàng cố định cốc quanh mắt",
      "Đến phòng cấp cứu chuyên khoa mắt khẩn cấp"
    ],
    dontList: [
      "Tuyệt đối không dùng nhíp, tay hay bông gòn để gắp dị vật",
      "Không dụi mắt dưới bất kỳ hình thức nào",
      "Không nhỏ bất cứ loại thuốc lá hay thuốc dân gian nào"
    ]
  },

  "chemical-splash": {
    id: "chemical-splash",
    title: "HÓA CHẤT VÀO MẮT",
    subtitle: "Dung dịch tẩy rửa, axit ắc quy, vôi bột, xà phòng, cồn nồng độ cao",
    image: eyeIllustrations.chemicalSplash,
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    leadText: "Bỏng hóa chất có thể làm hủy hoại giác mạc trong vài phút. Cần xối nước ngay!",
    audioScript: "Hướng dẫn sơ cứu hóa chất vào mắt: Bước một, xối rửa mắt liên tục bằng nước sạch từ 15 đến 20 phút. Bước hai, mở to mắt và chớp mắt liên tục trong dòng nước chảy. Bước ba, mang theo mẫu hóa chất và đến cơ sở y tế ngay.",
    steps: [
      {
        stepNumber: "01",
        icon: "💧",
        title: "RỬA NƯỚC LIÊN TỤC",
        detail: "Xối nước sạch hoặc nước muối sinh lý vào mắt ngay trong 15 - 20 phút."
      },
      {
        stepNumber: "02",
        icon: "👁️",
        title: "CHỚP MẮT TRONG NƯỚC",
        detail: "Cố gắng mở to mi mắt để dòng nước rửa trôi toàn bộ hóa chất đọng lại."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "ĐẾN BỆNH VIỆN NGAY",
        detail: "Mang theo bao bì hoặc tên hóa chất tới phòng cấp cứu mắt."
      }
    ],
    doList: [
      "Xối nước sạch liên tục ngay lập tức, không được chần chừ",
      "Vạch mi mắt trên và dưới để nước chảy sạch toàn bộ cùng đồ",
      "Mang theo nhãn chai hóa chất cho bác sĩ biết nồng độ"
    ],
    dontList: [
      "Không dụi mắt làm hóa chất ngấm sâu hơn",
      "Không cố trung hòa axit bằng kiềm hoặc ngược lại",
      "Không băng kín mắt sau khi dính hóa chất"
    ]
  },

  "fishhook": {
    id: "fishhook",
    title: "MÓC CÂU VÀO MẮT",
    subtitle: "Lưỡi câu cá có ngạnh móc vào mí mắt hoặc giác mạc",
    image: eyeIllustrations.fishhook,
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    leadText: "Móc câu có ngạnh ngược, giật ra sẽ làm rách toạc mô mắt.",
    audioScript: "Hướng dẫn sơ cứu móc câu vào mắt: Bước một, tuyệt đối không được giật hoặc kéo móc câu ra. Bước hai, cắt dây câu và che chắn nhẹ nhàng. Bước ba, chuyển ngay đến bệnh viện chuyên khoa mắt để bác sĩ tiểu phẫu lấy ra an toàn.",
    steps: [
      {
        stepNumber: "01",
        icon: "🚫",
        title: "KHÔNG GIẬT MÓC CÂU",
        detail: "Lưỡi câu có ngạnh sắc, cố kéo ra sẽ xé rách toàn bộ màng nhãn cầu."
      },
      {
        stepNumber: "02",
        icon: "✂️",
        title: "CẮT BỎ DÂY CÂU",
        detail: "Cắt sát dây cước tránh dây bị vướng giật gây chấn động mạnh."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "ĐẾN BỆNH VIỆN MẮT",
        detail: "Để bác sĩ chuyên khoa gây tê và rút móc câu theo đúng kỹ thuật y khoa."
      }
    ],
    doList: [
      "Cắt dây cước gần móc câu nhất có thể",
      "Bảo vệ vùng quanh móc câu bằng cốc che chắn",
      "Giữ bình tĩnh, nhắm mắt còn lại để hạn chế chuyển động"
    ],
    dontList: [
      "Tuyệt đối không tự kéo hoặc nhờ người khác rút ngạnh câu",
      "Không đụng chạm vào cán móc",
      "Không bôi dầu gió hoặc các chất lạ lên mắt"
    ]
  },

  "eye-burn": {
    id: "eye-burn",
    title: "BỎNG MẮT (LỬA / HÀN ĐIỆN)",
    subtitle: "Bị tia lửa hàn, dầu ăn sôi bắn vào, hơi nước nóng hoặc lửa",
    image: eyeIllustrations.eyeBurn,
    severity: "emergency",
    severityLabel: "CỰC KỲ KHẨN CẤP",
    leadText: "Bỏng nhiệt hoặc tia UV hàn gây tổn thương biểu mô giác mạc nghiêm trọng.",
    audioScript: "Hướng dẫn sơ cứu bỏng mắt: Bước một, làm mát mắt bằng nước sạch mát ngay lập tức. Bước hai, nhỏ nước muối sinh lý làm dịu rát. Bước ba, nhắm mắt che gạc vô trùng và đến cơ sở y tế.",
    steps: [
      {
        stepNumber: "01",
        icon: "💧",
        title: "LÀM MÁT BẰNG NƯỚC",
        detail: "Dùng nước sạch mát rửa nhẹ nhàng hoặc đắp khăn mát sạch lên mặt."
      },
      {
        stepNumber: "02",
        icon: "🩹",
        title: "CHE GẠC VÔ TRÙNG",
        detail: "Che mắt bằng gạc mềm sạch vô khuẩn, không đè ép mạnh."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "ĐẾN VIỆN KIỂM TRA",
        detail: "Khám bác sĩ để phòng nhiễm trùng biểu mô giác mạc."
      }
    ],
    doList: [
      "Rửa mát nhẹ nhàng bằng nước sạch hoặc dung dịch muối sinh lý",
      "Che nhẹ gạc sạch để tránh bụi bẩn",
      "Đi khám chuyên khoa mắt sớm"
    ],
    dontList: [
      "Không dùng nước đá tì trực tiếp lên vùng bỏng",
      "Không bôi mỡ trăn, kem đánh răng hay dầu ăn lên mắt",
      "Không dụi mắt"
    ]
  },

  "dust-in-eye": {
    id: "dust-in-eye",
    title: "BỤI VÀO MẮT",
    subtitle: "Cát bụi đường sá, hạt mạt bay vào mắt gây cộm xót rát",
    image: eyeIllustrations.dustInEye,
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    leadText: "Hạt bụi nhỏ có thể làm xước giác mạc nếu bạn dụi tay.",
    audioScript: "Hướng dẫn xử trí bụi vào mắt: Bước một, không dụi mắt. Bước hai, nhỏ nhiều nước muối sinh lý hoặc chớp mắt trong chén nước sạch. Bước ba, nếu mắt vẫn cộm đỏ sau 30 phút, hãy đến gặp bác sĩ mắt.",
    steps: [
      {
        stepNumber: "01",
        icon: "🚫",
        title: "KHÔNG DỤI MẮT",
        detail: "Dụi mắt làm hạt bụi chà xát cào xước lòng đen của mắt."
      },
      {
        stepNumber: "02",
        icon: "💧",
        title: "NHỎ NƯỚC MUỐI / CHỚP MẮT",
        detail: "Nhỏ liên tục nước muối sinh lý NaCl 0.9% hoặc úp mặt chớp mắt trong bát nước sạch."
      },
      {
        stepNumber: "03",
        icon: "👨‍⚕️",
        title: "KHÁM NẾU CÒN CỘM",
        detail: "Nếu sau 30 phút vẫn xót cộm hoặc chảy nước mắt liên tục, cần đi khám ngay."
      }
    ],
    doList: [
      "Chớp mắt liên tục để nước mắt tự nhiên đẩy bụi ra khóe mắt",
      "Nhỏ nhiều giọt nước muối sinh lý NaCl 0.9%",
      "Kéo nhẹ mí trên trùm lên mí dưới để lông mi gạt bụi"
    ],
    dontList: [
      "Tuyệt đối không dùng tay hay góc áo dụi mắt",
      "Không dùng tăm bông chọc ngoáy vào con ngươi",
      "Không nhờ người khác thổi vào mắt kẻo lây vi khuẩn miệng"
    ]
  },

  "red-eye": {
    id: "red-eye",
    title: "MẮT ĐỎ + GHÈN",
    subtitle: "Đau mắt đỏ, viêm kết mạc, ghèn dính mí khi thức dậy",
    image: eyeIllustrations.redEye,
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    leadText: "Viêm kết mạc dễ lây lan và có thể nhầm lẫn với viêm màng bồ đào.",
    audioScript: "Hướng dẫn xử trí mắt đỏ có ghèn: Vệ sinh mắt thường xuyên bằng nước muối sinh lý. Dùng khăn mặt và thau rửa riêng biệt. Không tự ý mua thuốc nhỏ chứa corticoid mà cần đi khám chuyên khoa.",
    steps: [
      {
        stepNumber: "01",
        icon: "💧",
        title: "VỆ SINH NƯỚC MUỐI",
        detail: "Nhỏ nước muối 0.9% từ 4-6 lần/ngày để rửa sạch ghèn mắt."
      },
      {
        stepNumber: "02",
        icon: "🧼",
        title: "DÙNG ĐỒ DÙNG RIÊNG",
        detail: "Dùng khăn mặt riêng, giặt sạch phơi nắng để tránh lây người nhà."
      },
      {
        stepNumber: "03",
        icon: "👨‍⚕️",
        title: "ĐI KHÁM BÁC SĨ",
        detail: "Khám bác sĩ mắt để được kê đơn thuốc nhỏ kháng khuẩn phù hợp."
      }
    ],
    doList: [
      "Nhỏ nước muối sinh lý NaCl 0.9% nhiều lần trong ngày",
      "Rửa tay bằng xà phòng trước và sau khi chạm vùng mắt",
      "Đeo kính râm khi đi ra ngoài gió bụi"
    ],
    dontList: [
      "Không dùng chung khăn mặt, gối với người khác",
      "Không tự ý mua thuốc nhỏ mắt chứa dexamethasone / corticoid",
      "Không đắp lá trầu không hoặc xông hơi lá vào mắt"
    ]
  },

  "cloudy-eye": {
    id: "cloudy-eye",
    title: "MẮT BỊ ĐỤC",
    subtitle: "Đục thủy tinh thể, nhìn mờ như qua màn sương",
    image: eyeIllustrations.cloudyEye,
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    leadText: "Đục thủy tinh thể là nguyên nhân hàng đầu gây mù lòa ở người lớn tuổi nhưng có thể chữa khỏi.",
    audioScript: "Hướng dẫn chăm sóc mắt bị đục: Đục thủy tinh thể cần được bác sĩ chuyên khoa mắt đo thị lực và đánh giá giai đoạn. Không tự ý dùng thuốc nhỏ quảng cáo tan mộng đục trên mạng.",
    steps: [
      {
        stepNumber: "01",
        icon: "🔍",
        title: "ĐO KHÁM THỊ LỰC",
        detail: "Đi khám tại bệnh viện chuyên khoa mắt để soi đáy mắt và đo độ đục."
      },
      {
        stepNumber: "02",
        icon: "🕶️",
        title: "ĐEO KÍNH BẢO VỆ",
        detail: "Đeo kính mát chống tia UV khi ra ngoài trời nắng."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "TƯ VẤN PHẪU THUẬT PHACO",
        detail: "Thay thủy tinh thể nhân tạo là phương pháp an toàn và sáng mắt trở lại."
      }
    ],
    doList: [
      "Khám định kỳ 6 tháng một lần tại bệnh viện mắt",
      "Bổ sung thực phẩm giàu Lutein, Zeaxanthin và Vitamin A",
      "Bảo đảm ánh sáng đầy đủ khi đọc sách báo"
    ],
    dontList: [
      "Không tin theo quảng cáo thuốc nhỏ làm tan đục thủy tinh thể",
      "Không tự ý mua thuốc đông y không rõ nguồn gốc",
      "Không trì hoãn đến khi mắt mù hẳn mới đi khám"
    ]
  },

  "blurry-vision": {
    id: "blurry-vision",
    title: "NHÌN MỜ ĐỘT NGỘT",
    subtitle: "Thị lực suy giảm nhanh, xuất hiện quầng hào quang hoặc mảng đen che khuất",
    image: eyeIllustrations.blurryVision,
    severity: "warning",
    severityLabel: "CẦN ĐƯỢC KHÁM",
    leadText: "Mờ mắt đột ngột có thể là cơn glôcôm cấp hoặc tai biến mạch máu võng mạc.",
    audioScript: "Hướng dẫn khi nhìn mờ đột ngột: Bước một, dừng ngay việc lái xe hoặc làm việc nặng. Bước hai, kiểm tra xem có đau nhức đầu hoặc nôn ói đi kèm không. Bước ba, đến bệnh viện mắt cấp cứu ngay trong vòng vài giờ.",
    steps: [
      {
        stepNumber: "01",
        icon: "🛑",
        title: "NGỪNG LÀM VIỆC / LÁI XE",
        detail: "Ngồi nghỉ ngơi ngay ở nơi an toàn, không cố gắng điều khiển phương tiện."
      },
      {
        stepNumber: "02",
        icon: "⚠️",
        title: "THEO DÕI TRIỆU CHỨNG",
        detail: "Nếu có kèm đau nhức nửa đầu, thấy quầng sáng xanh đỏ, có thể là glôcôm cấp."
      },
      {
        stepNumber: "03",
        icon: "🏥",
        title: "ĐẾN BỆNH VIỆN NGAY",
        detail: "Cần hạ nhãn áp cấp cứu kịp thời để bảo tồn thị lực vĩnh viễn."
      }
    ],
    doList: [
      "Nhờ người thân đưa đến chuyên khoa mắt cấp cứu ngay",
      "Mang theo các đơn thuốc huyết áp, tiểu đường nếu có",
      "Giữ tâm lý bình tĩnh, thả lỏng cơ thể"
    ],
    dontList: [
      "Không tự lái xe khi mắt đang nhìn mờ",
      "Không nhỏ thuốc co giãn đồng tử khi chưa có chỉ định",
      "Không xoa bóp hoặc day ấn mạnh lên vùng mắt"
    ]
  }
};

export const firstAidList = [
  {
    id: "chemical-splash",
    title: "Hóa chất vào mắt",
    icon: "🧪",
    severity: "emergency",
    badgeText: "CỰC KỲ KHẨN CẤP",
    brief: "Xà phòng, nước tẩy bồn cầu, vôi bột, axit",
    action: "Xối nước rửa liên tục 15-20 phút",
    image: eyeIllustrations.chemicalSplash
  },
  {
    id: "foreign-object",
    title: "Dị vật găm vào mắt",
    icon: "🪵",
    severity: "emergency",
    badgeText: "CỰC KỲ KHẨN CẤP",
    brief: "Mạt sắt, mảnh kính, dằm gỗ găm sâu",
    action: "Tuyệt đối không tự rút dị vật ra",
    image: eyeIllustrations.foreignObject
  },
  {
    id: "fishhook",
    title: "Móc câu vào mắt",
    icon: "🪝",
    severity: "emergency",
    badgeText: "CỰC KỲ KHẨN CẤP",
    brief: "Lưỡi câu cá có ngạnh sắc nhọn",
    action: "Cắt dây cước, không giật móc",
    image: eyeIllustrations.fishhook
  },
  {
    id: "blunt-trauma",
    title: "Mắt bị va đập",
    icon: "⚽",
    severity: "emergency",
    badgeText: "CỰC KỲ KHẨN CẤP",
    brief: "Bóng đập, ngã đập mặt, va chạm mạnh",
    action: "Chườm lạnh nhẹ, không dụi mắt",
    image: eyeIllustrations.bluntTrauma
  },
  {
    id: "eye-burn",
    title: "Bỏng mắt",
    icon: "🔥",
    severity: "emergency",
    badgeText: "CỰC KỲ KHẨN CẤP",
    brief: "Hàn điện, tia lửa hàn, dầu ăn sôi",
    action: "Làm mát bằng nước sạch ngay",
    image: eyeIllustrations.eyeBurn
  },
  {
    id: "dust-in-eye",
    title: "Bụi vào mắt",
    icon: "💨",
    severity: "warning",
    badgeText: "CẦN ĐƯỢC KHÁM",
    brief: "Cát bụi bay vào mắt gây cộm xót",
    action: "Nhỏ nước muối sinh lý, không dụi",
    image: eyeIllustrations.dustInEye
  }
];
