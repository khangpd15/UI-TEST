import { eyeIllustrations } from './eyeImages';

/**
 * Dataset Hệ thống Audio Hướng dẫn Y khoa REMiCare (Đồng bộ 21/09/2026)
 * - GROUP A: Bệnh lý mắt (Mã DIS-01 đến DIS-10, tách riêng DIS-08A, 08B, 08C) - Category: disease_info
 * - GROUP B: Cấp cứu chấn thương mắt (Mã EM-01 đến EM-06) - Category: emergency
 */

export const eyeDiseases = [
  // ==========================================
  // GROUP A: BỆNH LÝ MẮT (GIÁO DỤC NHẬN THỨC)
  // ==========================================
  {
    id: "DIS-01",
    audio_id: "DIS-01",
    title: "Cận thị",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.blurryVision,
    icon: "bi-eye",
    summary: "Mắt nhìn xa bị mờ trong khi nhìn gần rõ hơn; gặp khó khăn khi nhìn biển báo hoặc bảng từ xa.",
    description: "Cận thị là tình trạng mắt nhìn xa bị mờ, trong khi nhìn gần thường rõ hơn. Tình trạng này xảy ra khi ánh sáng hội tụ ở trước võng mạc, liên quan đến độ cong giác mạc hoặc chiều dài trục nhãn cầu, thường gặp ở lứa tuổi đi học và người làm việc nhìn gần nhiều.",
    keyPoints: [
      "Dấu hiệu thường gặp: Nhìn mờ ở khoảng cách xa, phải nheo mắt mới nhìn rõ",
      "Yếu tố nguy cơ: Làm việc nhìn gần liên tục, thiếu ánh sáng tự nhiên và tiền sử gia đình",
      "Lời khuyên: Khám đo thị lực khúc xạ định kỳ và áp dụng quy tắc nghỉ ngơi cho mắt"
    ],
    script: "Cận thị là tình trạng mắt nhìn xa bị mờ, trong khi nhìn gần thường rõ hơn. Bạn có thể gặp khó khăn khi nhìn bảng, biển báo hoặc các vật ở xa. Tình trạng này xảy ra khi ánh sáng hội tụ ở trước võng mạc, có thể liên quan đến hình dạng giác mạc hoặc chiều dài nhãn cầu. Cận thị thường gặp ở học sinh, sinh viên. Những người làm việc nhiều với màn hình hoặc có tiền sử gia đình bị cận thị cũng có nguy cơ cao hơn. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Cận thị là tình trạng mắt nhìn xa bị mờ, trong khi nhìn gần thường rõ hơn. Bạn có thể gặp khó khăn khi nhìn bảng, biển báo hoặc các vật ở xa. Tình trạng này xảy ra khi ánh sáng hội tụ ở trước võng mạc, có thể liên quan đến hình dạng giác mạc hoặc chiều dài nhãn cầu. Cận thị thường gặp ở học sinh, sinh viên. Những người làm việc nhiều với màn hình hoặc có tiền sử gia đình bị cận thị cũng có nguy cơ cao hơn. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-45 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["cận thị", "nhìn xa mờ", "tật khúc xạ", "mờ mắt", "nheo mắt", "DIS-01"]
  },

  {
    id: "DIS-02",
    audio_id: "DIS-02",
    title: "Viễn thị",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.blurryVision,
    icon: "bi-eye",
    summary: "Mắt khó tập trung vào các vật ở cự ly gần; dễ gây mỏi mắt hoặc nhức đầu khi đọc sách, dùng điện thoại.",
    description: "Viễn thị là tình trạng mắt khó tập trung vào các vật ở gần. Bạn thường phải cố gắng điều tiết mắt để nhìn rõ, dẫn đến nhức đầu sau khi tập trung làm việc nhìn gần.",
    keyPoints: [
      "Dấu hiệu thường gặp: Mỏi mắt, đau đầu sau khi đọc sách hoặc nhìn gần kéo dài",
      "Đặc điểm: Có thể xuất hiện từ nhỏ, yếu tố gia đình có thể đóng vai trò",
      "Lời khuyên: Thăm khám bác sĩ mắt để được đo khúc xạ điều tiết và tư vấn kính phù hợp"
    ],
    script: "Viễn thị là tình trạng mắt khó tập trung vào các vật ở gần. Bạn thường phải cố gắng điều tiết mắt để nhìn rõ. Các dấu hiệu thường gặp là nhìn mờ khi đọc sách, dùng điện thoại, mỏi mắt hoặc đau đầu sau khi nhìn gần lâu. Tình trạng này có thể gặp ở trẻ em và yếu tố gia đình có thể liên quan. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Viễn thị là tình trạng mắt khó tập trung vào các vật ở gần. Bạn thường phải cố gắng điều tiết mắt để nhìn rõ. Các dấu hiệu thường gặp là nhìn mờ khi đọc sách, dùng điện thoại, mỏi mắt hoặc đau đầu sau khi nhìn gần lâu. Tình trạng này có thể gặp ở trẻ em và yếu tố gia đình có thể liên quan. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-40 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["viễn thị", "nhìn gần mờ", "mỏi mắt", "đau đầu", "điều tiết", "DIS-02"]
  },

  {
    id: "DIS-03",
    audio_id: "DIS-03",
    title: "Loạn thị",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.blurryVision,
    icon: "bi-eye",
    summary: "Hình ảnh nhìn thấy bị nhòe hoặc méo mó cả ở khoảng cách xa lẫn gần; đường thẳng nhìn thành đường cong.",
    description: "Loạn thị làm cho hình ảnh bị méo mó, nhìn đêm bị lóa hoặc có bóng mờ xung quanh nguồn sáng do bề mặt giác mạc hoặc thủy tinh thể cong không đồng đều.",
    keyPoints: [
      "Dấu hiệu thường gặp: Hình ảnh nhòe, thấy bóng mờ hoặc quầng lóe sáng quanh đèn xe ban đêm",
      "Nguyên nhân: Độ cong giác mạc hoặc thể thủy tinh không đều, bẩm sinh hoặc sau chấn thương",
      "Lời khuyên: Khám chuyên khoa mắt đo độ loạn và kiểm tra bản đồ giác mạc"
    ],
    script: "Loạn thị làm cho hình ảnh nhìn thấy bị nhòe hoặc méo mó, bất kể ở xa hay gần. Bạn có thể thấy các đường thẳng bị cong, khó nhìn rõ vào ban đêm, hoặc thấy bóng mờ, lóe sáng quanh các nguồn sáng. Nguyên nhân thường do hình dạng giác mạc hoặc thủy tinh thể có độ cong không đều. Loạn thị có thể do bẩm sinh, xuất hiện sau chấn thương hoặc bệnh lý giác mạc. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Loạn thị làm cho hình ảnh nhìn thấy bị nhòe hoặc méo mó, bất kể ở xa hay gần. Bạn có thể thấy các đường thẳng bị cong, khó nhìn rõ vào ban đêm, hoặc thấy bóng mờ, lóe sáng quanh các nguồn sáng. Nguyên nhân thường do hình dạng giác mạc hoặc thủy tinh thể có độ cong không đều. Loạn thị có thể do bẩm sinh, xuất hiện sau chấn thương hoặc bệnh lý giác mạc. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-45 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["loạn thị", "nhòe hình", "méo hình", "lóe sáng", "bóng mờ", "DIS-03"]
  },

  {
    id: "DIS-04",
    audio_id: "DIS-04",
    title: "Lão thị",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.blurryVision,
    icon: "bi-eye",
    summary: "Mất dần khả năng nhìn gần do lão hóa tự nhiên, phải đưa sách báo hoặc điện thoại ra xa mới nhìn rõ.",
    description: "Lão thị xuất hiện từ tuổi trung niên do thủy tinh thể giảm tính đàn hồi, làm giảm khả năng điều tiết tiêu cự nhìn gần.",
    keyPoints: [
      "Dấu hiệu thường gặp: Khó đọc chữ nhỏ, phải đưa điện thoại ra xa mắt và cần nhiều ánh sáng hơn",
      "Bản chất: Quá trình lão hóa tự nhiên của thể thủy tinh, thường rõ rệt sau 40 tuổi",
      "Lời khuyên: Đo kính lão phù hợp để tránh mỏi mắt và đau đầu khi làm việc"
    ],
    script: "Lão thị là tình trạng mắt mất dần khả năng nhìn gần, đây là quá trình lão hóa tự nhiên thường bắt đầu rõ hơn từ tuổi trung niên. Bạn có thể thấy khó đọc chữ nhỏ, phải đưa sách báo hoặc điện thoại ra xa mới nhìn rõ, và cần nhiều ánh sáng hơn khi đọc. Điều này liên quan đến việc thủy tinh thể kém đàn hồi, làm giảm khả năng điều tiết của mắt. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Lão thị là tình trạng mắt mất dần khả năng nhìn gần, đây là quá trình lão hóa tự nhiên thường bắt đầu rõ hơn từ tuổi trung niên. Bạn có thể thấy khó đọc chữ nhỏ, phải đưa sách báo hoặc điện thoại ra xa mới nhìn rõ, và cần nhiều ánh sáng hơn khi đọc. Điều này liên quan đến việc thủy tinh thể kém đàn hồi, làm giảm khả năng điều tiết của mắt. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-45 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["lão thị", "khó nhìn gần", "tuổi trung niên", "kính lão", "chữ nhỏ", "DIS-04"]
  },

  {
    id: "DIS-05",
    audio_id: "DIS-05",
    title: "Đục thủy tinh thể",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.cloudyEye,
    icon: "bi-circle-half",
    summary: "Thấu kính tự nhiên trong mắt bị mờ đục; nhìn mờ như có màn sương che trước mắt, dễ chói mắt.",
    description: "Đục thủy tinh thể (cườm khô) làm giảm độ trong suốt của thấu kính mắt, gây nhìn mờ tăng dần, màu sắc bị nhạt vàng.",
    keyPoints: [
      "Dấu hiệu thường gặp: Nhìn như qua màn sương che, lóa mắt dưới ánh nắng, màu sắc nhạt dần",
      "Yếu tố nguy cơ: Tuổi trên 50, đái tháo đường, hút thuốc, dùng thuốc corticoid kéo dài",
      "Lời khuyên: Khám chuyên khoa mắt định kỳ để được chỉ định phẫu thuật Phaco khi cần"
    ],
    script: "Đục thủy tinh thể, hay cườm khô, là tình trạng thấu kính tự nhiên bên trong mắt bị mờ đục. Dấu hiệu thường gặp là nhìn mờ, cảm giác như có màn sương che trước mắt, màu sắc nhìn thấy bị nhạt hoặc vàng hơn, và hay bị chói mắt khi nhìn ánh đèn hoặc ánh nắng. Nguy cơ mắc bệnh tăng theo tuổi, thường gặp ở người trên 50 tuổi. Ngoài ra, bệnh cũng liên quan đến đái tháo đường, chấn thương mắt, việc dùng thuốc corticosteroid kéo dài hoặc hút thuốc lá. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Đục thủy tinh thể, hay cườm khô, là tình trạng thấu kính tự nhiên bên trong mắt bị mờ đục. Dấu hiệu thường gặp là nhìn mờ, cảm giác như có màn sương che trước mắt, màu sắc nhìn thấy bị nhạt hoặc vàng hơn, và hay bị chói mắt khi nhìn ánh đèn hoặc ánh nắng. Nguy cơ mắc bệnh tăng theo tuổi, thường gặp ở người trên 50 tuổi. Ngoài ra, bệnh cũng liên quan đến đái tháo đường, chấn thương mắt, việc dùng thuốc corticosteroid kéo dài hoặc hút thuốc lá. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "45-60 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["đục thủy tinh thể", "cườm khô", "màn sương", "chói mắt", "người cao tuổi", "DIS-05"]
  },

  {
    id: "DIS-06",
    audio_id: "DIS-06",
    title: "Glôcôm góc mở",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.blurryVision,
    icon: "bi-exclamation-octagon",
    summary: "Bệnh lý nguy hiểm gây tổn thương thần kinh thị giác; giai đoạn đầu tiến triển âm thầm, tầm nhìn hai bên thu hẹp dần.",
    description: "Glôcôm góc mở (cườm nước) là nguyên nhân gây mất thị lực không hồi phục hàng đầu nếu không phát hiện sớm do tăng áp lực nội nhãn làm teo dần dây thần kinh thị giác.",
    keyPoints: [
      "Dấu hiệu thường gặp: Giai đoạn đầu không có triệu chứng rõ ràng; khi tiến triển tầm nhìn chu biên bị thu hẹp",
      "Yếu tố nguy cơ: Tuổi cao, tiền sử gia đình có người mắc glôcôm, tăng nhãn áp",
      "Lời khuyên: Khám mắt và đo nhãn áp định kỳ hàng năm để phát hiện sớm và bảo tồn thị lực"
    ],
    script: "Glôcôm góc mở, hay cườm nước, là một bệnh lý nguy hiểm có thể gây tổn thương thần kinh thị giác. Giai đoạn đầu bệnh thường không có triệu chứng rõ ràng. Khi bệnh tiến triển, tầm nhìn hai bên có thể bị thu hẹp dần. Tuổi cao và tiền sử gia đình có người bị glôcôm là các yếu tố nguy cơ quan trọng. Vì bệnh diễn tiến âm thầm, việc khám mắt định kỳ là rất cần thiết để phát hiện sớm và bảo vệ thị lực. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Glôcôm góc mở, hay cườm nước, là một bệnh lý nguy hiểm có thể gây tổn thương thần kinh thị giác. Giai đoạn đầu bệnh thường không có triệu chứng rõ ràng. Khi bệnh tiến triển, tầm nhìn hai bên có thể bị thu hẹp dần. Tuổi cao và tiền sử gia đình có người bị glôcôm là các yếu tố nguy cơ quan trọng. Vì bệnh diễn tiến âm thầm, việc khám mắt định kỳ là rất cần thiết để phát hiện sớm và bảo vệ thị lực. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "40-55 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["glôcôm", "cườm nước", "nhãn áp", "thu hẹp tầm nhìn", "thần kinh thị giác", "DIS-06"]
  },

  {
    id: "DIS-07",
    audio_id: "DIS-07",
    title: "Khô mắt",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.dryFatigueEye,
    icon: "bi-droplet-slash",
    summary: "Màng phim nước mắt mất ổn định; mắt cảm giác cộm xốn, rát bỏng, đôi khi chảy nước mắt phản xạ bất thường.",
    description: "Khô mắt xảy ra khi mắt không tiết đủ nước mắt hoặc nước mắt bốc hơi quá nhanh, phổ biến ở người dùng máy tính nhiều hoặc trong phòng máy lạnh.",
    keyPoints: [
      "Dấu hiệu thường gặp: Cộm rát, cảm giác như có hạt cát trong mắt, đỏ mắt hoặc chảy nước mắt bất thường",
      "Yếu tố kích hoạt: Làm việc nhiều với màn hình, phòng điều hòa khô gió, người lớn tuổi",
      "Lời khuyên: Nhỏ nước mắt nhân tạo không chất bảo quản và chớp mắt đều đặn"
    ],
    script: "Khô mắt xảy ra khi màng phim nước mắt hoạt động không ổn định, có thể do mắt tiết không đủ nước mắt hoặc nước mắt bốc hơi quá nhanh. Bạn có thể cảm thấy cộm, xốn, rát, hoặc như có dị vật trong mắt, đôi khi kèm đỏ mắt hoặc chảy nước mắt bất thường. Tình trạng này dễ gặp hơn ở người lớn tuổi, người làm việc lâu với máy tính, hoặc trong môi trường điều hòa, gió khô. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Khô mắt xảy ra khi màng phim nước mắt hoạt động không ổn định, có thể do mắt tiết không đủ nước mắt hoặc nước mắt bốc hơi quá nhanh. Bạn có thể cảm thấy cộm, xốn, rát, hoặc như có dị vật trong mắt, đôi khi kèm đỏ mắt hoặc chảy nước mắt bất thường. Tình trạng này dễ gặp hơn ở người lớn tuổi, người làm việc lâu với máy tính, hoặc trong môi trường điều hòa, gió khô. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-45 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["khô mắt", "mỏi mắt", "cộm rát", "nước mắt nhân tạo", "chảy nước mắt", "DIS-07"]
  },

  {
    id: "DIS-08A",
    audio_id: "DIS-08A",
    title: "Viêm kết mạc do vi khuẩn",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.redEye,
    icon: "bi-bug-fill",
    summary: "Đau mắt đỏ có ghèn mủ nhiều; buổi sáng thức giấc mi mắt bị dính chặt khó mở, dễ lây nhiễm qua tiếp xúc.",
    description: "Viêm kết mạc do vi khuẩn đặc trưng bởi dịch tiết ghèn màu vàng xanh, dính mi mắt khi ngủ dậy, lây lan gián tiếp qua đồ dùng chung.",
    keyPoints: [
      "Dấu hiệu thường gặp: Mắt nhiều ghèn đặc màu vàng đục, mi mắt dính chặt vào buổi sáng",
      "Đường lây: Tiếp xúc trực tiếp hoặc dùng chung khăn mặt, gối với người bệnh",
      "Lời khuyên: Vệ sinh bằng nước muối sinh lý, dùng khăn riêng và đi khám bác sĩ để được kê đơn kháng sinh phù hợp"
    ],
    script: "Viêm kết mạc hay đau mắt đỏ có thể do nhiều nguyên nhân. Nếu nguyên nhân do vi khuẩn, dấu hiệu thường gặp là mắt có nhiều ghèn, vào buổi sáng thức giấc mi mắt có thể bị dính lại xốn khó mở mắt. Bệnh có thể lây lan khi tiếp xúc trực tiếp hoặc gián tiếp với dịch tiết từ mắt người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Viêm kết mạc hay đau mắt đỏ có thể do nhiều nguyên nhân. Nếu nguyên nhân do vi khuẩn, dấu hiệu thường gặp là mắt có nhiều ghèn, vào buổi sáng thức giấc mi mắt có thể bị dính lại xốn khó mở mắt. Bệnh có thể lây lan khi tiếp xúc trực tiếp hoặc gián tiếp với dịch tiết từ mắt người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-40 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["viêm kết mạc do vi khuẩn", "ghèn mắt", "dính mi", "đau mắt đỏ", "DIS-08A"]
  },

  {
    id: "DIS-08B",
    audio_id: "DIS-08B",
    title: "Viêm kết mạc do virus",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.redEye,
    icon: "bi-shield-virus",
    summary: "Đau mắt đỏ lây lan thành dịch rất nhanh; mắt đỏ nhiều, chảy nước mắt trong, có thể sưng húp hoặc nổi hạch trước tai.",
    description: "Viêm kết mạc do virus thường ảnh hưởng cả hai mắt, dễ bùng phát thành dịch trong cộng đồng qua đường hô hấp và tiếp xúc dịch tiết.",
    keyPoints: [
      "Dấu hiệu thường gặp: Mắt đỏ rực, chảy nhiều nước mắt trong, cảm giác cộm xốn, có thể kèm sốt nhẹ hoặc hạch trước tai",
      "Đường lây: Lây lan rất nhanh qua đường hô hấp hoặc giọt bắn dịch tiết",
      "Lời khuyên: Cách ly khăn mặt, rửa tay thường xuyên và khám bác sĩ mắt để tránh biến chứng viêm giác mạc"
    ],
    script: "Viêm kết mạc, hay đau mắt đỏ, cũng thường do virus gây ra với các dấu hiệu như mắt đỏ nhiều, chảy nước mắt, sưng, và cảm giác có dị vật trong mắt. Bệnh thường ảnh hưởng cả hai mắt, có thể kèm theo hạch ở tai hoặc các triệu chứng giống cảm cúm. Loại viêm kết mạc này rất dễ lây lan qua đường hô hấp hoặc tiếp xúc với dịch tiết của người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Viêm kết mạc, hay đau mắt đỏ, cũng thường do virus gây ra với các dấu hiệu như mắt đỏ nhiều, chảy nước mắt, sưng, và cảm giác có dị vật trong mắt. Bệnh thường ảnh hưởng cả hai mắt, có thể kèm theo hạch ở tai hoặc các triệu chứng giống cảm cúm. Loại viêm kết mạc này rất dễ lây lan qua đường hô hấp hoặc tiếp xúc với dịch tiết của người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "40-50 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["viêm kết mạc do virus", "đau mắt đỏ", "chảy nước mắt", "hạch tai", "lây lan", "DIS-08B"]
  },

  {
    id: "DIS-08C",
    audio_id: "DIS-08C",
    title: "Viêm kết mạc do dị ứng",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.redEye,
    icon: "bi-flower1",
    summary: "Ngứa mắt dữ dội, chảy nước mắt và tái phát theo mùa hoặc thời tiết; không lây lan sang người khác.",
    description: "Viêm kết mạc dị ứng xảy ra do phản ứng quá mẫn của cơ thể với phấn hoa, lông thú, bụi nhà. Triệu chứng nổi bật nhất là ngứa dữ dội.",
    keyPoints: [
      "Dấu hiệu thường gặp: Ngứa mắt dữ dội, chảy nước mắt, tái phát nhiều đợt",
      "Đặc tính quan trọng: Tuyệt đối không lây nhiễm sang người khác",
      "Lời khuyên: Tránh tiếp xúc dị nguyên, chườm lạnh giảm ngứa và không dụi tay lên mắt"
    ],
    script: "Một loại đau mắt đỏ khác là viêm kết mạc do dị ứng. Dấu hiệu điển hình là ngứa mắt rất nhiều, chảy nước mắt và tình trạng này thường tái phát thường xuyên, có thể liên quan đến thời tiết hoặc môi trường. Khác với các loại khác, viêm kết mạc do dị ứng không lây lan và thường gặp ở những người có cơ địa dị ứng. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Một loại đau mắt đỏ khác là viêm kết mạc do dị ứng. Dấu hiệu điển hình là ngứa mắt rất nhiều, chảy nước mắt và tình trạng này thường tái phát thường xuyên, có thể liên quan đến thời tiết hoặc môi trường. Khác với các loại khác, viêm kết mạc do dị ứng không lây lan và thường gặp ở những người có cơ địa dị ứng. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "30-45 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["viêm kết mạc dị ứng", "ngứa mắt", "dị ứng", "không lây", "DIS-08C"]
  },

  {
    id: "DIS-09",
    audio_id: "DIS-09",
    title: "Võng mạc đái tháo đường",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.bluntTrauma,
    icon: "bi-activity",
    summary: "Biến chứng vi mạch nguy hiểm do đường huyết cao kéo dài; nhìn hình bị méo, thấy chấm đen hoặc mạng nhện bay.",
    description: "Bệnh võng mạc đái tháo đường là biến chứng ở đáy mắt do đường huyết cao làm tổn thương thành mạch máu võng mạc, gây xuất huyết và giảm thị lực.",
    keyPoints: [
      "Dấu hiệu thường gặp: Thấy đốm đen lơ lửng, mạng nhện, hình ảnh bị méo hoặc giảm thị lực",
      "Đối tượng: Người mắc bệnh đái tháo đường kéo dài",
      "Lời khuyên: Kiểm soát tốt đường huyết và bắt buộc soi đáy mắt định kỳ 6-12 tháng một lần"
    ],
    script: "Võng mạc đái tháo đường là biến chứng nguy hiểm ở mắt do bệnh đái tháo đường gây ra. Lượng đường huyết cao kéo dài có thể làm tổn thương các mạch máu nhỏ nuôi võng mạc. Giai đoạn đầu bệnh thường chưa có triệu chứng rõ rệt. Khi tiến triển, bạn có thể thấy nhìn mờ, nhìn hình bị méo, xuất hiện chấm đen, mạng nhện hoặc giảm thị lực đột ngột nếu có xuất huyết võng mạc. Người mắc đái tháo đường cần được kiểm tra mắt định kỳ để phát hiện sớm biến chứng này. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Võng mạc đái tháo đường là biến chứng nguy hiểm ở mắt do bệnh đái tháo đường gây ra. Lượng đường huyết cao kéo dài có thể làm tổn thương các mạch máu nhỏ nuôi võng mạc. Giai đoạn đầu bệnh thường chưa có triệu chứng rõ rệt. Khi tiến triển, bạn có thể thấy nhìn mờ, nhìn hình bị méo, xuất hiện chấm đen, mạng nhện hoặc giảm thị lực đột ngột nếu có xuất huyết võng mạc. Người mắc đái tháo đường cần được kiểm tra mắt định kỳ để phát hiện sớm biến chứng này. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "50-60 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["võng mạc đái tháo đường", "tiểu đường", "chấm đen", "mạng nhện", "mờ mắt", "DIS-09"]
  },

  {
    id: "DIS-10",
    audio_id: "DIS-10",
    title: "Thoái hóa hoàng điểm tuổi già (AMD)",
    category: "disease_info",
    categoryLabel: "Bệnh lý mắt",
    priority: "low",
    priorityLabel: "Thông tin",
    image: eyeIllustrations.blurryVision,
    icon: "bi-eye",
    summary: "Lão hóa võng mạc vùng trung tâm; chữ ở giữa bị mờ, đường thẳng nhìn thành cong lượn sóng, khó nhận diện khuôn mặt.",
    description: "Thoái hóa hoàng điểm người cao tuổi (AMD) ảnh hưởng trực tiếp đến thị lực trung tâm sắc nét, trong khi thị trường chu biên vẫn duy trì.",
    keyPoints: [
      "Dấu hiệu thường gặp: Vùng trung tâm tầm nhìn bị mờ hoặc tối đen, nhìn đường thẳng thành lượn sóng",
      "Yếu tố nguy cơ: Tuổi tác cao, hút thuốc lá, tiền sử gia đình",
      "Lời khuyên: Đến viện kiểm tra hoàng điểm bằng máy chụp cắt lớp quang học OCT"
    ],
    script: "Thoái hóa hoàng điểm tuổi già, hay AMD, là bệnh lý lão hóa võng mạc ảnh hưởng đến vùng trung tâm của tầm nhìn. Bệnh có thể làm giảm thị lực trung tâm, khiến chữ ở giữa bị mờ, đường thẳng nhìn thành đường cong hoặc lượn sóng. Bạn có thể thấy khó nhận diện khuôn mặt, hoặc xuất hiện vùng tối, vùng trống ở trung tâm tầm nhìn. Tuổi cao là yếu tố nguy cơ quan trọng nhất của bệnh này. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    audioScript: "Thoái hóa hoàng điểm tuổi già, hay AMD, là bệnh lý lão hóa võng mạc ảnh hưởng đến vùng trung tâm của tầm nhìn. Bệnh có thể làm giảm thị lực trung tâm, khiến chữ ở giữa bị mờ, đường thẳng nhìn thành đường cong hoặc lượn sóng. Bạn có thể thấy khó nhận diện khuôn mặt, hoặc xuất hiện vùng tối, vùng trống ở trung tâm tầm nhìn. Tuổi cao là yếu tố nguy cơ quan trọng nhất của bệnh này. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Friendly",
    duration_target: "40-55 seconds",
    medical_review_required: true,
    disclaimer: "Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
    keywords: ["thoái hóa hoàng điểm", "AMD", "lượn sóng", "mất thị lực trung tâm", "người già", "DIS-10"]
  },

  // ==========================================
  // GROUP B: CẤP CỨU CHẤN THƯƠNG MẮT (SƠ CỨU)
  // ==========================================
  {
    id: "EM-01",
    audio_id: "EM-01",
    title: "Sơ cứu dị vật nhỏ vào mắt",
    category: "emergency",
    categoryLabel: "Cấp cứu mắt",
    priority: "high",
    priorityLabel: "Khẩn cấp",
    image: eyeIllustrations.foreignObject,
    icon: "bi-exclamation-triangle-fill",
    summary: "Bụi, cát hoặc hạt mạt nhỏ bay vào mắt gây cộm xót, cay rát và chảy nước mắt.",
    action: "Rửa mắt ngay bằng nước sạch hoặc nước muối sinh lý. Tuyệt đối không dụi mắt.",
    warning: "Không dụi mắt dưới bất kỳ hình thức nào. Không dùng kim, tăm hay dụng cụ gắp.",
    redFlags: "Sau khi rửa vẫn còn cảm giác cộm rát dữ dội, nhìn mờ, sợ ánh sáng hoặc trầy xước lòng đen.",
    script: "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
    audioScript: "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Clear",
    duration_target: "40-50 seconds",
    medical_review_required: true,
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
    keywords: ["bụi", "cát", "dị vật nhỏ", "cộm mắt", "xót mắt", "sơ cứu", "EM-01"]
  },

  {
    id: "EM-02",
    audio_id: "EM-02",
    title: "Sơ cứu dị vật nhọn / Vật cắm vào mắt",
    category: "emergency",
    categoryLabel: "Cấp cứu mắt",
    priority: "critical",
    priorityLabel: "Cực kỳ khẩn cấp",
    image: eyeIllustrations.foreignObject,
    icon: "bi-exclamation-octagon-fill",
    summary: "Mạt kim loại, mảnh kính vỡ, cành cây hoặc vật nhọn tốc độ cao đâm xuyên hoặc cắm vào nhãn cầu.",
    action: "Che chắn nhẹ nhàng bằng cốc giấy sạch hình vòm, không tạo áp lực. Đến viện mắt cấp cứu tức thì.",
    warning: "TUYỆT ĐỐI KHÔNG TỰ RÚT DỊ VẬT RA. Không kéo, không xoay, không ấn hoặc băng ép lên nhãn cầu.",
    redFlags: "Dị vật cắm sâu vào tròng đen hoặc tròng trắng, chảy máu, rỉ dịch trong suốt, biến dạng đồng tử.",
    script: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    audioScript: "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    language: "vi-VN",
    voice_style: "Natural, Urgent, Clear",
    duration_target: "45-55 seconds",
    medical_review_required: true,
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    keywords: ["dị vật nhọn", "mạt sắt", "mảnh kính", "cành cây", "vật cắm vào mắt", "xuyên thủng", "cấp cứu", "EM-02"]
  },

  {
    id: "EM-03",
    audio_id: "EM-03",
    title: "Sơ cứu hóa chất bắn vào mắt",
    category: "emergency",
    categoryLabel: "Cấp cứu mắt",
    priority: "critical",
    priorityLabel: "Cực kỳ khẩn cấp",
    image: eyeIllustrations.chemicalSplash,
    icon: "bi-radioactive",
    summary: "Hóa chất tẩy rửa, axit, kiềm, vôi bột, xà phòng bắn vào mắt gây bỏng rát dữ dội.",
    action: "RỬA MẮT NGAY LẬP TỨC dưới dòng nước sạch liên tục trong 15-20 phút. Vừa đi viện vừa tiếp tục rửa.",
    warning: "TUYỆT ĐỐI KHÔNG CHỜ ĐẾN BỆNH VIỆN MỚI RỬA. Không tìm chất trung hòa axit/kiềm, không dụi mắt.",
    redFlags: "Mắt đau rát dữ dội, giác mạc chuyển sang mờ đục, không thể mở mắt, suy giảm thị lực.",
    script: "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
    audioScript: "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
    language: "vi-VN",
    voice_style: "Natural, Urgent, Clear",
    duration_target: "45-60 seconds",
    medical_review_required: true,
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
    keywords: ["hóa chất", "axit", "bazo", "thuốc tẩy", "nước lau sàn", "vôi", "bỏng mắt", "rửa mắt", "EM-03"]
  },

  {
    id: "EM-04",
    audio_id: "EM-04",
    title: "Sơ cứu bỏng nhiệt ở mắt",
    category: "emergency",
    categoryLabel: "Cấp cứu mắt",
    priority: "high",
    priorityLabel: "Khẩn cấp",
    image: eyeIllustrations.eyeBurn,
    icon: "bi-fire",
    summary: "Bỏng mắt do nước sôi, dầu mỡ nóng khi nấu ăn hoặc tia lửa nhiệt tạt vào vùng mi mắt.",
    action: "Lập tức làm mát và rửa mắt bằng nước sạch. Đến ngay cơ sở y tế để bác sĩ đánh giá.",
    warning: "Không dụi mắt. Tuyệt đối không tự ý bôi mỡ trăn, lòng trắng trứng, kem đánh răng hay thuốc dân gian.",
    redFlags: "Bỏng rộp vùng mi, phù nề kết mạc, giác mạc mờ đục hoặc đau nhức không mở được mắt.",
    script: "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    audioScript: "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Clear",
    duration_target: "30-40 seconds",
    medical_review_required: true,
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    keywords: ["bỏng nhiệt", "nước sôi", "dầu mỡ nóng", "tia lửa", "làm mát", "EM-04"]
  },

  {
    id: "EM-05",
    audio_id: "EM-05",
    title: "Sơ cứu chấn thương do va đập vào mắt",
    category: "emergency",
    categoryLabel: "Cấp cứu mắt",
    priority: "high",
    priorityLabel: "Khẩn cấp",
    image: eyeIllustrations.bluntTrauma,
    icon: "bi-shield-exclamation",
    summary: "Chấn thương đụng dập do bị bóng đập vào, cú đấm, tai nạn ngã đập vùng xương hốc mắt.",
    action: "Nghỉ ngơi, chườm lạnh nhẹ quanh hốc mắt bằng khăn bọc đá. Hạn chế cử động mắt.",
    warning: "Không ấn hoặc tì đè vật nặng trực tiếp lên nhãn cầu. Không tự ý uống aspirin gây chảy máu thêm.",
    redFlags: "Giảm thị lực, nhìn đôi (song thị), thấy ngấn máu đỏ trong mắt, mắt lồi hoặc thụt bất thường.",
    script: "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    audioScript: "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Clear",
    duration_target: "45-55 seconds",
    medical_review_required: true,
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    keywords: ["va đập", "bóng đập", "bị đấm", "chấn thương", "bầm mắt", "xuất huyết", "chườm lạnh", "EM-05"]
  },

  {
    id: "EM-06",
    audio_id: "EM-06",
    title: "Tổn thương mắt do tia hàn / tia UV",
    category: "emergency",
    categoryLabel: "Cấp cứu mắt",
    priority: "medium",
    priorityLabel: "Cần lưu ý",
    image: eyeIllustrations.eyeBurn,
    icon: "bi-brightness-high",
    summary: "Đau rát, cộm buốt, sợ ánh sáng và chảy nước mắt xuất hiện sau vài giờ tiếp xúc hồ quang hàn hoặc đèn UV.",
    action: "Rời khỏi nguồn sáng, nghỉ ngơi phòng tối, chườm mát nhẹ nhàng và nhỏ nước mắt nhân tạo.",
    warning: "Không dụi mắt. TUYỆT ĐỐI KHÔNG TỰ DÙNG THUỐC TÊ NHỎ MẮT vì gây loét thủng giác mạc không hồi phục.",
    redFlags: "Đau buốt nhức mắt dữ dội không thuyên giảm sau 12-24 giờ, giảm thị lực, có mủ.",
    script: "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    audioScript: "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    language: "vi-VN",
    voice_style: "Natural, Calm, Clear",
    duration_target: "45-60 seconds",
    medical_review_required: true,
    disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
    keywords: ["tia hàn", "bỏng hàn", "hồ quang", "tia cực tím", "tia uv", "chói mắt", "thuốc tê", "EM-06"]
  }
];

// Helper lọc theo category
export const getDiseasesOnly = () => eyeDiseases.filter(item => item.category === 'disease_info');
export const getEmergenciesOnly = () => eyeDiseases.filter(item => item.category === 'emergency');
