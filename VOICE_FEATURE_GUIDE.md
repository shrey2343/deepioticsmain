# 🎤 Olivia Voice Feature - Troubleshooting Guide

## Issue: Voice Input Not Working on HTTPS (Production)

### Why This Happens
Modern browsers require **explicit microphone permission** on HTTPS sites for security reasons. On localhost (HTTP), browsers are more lenient, but on production HTTPS sites like `https://qa.deepiotics.com/`, strict permissions apply.

---

## ✅ What We Fixed

### 1. **Explicit Permission Request**
- Added `navigator.mediaDevices.getUserMedia()` call before starting voice recognition
- This triggers the browser's permission popup

### 2. **Permission State Tracking**
- Added `micPermission` state to track: `'granted'`, `'denied'`, or `'prompt'`
- Visual indicator (red dot) when permission is denied

### 3. **Error Handling**
- Proper error messages for different scenarios:
  - ❌ Microphone access denied
  - 🔇 No speech detected
  - 🌐 Network error
  - 🎤 No microphone found

### 4. **User Feedback**
- Error messages displayed in red alert box
- Visual indicators on mic button
- Clear instructions for users

---

## 🚀 How to Test After Deployment

### Step 1: Deploy to Hostinger
```bash
npm run build
# Upload dist folder contents to public_html
```

### Step 2: Test on https://qa.deepiotics.com/

1. **Open the website**
2. **Click on Olivia chatbot** (bottom right)
3. **Click the microphone button** 🎤
4. **Browser will show permission popup** - Click "Allow"
5. **Speak your message** - Red pulsing mic indicates listening
6. **Voice should be transcribed** and Olivia responds

---

## 🔧 If Voice Still Doesn't Work

### Check Browser Permissions

#### Chrome/Edge:
1. Click the **lock icon** 🔒 in address bar
2. Go to **Site Settings**
3. Find **Microphone** → Set to **Allow**
4. Refresh the page

#### Firefox:
1. Click the **lock icon** 🔒 in address bar
2. Click **Connection secure** → **More information**
3. Go to **Permissions** tab
4. Find **Use the Microphone** → Check **Allow**
5. Refresh the page

#### Safari:
1. Go to **Safari** → **Settings for This Website**
2. Find **Microphone** → Set to **Allow**
3. Refresh the page

---

## 🌐 Browser Compatibility

| Browser | Voice Input | Voice Output |
|---------|-------------|--------------|
| Chrome  | ✅ Yes      | ✅ Yes       |
| Edge    | ✅ Yes      | ✅ Yes       |
| Firefox | ⚠️ Limited  | ✅ Yes       |
| Safari  | ✅ Yes      | ✅ Yes       |
| Opera   | ✅ Yes      | ✅ Yes       |

**Note:** Firefox has limited Web Speech API support. Voice input may not work reliably.

---

## 🔐 Security Requirements

### HTTPS is REQUIRED for:
- ✅ Microphone access
- ✅ Camera access
- ✅ Geolocation
- ✅ Other sensitive APIs

### Your site must have:
- ✅ Valid SSL certificate (Hostinger provides this)
- ✅ HTTPS enabled (not HTTP)
- ✅ Proper CORS headers (already configured in .htaccess)

---

## 📱 Mobile Testing

### Android (Chrome):
1. Open `https://qa.deepiotics.com/`
2. Tap Olivia chatbot
3. Tap microphone button
4. Allow microphone permission
5. Speak clearly

### iOS (Safari):
1. Open `https://qa.deepiotics.com/`
2. Tap Olivia chatbot
3. Tap microphone button
4. Allow microphone permission in popup
5. Speak clearly

---

## 🐛 Common Issues & Solutions

### Issue 1: "Microphone access denied"
**Solution:** 
- Check browser permissions (see above)
- Clear site data and try again
- Try in incognito/private mode first

### Issue 2: "No speech detected"
**Solution:**
- Check if microphone is working (test in other apps)
- Speak louder and clearer
- Check microphone is not muted
- Try different microphone if available

### Issue 3: "Network error"
**Solution:**
- Check internet connection
- Disable VPN if active
- Try different network

### Issue 4: Voice works on localhost but not production
**Solution:**
- This is normal! HTTPS requires explicit permission
- Make sure SSL certificate is valid
- Check browser console for errors

---

## 🎯 Testing Checklist

Before marking as complete, test:

- [ ] Voice input works on Chrome (desktop)
- [ ] Voice input works on Edge (desktop)
- [ ] Voice input works on Safari (desktop)
- [ ] Voice input works on Chrome (Android)
- [ ] Voice input works on Safari (iOS)
- [ ] Permission popup appears on first use
- [ ] Error messages display correctly
- [ ] Voice output (Olivia speaking) works
- [ ] Mic button shows correct states
- [ ] Error can be dismissed

---

## 📞 Support

If issues persist after following this guide:
1. Check browser console for errors (F12)
2. Test in different browser
3. Contact development team with:
   - Browser name and version
   - Operating system
   - Screenshot of error
   - Browser console logs

---

## 🔄 Code Changes Made

### Files Modified:
1. `src/components/ChatbotWidget.tsx`
2. `src/components/OliviaBot.tsx`

### Key Changes:
- Added `navigator.mediaDevices.getUserMedia()` for explicit permission
- Added `micPermission` state tracking
- Added `voiceError` state for error messages
- Enhanced error handling in `recognitionRef.current.onerror`
- Added visual indicators for permission states
- Added error message UI component

---

**Last Updated:** January 2025
**Status:** ✅ Fixed and Ready for Production
