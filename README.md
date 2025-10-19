# Portfolio Website

A modern, responsive portfolio website built with React.js and Framer Motion for smooth animations and interactions.

## ✨ Features

- **Multi-Language Support**: Available in English, Arabic, and French with RTL support
- **Modern Design**: Clean and professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Professional Sections**: Hero, About, Skills, Projects, and Contact sections
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integration with social media platforms
- **Performance Optimized**: Built with modern React practices for optimal performance
- **Language Selector**: Easy language switching with persistent preferences

## 🚀 Technologies Used

- **React.js** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React i18next** - Internationalization library
- **CSS3** - Styling with CSS variables and modern features
- **HTML5** - Semantic markup

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Header.css
│   ├── Hero.js           # Hero section
│   ├── Hero.css
│   ├── About.js          # About section
│   ├── About.css
│   ├── Skills.js         # Skills section
│   ├── Skills.css
│   ├── Projects.js       # Projects showcase
│   ├── Projects.css
│   ├── Contact.js        # Contact form
│   ├── Contact.css
│   ├── LanguageSelector.js # Language selector component
│   └── LanguageSelector.css
├── i18n/
│   ├── index.js          # i18n configuration
│   └── locales/
│       ├── en.json       # English translations
│       ├── ar.json       # Arabic translations
│       └── fr.json       # French translations
├── App.js                # Main app component
├── App.css               # Global styles
├── index.js              # App entry point
└── index.css             # Global CSS
```

## 🌍 Multi-Language Support

The portfolio website supports three languages:

- **English** (en) - Default language
- **Arabic** (ar) - With RTL (Right-to-Left) support
- **French** (fr) - Full translation support

### Language Features

- **Language Selector**: Located in the top-right corner with flag icons
- **Persistent Selection**: Language preference is saved in localStorage
- **RTL Support**: Arabic language automatically switches to right-to-left layout
- **Complete Translation**: All text content is translated including:
  - Navigation menu
  - Hero section
  - About section
  - Skills and technologies
  - Projects showcase
  - Contact form and information

### Adding New Languages

To add a new language:

1. Create a new translation file in `src/i18n/locales/`
2. Add the language to the `languages` array in `LanguageSelector.js`
3. Update the `resources` object in `src/i18n/index.js`
4. Add appropriate CSS for RTL if needed

### Translation Files Structure

Each translation file follows this structure:
```json
{
  "navigation": { ... },
  "hero": { ... },
  "about": { ... },
  "skills": { ... },
  "projects": { ... },
  "contact": { ... }
}
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Hero.js**: Change name, title, and description
- **About.js**: Update about text and statistics
- **Skills.js**: Modify skills and proficiency levels
- **Projects.js**: Add your own projects
- **Contact.js**: Update contact information and social links

### Styling
- **Colors**: Modify CSS variables in `App.css`
- **Fonts**: Change font imports in `index.css`
- **Layout**: Adjust grid layouts and spacing in component CSS files

### Animations
- **Framer Motion**: Customize animation variants and transitions
- **Timing**: Adjust animation durations and delays
- **Effects**: Modify hover and scroll animations

## 🌟 Key Features Explained

### 1. Smooth Scrolling Navigation
- Fixed header with smooth scroll to sections
- Mobile-responsive navigation menu
- Active section highlighting

### 2. Hero Section
- Animated text with staggered reveal
- Floating background elements
- Call-to-action buttons
- Social media links

### 3. Skills Section
- Interactive skill bars with progress animations
- Technology icons and proficiency levels
- Continuous learning section

### 4. Projects Showcase
- Filterable project categories
- Hover effects and project overlays
- Technology tags and project descriptions

### 5. Contact Form
- Functional contact form with validation
- Animated form submission
- Contact information and social links

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Dependencies issues**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   - Check for syntax errors in components
   - Verify all imports are correct
   - Ensure all required dependencies are installed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Coding! 🎉**
