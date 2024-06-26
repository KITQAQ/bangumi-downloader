import { defineConfig } from "./src/config/init-config.ts";

export default defineConfig({
  feedUrls: [
    "https://mikanani.me/RSS/Bangumi?bangumiId=3290&subgroupid=583",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3344&subgroupid=583",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3305&subgroupid=622",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3330&subgroupid=634",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3299&subgroupid=583",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3296&subgroupid=583",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3298&subgroupid=382",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3291&subgroupid=583",
    "https://mikanani.me/RSS/Bangumi?bangumiId=3240&subgroupid=634",
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
