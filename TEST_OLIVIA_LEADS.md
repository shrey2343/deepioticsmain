# 🧪 Testing Olivia Lead Generation

## Quick Test Guide

### 1️⃣ Open Website
- Go to your Deepiotics website
- Look for Olivia bot in bottom-right corner
- Click to open chat

### 2️⃣ Trigger Lead Form

**Try these messages:**
```
"I want to book a call"
"Can we schedule a meeting?"
"I'm interested in your services"
"What's your pricing?"
"I need a demo"
"Help me get started"
"I want to discuss a project"
```

**Or click:**
- 📞 Book a Call (quick action button)

### 3️⃣ Fill the Form

**Test Data:**
```
Name: John Doe
Email: john.doe@example.com
Phone: +919876543210
```

### 4️⃣ Submit & Verify

**What should happen:**
1. ✅ Form submits successfully
2. ✅ Success message appears in chat
3. ✅ Olivia speaks confirmation (if voice enabled)
4. ✅ Form closes automatically
5. ✅ You can continue chatting

### 5️⃣ Check HubSpot

**Go to HubSpot:**
1. Login to https://app.hubspot.com
2. Navigate to Contacts
3. Look for "John Doe" (or your test name)
4. Check contact properties:
   - Lead Source: "Deepiotics Website - Olivia Bot"
   - Form: 973bf6d5-1212-46d6-b866-8bf09df07006
   - Page: Current page URL

### 6️⃣ Email Notification

**Check your email:**
- HubSpot should send notification
- Subject: "New form submission from Deepiotics"
- Contains lead details

---

## 🐛 Troubleshooting

### Form doesn't appear?
- Check console for errors
- Verify trigger words are correct
- Try clicking "📞 Book a Call" button

### Submission fails?
- Check internet connection
- Verify HubSpot form ID is correct
- Check browser console for API errors
- Ensure CORS is enabled in HubSpot

### Lead not in HubSpot?
- Wait 1-2 minutes for sync
- Check spam/junk folder for notifications
- Verify form ID: 973bf6d5-1212-46d6-b866-8bf09df07006
- Check HubSpot form settings

### Phone validation error?
- Must include country code (e.g., +91)
- Format: +[country code][number]
- Example: +919876543210

---

## 📊 Expected Results

### In Chat:
```
User: "I want to book a call"

Olivia: "I'd love to connect you with our team! 🎯

Let me collect your details so we can schedule a free AI strategy call with you.

Please fill in the form below and we'll reach out within 24 hours."

[Lead Form Appears]

[After Submission]

Olivia: "🎉 Thank you John Doe! Your details have been submitted successfully.

Our team will contact you within 24 hours to discuss your AI strategy.

In the meantime, feel free to ask me anything about our services!"
```

### In HubSpot:
```
Contact: John Doe
Email: john.doe@example.com
Phone: +919876543210
Lead Source: Deepiotics Website - Olivia Bot
Form Submission: ✅
Date: [Current Date/Time]
```

---

## ✅ Success Criteria

- [ ] Lead form appears on trigger words
- [ ] Form validates all fields correctly
- [ ] Submission shows loading state
- [ ] Success message appears after submit
- [ ] Lead appears in HubSpot within 2 minutes
- [ ] Lead source is correctly tagged
- [ ] Email notification received
- [ ] Form doesn't appear again after success
- [ ] User can continue chatting normally

---

## 🎯 Production Testing

**Before going live:**
1. Test with real email addresses
2. Verify HubSpot workflow triggers
3. Check email notification templates
4. Test on mobile devices
5. Test on different browsers (Chrome, Safari, Firefox)
6. Verify lead assignment rules in HubSpot
7. Test error scenarios (network failure, invalid data)

---

**Happy Testing! 🚀**
