import { defineConfig } from "./src/config/init-config.ts";

export default defineConfig({
  feedUrls: [
    
  ],
  feed_concurrency: 4,
  job_concurrency: 8,
  prefer_subtitle_lang: ["zh-Hant", "zh-Hans", "ja"],
  baseFolder: "BANGUMI",
  notifier: {
    type: "telegram",
    user_id: Deno.env.get("TELEGRAM_USERID") ?? "",
    token: Deno.env.get("TELEGRAM_TOKEN") ?? "",
  },
});
