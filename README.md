# Portfolio - Next.js Migration

## Setup Instructions

### 1. Copy public assets from original project
Copy these files from `d:\nitinkanzariya\public\` to `d:\nitinkanzariya-nextjs\public\`:
- `profile_photo.JPG`
- `NitinKanzariya_Resume.pdf`

```powershell
Copy-Item "d:\nitinkanzariya\public\*" -Destination "d:\nitinkanzariya-nextjs\public\" -Force
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure email (optional)
Copy `.env.local.example` to `.env.local` and fill in your SMTP credentials:
```bash
cp .env.local.example .env.local
```

### 4. Run development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
npm start
```
