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
  title: "Bloxagon Fortress: Source",

  // Top bar
  siteName: "bloxagonfortress.com",
  topLinks: [
    { label: "Roblox",    url: "https://www.roblox.com/games/5937249539/Blox-Fortress-2" },
    { label: "Wiki",      url: "https://wiki.teamfortress.com/wiki/Main_Page" },
    { label: "Community", url: "https://discord.gg/pRbb8pPYbf" },
  ],

  // Hero: put your character image files in the "images" folder, then list
  // them here left to right, e.g.  "images/sniper.png", "images/pyro.png"
  // While this list is empty, the dashed placeholder text shows instead.
  sprites: [
    "images/mercs.png",
  ],
  heroPlaceholder: "[CHARACTER LINE-UP ART]",

  // Orange banner
  banner: {
    brand: "BLOXAGON FORTRESS: SOURCE",
    headline: "PLAY NOW!",
    buttonLabel: "PLAY IT NOW ON ROBLOX!",
    buttonUrl: "https://www.roblox.com/games/5937249539/Blox-Fortress-2",   // <- paste your Roblox game link here
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
    { id: "news",    label: "News",    isNew: false },
    { id: "updates", label: "Updates", isNew: false },
  ],

  // POSTS. Newest first. To add a post, copy one whole { ... }, line and
  // paste it at the top of the right list.
  posts: {
    blog: [
      {title: "THE SITE'S RELEASE!", date: "10/11/2026 - BF:S Team", text: "We have officially released the site!" }
    ],
    news: [
      {title: "SITE HAS BEEN RELEASED!", date: "10/11/2026 - BF:S Team", text: "We are happy to announce that the game has a site now." }
    ],
    updates: [
      // { title: "[UPDATE NAME] - [VERSION]", date: "[DATE] - Patch notes", text: "[Patch notes go here.]\n[Second line.]" },
    ],
  },

  // Right-hand column
  promo: { label: "WORKSHOP!", url: "#" },
  tiles: [
    { label: "Official Wiki",     url: "https://wiki.teamfortress.com/wiki/Main_Page" },
    { label: "Item Shop",         url: "https://backpack.tf/" },
    { label: "Community Discord", url: "https://discord.gg/pRbb8pPYbf" },
    { label: "Game Hub",          url: "#" },
  ],

  // Footer
  footerLeft: "Made by SKARR Studio",
  footerRight: "This is not Valve's Team Fortress 2, neither we are trying to replace it, it's just a fan project!",
};
