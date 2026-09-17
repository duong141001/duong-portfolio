# Dương Nguyễn — Product Builder & Agile Coordinator Portfolio

Portfolio website của Dương Nguyễn (Product, Agile, AI Builder & Điều Phối Dự Án).
Giao diện thiết kế theo phong cách **AuthKit — Frosted Glass Cathedral at Midnight** (kính mờ trên nền midnight canvas, đường chỉ hairline viền kính và điểm nhấn tím Void Violet).

🔗 **Live URL:** [https://gwr1410.io.vn/](https://gwr1410.io.vn/)

## Cấu trúc các trang

- `index.html`: Trang chủ (Hero tên phát quang, hồ sơ năng lực, 4 thẻ thống kê số liệu, chạy marquee, hồ sơ 8 dự án với tab và preview sticky, 2 thẻ tư duy, form liên hệ).
- `about.html`: Giới thiệu chi tiết (Điều hướng fixed bên trái, timeline 5 chặng đường sự nghiệp, câu chuyện chuyển giao từ Game QA sang Scrum/Product, ảnh polaroid).
- `case-studies.html`: Kho dự án (Bộ lọc phân loại, thanh tìm kiếm, danh sách dự án hoàn chỉnh).
- `case-study.html`: Trang chi tiết từng case study tải động qua query `?id=`.
- `playground.html`: Phòng thử nghiệm & lab tương tác (Interactive Canvas với các thẻ kéo thả).
- `contact.html`: Trang liên hệ tương tác 2 bước.

## Tính năng kỹ thuật

- **Song ngữ VI / EN:** Hỗ trợ chuyển đổi ngôn ngữ tức thì, 100% nội dung đã được bản địa hoá.
- **Tương tác thông minh:** Kính lúp (Hover Lens) khóa tâm con trỏ chuột, animation chữ stagger mượt mà, bộ đếm số count-up.
- **Không phụ thuộc build step:** Thuần HTML, Tailwind CSS, JavaScript Vanilla, không cần Node.js runtime hay hosting trả phí.
- **GitHub Pages Ready:** Tích hợp sẵn `CNAME` (`gwr1410.io.vn`) và `.nojekyll`.
