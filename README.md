# RAHMAN ARTS | Professional Painting Services

![Rahman Arts](https://kathir073.github.io/rahman_arts/logo2.png)

Welcome to the **Rahman Arts** official website repository! This is a modern, high-performance portfolio and service website built to showcase professional painting services including 3D Optical Illusions, Outdoor Murals, Interior Wall Decor, Realistic Portraits, and Commercial Branding.

🔗 **Live Site:** [https://kathir073.github.io/rahman_arts/](https://kathir073.github.io/rahman_arts/)

## 🚀 Tech Stack

This project is built with a modern web stack to ensure top-tier performance, rich animations, and excellent SEO:

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **3D Elements:** [Three.js](https://threejs.org/) & React Three Fiber
- **Media Management:** [Cloudinary](https://cloudinary.com/) (Optimized images & videos)
- **Forms & Validation:** React Hook Form + Zod
- **Icons:** Lucide React

## 🛠️ Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
```

### Environment Variables

To run the project locally and connect to Cloudinary for images and videos, you will need to create a `.env.local` file in the root of the project with the following variables:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

*(Note: The `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` are only required if you plan to use the `upload-to-cloudinary.js` script to batch upload media).*

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site. The application auto-updates as you modify the files in the `src/` directory.

## ☁️ Media Management (Cloudinary)

This project uses **Cloudinary** to host and optimize all heavy media assets (images and videos). 

To upload new assets to your Cloudinary account directly from the local `/public/images` and `/public/videos` directories, a utility script is provided.

1. Ensure your `.env.local` is configured with your full API credentials.
2. Run the upload script:

```bash
node upload-to-cloudinary.js
```

Once uploaded, the `CldImage` and `CldVideoPlayer` components in the application will automatically serve the optimized versions of your media based on their filenames.

## 📦 Deployment (GitHub Pages)

This project is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch. 

Deployment is handled via the `.github/workflows/deploy.yml` GitHub Action. The Next.js app is configured to use `output: "export"` in `next.config.ts` to generate a fully static site that is then pushed to the `gh-pages` environment.

## 📝 License

This project is proprietary and intended for the exclusive use of Rahman Arts.
