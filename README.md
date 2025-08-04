# O2O System Management

Hệ thống quản lý O2O được xây dựng với React, TypeScript và các công nghệ hiện đại.

## Công nghệ sử dụng

- **React 19** - Framework chính
- **TypeScript** - Ngôn ngữ lập trình
- **Ant Design & Ant Design Pro** - UI Library
- **React Router DOM** - Điều hướng
- **Axios** - HTTP Client
- **TanStack Query** - State Management cho API
- **Zustand** - Global State Management
- **Vite** - Build tool

## Cấu trúc thư mục

```
src/
├── components/           # Components tái sử dụng
│   ├── common/          # Components chung (Loading, ErrorBoundary, etc.)
│   └── layout/          # Layout components (AppLayout, etc.)
├── config/              # Cấu hình (menu, routes, etc.)
├── constants/           # Hằng số
├── guards/              # Route guards (AuthGuard, GuestGuard)
├── hooks/               # Custom hooks
├── pages/               # Các trang của ứng dụng
├── routes/              # Cấu hình routing
├── services/            # API services
├── stores/              # Zustand stores
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── App.tsx              # Component gốc
```

## Các tính năng chính

### 1. Authentication & Authorization

- Đăng nhập/đăng xuất
- Route protection với AuthGuard và GuestGuard
- JWT token management
- User role management

### 2. State Management

- **Zustand**: Global state cho auth, theme, settings
- **TanStack Query**: Server state management cho API calls
- **Local Storage**: Persist auth data

### 3. API Management

- Axios với interceptors
- Error handling tự động
- Token injection
- Response/Request interceptors

### 4. UI/UX

- Ant Design Pro components
- Responsive design
- Loading states
- Error boundaries
- Toast notifications

### 5. Development Tools

- TypeScript strict mode
- ESLint configuration
- Path aliases (@/ for src/)
- Hot reload với Vite

## Cách sử dụng

### 1. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 2. Chạy development server

```bash
npm run dev
# hoặc
yarn dev
```

### 3. Build production

```bash
npm run build
# hoặc
yarn build
```

## Cấu hình môi trường

Tạo file `.env.local`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## Quy ước đặt tên

### 1. Files & Folders

- PascalCase cho components: `UserProfile.tsx`
- camelCase cho utilities: `formatDate.ts`
- kebab-case cho CSS: `user-profile.css`

### 2. Components

- Functional components với TypeScript
- Props interface cho mỗi component
- Export default cho components

### 3. API Services

- Tách biệt theo domain: `auth.service.ts`, `user.service.ts`
- Sử dụng class-based approach
- Error handling consistent

### 4. State Management

- Zustand stores theo domain
- Actions rõ ràng và type-safe
- Persist data khi cần thiết

## Best Practices

### 1. Code Organization

- Mỗi feature trong thư mục riêng
- Shared components trong `components/common`
- Business logic trong services
- UI logic trong components

### 2. Type Safety

- Strict TypeScript configuration
- Interface cho tất cả props
- Generic types cho API responses
- Union types cho status, roles

### 3. Performance

- React.memo cho components
- useMemo/useCallback khi cần thiết
- Lazy loading cho routes
- Optimized re-renders

### 4. Error Handling

- Error boundaries cho components
- Consistent error messages
- API error handling
- User-friendly error states

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes với conventional commits
4. Push và tạo Pull Request

## License

MIT License
