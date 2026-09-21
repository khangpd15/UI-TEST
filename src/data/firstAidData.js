import { eyeIllustrations } from './eyeImages';

export const firstAidCases = {
  "foreign-object": {
    id: "foreign-object",
    title: "Dị vật găm vào mắt",
    leadHeading: "KHÔNG TỰ RÚT DỊ VẬT",
    instruction: "Tuyệt đối không tự rút dị vật - Che nhẹ mắt bằng cốc giấy sạch!",
    image: eyeIllustrations.foreignObject,
    severity: "emergency",
    badgeLabel: "CỰC KỲ KHẨN CẤP",
    audioScript: "Hướng dẫn xử lý khẩn cấp khi có dị vật găm vào mắt: Bước một, tuyệt đối không dụi mắt. Bước hai, tuyệt đối không tự ý rút dị vật ra ngoài. Bước ba, che chắn mắt nhẹ nhàng bằng cốc giấy sạch và đến ngay cơ sở y tế mắt gần nhất.",
    steps: [
      {
        num: "01",
        icon: "👁️",
        title: "KHÔNG DỤI MẮT",
        desc: "Dụi mắt làm dị vật cào xước sâu hơn vào lòng đen gây thủng nhãn cầu."
      },
      {
        num: "02",
        icon: "🪝",
        title: "KHÔNG TỰ RÚT DỊ VẬT",
        desc: "Rút dị vật không đúng kỹ thuật sẽ kéo theo mô mắt và dịch kính."
      },
      {
        num: "03",
        icon: "🏥",
        title: "ĐẾN CƠ SỞ Y TẾ NGAY",
        desc: "Che nhẹ mắt bằng cốc giấy sạch, đến ngay bệnh viện chuyên khoa mắt."
      }
    ],
    doList: [
      { icon: "🧴", text: "Che chắn mắt nhẹ nhàng bằng cốc giấy hoặc gạc sạch" },
      { icon: "🏥", text: "Đến cơ sở y tế chuyên khoa mắt ngay lập tức" },
      { icon: "☎", text: "Gọi hỗ trợ cấp cứu 0395 151 151" }
    ],
    dontList: [
      { icon: "👁️", text: "Không dụi mắt dưới bất kỳ hình thức nào" },
      { icon: "🪝", text: "Không tự rút dị vật hoặc dùng nhíp gắp" },
      { icon: "💊", text: "Không tự dùng thuốc nhỏ hay đắp thuốc lá dân gian" }
    ]
  },

  "blunt-trauma": {
    id: "blunt-trauma",
    title: "Mắt bị va đập",
    leadHeading: "KHÔNG DỤI MẮT - CHƯỜM LẠNH NHẸ",
    instruction: "Không dụi mắt hay tì đè - Chườm lạnh nhẹ quanh hốc mắt!",
    image: eyeIllustrations.bluntTrauma,
    severity: "emergency",
    badgeLabel: "CỰC KỲ KHẨN CẤP",
    audioScript: "Hướng dẫn sơ cứu mắt bị va đập: Bước một, không được dụi mắt hay tì đè lên mắt. Bước hai, chườm lạnh nhẹ nhàng xung quanh hốc mắt. Bước ba, đến bệnh viện chuyên khoa mắt ngay lập tức để kiểm tra đáy mắt.",
    steps: [
      {
        num: "01",
        icon: "👁️",
        title: "KHÔNG DỤI MẮT",
        desc: "Tuyệt đối không lấy tay day, dụi hoặc ấn mạnh lên nhãn cầu đang sưng."
      },
      {
        num: "02",
        icon: "🧊",
        title: "CHƯỜM LẠNH NHẸ",
        desc: "Dùng khăn bọc đá chườm quanh hốc mắt để giảm sưng phù nề."
      },
      {
        num: "03",
        icon: "🏥",
        title: "ĐẾN CƠ SỞ Y TẾ NGAY",
        desc: "Khám chuyên khoa mắt để tầm soát xuất huyết tiền phòng và rách võng mạc."
      }
    ],
    doList: [
      { icon: "🧴", text: "Nghỉ ngơi ở nơi thoáng mát, thả lỏng cơ thể" },
      { icon: "🧊", text: "Chườm mát quanh vùng xương ổ mắt để giảm sưng bầm" },
      { icon: "🏥", text: "Đến bệnh viện chuyên khoa mắt kiểm tra sớm" }
    ],
    dontList: [
      { icon: "👁️", text: "Không dụi tay hoặc ấn đè vật nặng lên mắt" },
      { icon: "💊", text: "Không tự ý uống thuốc aspirin gây chảy máu thêm" },
      { icon: "🥊", text: "Không tiếp tục vận động mạnh hay làm việc nặng" }
    ]
  },

  "chemical-splash": {
    id: "chemical-splash",
    title: "Hóa chất vào mắt",
    leadHeading: "XỐI RỬA NƯỚC SẠCH LIÊN TỤC 15 - 20 PHÚT",
    instruction: "Cần xối nước sạch liên tục ngay lập tức trong 15–20 phút!",
    image: eyeIllustrations.chemicalSplash,
    severity: "emergency",
    badgeLabel: "CỰC KỲ KHẨN CẤP",
    audioScript: "Hướng dẫn cấp cứu hóa chất vào mắt: Bước một, rửa mắt ngay lập tức dưới vòi nước sạch chảy liên tục từ 15 đến 20 phút. Bước hai, vạch mi mắt chớp liên tục trong dòng nước. Bước ba, mang theo vỏ hóa chất và đến viện cấp cứu ngay.",
    steps: [
      {
        num: "01",
        icon: "🧴",
        title: "RỬA NƯỚC LIÊN TỤC",
        desc: "Xối nước sạch hoặc nước muối sinh lý vào mắt ngay trong 15-20 phút không chần chừ."
      },
      {
        num: "02",
        icon: "👁️",
        title: "CHỚP MẮT TRONG NƯỚC",
        desc: "Mở to mi mắt để dòng nước rửa trôi toàn bộ hóa chất đọng lại ở cùng đồ kết mạc."
      },
      {
        num: "03",
        icon: "🏥",
        title: "ĐẾN BỆNH VIỆN NGAY",
        desc: "Mang theo bao bì hóa chất và tới cơ sở y tế mắt cấp cứu tức thì."
      }
    ],
    doList: [
      { icon: "🧴", text: "Xối rửa bằng nước sạch liên tục ngay lập tức" },
      { icon: "👁️", text: "Vạch mi mắt cho nước rửa sạch toàn bộ túi cùng" },
      { icon: "🏥", text: "Mang theo nhãn hóa chất đưa bệnh nhân đi cấp cứu" }
    ],
    dontList: [
      { icon: "👁️", text: "Không dụi mắt làm hóa chất ngấm sâu hơn" },
      { icon: "🧪", text: "Không cố trung hòa bằng các dung dịch hóa học khác" },
      { icon: "🩹", text: "Không băng kín mắt sau khi dính hóa chất" }
    ]
  },

  "dust-in-eye": {
    id: "dust-in-eye",
    title: "Bụi vào mắt",
    leadHeading: "KHÔNG DỤI MẮT - NHỎ NƯỚC MUỐI SINH LÝ",
    instruction: "Không dụi mắt. Nhỏ nước muối sinh lý nhiều lần hoặc chớp mắt trong bát nước sạch.",
    image: eyeIllustrations.foreignObject,
    severity: "warning",
    badgeLabel: "CẦN ĐƯỢC KHÁM",
    audioScript: "Hướng dẫn xử trí bụi vào mắt: Bước một, tuyệt đối không dụi mắt. Bước hai, nhỏ nhiều nước muối sinh lý hoặc úp mặt chớp mắt trong bát nước sạch. Bước ba, nếu mắt vẫn cộm xót sau 30 phút, hãy đến cơ sở chuyên khoa mắt kiểm tra.",
    steps: [
      {
        num: "01",
        icon: "👁️",
        title: "KHÔNG DỤI MẮT",
        desc: "Dụi tay làm hạt bụi, hạt cát chà xát cào xước biểu mô giác mạc gây viêm loét."
      },
      {
        num: "02",
        icon: "🧴",
        title: "NHỎ NƯỚC MUỐI SINH LÝ",
        desc: "Nhỏ liên tục dung dịch NaCl 0.9% hoặc úp mặt chớp mắt trong bát nước sạch để bụi trôi ra."
      },
      {
        num: "03",
        icon: "🏥",
        title: "ĐI KHÁM NẾU CÒN CỘM",
        desc: "Nếu sau 30 phút mắt vẫn cộm rát hoặc đỏ chảy nước mắt, cần đến khám bác sĩ chuyên khoa."
      }
    ],
    doList: [
      { icon: "🧴", text: "Nhỏ nhiều giọt nước muối sinh lý NaCl 0.9%" },
      { icon: "👁️", text: "Chớp mắt trong bát nước sạch để đẩy dị vật ra khóe mắt" },
      { icon: "🏥", text: "Đến khám bác sĩ mắt nếu cảm giác cộm xót kéo dài" }
    ],
    dontList: [
      { icon: "👁️", text: "Tuyệt đối không dùng tay hay góc khăn áo dụi mắt" },
      { icon: "🪝", text: "Không dùng tăm bông chọc ngoáy vào lòng đen" },
      { icon: "💨", text: "Không nhờ người khác thổi vào mắt kẻo lây vi khuẩn" }
    ]
  },

  "red-eye": {
    id: "red-eye",
    title: "Mắt đỏ + ghèn",
    leadHeading: "VỆ SINH NƯỚC MUỐI - DÙNG KHĂN RIÊNG",
    instruction: "Vệ sinh bằng nước muối sinh lý NaCl 0.9% - Khám chuyên khoa mắt!",
    image: eyeIllustrations.redEye,
    severity: "warning",
    badgeLabel: "CẦN ĐƯỢC KHÁM",
    audioScript: "Hướng dẫn khi bị mắt đỏ có ghèn: Nhỏ nước muối sinh lý thường xuyên. Dùng khăn mặt riêng và rửa tay sạch sẽ. Đi khám bác sĩ mắt để được kê đơn thuốc nhỏ phù hợp.",
    steps: [
      {
        num: "01",
        icon: "🧴",
        title: "VỆ SINH NƯỚC MUỐI",
        desc: "Nhỏ nước muối NaCl 0.9% từ 4-6 lần/ngày để rửa sạch ghèn mắt ứ đọng."
      },
      {
        num: "02",
        icon: "🧼",
        title: "DÙNG ĐỒ DÙNG RIÊNG",
        desc: "Dùng khăn mặt riêng, giặt sạch phơi nắng để tránh lây nhiễm cho người thân."
      },
      {
        num: "03",
        icon: "🏥",
        title: "ĐI KHÁM BÁC SĨ MẮT",
        desc: "Bác sĩ nhãn khoa VISI sẽ kê đơn kháng khuẩn phù hợp đúng nguyên nhân."
      }
    ],
    doList: [
      { icon: "🧴", text: "Nhỏ nước muối sinh lý NaCl 0.9% đều đặn" },
      { icon: "🧼", text: "Rửa tay sạch trước và sau khi chạm vùng mắt" },
      { icon: "🏥", text: "Khám chuyên khoa mắt nếu sau 2 ngày không thuyên giảm" }
    ],
    dontList: [
      { icon: "👁️", text: "Không dùng chung khăn mặt, gối với người khác" },
      { icon: "💊", text: "Không tự ý mua thuốc nhỏ chứa corticoid/dexamethasone" },
      { icon: "🌿", text: "Không đắp lá trầu hay xông hơi lá vào mắt" }
    ]
  },

  "blurry-vision": {
    id: "blurry-vision",
    title: "Nhìn mờ đột ngột",
    leadHeading: "NGỪNG LÀM VIỆC - ĐI KHÁM CHUYÊN SÂU",
    instruction: "Ngừng ngay các hoạt động nguy hiểm - Khám chuyên sâu đáy mắt!",
    image: eyeIllustrations.blurryVision,
    severity: "warning",
    badgeLabel: "CẦN ĐƯỢC KHÁM",
    audioScript: "Hướng dẫn khi nhìn mờ: Ngừng lái xe hoặc làm việc nặng. Ngồi nghỉ ngơi và theo dõi xem có đau nhức đầu hay quầng hào quang không. Hãy đến bệnh viện mắt kiểm tra nhãn áp và đáy mắt.",
    steps: [
      {
        num: "01",
        icon: "🛑",
        title: "NGỪNG LÀM VIỆC / LÁI XE",
        desc: "Ngồi nghỉ ở nơi an toàn, không cố gắng điều khiển xe khi thị lực suy giảm."
      },
      {
        num: "02",
        icon: "⚠️",
        title: "THEO DÕI TRIỆU CHỨNG",
        desc: "Nếu kèm đau nhức nửa đầu dữ dội, cảnh giác cơn glôcôm cấp cần hạ nhãn áp."
      },
      {
        num: "03",
        icon: "🏥",
        title: "ĐẾN BỆNH VIỆN MẮT",
        desc: "Khám soi đáy mắt và đo thị trường để bảo tồn thị giác kịp thời."
      }
    ],
    doList: [
      { icon: "🧴", text: "Nghỉ ngơi, nhờ người nhà đưa đi khám mắt" },
      { icon: "📋", text: "Mang theo đơn thuốc huyết áp, tiểu đường nếu có" },
      { icon: "🏥", text: "Đo nhãn áp và kiểm tra thị lực tại bệnh viện" }
    ],
    dontList: [
      { icon: "🚗", text: "Không tự lái xe khi mắt đang nhìn mờ" },
      { icon: "💊", text: "Không tự mua thuốc nhỏ giãn đồng tử" },
      { icon: "👁️", text: "Không xoa bóp hoặc day mạnh nhãn cầu" }
    ]
  },

  "dry-fatigue": {
    id: "dry-fatigue",
    title: "Mắt khô / mỏi",
    leadHeading: "CHĂM SÓC MẮT TẠI NHÀ & NGHỈ NGƠI",
    instruction: "Cho mắt nghỉ theo quy tắc 20-20-20 và nhỏ nước mắt nhân tạo!",
    image: eyeIllustrations.dryFatigueEye,
    severity: "safe",
    badgeLabel: "CHĂM SÓC THÔNG THƯỜNG",
    audioScript: "Hướng dẫn chăm sóc mắt khô và mỏi mắt: Cho mắt nghỉ ngơi theo quy tắc 20-20-20. Nhỏ nước mắt nhân tạo và chườm ấm mi mắt 5 đến 10 phút vào buổi tối.",
    steps: [
      {
        num: "01",
        icon: "⏱️",
        title: "QUY TẮC 20-20-20",
        desc: "Cứ 20 phút nhìn màn hình, nhìn xa 6 mét trong vòng 20 giây."
      },
      {
        num: "02",
        icon: "🧴",
        title: "NHỎ NƯỚC MẮT NHÂN TẠO",
        desc: "Bổ sung độ ẩm cho màng phim nước mắt bằng dung dịch nhỏ không chất bảo quản."
      },
      {
        num: "03",
        icon: "☕",
        title: "CHƯỜM ẤM MI MẮT",
        desc: "Chườm ấm nhẹ nhàng 5-10 phút giúp thông tuyến dầu meibomius trên mí."
      }
    ],
    doList: [
      { icon: "🧴", text: "Nhỏ nước mắt nhân tạo 3-4 lần mỗi ngày" },
      { icon: "👁️", text: "Chớp mắt thường xuyên khi sử dụng máy tính, điện thoại" },
      { icon: "💤", text: "Ngủ đủ giấc và uống đủ nước mỗi ngày" }
    ],
    dontList: [
      { icon: "💻", text: "Không nhìn màn hình liên tục nhiều giờ trong phòng tối" },
      { icon: "👁️", text: "Không dụi mắt mạnh khi thấy cộm rát" },
      { icon: "💨", text: "Không ngồi đối diện luồng gió điều hòa thổi thẳng vào mặt" }
    ]
  }
};

