import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

dotenv.config();

export default defineConfig({
    base: '/Check-it/', // добавляем базовый URL
    plugins: [react()],
    define: {
        "process.env": process.env,
    },
    build: {
        outDir: "build",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
        },
    },
});
