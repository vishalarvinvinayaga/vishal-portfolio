# Modern Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, interactive components, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scroll animations and hover effects using Framer Motion
- **Contact Form**: Integrated with Formspree for form handling
- **Timeline**: Interactive timeline showing education and work experience
- **Projects Showcase**: Responsive grid of project cards with GitHub links
- **Resume Section**: PDF viewer and download functionality
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library
- **Formspree** - Form handling service

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume PDF file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Timeline.jsx    # Timeline component
│   │   ├── ProjectCard.jsx # Project card component
│   │   ├── ContactForm.jsx # Contact form component
│   │   └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── Home.jsx        # Home page with hero and about sections
│   │   ├── Projects.jsx    # Projects showcase page
│   │   ├── Resume.jsx      # Resume page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles and Tailwind imports
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Home.jsx** - Update name, tagline, and about section
2. **Timeline.jsx** - Update education and work experience
3. **Projects.jsx** - Update project details and links
4. **Resume.jsx** - Update skills, experience, and education
5. **Contact.jsx** - Update contact information
6. **Footer.jsx** - Update social media links

### Formspree Integration

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `ContactForm.jsx` with your actual form ID

### Resume PDF

1. Place your resume PDF file in the `public/` folder
2. Name it `resume.pdf`

### Social Media Links

Update the following links in the components:
- GitHub profile URL
- LinkedIn profile URL
- Email address
- Phone number
- Location

## 🎨 Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Update the primary color palette in `tailwind.config.js`
- **Fonts**: Change the font family in `tailwind.config.js`
- **Animations**: Modify animation durations and effects in the components

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive grid layouts
- Touch-friendly interactions

## 🚀 Deployment

### GitHub Pages

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages section
   - Select source as "GitHub Actions"

### Other Platforms

The project can be deployed to any static hosting platform:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Note**: Remember to replace all placeholder content (your name, links, etc.) with your actual information before deploying.
