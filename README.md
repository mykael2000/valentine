# 💝 Valentine's Day Website

A beautiful, interactive "Will you be my Valentine?" website designed with love for My Oasis.

## 🌟 Features

This romantic website includes all the special touches to make your Valentine's Day proposal unforgettable:

### Interactive Elements
- ✨ **Animated Entrance** - Floating hearts and fade-in effects on page load
- 💖 **The Big Question** - "Will you be my Valentine?" prominently displayed
- 🎯 **Interactive Buttons**:
  - **"Yes!" button** - Easy to click, inviting, with heartbeat animation
  - **"No" button** - Playfully runs away when you try to hover or click it!
- 🎊 **Celebration Effects** - All triggered when "Yes" is clicked

### Special Effects (Triggered on "Yes" Click)
1. 🎉 **Confetti Explosion** - 100+ colorful confetti pieces fill the screen
2. 🎆 **Fireworks Display** - Beautiful animated fireworks burst across the page
3. 💕 **Hearts Explosion** - Hearts burst from the center and float away
4. 🎵 **Background Music** - Romantic music with toggle control (mute/unmute)
5. 💘 **Cute Animated Character** - Bouncing cupid emoji appears
6. 📸 **Photo Gallery** - Carousel with 5 placeholder romantic images
7. 💌 **Love Letter Reveal** - Sweet romantic message appears
8. 🌸 **Falling Rose Petals** - Continuous gentle animation in background
9. ❤️ **Custom Heart Cursor** - Heart-shaped cursor throughout

### Design Highlights
- 📱 **Mobile-First Design** - Optimized for phone screens (320px - 428px)
- 🎨 **Romantic Color Palette** - Soft pinks, romantic reds, and elegant whites
- ✍️ **Sweet Messages** - Multiple romantic write-ups using "My Oasis" as the term of endearment
- 🎭 **Smooth Animations** - Butter-smooth CSS and JavaScript animations
- 🖱️ **Easter Egg** - Hearts appear wherever you click!

## 📁 File Structure

```
valentine/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Add Valentine's website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/valentine/`

### Option 2: Netlify (Also Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop your project folder
4. Get instant deployment with custom URL!

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Import your repository
4. Deploy automatically!

### Option 4: Local Testing

Simply open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit: `http://localhost:8000`

## 🎨 Customization Guide

### Replace Placeholder Photos

The gallery currently uses placeholder SVG images. To add your own photos:

1. **Prepare Your Photos**:
   - Use 3-5 personal romantic photos
   - Recommended size: 300-400px wide
   - Format: JPG or PNG

2. **Add Photos to Project**:
   - Create an `images` folder in your project
   - Add your photos: `photo1.jpg`, `photo2.jpg`, etc.

3. **Update HTML** (in `index.html`):
   ```html
   <!-- Replace the data:image/svg+xml... src with: -->
   <img src="images/photo1.jpg" alt="Description">
   ```

4. **Update Captions**:
   - Edit the `gallery-caption` text for each slide

### Customize Messages

All messages can be edited in `index.html`:

- **Opening message**: Lines 32-44
- **The big question**: Line 49
- **Love letter**: Lines 68-93
- **Gallery captions**: Throughout gallery section

### Change "My Oasis" to Another Name

Search and replace "My Oasis" or "Oasis" with your preferred term:
- In `index.html`: All message sections
- Keep it romantic and personal!

### Add Your Own Music

1. **Get a Music File**:
   - Use a royalty-free romantic song
   - Format: MP3 or WAV
   - Add to project folder

2. **Update JavaScript** (in `script.js`, line 338):
   ```javascript
   backgroundMusic = new Audio('your-song.mp3');
   ```

### Adjust Colors

Edit color variables in `styles.css` (lines 7-15):
```css
:root {
    --primary-pink: #FFB6C1;      /* Change to your preference */
    --romantic-red: #DC143C;       /* Adjust red tones */
    /* ... more colors ... */
}
```

### Disable Specific Effects

In `script.js`, comment out effects you don't want in the `handleYesClick` function (lines 153-165):
```javascript
// setTimeout(() => triggerConfetti(), 200);  // Disable confetti
// setTimeout(() => triggerFireworks(), 500); // Disable fireworks
```

## 📱 Mobile Optimization

The site is designed **mobile-first** for the best experience on phones:
- Optimized for screens 320px - 428px wide
- Touch-friendly buttons and controls
- Smooth performance on mobile devices
- Works great on iPhone and Android

Also fully responsive for tablets and desktops!

## 🎯 Browser Support

Works perfectly on:
- ✅ Chrome/Edge (recommended)
- ✅ Safari (iOS and macOS)
- ✅ Firefox
- ✅ Samsung Internet
- ✅ Opera

## 💡 Tips for Best Experience

1. **Test Before Sending**: Open the site yourself first to make sure everything works
2. **Use HTTPS**: Deploy to GitHub Pages/Netlify for secure HTTPS connection
3. **Share the Link**: Send the link via text/WhatsApp for maximum impact
4. **Timing**: Share at a romantic moment for extra effect!
5. **Music Note**: Some browsers block autoplay - she may need to click the music button

## 🐛 Troubleshooting

**Music won't autoplay?**
- This is normal - browsers block autoplay
- She can click the music button (🔊) to start it

**Animations lagging?**
- Close other browser tabs
- Use Chrome for best performance
- Ensure phone isn't in low-power mode

**"No" button not moving?**
- This is intentional and playful!
- It will run away when she tries to hover or tap it
- Make sure JavaScript is enabled

**Photos not showing?**
- Check image paths in HTML
- Ensure images are in the correct folder
- Check image file names match exactly

## 🎨 Color Palette Reference

Current romantic color scheme:
- Primary Pink: `#FFB6C1`
- Light Pink: `#FFC0CB`
- Hot Pink: `#FF69B4`
- Romantic Red: `#DC143C`
- Soft Red: `#FF6B9D`
- Background: Gradient of creams and light pinks

## 📝 License

This is a personal romantic project - feel free to use and customize it for your own Valentine! ❤️

## 💌 Final Notes

This website was created with love and attention to every detail. Every animation, every color, every word was chosen to create a magical moment.

When she clicks "Yes!", the celebration will be unforgettable! 🎉💖

**Made with 💝 for My Oasis**

---

### Need Help?

If you need to customize further or run into issues:
1. Check the customization guide above
2. Review the code comments in each file
3. Test changes locally before deploying
4. Remember: the most important thing is the love behind it! 💕

Good luck, and happy Valentine's Day! 🌹✨
