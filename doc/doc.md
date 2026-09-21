# BÁO CÁO TOÀN DIỆN VÀ TÀI LIỆU KỸ THUẬT: HỆ THỐNG AUDIO HƯỚNG DẪN Y KHOA REMICARE

> **Dự án:** REMiCare – Ứng dụng Hỗ trợ Sơ cứu & Chăm sóc Mắt khẩn cấp  
> **Tài liệu tham chiếu:** Nghiên cứu y khoa chuyên sâu "Bệnh lý mắt & Cấp cứu chấn thương mắt"  
> **Phiên bản tài liệu:** 2.0 (Cập nhật chuẩn hóa TTS & Phê duyệt Y khoa)  
> **Ngày cập nhật:** 21/09/2026  
> **Trạng thái:** Hoàn tất rà soát kịch bản – Sẵn sàng trình Hội đồng Y khoa kiểm duyệt

---

## MỤC TIÊU VÀ TẦM QUAN TRỌNG CỦA HỆ THỐNG AUDIO

Trong các sự cố tổn thương mắt hoặc bệnh lý nhãn khoa cấp tính, **người bệnh thường rơi vào trạng thái suy giảm thị lực đột ngột**: mắt bị chói lóa, nhắm nghiền do kích ứng, đau rát dữ dội, cộm xót, chảy nước mắt giàn giụa, hoặc bị băng che mắt tạm thời. Trong những giây phút "thời gian vàng" này, **người bệnh hoặc người hỗ trợ sơ cứu hầu như không thể đọc được các đoạn văn bản dài hay hướng dẫn chi tiết trên màn hình điện thoại/máy tính**.

Vì vậy, hệ thống **Audio Hướng Dẫn Giọng Nói (Text-to-Speech / Audio Guide)** của REMiCare đóng vai trò là kênh giao tiếp cứu cánh then chốt:
1. **Truyền đạt tức thời, rõ ràng:** Cung cấp hành động sinh tồn tức thì trong 5–10 giây đầu tiên nhằm bảo tồn thị lực tối đa.
2. **Loại bỏ văn phong học thuật, rào cản từ ngữ:** Dùng ngôn ngữ nói đời thường, câu văn chủ vị ngắn gọn, dễ tiếp thu ngay cả khi nạn nhân đang hoảng loạn.
3. **Tuyệt đối an toàn về mặt y khoa:** Tuân thủ nguyên tắc không chẩn đoán thay bác sĩ, loại bỏ các ngộ nhận dân gian nguy hại, và phân định rõ ranh giới sơ cứu ban đầu so với điều trị chuyên sâu.

---

## NGUYÊN TẮC THIẾT KẾ KỊCH BẢN GIỌNG ĐỌC (TTS GUIDELINES)

```
                       ┌──────────────────────────────────────────────┐
                       │      HƯỚNG DẪN ÂM THANH Y KHOA REMICARE      │
                       └──────────────────────┬───────────────────────┘
                                              │
                    ┌─────────────────────────┴─────────────────────────┐
                    ▼                                                   ▼
       ┌──────────────────────────┐                       ┌──────────────────────────┐
       │   GROUP A: BỆNH LÝ MẮT   │                       │    GROUP B: CẤP CỨU      │
       │    (Giáo dục nhận thức)   │                       │    (Sơ cứu khẩn cấp)     │
       └────────────┬─────────────┘                       └────────────┬─────────────┘
                    │                                                  │
         [Mô tả triệu chứng]                                    [1. LÀM GÌ NGAY?]
                    │                                                  │
         [Nguyên nhân phổ biến]                                 [2. KHÔNG ĐƯỢC LÀM GÌ?]
                    │                                                  │
         [Yếu tố nguy cơ & Tuổi]                                [3. KHI NÀO CẤP CỨU?]
                    │                                                  │
         [Disclaimer Giáo dục]                                  [Disclaimer Cấp cứu]
```

### 1. Cấu trúc 3 bước vàng cho Cấp cứu (Group B)
Mọi audio cấp cứu đều bắt buộc tuân theo thứ tự ưu tiên nhận thức:
- **Bước 1: LÀM GÌ NGAY? (Hành động phản xạ đầu tiên):** Hướng dẫn ngay hành động đúng (ví dụ: rửa nước liên tục, che mắt, chườm lạnh nhẹ quanh hốc mắt).
- **Bước 2: KHÔNG ĐƯỢC LÀM GÌ? (Loại bỏ hành vi gây hại):** Nghiêm cấm các thói quen sai lầm nguy hiểm (không day dụi mắt, không tự rút dị vật, không tự nhỏ thuốc tê, không đắp lá/nha đam/mỡ trăn).
- **Bước 3: KHI NÀO CẦN ĐI CẤP CỨU? (Dấu hiệu cảnh báo đỏ):** Liệt kê rõ các triệu chứng cần nhập viện mắt ngay lập tức.

### 2. Chuẩn mực cho Nhóm Bệnh lý Giáo dục (Group A)
- **Tập trung vào dấu hiệu nhận biết:** Giúp người dùng hiểu triệu chứng mình đang trải qua thuộc nhóm biểu hiện nào để chủ động đi khám chuyên khoa.
- **Xóa bỏ giọng điệu phán quyết/chẩn đoán:** Thay vì khẳng định *"Nếu bạn có triệu chứng A tức là bạn đã bị bệnh B"*, chuyển sang *"Đây có thể là dấu hiệu thường gặp của... Bạn nên đến gặp bác sĩ để được kiểm tra chính xác"*.
- **Loại bỏ định kiến sai khoa học:** Ví dụ không khẳng định màn hình điện thoại là nguyên nhân duy nhất gây cận thị, mà mô tả đúng là do làm việc nhìn gần kéo dài kết hợp yếu tố di truyền.

### 3. Tuyên bố Miễn trừ Trách nhiệm Pháp lý chuẩn hóa
- **Cho Giáo dục Bệnh lý (Group A):**  
  > *"Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ."*
- **Cho Sơ cứu Cấp cứu (Group B):**  
  > *"Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm."* hoặc *"Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp."*

