// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   base: "/Personal-Portfolio"
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// Get the repository name from environment variables or directly define it
// Make sure this matches your GitHub repository name exactly!
// const repoName = "Personal-Portfolio"; // <<< REPLACE WITH YOUR ACTUAL REPO NAME

export default defineConfig(({ command }) => {
  // const isProd = command === 'build'; // Check if it's a build command

  return {
    plugins: [react(),tailwindcss()],
    // Set base path dynamically
    // base: isProd ? `/${repoName}/` : '/', 
  };
});