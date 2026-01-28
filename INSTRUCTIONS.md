# School Management System - Development Instructions

## ⚠️ IMPORTANT: READ THIS BEFORE MAKING ANY CHANGES

### 1. FOLDER STRUCTURE
- **DO NOT CREATE NEW FOLDERS**
- Use the existing folder structure only:
  ```
  src/
  ├── components/
  │   ├── dashboard/
  │   └── ui/
  ├── pages/
  ├── routes/
  ├── services/
  ├── hooks/
  ├── redux/
  ├── data/
  ├── utils/
  ├── lib/
  └── assets/
  ```
- Add new pages inside `src/pages/`
- Add new components inside `src/components/dashboard/` or `src/components/ui/`
- Keep this structure consistent

### 2. UI COLOR SCHEME
- **Primary Background Color:** `#e8f1ff`
- **Primary Button Color:** `bg-blue-500`, `hover:bg-blue-600`
- **Accent Color:** `bg-blue-50`, `text-blue-600`
- **Text Colors:** 
  - Primary: `text-gray-800`, `text-slate-800`
  - Secondary: `text-slate-400`, `text-gray-500`
- **Border Color:** `border-blue-50/50`
- **Decorative Circles:** `bg-blue-200/20`, `bg-blue-300/20` (with blur-3xl)

### 3. ICONS
- **ONLY USE:** `@phosphor-icons/react`
- **DO NOT USE:** SVG icons or other icon libraries
- **Import only what you use** - no unused icon imports
- Example correct import:
  ```tsx
  import { SignOut, Bell, User } from "@phosphor-icons/react";
  ```
- Example WRONG:
  ```tsx
  import { SignOut, Bell, User, GraduationCap } from "@phosphor-icons/react";
  // ❌ If GraduationCap is not used in the file, DELETE IT
  ```

### 4. IMPORTS - CRITICAL RULE
- **Only import what you actually use in the file**
- Remove unused imports immediately
- This keeps bundle size small and app fast
- Check before submitting:
  - Is this import used in JSX? ✅
  - Is this import used in code? ✅
  - If NO to both → DELETE the import ❌

### 5. COMPONENT LOCATIONS
- **Page Components:** `src/pages/` (e.g., LoginPage, DashboardPage)
- **Dashboard Components:** `src/components/dashboard/` (Header, Sidebar, etc.)
- **UI Components:** `src/components/ui/` (Avatar, Badge, Button, Card, Table)
- **Utilities:** `src/utils/`, `src/lib/`, `src/services/`

### 6. ROUTING
- All routes defined in `src/App.tsx`
- Add new routes there, no separate routing files needed

### 7. STYLING
- Use **Tailwind CSS** only
- No custom CSS files unless absolutely necessary
- Use the color scheme defined above

## 🚀 BEFORE YOU START WORK:
1. ✅ Read this entire file
2. ✅ Check the current folder structure
3. ✅ Understand the UI color scheme
4. ✅ Verify all imports are being used
5. ✅ Do NOT add unused code
6. ✅ Then start coding

## 📝 CHECKLIST FOR EVERY FILE CHANGE:
- [ ] Following existing folder structure?
- [ ] Using only Tailwind + blue color scheme?
- [ ] Using @phosphor-icons/react for icons only?
- [ ] All imports actually used in the file?
- [ ] No unnecessary code or unused variables?
- [ ] Component properly exported?
- [ ] Route added to App.tsx if it's a page?