---

## PHẦN 1: TỔNG HỢP MA TRẬN HỆ THỐNG AUDIO ĐÃ CẤU TRÚC LẠI

### Bảng 1: Nhóm A — Audio Bệnh Lý Mắt (Mã DIS)

| Mã Audio | Tên Bệnh Lý | Thể Loại | Mức Ưu Tiên | Thời Lượng | Phong Cách Giọng Đọc | Mapping Codebase | Cần Duyệt Y Khoa |
|:---|:---|:---|:---:|:---:|:---|:---|:---:|
| **DIS-01** | Cận thị | `disease_info` | Thấp | 30–45s | Tự nhiên, Điềm tĩnh, Thân thiện | `knowledgeData.js` | Có (True) |
| **DIS-02** | Viễn thị | `disease_info` | Thấp | 30–40s | Tự nhiên, Điềm tĩnh, Thân thiện | `knowledgeData.js` | Có (True) |
| **DIS-03** | Loạn thị | `disease_info` | Thấp | 30–45s | Tự nhiên, Điềm tĩnh, Thân thiện | `knowledgeData.js` | Có (True) |
| **DIS-04** | Lão thị | `disease_info` | Thấp | 30–45s | Tự nhiên, Điềm tĩnh, Thân thiện | `knowledgeData.js` | Có (True) |
| **DIS-05** | Đục thủy tinh thể | `disease_info` | Thấp | 45–60s | Tự nhiên, Điềm tĩnh, Thân thiện | `cataract` | Có (True) |
| **DIS-06** | Glôcôm góc mở | `disease_info` | Thấp | 40–55s | Tự nhiên, Điềm tĩnh, Thân thiện | `glaucoma` | Có (True) |
| **DIS-07** | Khô mắt | `disease_info` | Thấp | 30–45s | Tự nhiên, Điềm tĩnh, Thân thiện | `dry-eye` | Có (True) |
| **DIS-08A**| Viêm kết mạc do vi khuẩn | `disease_info` | Thấp | 30–40s | Tự nhiên, Điềm tĩnh, Thân thiện | `red-eye-knowledge` | Có (True) |
| **DIS-08B**| Viêm kết mạc do virus | `disease_info` | Thấp | 40–50s | Tự nhiên, Điềm tĩnh, Thân thiện | `red-eye-knowledge` | Có (True) |
| **DIS-08C**| Viêm kết mạc do dị ứng | `disease_info` | Thấp | 30–45s | Tự nhiên, Điềm tĩnh, Thân thiện | `red-eye-knowledge` | Có (True) |
| **DIS-09** | Võng mạc đái tháo đường | `disease_info` | Thấp | 50–60s | Tự nhiên, Điềm tĩnh, Thân thiện | `retinopathy` | Có (True) |
| **DIS-10** | Thoái hóa hoàng điểm tuổi già (AMD) | `disease_info` | Thấp | 40–55s | Tự nhiên, Điềm tĩnh, Thân thiện | `knowledgeData.js` | Có (True) |

### Bảng 2: Nhóm B — Audio Cấp Cứu Chấn Thương Mắt (Mã EM)

| Mã Audio | Tình Huống Cấp Cứu | Thể Loại | Mức Ưu Tiên | Thời Lượng | Phong Cách Giọng Đọc | Mapping Codebase | Cần Duyệt Y Khoa |
|:---|:---|:---|:---:|:---:|:---|:---|:---:|
| **EM-01** | Sơ cứu dị vật nhỏ vào mắt | `emergency` | Cao | 40–50s | Tự nhiên, Bình tĩnh, Rõ ràng | `foreign-body-dust` | Có (True) |
| **EM-02** | Sơ cứu dị vật nhọn / Vật cắm vào mắt | `emergency` | **Cực kỳ khẩn cấp** | 45–55s | Tự nhiên, Khẩn trương, Quyết đoán | `foreign-object` | Có (True) |
| **EM-03** | Sơ cứu hóa chất bắn vào mắt | `emergency` | **Cực kỳ khẩn cấp (Cao nhất)** | 45–60s | Tự nhiên, Khẩn trương, Quyết đoán | `chemical-burn` | Có (True) |
| **EM-04** | Sơ cứu bỏng nhiệt ở mắt | `emergency` | Cao | 30–40s | Tự nhiên, Bình tĩnh, Rõ ràng | `thermal-burn` | Có (True) |
| **EM-05** | Sơ cứu chấn thương do va đập vào mắt | `emergency` | Cao | 45–55s | Tự nhiên, Bình tĩnh, Rõ ràng | `blunt-trauma` | Có (True) |
| **EM-06** | Tổn thương mắt do tia hàn / tia UV | `emergency` | Trung bình | 45–60s | Tự nhiên, Bình tĩnh, Rõ ràng | `WELDING_UV_EXPOSURE` | Có (True) |

---

## PHẦN 2: CHI TIẾT NỘI DUNG KỊCH BẢN AUDIO (SCRIPTS) KÈM PHÂN TÍCH CHUYÊN MÔN

---

### GROUP A — BỆNH LÝ MẮT (MÃ DIS)

#### 1. DIS-01: Cận thị

