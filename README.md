# Prabath Jayasuriya Portfolio

Modern personal portfolio website for **Prabath Udayanga Jayasuriya**, a Software Engineering student in Sri Lanka. The site presents my background, selected work, experience, education, certifications, technical skills, downloadable CV, and contact links in a clean single-page layout.

Live site: [https://Prabath397.github.io](https://Prabath397.github.io)

## Overview

This repository powers my GitHub Pages portfolio. It is built as a lightweight static website using HTML, CSS, and JavaScript, with no build step required.

The portfolio is designed to be fast, responsive, accessible, and easy to maintain. It includes a professional landing section, live GitHub project feed, certification previews, and recruiter-friendly contact actions.

## Highlights

- Responsive single-page portfolio for desktop, tablet, and mobile
- Dark and light theme toggle with saved user preference
- Accessible navigation with skip link, mobile menu, active section state, and back-to-top button
- Hero section with profile image, role summary, contact actions, and downloadable CV
- About, Work, Experience, Education, Certifications, Skills, and Contact sections
- Featured portfolio project plus live GitHub repository feed using the GitHub REST API
- Certification previews for cloud computing and cybersecurity learning achievements
- Contact form that opens a pre-filled email message
- SEO, Open Graph metadata, favicon, and JSON-LD structured data

## Site Sections

```text
Home
About
Work
Experience
Education
Certifications
Skills
Contact
```

## Tech Stack

- HTML5
- CSS3 with custom properties, responsive layouts, and media queries
- JavaScript ES6+
- GitHub REST API
- Font Awesome 6.4.0
- Google Fonts: Inter
- GitHub Pages

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- favicon.svg
|-- profile.png
|-- profile-nav.png
|-- MyNewCV.pdf
|-- CertificateOfCompletion_Cloud Computing Understanding Core Concepts (2).pdf
|-- CertificateOfCompletion_Cybersecurity with Cloud Computing.pdf
|-- LICENSE.txt
`-- README.md
```

## Key Files

- `index.html` contains the page structure, metadata, content sections, and structured data.
- `style.css` contains the visual theme, responsive layouts, section styling, and component styles.
- `script.js` handles theme switching, mobile navigation, active section highlighting, GitHub repository loading, and contact form behavior.
- `MyNewCV.pdf` is the downloadable CV linked from the site.
- The certificate PDF files are used in the Certifications section previews and LinkedIn certificate actions.

## Local Preview

Because this is a static website, you can open `index.html` directly in a browser.

For a local server preview, run this from the repository root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

The portfolio is hosted with GitHub Pages. Any updates pushed to the configured publishing branch will be deployed automatically after GitHub Pages finishes processing the repository.

## Contact

- Email: [prabathjayasuriya2003@gmail.com](mailto:prabathjayasuriya2003@gmail.com)
- GitHub: [Prabath397](https://github.com/Prabath397)
- LinkedIn: [prabath-jayasuriya](https://www.linkedin.com/in/prabath-jayasuriya)

## License

This project includes a local license file. See [LICENSE.txt](LICENSE.txt) for details.
