# 🚀 Hostinger Deployment Guide - DeepIotics Website

## Step 1: Domain Setup (Hostinger Account)

### A. Domain Purchase/Setup
1. **Login** to your Hostinger account: https://hpanel.hostinger.com
2. **Domain Check**: 
   - Go to Domains → Domain Checker
   - Search for your desired domain (e.g., `deepiotics.com`)
   - Purchase if available, or use existing domain

### B. Hosting Plan
- **Recommended**: Premium Web Hosting या Business Web Hosting
- **Features needed**: 
  - PHP support
  - MySQL database (for backend)
  - SSL certificate (free)
  - File Manager access

## Step 2: Frontend Deployment

### A. Build Project
```bash
# Terminal में run करें:
npm run build
```

### B. Upload Files to Hostinger
1. **File Manager** में जाएं (hPanel → File Manager)
2. **public_html** folder खोलें
3. **dist** folder के सारे contents को upload करें:
   - `index.html`
   - `assets/` folder
   - `.htaccess` file (already created)

### C. Alternative Upload Methods
**Method 1: ZIP Upload**
```bash
# Build के बाद dist folder को zip करें
cd dist
# सारी files select करके zip बनाएं
```

**Method 2: FTP Upload**
- FTP credentials: hPanel → File Manager → FTP Accounts
- Use FileZilla या कोई FTP client

## Step 3: Backend Setup (Node.js)

### A. Enable Node.js on Hostinger
1. **hPanel** → Advanced → Node.js
2. **Create Application**:
   - Node.js version: 18.x या latest
   - Application root: `/domains/yourdomain.com/public_html/api`
   - Application URL: `yourdomain.com/api`

### B. Backend Files Upload
```bash
# Backend files structure:
/public_html/api/
├── package.json
├── server.js
├── .env
└── node_modules/ (will be installed)
```

### C. Install Dependencies
```bash
# Hostinger Terminal में:
cd /domains/yourdomain.com/public_html/api
npm install
```

## Step 4: Database Setup

### A. Create MySQL Database
1. **hPanel** → Databases → MySQL Databases
2. **Create Database**: `deepiotics_db`
3. **Create User**: `deepiotics_user`
4. **Assign User** to Database

### B. Database Configuration
```env
# .env file में add करें:
DB_HOST=localhost
DB_NAME=deepiotics_db
DB_USER=deepiotics_user
DB_PASSWORD=your_password
```

## Step 5: Environment Variables

### A. Frontend (.env)
```env
VITE_API_URL=https://yourdomain.com/api
VITE_SUPABASE_URL=https://ajuaepeaclzihorjizby.supabase.co
VITE_SUPABASE_ANON_KEY=your_key
```

### B. Backend (.env)
```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
```

## Step 6: SSL Certificate

### A. Enable SSL
1. **hPanel** → Security → SSL
2. **Force HTTPS**: Enable करें
3. **Auto-renewal**: Enable करें

## Step 7: Testing

### A. Check Frontend
- Visit: `https://yourdomain.com`
- Test all pages: `/about`, `/services`, `/contact`, etc.
- Check mobile responsiveness

### B. Check Backend APIs
- Test: `https://yourdomain.com/api/health`
- Test contact form submission
- Test admin login

## Step 8: Performance Optimization

### A. Enable Caching
```apache
# .htaccess में already added:
- Browser caching
- GZIP compression
- Security headers
```

### B. CDN Setup (Optional)
1. **hPanel** → Speed → CDN
2. Enable Hostinger CDN
3. Configure cache settings

## Step 9: Monitoring & Maintenance

### A. Error Logs
- **hPanel** → Advanced → Error Logs
- Monitor for any issues

### B. Backup Setup
- **hPanel** → Files → Backups
- Enable automatic backups

## Step 10: Custom Domain Configuration

### A. DNS Settings
```
Type: A Record
Name: @
Value: Hostinger IP (provided in hPanel)

Type: CNAME
Name: www
Value: yourdomain.com
```

### B. Subdomain Setup (Optional)
```
admin.yourdomain.com → /admin
api.yourdomain.com → /api
```

## 🔧 Quick Deploy Commands

### Build & Deploy Script
```bash
# Run this command for quick deployment:
npm run build && echo "Build complete! Upload dist/ contents to Hostinger"
```

### File Structure on Hostinger
```
/domains/yourdomain.com/public_html/
├── index.html (from dist/)
├── assets/ (from dist/)
├── .htaccess
├── api/
│   ├── server.js
│   ├── package.json
│   └── .env
└── admin/ (if separate admin panel)
```

## 📞 Support

**Hostinger Support**: 24/7 Live Chat
**Documentation**: https://support.hostinger.com

## ✅ Deployment Checklist

- [ ] Domain purchased/configured
- [ ] Hosting plan active
- [ ] Frontend built (`npm run build`)
- [ ] Files uploaded to public_html
- [ ] .htaccess configured
- [ ] SSL certificate enabled
- [ ] Backend deployed (if needed)
- [ ] Database created & configured
- [ ] Environment variables set
- [ ] All pages testing working
- [ ] Mobile responsive check
- [ ] Performance optimization enabled

**🎉 Your DeepIotics website is now live on Hostinger!**