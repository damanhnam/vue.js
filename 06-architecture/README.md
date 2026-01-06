# Kiến trúc dự án Vue.js (Vue.js Architecture)

Khi làm việc với các dự án thực tế, việc tổ chức thư mục và code là cực kỳ quan trọng để dễ bảo trì và mở rộng. Dưới đây là mô hình kiến trúc phổ biến cho Vue 3.

## 1. Cấu trúc thư mục chuẩn

```
src/
├── assets/          # Chứa ảnh, font, css global
├── components/      # Các component nhỏ, tái sử dụng (Button, Input, Card...)
├── views/           # Các trang chính (Home, About, Login...)
├── composables/     # Các hàm logic tái sử dụng (Composition API)
├── services/        # Gọi API (Axios, Fetch)
├── stores/          # Quản lý state toàn cục (Pinia / Vuex)
├── router/          # Cấu hình đường dẫn (Vue Router)
├── utils/           # Các hàm tiện ích nhỏ (formatDate, formatMoney...)
└── App.vue          # Component gốc
```

## 2. Vai trò chi tiết

### `components/` (Dumb Components)
- Chỉ nhận **Props** để hiển thị và **Emit** sự kiện ra ngoài.
- Không nên chứa logic gọi API hay xử lý nghiệp vụ phức tạp.
- Ví dụ: `BaseButton.vue`, `UserCard.vue`.

### `views/` (Smart Components / Pages)
- Đại diện cho một trang web.
- Chịu trách nhiệm gọi API, lấy dữ liệu từ Store.
- Truyền dữ liệu xuống các `components` con.
- Ví dụ: `HomePage.vue`, `ProductDetailPage.vue`.

### `composables/` (Logic Reuse)
- Chứa các logic dùng chung cho nhiều component (theo phong cách Composition API).
- Tên file thường bắt đầu bằng `use...`.
- Ví dụ: `useAuth.js` (xử lý đăng nhập), `useFetch.js` (xử lý gọi API).

### `services/` (API Layer)
- Tách biệt việc gọi API ra khỏi Component.
- Giúp dễ dàng thay đổi thư viện gọi API hoặc URL mà không sửa nhiều file.
- Ví dụ: `authService.js`, `productService.js`.

### `stores/` (State Management)
- Dùng để lưu trữ dữ liệu cần chia sẻ cho toàn bộ ứng dụng (User info, Cart, Theme...).
- Thường dùng thư viện **Pinia** (khuyên dùng) hoặc Vuex.

## 3. Luồng dữ liệu (Data Flow)

1.  **Một chiều (One-way Data Flow)**: Cha truyền dữ liệu xuống Con qua **Props**.
2.  **Event Up**: Con gửi thông báo lên Cha qua **Emits**.
3.  **Global State**: Các component ở xa nhau có thể cùng truy cập dữ liệu qua **Store**.

## 4. Ví dụ thực tế

Bạn hãy xem các file mẫu trong thư mục này để hiểu rõ hơn cách viết code cho từng phần.
