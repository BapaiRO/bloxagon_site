// =====================================================================
//  EDIT THIS FILE to change any text, link or post on your site.
//  Nothing else needs touching.
//
//  Rules (so the site doesn't break):
//   - Keep every piece of text inside its "quotes".
//   - Don't type a straight double quote (") inside text. Use ' or “ ” instead.
//   - Keep the commas between items. Don't delete { } [ ] brackets.
//   - A line break inside post text is written as \n
//   - Links: use full addresses like "https://www.roblox.com/games/..."
//     or "#" for "goes nowhere yet".
// =====================================================================

const SITE = {
  // Browser tab title
  title: "Team Fortress 2 on Roblox",

  // Top bar
  siteName: "[YOURSITE].com",
  topLinks: [
    { label: "Roblox",    url: "#" },
    { label: "Wiki",      url: "#" },
    { label: "Community", url: "#" },
  ],

  // Hero: put your character image files in the "images" folder, then list
  // them here left to right, e.g.  "images/sniper.png", "images/pyro.png"
  // While this list is empty, the dashed placeholder text shows instead.
  sprites: [
    // "images/sniper.png",
  ],
  heroPlaceholder: "[CHARACTER LINE-UP ART]",

  // Orange banner
  banner: {
    brand: "TEAM FORTRESS 2",
    headline: "PLAY NOW!",
    buttonLabel: "GET IT NOW ON ROBLOX",
    buttonUrl: "#",   // <- paste your Roblox game link here
  },

  // Menu row above the posts
  nav: [
    { label: "HOME",    url: "#" },
    { label: "VIDEOS",  url: "#" },
    { label: "COMICS",  url: "#" },
    { label: "HISTORY", url: "#" },
    { label: "ARTWORK", url: "#" },
  ],

  // Tabs. Set isNew to false (or delete it) to remove the orange NEW badge.
  tabs: [
    { id: "blog",    label: "Blog" },
    { id: "news",    label: "News",    isNew: true },
    { id: "updates", label: "Updates", isNew: true },
  ],

  // POSTS. Newest first. To add a post, copy one whole { ... }, line and
  // paste it at the top of the right list.
  posts: {
    blog: [
      { title: "[BLOG POST TITLE]", date: "[DATE] - [STUDIO] Team", text: "[Post text goes here.]" },
      { title: "[BLOG POST TITLE]", date: "[DATE] - [STUDIO] Team", text: "[Post text goes here.]" },
      { title: "[BLOG POST TITLE]", date: "[DATE] - [STUDIO] Team", text: "[Post text goes here.]" },
    ],
    news: [
      { title: "[NEWS HEADLINE]", date: "[DATE] - [STUDIO] Team", text: "[News text goes here.]" },
      { title: "[NEWS HEADLINE]", date: "[DATE] - [STUDIO] Team", text: "[News text goes here.]" },
      { title: "[NEWS HEADLINE]", date: "[DATE] - [STUDIO] Team", text: "[News text goes here.]" },
    ],
    updates: [
      { title: "[UPDATE NAME] - [VERSION]", date: "[DATE] - Patch notes", text: "[Patch notes go here.]\n[Second line.]" },
      { title: "[UPDATE NAME] - [VERSION]", date: "[DATE] - Patch notes", text: "[Patch notes go here.]" },
      { title: "[UPDATE NAME] - [VERSION]", date: "[DATE] - Patch notes", text: "[Patch notes go here.]" },
    ],
  },

  // Right-hand column
  promo: { label: "[PROMO TITLE]", url: "#" },
  tiles: [
    { label: "Official Wiki",     url: "#" },
    { label: "Item Shop",         url: "#" },
    { label: "Community Discord", url: "#" },
    { label: "Game Hub",          url: "#" },
  ],

  // Footer
  footerLeft: "Made by SKARR Studio",
  footerRight: "[VALVE LICENSE NOTICE]",
};