```json
{
  "audio_id": "DIS-01",
  "title": "Cận thị",
  "category": "disease_info",
  "priority": "low",
  "script": "Cận thị là tình trạng mắt nhìn xa bị mờ, trong khi nhìn gần thường rõ hơn. Bạn có thể gặp khó khăn khi nhìn bảng, biển báo hoặc các vật ở xa. Tình trạng này xảy ra khi ánh sáng hội tụ ở trước võng mạc, có thể liên quan đến hình dạng giác mạc hoặc chiều dài nhãn cầu. Cận thị thường gặp ở học sinh, sinh viên. Những người làm việc nhiều với màn hình hoặc có tiền sử gia đình bị cận thị cũng có nguy cơ cao hơn. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-45 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Thay đổi cốt lõi:* Đã lược bỏ nhận định quy kết tuyệt đối *"xem điện thoại gây ra cận thị"*. Theo nhãn khoa hiện đại, cận thị chịu tác động phức hợp của yếu tố di truyền (cha mẹ cận) và môi trường (thời gian làm việc nhìn gần kéo dài, thiếu thời gian hoạt động ngoài trời với ánh sáng tự nhiên).
  - *Cấu hình TTS khuyến nghị:* Speech rate: `1.0`, Pitch: `1.0`, ngắt nghỉ nhẹ 350ms giữa các câu.

---

#### 2. DIS-02: Viễn thị

```json
{
  "audio_id": "DIS-02",
  "title": "Viễn thị",
  "category": "disease_info",
  "priority": "low",
  "script": "Viễn thị là tình trạng mắt khó tập trung vào các vật ở gần. Bạn thường phải cố gắng điều tiết mắt để nhìn rõ. Các dấu hiệu thường gặp là nhìn mờ khi đọc sách, dùng điện thoại, mỏi mắt hoặc đau đầu sau khi nhìn gần lâu. Tình trạng này có thể gặp ở trẻ em và yếu tố gia đình có thể liên quan. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-40 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Thay đổi cốt lõi:* Làm rõ cơ chế "phải cố gắng điều tiết", giải thích lý do tại sao người bị viễn thị thường hay bị nhức đầu, mỏi mắt sau khi đọc sách hoặc nhìn màn hình gần.
  - *Tránh nhầm lẫn:* Tránh nhầm lẫn giữa Viễn thị (tật khúc xạ có thể gặp từ trẻ em) với Lão thị (suy giảm điều tiết do tuổi già).

---

#### 3. DIS-03: Loạn thị

```json
{
  "audio_id": "DIS-03",
  "title": "Loạn thị",
  "category": "disease_info",
  "priority": "low",
  "script": "Loạn thị làm cho hình ảnh nhìn thấy bị nhòe hoặc méo mó, bất kể ở xa hay gần. Bạn có thể thấy các đường thẳng bị cong, khó nhìn rõ vào ban đêm, hoặc thấy bóng mờ, lóe sáng quanh các nguồn sáng. Nguyên nhân thường do hình dạng giác mạc hoặc thủy tinh thể có độ cong không đều. Loạn thị có thể do bẩm sinh, xuất hiện sau chấn thương hoặc bệnh lý giác mạc. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-45 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Thay đổi cốt lõi:* Miêu tả trực quan *"hình ảnh bị méo mó, bất kể ở xa hay gần"* và hiện tượng *"lóe sáng quanh nguồn sáng khi lái xe ban đêm"*. Đây là dấu hiệu rất điển hình giúp người nghe nhận diện triệu chứng.

---

#### 4. DIS-04: Lão thị

```json
{
  "audio_id": "DIS-04",
  "title": "Lão thị",
  "category": "disease_info",
  "priority": "low",
  "script": "Lão thị là tình trạng mắt mất dần khả năng nhìn gần, đây là quá trình lão hóa tự nhiên thường bắt đầu rõ hơn từ tuổi trung niên. Bạn có thể thấy khó đọc chữ nhỏ, phải đưa sách báo hoặc điện thoại ra xa mới nhìn rõ, và cần nhiều ánh sáng hơn khi đọc. Điều này liên quan đến việc thủy tinh thể kém đàn hồi, làm giảm khả năng điều tiết của mắt. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-45 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Thay đổi cốt lõi:* Bỏ cách xưng hô dân dã *"ông bà cô chú"* để đảm bảo tính khách quan và chuẩn mực của hệ thống y tế trung tính; thay bằng *"bắt đầu rõ hơn từ tuổi trung niên (thường sau 40 tuổi)"*.
  - *Mô tả hành vi thực tế:* Thói quen *"phải đưa sách báo hoặc điện thoại ra xa mới nhìn rõ"* giúp người bệnh lập tức đồng cảm và nhận thức tình trạng.

---

#### 5. DIS-05: Đục thủy tinh thể (Cườm khô)

```json
{
  "audio_id": "DIS-05",
  "title": "Đục thủy tinh thể",
  "category": "disease_info",
  "priority": "low",
  "script": "Đục thủy tinh thể, hay cườm khô, là tình trạng thấu kính tự nhiên bên trong mắt bị mờ đục. Dấu hiệu thường gặp là nhìn mờ, cảm giác như có màn sương che trước mắt, màu sắc nhìn thấy bị nhạt hoặc vàng hơn, và hay bị chói mắt khi nhìn ánh đèn hoặc ánh nắng. Nguy cơ mắc bệnh tăng theo tuổi, thường gặp ở người trên 50 tuổi. Ngoài ra, bệnh cũng liên quan đến đái tháo đường, chấn thương mắt, việc dùng thuốc corticosteroid kéo dài hoặc hút thuốc lá. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "45-60 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Yếu tố nguy cơ quan trọng:* Bổ sung rõ cảnh báo về việc lạm dụng thuốc nhỏ mắt chứa corticosteroid kéo dài (rất phổ biến tại Việt Nam khi người dân tự mua thuốc nhỏ mắt ngoài tiệm thuốc tây dẫn đến đục thủy tinh thể sớm).

---

#### 6. DIS-06: Glôcôm góc mở (Cườm nước)

```json
{
  "audio_id": "DIS-06",
  "title": "Glôcôm góc mở",
  "category": "disease_info",
  "priority": "low",
  "script": "Glôcôm góc mở, hay cườm nước, là một bệnh lý nguy hiểm có thể gây tổn thương thần kinh thị giác. Giai đoạn đầu bệnh thường không có triệu chứng rõ ràng. Khi bệnh tiến triển, tầm nhìn hai bên có thể bị thu hẹp dần. Tuổi cao và tiền sử gia đình có người bị glôcôm là các yếu tố nguy cơ quan trọng. Vì bệnh diễn tiến âm thầm, việc khám mắt định kỳ là rất cần thiết để phát hiện sớm và bảo vệ thị lực. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "40-55 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Thay đổi cốt lõi:* Đã loại bỏ hoàn toàn câu tự chẩn đoán sai lệch *"bạn thấy quầng sáng là bạn bị cườm nước"*. Thay vào đó nhấn mạnh tính chất *"kẻ trộm thị lực thầm lặng"* – bệnh giai đoạn đầu không có triệu chứng đau nhức, đòi hỏi phải đo nhãn áp và soi đáy mắt định kỳ.

---

#### 7. DIS-07: Khô mắt

```json
{
  "audio_id": "DIS-07",
  "title": "Khô mắt",
  "category": "disease_info",
  "priority": "low",
  "script": "Khô mắt xảy ra khi màng phim nước mắt hoạt động không ổn định, có thể do mắt tiết không đủ nước mắt hoặc nước mắt bốc hơi quá nhanh. Bạn có thể cảm thấy cộm, xốn, rát, hoặc như có dị vật trong mắt, đôi khi kèm đỏ mắt hoặc chảy nước mắt bất thường. Tình trạng này dễ gặp hơn ở người lớn tuổi, người làm việc lâu với máy tính, hoặc trong môi trường điều hòa, gió khô. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-45 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - *Hiện tượng nghịch lý:* Nhắc đến triệu chứng *"chảy nước mắt bất thường"* (phản xạ tiết nước mắt bù trừ khi bề mặt giác mạc bị khô rát quá mức), giúp người dùng không băn khoăn vì sao mắt đang ướt mà lại được giải thích là khô mắt.

---

#### 8. Cụm DIS-08: Viêm kết mạc (Đau mắt đỏ) — Tách thành 3 kịch bản chuyên biệt

> [!IMPORTANT]
> **Quyết định Y khoa Chiến lược:** Viêm kết mạc có 3 nguyên nhân phổ biến với tính chất lây lan và cách xử trí hoàn toàn trái ngược nhau. Việc gộp chung vào 1 kịch bản sẽ gây nhầm lẫn nguy hiểm. Do đó, hệ thống đã chuẩn hóa tách thành 3 Audio độc lập: DIS-08A, DIS-08B, DIS-08C.

##### 8A. DIS-08A: Viêm kết mạc do vi khuẩn
```json
{
  "audio_id": "DIS-08A",
  "title": "Viêm kết mạc do vi khuẩn",
  "category": "disease_info",
  "priority": "low",
  "script": "Viêm kết mạc hay đau mắt đỏ có thể do nhiều nguyên nhân. Nếu nguyên nhân do vi khuẩn, dấu hiệu thường gặp là mắt có nhiều ghèn, vào buổi sáng thức giấc mi mắt có thể bị dính lại xốn khó mở mắt. Bệnh có thể lây lan khi tiếp xúc trực tiếp hoặc gián tiếp với dịch tiết từ mắt người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-40 seconds",
  "medical_review_required": true
}
```
*Đặc trưng:* Ghèn mủ vàng xanh, dính mi mắt buổi sáng, lây nhiễm qua tiếp xúc vật dụng.

##### 8B. DIS-08B: Viêm kết mạc do virus
```json
{
  "audio_id": "DIS-08B",
  "title": "Viêm kết mạc do virus",
  "category": "disease_info",
  "priority": "low",
  "script": "Viêm kết mạc, hay đau mắt đỏ, cũng thường do virus gây ra với các dấu hiệu như mắt đỏ nhiều, chảy nước mắt, sưng, và cảm giác có dị vật trong mắt. Bệnh thường ảnh hưởng cả hai mắt, có thể kèm theo hạch ở tai hoặc các triệu chứng giống cảm cúm. Loại viêm kết mạc này rất dễ lây lan qua đường hô hấp hoặc tiếp xúc với dịch tiết của người bệnh. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "40-50 seconds",
  "medical_review_required": true
}
```
*Đặc trưng:* Đỏ rực, nhiều nước mắt trong, có thể nổi hạch trước tai, lây bùng phát thành dịch trong cộng đồng.

##### 8C. DIS-08C: Viêm kết mạc do dị ứng
```json
{
  "audio_id": "DIS-08C",
  "title": "Viêm kết mạc do dị ứng",
  "category": "disease_info",
  "priority": "low",
  "script": "Một loại đau mắt đỏ khác là viêm kết mạc do dị ứng. Dấu hiệu điển hình là ngứa mắt rất nhiều, chảy nước mắt và tình trạng này thường tái phát thường xuyên, có thể liên quan đến thời tiết hoặc môi trường. Khác với các loại khác, viêm kết mạc do dị ứng không lây lan và thường gặp ở những người có cơ địa dị ứng. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "30-45 seconds",
  "medical_review_required": true
}
```
*Đặc trưng:* **Ngứa dữ dội**, tái phát theo mùa/bụi phấn hoa, **tuyệt đối không lây**.

---

#### 9. DIS-09: Võng mạc đái tháo đường

```json
{
  "audio_id": "DIS-09",
  "title": "Võng mạc đái tháo đường",
  "category": "disease_info",
  "priority": "low",
  "script": "Võng mạc đái tháo đường là biến chứng nguy hiểm ở mắt do bệnh đái tháo đường gây ra. Lượng đường huyết cao kéo dài có thể làm tổn thương các mạch máu nhỏ nuôi võng mạc. Giai đoạn đầu bệnh thường chưa có triệu chứng rõ rệt. Khi tiến triển, bạn có thể thấy nhìn mờ, nhìn hình bị méo, xuất hiện chấm đen, mạng nhện hoặc giảm thị lực đột ngột nếu có xuất huyết võng mạc. Người mắc đái tháo đường cần được kiểm tra mắt định kỳ để phát hiện sớm biến chứng này. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "50-60 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - Nhấn mạnh nguy cơ xuất huyết dịch kính/bong võng mạc (biểu hiện qua chấm đen, mạng nhện bay trước mắt) nhằm cảnh báo bệnh nhân tiểu đường đi khám đáy mắt định kỳ ít nhất 1 lần/năm.

---

#### 10. DIS-10: Thoái hóa hoàng điểm tuổi già (AMD)

```json
{
  "audio_id": "DIS-10",
  "title": "Thoái hóa hoàng điểm tuổi già (AMD)",
  "category": "disease_info",
  "priority": "low",
  "script": "Thoái hóa hoàng điểm tuổi già, hay AMD, là bệnh lý lão hóa võng mạc ảnh hưởng đến vùng trung tâm của tầm nhìn. Bệnh có thể làm giảm thị lực trung tâm, khiến chữ ở giữa bị mờ, đường thẳng nhìn thành đường cong hoặc lượn sóng. Bạn có thể thấy khó nhận diện khuôn mặt, hoặc xuất hiện vùng tối, vùng trống ở trung tâm tầm nhìn. Tuổi cao là yếu tố nguy cơ quan trọng nhất của bệnh này. Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Friendly",
  "duration_target": "40-55 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Thay đổi:**
  - Mô tả chính xác dấu hiệu biến dạng hình ảnh (Metamorphopsia): *"đường thẳng nhìn thành đường cong, lượn sóng"*, mất thị lực trung tâm trong khi thị lực chu biên vẫn còn.

---

### GROUP B — CẤP CỨU CHẤN THƯƠNG MẮT (MÃ EM)

---

#### 1. EM-01: Sơ cứu dị vật nhỏ vào mắt

```json
{
  "audio_id": "EM-01",
  "title": "Sơ cứu dị vật nhỏ vào mắt",
  "category": "emergency",
  "priority": "high",
  "script": "Khi bị bụi, cát hoặc dị vật nhỏ bay vào mắt, hãy thực hiện ngay các bước sau: Trước hết, tuyệt đối không dụi mắt vì có thể làm xước bề mặt mắt. Hãy rửa mắt ngay lập tức bằng nước sạch hoặc nước muối sinh lý. Nếu sau khi rửa mà vẫn còn cảm giác cộm, đau rát, nhìn mờ hoặc sợ ánh sáng, bạn cần đến ngay cơ sở y tế để được bác sĩ kiểm tra. Tuyệt đối không tự ý dùng kim, tăm hoặc các dụng cụ khác để lấy dị vật ra. Đây là hướng dẫn sơ cứu ban đầu. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Clear",
  "duration_target": "40-50 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Hành vi:**
  - **LÀM GÌ NGAY:** Rửa mắt nhẹ nhàng bằng nước sạch hoặc nước muối sinh lý 0.9%, chớp mắt trong bát nước sạch.
  - **KHÔNG ĐƯỢC LÀM GÌ:** **Tuyệt đối không dụi mắt**. Dụi mắt sẽ miết hạt bụi sắc nhọn cày xới lớp biểu mô giác mạc, biến dị vật nông thành loét giác mạc. Không dùng tăm, góc vạt áo hay kim gắp dị vật.
  - **KHI NÀO ĐI CẤP CỨU:** Rửa xong vẫn cộm buốt, sợ sáng, nhìn mờ.

---

#### 2. EM-02: Sơ cứu dị vật nhọn / Vật cắm vào mắt

```json
{
  "audio_id": "EM-02",
  "title": "Sơ cứu dị vật nhọn/Vật cắm vào mắt",
  "category": "emergency",
  "priority": "critical",
  "script": "Nếu gặp trường hợp dị vật nhọn như mạt kim loại, mảnh kính, cành cây hoặc vật nhọn tốc độ cao cắm vào mắt, đây là tình huống khẩn cấp. Hãy nhớ kỹ: Tuyệt đối không cố tự lấy dị vật ra. Không kéo, không xoay, không dùng bất cứ dụng cụ nào chạm vào dị vật. Bạn cũng không được ấn hoặc băng ép trực tiếp lên nhãn cầu. Hãy bảo vệ mắt bằng cách che chắn nhẹ nhàng mà không tạo áp lực lên mắt, sau đó đưa người bị nạn đến ngay cơ sở y tế chuyên khoa mắt càng sớm càng tốt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.",
  "language": "vi-VN",
  "voice_style": "Natural, Urgent, Clear",
  "duration_target": "45-55 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Hành vi:**
  - **LÀM GÌ NGAY:** Dùng cốc giấy sạch (hoặc vật chụp hình vòm) úp nhẹ che chở bên ngoài mắt bị tổn thương, cố định băng dính xung quanh vành xương hốc mắt.
  - **KHÔNG ĐƯỢC LÀM GÌ:** **TUYỆT ĐỐI KHÔNG RÚT DỊ VẬT RA**. Động tác tự rút sẽ làm thoát dịch kính, kẹt mống mắt và gây mù lòa không thể phục hồi. **KHÔNG BĂNG ÉP** lên nhãn cầu.
  - **KHI NÀO ĐI CẤP CỨU:** Vận chuyển ngay lập tức đến bệnh viện mắt chuyên khoa gần nhất.

---

#### 3. EM-03: Sơ cứu hóa chất bắn vào mắt (Ưu tiên khẩn cấp cao nhất)

```json
{
  "audio_id": "EM-03",
  "title": "Sơ cứu hóa chất bắn vào mắt",
  "category": "emergency",
  "priority": "critical",
  "script": "Hóa chất bắn vào mắt là một cấp cứu tối khẩn cấp. Nếu chuyện này xảy ra, bạn hãy rửa mắt ngay lập tức bằng thật nhiều nước sạch có sẵn. Tuyệt đối không chờ đến khi đến bệnh viện mới bắt đầu rửa mắt. Trong lúc rửa, hãy cố gắng mở mắt và tiếp tục rửa liên tục. Không tự ý dùng các chất khác để trung hòa hóa chất, không dụi mắt và không áp dụng các phương pháp dân gian. Sau khi rửa mắt sơ cứu, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay lập tức và tiếp tục rửa mắt trên đường đi nếu có thể. Tình huống này cần được đánh giá y tế khẩn cấp.",
  "language": "vi-VN",
  "voice_style": "Natural, Urgent, Clear",
  "duration_target": "45-60 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Hành vi:**
  - **LÀM GÌ NGAY:** **RỬA MẮT NGAY LẬP TỨC TẠI NƠI XẢY RA TAI NẠN** bằng bất kỳ nguồn nước sạch nào gần nhất (vòi nước máy, nước đóng chai, nước muối sinh lý). Giữ mắt mở, rửa liên tục tối thiểu 15–20 phút. Vừa đi viện vừa tiếp tục dội nước rửa nếu điều kiện cho phép.
  - **KHÔNG ĐƯỢC LÀM GÌ:** **Tuyệt đối không chờ đợi đưa đến bệnh viện mới rửa**. Không tự ý dùng dung dịch khác để "trung hòa" (ví dụ: dùng chanh/giấm trung hòa kiềm hay ngược lại - phản ứng tỏa nhiệt sẽ làm mắt bỏng nặng thêm gấp bội). Không nhỏ sữa hay thuốc dân gian.
  - **KHI NÀO ĐI CẤP CỨU:** Sau khi hoàn tất 15-20 phút xối rửa liên tục, chuyển viện ngay lập tức (mang theo vỏ chai/nhãn mác hóa chất nếu có).

---

#### 4. EM-04: Sơ cứu bỏng nhiệt ở mắt

```json
{
  "audio_id": "EM-04",
  "title": "Sơ cứu bỏng nhiệt ở mắt",
  "category": "emergency",
  "priority": "high",
  "script": "Khi mắt bị bỏng do nhiệt như nước sôi hoặc dầu mỡ nóng, hãy lập tức làm mát và rửa mắt bằng nước sạch. Sau bước sơ cứu này, bạn cần đến ngay cơ sở y tế để bác sĩ đánh giá mức độ tổn thương của mắt. Tuyệt đối không dụi mắt và không tự ý bôi các chất theo quan niệm dân gian lên mắt. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Clear",
  "duration_target": "30-40 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Hành vi:**
  - **LÀM GÌ NGAY:** Làm mát hạ nhiệt bề mặt mắt và vùng da quanh mi bằng dòng nước mát sạch chảy nhẹ nhàng.
  - **KHÔNG ĐƯỢC LÀM GÌ:** Không thoa kem đánh răng, mỡ trăn, lòng trắng trứng, nước mắm hay bất kỳ mẹo dân gian nào (nguy cơ nhiễm trùng và hoại tử biểu mô giác mạc rất cao). Không day dụi làm trợt lớp niêm mạc bỏng.
  - **KHI NÀO ĐI CẤP CỨU:** Đến khám chuyên khoa mắt ngay sau khi hạ nhiệt bằng nước sạch.

---

#### 5. EM-05: Sơ cứu chấn thương do va đập vào mắt

```json
{
  "audio_id": "EM-05",
  "title": "Sơ cứu chấn thương do va đập vào mắt",
  "category": "emergency",
  "priority": "high",
  "script": "Nếu mắt bị chấn thương do va đập, như bị bóng đập vào, cú đấm hoặc tai nạn, hãy cho người bị nạn nghỉ ngơi và hạn chế tối đa tác động lên mắt. Bạn có thể chườm lạnh nhẹ nhàng quanh vùng hốc mắt để giảm sưng, nhưng không ấn trực tiếp lên nhãn cầu. Cần phải đưa người bị nạn đi cấp cứu ngay nếu có các dấu hiệu sau: thị lực giảm, nhìn đôi, thấy máu trong mắt, mắt lồi hoặc thụt bất thường, hoặc không vận động mắt bình thường được. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Clear",
  "duration_target": "45-55 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Hành vi:**
  - **LÀM GÌ NGAY:** Để nạn nhân ngồi nghỉ, chườm lạnh bằng khăn bọc đá quanh bờ xương hốc mắt để giảm tụ máu bầm và phù nề.
  - **KHÔNG ĐƯỢC LÀM GÌ:** Không ấn hoặc tì đè lực lên nhãn cầu (nếu nhãn cầu có vết rách kín củng mạc, đè ép sẽ làm phòi tổ chức nội nhãn). Không tự ý uống thuốc giảm đau nhóm Aspirin/NSAID liều cao vì làm tăng nguy cơ xuất huyết tiền phòng.
  - **KHI NÀO ĐI CẤP CỨU:** Xuất hiện dấu hiệu đỏ: Giảm thị lực, nhìn 1 thành 2 (song thị), có ngấn máu trong mắt (xuất huyết tiền phòng), mắt lồi/thụt bất thường, không liếc nhìn xung quanh được.

---

#### 6. EM-06: Tổn thương mắt do tia hàn / tia UV

```json
{
  "audio_id": "EM-06",
  "title": "Tổn thương do tia hàn/UV",
  "category": "emergency",
  "priority": "medium",
  "script": "Tổn thương mắt do ánh sáng mạnh như tia hàn hoặc tia cực tím thường không xuất hiện ngay mà sau vài giờ. Các triệu chứng bao gồm đau mắt, cộm rát, sợ ánh sáng, chảy nước mắt và khó mở mắt. Khi gặp tình trạng này, hãy rời khỏi nguồn sáng ngay lập tức, không dụi mắt và chườm mát nhẹ nhàng. Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian. Nếu các triệu chứng nghiêm trọng hoặc không cải thiện, hãy tìm kiếm chăm sóc y tế. Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.",
  "language": "vi-VN",
  "voice_style": "Natural, Calm, Clear",
  "duration_target": "45-60 seconds",
  "medical_review_required": true
}
```

* **Phân tích chuyên môn & Hành vi:**
  - **Đặc thù bệnh học:** Bỏng biểu mô giác mạc do tia UV hồ quang hàn có thời gian ủ bệnh: thường chỉ bùng phát đau rát dữ dội vào ban đêm (sau khi tiếp xúc 4–10 tiếng).
  - **LÀM GÌ NGAY:** Nghỉ ngơi nơi phòng tối, đeo kính mát, chườm lạnh nhẹ quanh mắt, nhỏ nước mắt nhân tạo không chất bảo quản.
  - **KHÔNG ĐƯỢC LÀM GÌ:** **CẢNH BÁO QUAN TRỌNG NHẤT:** Tuyệt đối không tự mua hoặc xin thuốc tê nhỏ mắt (như Tetracaine, Dicaine) để nhỏ giảm đau tạm thời. Thuốc tê ức chế sự nhân lên của tế bào biểu mô, gây biến chứng viêm loét thủng giác mạc không hồi phục.
  - **KHI NÀO ĐI CẤP CỨU:** Đau nhức không giảm sau 12-24 giờ, có mủ hoặc nhìn mờ kéo dài.

---

## PHẦN 3: PHÂN TÍCH SO SÁNH TRƯỚC VÀ SAU CHUẨN HÓA (BEFORE VS AFTER)

Nhằm làm rõ cơ sở cải tiến kịch bản, bảng dưới đây đối chiếu chi tiết các nhược điểm của phiên bản cũ và giải pháp đã khắc phục:

| Audio ID | Vấn Đề Cũ Cần Khắc Phục | Cải Tiến Chuẩn Y Khoa Mới | Cơ Sở Y Khoa & Trải Nghiệm Người Dùng |
|:---|:---|:---|:---|
| **DIS-01** (Cận thị) | Khẳng định tuyệt đối *"Dùng điện thoại nhiều gây ra cận thị"*. | Chuyển thành *"liên quan đến làm việc gần kéo dài với màn hình và tiền sử gia đình"*. | Tránh quy kết thiếu bằng chứng; đúng theo y văn quốc tế về cơ chế phát triển tật khúc xạ. |
| **DIS-04** (Lão thị) | Gọi thân mật cảm tính *"ông bà cô chú"*. | Chuẩn hóa giọng điệu trung tính: *"quá trình lão hóa tự nhiên bắt đầu rõ hơn từ tuổi trung niên"*. | Phù hợp với mọi đối tượng độc giả, đảm bảo tính trang nghiêm và khách quan của y tế. |
| **DIS-06** (Glôcôm) | Tuyên bố nguy hiểm: *"Nếu thấy quầng sáng là bạn đã bị cườm nước"*. | Loại bỏ tự chẩn đoán, nhấn mạnh: *"Giai đoạn đầu thường không có triệu chứng... cần khám định kỳ"*. | Triệu chứng quầng tán sắc có thể gặp trong nhiều bệnh khác; glôcôm góc mở phần lớn diễn tiến âm thầm. |
| **DIS-08** (Viêm kết mạc) | Gộp chung vi khuẩn, virus, dị ứng vào một audio dài lộn xộn. | Tách độc lập thành 3 audio riêng biệt: **DIS-08A**, **DIS-08B**, **DIS-08C**. | Mỗi loại có nguyên nhân, mức độ lây nhiễm và cách phòng ngừa khác nhau hoàn toàn. |
| **EM-01** (Dị vật nhỏ) | Còn đề cập việc dùng góc khăn, tăm bông tự khều dị vật ra. | Nhấn mạnh: *"Tuyệt đối không dụi mắt, không dùng kim tăm... Chỉ rửa bằng nước sạch"*. | Tránh tự gây trợt xước hoặc cày sâu dị vật vào nhu mô giác mạc. |
| **EM-02** (Dị vật nhọn) | Chưa nhấn mạnh rõ cấm băng ép lên nhãn cầu. | Nhấn mạnh chữ vàng: *"Tuyệt đối không rút dị vật ra, không ấn hoặc băng ép lên nhãn cầu"*. | Nguy cơ phòi nội nhãn và hoại tử mắt nếu đè ép hoặc tự rút dị vật nhọn. |
| **EM-03** (Hóa chất) | Hướng dẫn dài dòng, thiếu nhấn mạnh việc xả nước tại chỗ. | Đưa lên ưu tiên khẩn cấp cao nhất: *"Rửa mắt ngay lập tức thật nhiều nước, tuyệt đối không chờ đến bệnh viện mới rửa"*. | "Thời gian vàng" của bỏng hóa chất tính bằng giây. Trì hoãn rửa làm hóa chất ăn mòn sâu gây mù vĩnh viễn. |
| **EM-05** (Va đập) | Không liệt kê các triệu chứng cảnh báo xuất huyết đáy mắt. | Bổ sung danh sách báo động đỏ: nhìn đôi, giảm thị lực, thấy máu trong mắt, mắt lồi/thụt bất thường. | Giúp người nhà phát hiện sớm vỡ nhãn cầu kín hoặc xuất huyết tiền phòng. |
| **EM-06** (Tia hàn) | Chưa cảnh báo việc tự mua thuốc tê nhỏ mắt. | Đưa lời cấm nghiêm ngặt: *"Tuyệt đối không tự ý dùng thuốc tê nhỏ mắt hoặc các phương pháp dân gian"*. | Thuốc tê gây độc trực tiếp lên biểu mô giác mạc, có thể dẫn đến loét thủng giác mạc vĩnh viễn. |

---

## PHẦN 4: QUY TRÌNH KIỂM DUYỆT Y KHOA (MEDICAL REVIEW PROTOCOL)

Tất cả các bản ghi audio trên đều được gán cờ `"medical_review_required": true`.  
Bác sĩ chuyên khoa Nhãn khoa khi tiến hành thẩm định kịch bản sẽ thực hiện nghiệm thu dựa trên **Checklist 5 Tiêu Chí An Toàn Sinh Mạng & Thị Lực**:

```
[ ] TIÊU CHÍ 1: TÍNH CHÍNH XÁC Y KHOA (Clinical Accuracy)
    - Thuật ngữ đơn giản hóa nhưng vẫn giữ đúng bản chất bệnh học.
    - Không có bất kỳ nhận định nào sai lệch cơ chế sinh lý mắt.

[ ] TIÊU CHÍ 2: NGUYÊN TẮC KHÔNG CHẨN ĐOÁN (Non-diagnostic Compliance)
    - Kịch bản không đưa ra kết luận xác quyết bệnh nhân mắc bệnh cụ thể.
    - Không kê đơn, không hướng dẫn liều lượng thuốc đặc trị (kháng sinh, corticoid, thuốc tê).

[ ] TIÊU CHÍ 3: MỨC ĐỘ ƯU TIÊN VÀ PHẢN XẠ SƠ CỨU (Triage & First-aid Reflex)
    - Với cấp cứu: Hành động "LÀM GÌ NGAY" xuất hiện trong 5 giây đầu tiên của audio.
    - Các hành vi cấm kỵ nguy hiểm (dụi mắt, rút dị vật, bôi chất dân gian) được nhấn mạnh bằng giọng dứt khoát.

[ ] TIÊU CHÍ 4: THỜI LƯỢNG VÀ TỐC ĐỘ PHÙ HỢP TTS (Audio Feasibility)
    - Độ dài nằm trong khoảng 30–60 giây (không quá ngắn gây thiếu thông tin, không quá dài gây phân tâm).
    - Câu chữ ngắt nghỉ tự nhiên, bộ máy phát âm Web Speech API / TTS đọc mượt mà không vấp.

[ ] TIÊU CHÍ 5: ĐẦY ĐỦ ĐIỀU KHOẢN MIỄN TRỪ PHÁP LÝ (Legal Disclaimer)
    - Cuối mỗi kịch bản có lời nhắc khám chuyên khoa hoặc gọi cấp cứu theo đúng phân loại chuẩn.
```

---

## PHẦN 5: HƯỚNG DẪN KỸ THUẬT TRIỂN KHAI VÀ TÍCH HỢP HỆ THỐNG

### 1. Kiến trúc phân tầng dữ liệu trong Codebase REMiCare

Hệ thống script Audio này được thiết kế để ánh xạ trực tiếp vào các file dữ liệu trung tâm của frontend React:

```
src/
├── components/
│   ├── AudioGuide.jsx             <-- Component phát Audio trực quan (UI nút bấm chuẩn y tế)
│   └── AIAssistant/
│       ├── VoiceRecorder.jsx      <-- Ghi âm & Nhận diện giọng nói STT (Speech-to-Text)
│       └── VideoGuide.jsx         <-- Kết hợp Video mô phỏng thao tác sơ cứu
├── data/
│   ├── emergencyCases.js          <-- Chứa audioScript cho các ca cấp cứu (EM-01 đến EM-06)
│   ├── firstAidData.js            <-- Kịch bản chi tiết từng bước sơ cứu kết hợp icon
│   ├── eyeCareCategories.js       <-- Danh mục chuẩn y khoa để AI phân loại câu hỏi người dùng
│   └── knowledgeData.js           <-- Dữ liệu giáo dục sức khỏe mắt (DIS-01 đến DIS-10)
└── utils/
    └── speechUtils.js             <-- Trình bao bọc Web Speech API (speakText, stopSpeaking)
```

### 2. Chuẩn hóa hàm xử lý TTS trong `speechUtils.js`

Để đảm bảo giọng đọc tiếng Việt trên mọi nền tảng (Chrome, Safari, Edge, Mobile WebView) đạt chất lượng tốt nhất:

```javascript
// Chuẩn cấu hình Voice Synthesis tối ưu cho Y tế khẩn cấp:
export const speakText = (text, onStart, onEnd, onError) => {
  if (!('speechSynthesis' in window)) {
    console.warn("Trình duyệt không hỗ trợ Web Speech API.");
    return;
  }

  window.speechSynthesis.cancel(); // Dừng câu đang đọc dở

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  
  // Với cấp cứu khẩn cấp (EM-02, EM-03), tốc độ được điều chỉnh 0.95 để rõ từng chữ
  utterance.rate = 0.95; 
  utterance.pitch = 1.0;

  // Lựa chọn voice tiếng Việt chất lượng cao nếu có trên thiết bị
  const voices = window.speechSynthesis.getVoices();
  const vietnameseVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
  if (vietnameseVoice) {
    utterance.voice = vietnameseVoice;
  }

  utterance.onstart = () => onStart && onStart();
  utterance.onend = () => onEnd && onEnd();
  utterance.onerror = (e) => onError && onError(e);

  window.speechSynthesis.speak(utterance);
};
```

---

## PHẦN 6: CAM KẾT VÀ GIỚI HẠN PHẠM VI HỆ THỐNG

Để đảm bảo sự an toàn cao nhất cho người bệnh và tuân thủ các quy định pháp luật hiện hành về công nghệ y tế:

1. **Cam kết phạm vi:**
   - Chỉ thực hiện điều chỉnh, chuẩn hóa kịch bản giọng đọc (Audio Scripts) dựa trên tài liệu nghiên cứu y khoa được duyệt.
   - Không tự ý thay đổi luồng kiến trúc ngoài chức năng Hướng Dẫn Âm Thanh & Hỗ Trợ Giọng Nói.
2. **Nghiêm cấm kỹ thuật:**
   - **Không thực hiện AI Diagnosis (Tự chẩn đoán bệnh bằng trí tuệ nhân tạo):** REMiCare chỉ đóng vai trò phân loại triệu chứng sơ bộ dựa trên từ khóa câu nói của người dùng và hướng dẫn cách sơ cứu ban đầu.
   - **Không phân loại bệnh lý tự động để kê đơn thuốc:** Ứng dụng không tự động kê đơn hay chỉ định điều trị thay thế bác sĩ.
   - **Không đưa các mẹo truyền miệng hoặc dược liệu dân gian không có trong y văn vào kịch bản audio.**
3. **Trách nhiệm người dùng:**
   - Mọi tình huống chấn thương mắt hoặc giảm thị lực kéo dài bắt buộc phải được thăm khám trực tiếp tại bệnh viện hoặc phòng khám chuyên khoa Mắt có đầy đủ máy móc nhãn khoa (sinh hiển vi khám mắt, đèn soi đáy mắt, máy đo nhãn áp).

---
*Tài liệu được biên soạn và chuẩn hóa bởi Bộ phận Kỹ thuật & Y khoa dự án REMiCare.*
