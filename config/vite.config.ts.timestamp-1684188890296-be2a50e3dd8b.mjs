// config/vite.config.ts
import { defineConfig } from "file:///Users/marie/Documents/MTI/PLIC/FairWearMobileApp/node_modules/vite/dist/node/index.js";
import mkcert from "file:///Users/marie/Documents/MTI/PLIC/FairWearMobileApp/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import react from "file:///Users/marie/Documents/MTI/PLIC/FairWearMobileApp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///Users/marie/Documents/MTI/PLIC/FairWearMobileApp/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig({
  server: { https: true },
  plugins: [
    mkcert(),
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "FairWearApp",
        short_name: "FairWear",
        description: "Scanner for environmental and ethical clothing.",
        icons: [
          {
            src: "logo192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "logo512.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#e8ebf2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait"
      },
      devOptions: {
        enabled: true,
        type: "module"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY29uZmlnL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21hcmllL0RvY3VtZW50cy9NVEkvUExJQy9GYWlyV2Vhck1vYmlsZUFwcC9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYXJpZS9Eb2N1bWVudHMvTVRJL1BMSUMvRmFpcldlYXJNb2JpbGVBcHAvY29uZmlnL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYXJpZS9Eb2N1bWVudHMvTVRJL1BMSUMvRmFpcldlYXJNb2JpbGVBcHAvY29uZmlnL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHt9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9ICBmcm9tICd2aXRlJ1xuaW1wb3J0IG1rY2VydCBmcm9tICd2aXRlLXBsdWdpbi1ta2NlcnQnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi4vcHVibGljL21hbmlmZXN0Lmpzb24nXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgc2VydmVyOiB7IGh0dHBzOiB0cnVlIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBta2NlcnQoKSxcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgVml0ZVBXQSh7XG4gICAgICAgICAgICByZWdpc3RlclR5cGU6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLmljb1wiLCBcImFwcGxlLXRvdWNoLWljb24ucG5nXCIsIFwibWFza2VkLWljb24uc3ZnXCJdLFxuICAgICAgICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZhaXJXZWFyQXBwXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJGYWlyV2VhclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjYW5uZXIgZm9yIGVudmlyb25tZW50YWwgYW5kIGV0aGljYWwgY2xvdGhpbmcuXCIsXG4gICAgICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImxvZ28xOTIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJsb2dvNTEyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwibG9nbzUxMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3NlOiBcImFueSBtYXNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdGhlbWVfY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2U4ZWJmMlwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBcIi9cIixcbiAgICAgICAgICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0pXG4gICAgXSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQXFCO0FBQzlCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBT3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFFBQVEsRUFBRSxPQUFPLEtBQUs7QUFBQSxFQUN0QixTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSx3QkFBd0IsaUJBQWlCO0FBQUEsTUFDeEUsVUFBVTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0g7QUFBQSxZQUNJLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0ksS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDSSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDYjtBQUFBLFFBRUo7QUFBQSxRQUNBLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLGFBQWE7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLE1BQ1Y7QUFBQSxJQUVKLENBQUM7QUFBQSxFQUNMO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