export const firstAidList = [
  {
    id: "blunt-trauma",
    title: "Mắt bị va đập",
    icon: "⚽",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    brief: "Bóng đập, ngã đập mặt, va chạm mạnh",
    action: "Chườm lạnh nhẹ, không dụi mắt",
    image: eyeIllustrations.bluntTrauma
  },
  {
    id: "foreign-object",
    title: "Dị vật vào mắt",
    icon: "🪵",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    brief: "Mạt sắt, mảnh kính, dằm găm sâu",
    action: "Không tự rút dị vật ra ngoài",
    image: eyeIllustrations.foreignObject
  },
  {
    id: "dust-in-eye",
    title: "Bụi vào mắt",
    icon: "💨",
    severity: "warning",
    badgeText: "Cần được khám",
    brief: "Cát bụi đường sá, hạt mạt bay vào mắt gây cộm xót",
    action: "Không dụi mắt, nhỏ nhiều nước muối sinh lý",
    image: eyeIllustrations.foreignObject
  },
  {
    id: "chemical-splash",
    title: "Hóa chất vào mắt",
    icon: "🧪",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    brief: "Xà phòng, nước tẩy, axit, vôi bột",
    action: "Xối nước rửa liên tục 15-20 phút",
    image: eyeIllustrations.chemicalSplash
  },
  {
    id: "fishhook",
    title: "Móc câu vào mắt",
    icon: "🪝",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    brief: "Lưỡi câu cá có ngạnh sắc nhọn",
    action: "Cắt dây cước, không giật móc",
    image: eyeIllustrations.fishhook
  },
  {
    id: "eye-burn",
    title: "Bỏng mắt (Nhiệt / Hàn)",
    icon: "🔥",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    brief: "Hàn điện, tia lửa, dầu ăn sôi",
    action: "Làm mát bằng nước sạch ngay",
    image: eyeIllustrations.eyeBurn
  },
  {
    id: "red-eye",
    title: "Mắt đỏ + ghèn",
    icon: "👁️",
    severity: "warning",
    badgeText: "Cần được khám",
    brief: "Viêm kết mạc, ghèn dính mí",
    action: "Vệ sinh nước muối, khăn riêng",
    image: eyeIllustrations.redEye
  }
];
