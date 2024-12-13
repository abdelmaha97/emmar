```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  photoURL?: string | null;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}
```