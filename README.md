# Alisha Mathias - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio showcases Alisha Mathias's projects, skills, achievements, and educational background.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with elegant animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, parallax scrolling, and smooth transitions
- **Contact Form**: Functional contact form with validation
- **Download Resume**: Direct download link for resume PDF
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS (for contact form)
- **Deployment**: Netlify/Vercel ready

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Alisha_s_Resume.pdf
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeProvider.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Colors and Themes

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize primary colors
  },
  accent: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    cyan: '#06b6d4',
  }
}
```

### Content Updates

1. **Personal Information**: Update the content in each component file
2. **Projects**: Modify the `projects` array in `src/components/Projects.jsx`
3. **Skills**: Update the `skillCategories` array in `src/components/Skills.jsx`
4. **Contact Info**: Change contact details in `src/components/Contact.jsx`
5. **Resume**: Replace `public/Alisha_s_Resume.pdf` with your resume

### Images

- Replace the avatar in the Hero section with your photo
- Add project screenshots to the Projects section
- Update any other images as needed

## 📱 Sections

1. **Hero**: Introduction with photo and call-to-action buttons
2. **About**: Bio and skills overview
3. **Projects**: Featured projects with descriptions and links
4. **Skills**: Technical skills with progress indicators
5. **Certifications**: Achievements and certifications
6. **Education**: Academic background and achievements
7. **Contact**: Contact form and social links
8. **Footer**: Quick links and additional information

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and build the project
3. Your site will be live at `https://your-project.vercel.app`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Sign up for EmailJS
2. Create an email service
3. Get your service ID, template ID, and public key
4. Update the EmailJS configuration in the Contact component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Alisha Mathias**
- GitHub: [@alisham30](https://github.com/alisham30)
- LinkedIn: [Alisha Mathias](https://linkedin.com/in/alisha-mathias)
- Email: alisha.mathias@email.com

---

⭐ If you found this portfolio helpful, please give it a star!