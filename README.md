# Personal Portfolio - Prabath Jayasuriya

This repository contains the source for my personal portfolio website, hosted with GitHub Pages at:

[https://Prabath397.github.io](https://Prabath397.github.io)

The site presents my software engineering background, selected work, education, experience, technical skills, downloadable CV, and contact links. It is built as a lightweight static website using HTML, CSS, and JavaScript.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Dark and light theme toggle with saved user preference
- Accessible navigation with mobile menu, skip link, active section highlighting, and back-to-top control
- Hero section with profile image, role summary, portfolio actions, and CV download
- About, selected work, experience, education, skills, and contact sections
- Live GitHub repository feed using the GitHub REST API
- Contact form that opens a pre-filled email message
- SEO and sharing metadata, including Open Graph tags and JSON-LD structured data

## Tech Stack

- HTML5
- CSS3 with custom properties, responsive grid/flex layouts, and media queries
- JavaScript ES6+
- GitHub REST API
- Font Awesome 6.4.0
- Google Fonts: Inter
- GitHub Pages

## Project Structure

```text
.
|-- index.html      # Main page markup and metadata
|-- style.css       # Theme, layout, responsive, and component styles
|-- script.js       # Theme toggle, navigation behavior, GitHub feed, and contact form logic
|-- profile.jpg     # Profile image used across the site
|-- MyNewCV.pdf     # Downloadable CV
|-- LICENSE.txt
`-- README.md
```

## Local Preview

Because this is a static site, you can preview it by opening `index.html` in a browser.

For a local server preview, run one of these commands from the repository root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

The site is designed for GitHub Pages. Updates pushed to the repository's publishing branch will be served at the live portfolio URL after GitHub Pages finishes deployment.

## Contact

- Email: [prabathjayasuriya2003@gmail.com](mailto:prabathjayasuriya2003@gmail.com)
- GitHub: [Prabath397](https://github.com/Prabath397)
- LinkedIn: [prabath-jayasuriya](https://www.linkedin.com/in/prabath-jayasuriya)

Thanks for visiting this portfolio repository.
