const articles = {
  general: {
    status: "ok",
    totalResults: 38,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "9 benefits of consuming 3 cloves of garlic before lunch - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL3dlYi1zdG9yaWVzLzktYmVuZWZpdHMtb2YtY29uc3VtaW5nLTMtY2xvdmVzLW9mLWdhcmxpYy1iZWZvcmUtbHVuY2gvcGhvdG9zdG9yeS8xMTIwOTg3NDUuY21z0gGaAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3Mvd2ViLXN0b3JpZXMvOS1iZW5lZml0cy1vZi1jb25zdW1pbmctMy1jbG92ZXMtb2YtZ2FybGljLWJlZm9yZS1sdW5jaC9waG90b3N0b3J5LzExMjA5ODc0NS5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:30:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "CNBCTV18",
        title:
          "Apple's AI features rollout will miss upcoming iPhone software overhaul - CNBCTV18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LmNuYmN0djE4LmNvbS90ZWNobm9sb2d5L2FwcGxlLWludGVsbGlnZW5jZS1haS1mZWF0dXJlcy1yb2xsb3V0LWRlbGF5LXVwY29taW5nLWlwaG9uZS1zb2Z0d2FyZS1vdmVyaGF1bC0xOTQ1MDc2Ny5odG3SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:02:57Z",
        content: null,
      },
      {
        source: { id: null, name: "Medianews4u.com" },
        author: null,
        title:
          "HP India unveils ‘Be Unstoppable’ campaign to highlight AI PC innovation - MediaNews4U",
        description:
          "New Delhi: In the era of AI in PCs reshaping work, HP India launches 'Be Unstoppable with HP AI PCs'",
        url: "https://www.medianews4u.com/hp-india-unveils-be-unstoppable-campaign-to-highlight-ai-pc-innovation/",
        urlToImage:
          "https://www.medianews4u.com/wp-content/uploads/2024/07/HP-India.jpg",
        publishedAt: "2024-07-29T05:46:40Z",
        content:
          "New Delhi: In the era of AI in PCs reshaping work, HP India launches Be Unstoppable with HP AI PCs campaign by Lowe Lintas to educate the tech-savvy Gen-Z on the benefits of future workforce AI integ… [+2083 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Live Law - Indian Legal News",
        title:
          "BREAKING| Supreme Court Refuses To Stay HC Judgment Nullifying Bihar's 65% Quota Law At Present Stage,... - Live Law - Indian Legal News",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiowFodHRwczovL3d3dy5saXZlbGF3LmluL3RvcC1zdG9yaWVzL3N1cHJlbWUtY291cnQtcmVmdXNlcy10by1zdGF5LWhjLWp1ZGdtZW50LXN0cmlraW5nLWRvd24tYmloYXJzLTY1LXF1b3RhLWxhdy1hdC1wcmVzZW50LXN0YWdlLWFncmVlcy10by1oZWFyLXN0YXRlcy1hcHBlYWwtMjY0ODU00gGnAWh0dHBzOi8vd3d3LmxpdmVsYXcuaW4vYW1wL3RvcC1zdG9yaWVzL3N1cHJlbWUtY291cnQtcmVmdXNlcy10by1zdGF5LWhjLWp1ZGdtZW50LXN0cmlraW5nLWRvd24tYmloYXJzLTY1LXF1b3RhLWxhdy1hdC1wcmVzZW50LXN0YWdlLWFncmVlcy10by1oZWFyLXN0YXRlcy1hcHBlYWwtMjY0ODU0?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:46:16Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Weakness and fatigue: 5 warning signs of blood cancer you shouldn't ignore - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL2hlYWx0aC1uZXdzL3dlYWtuZXNzLWFuZC1mYXRpZ3VlLTUtd2FybmluZy1zaWducy1vZi1ibG9vZC1jYW5jZXIteW91LXNob3VsZG50LWlnbm9yZS9hcnRpY2xlc2hvdy8xMTIwNzAzMDcuY21z0gGwAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3MvaGVhbHRoLW5ld3Mvd2Vha25lc3MtYW5kLWZhdGlndWUtNS13YXJuaW5nLXNpZ25zLW9mLWJsb29kLWNhbmNlci15b3Utc2hvdWxkbnQtaWdub3JlL2FtcF9hcnRpY2xlc2hvdy8xMTIwNzAzMDcuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:30:00Z",
        content: null,
      },
      {
        source: { id: null, name: "Moneycontrol" },
        author: "Diya Sharma",
        title:
          "Garena Free Fire MAX redeem codes for July 29, 2024: Win free weapons, diamonds, and more rewards today - Moneycontrol",
        description:
          "Redeeming these codes unlocks various in-game rewards, including skins, weapons, and character upgrades.",
        url: "https://www.moneycontrol.com/technology/garena-free-fire-max-redeem-codes-for-july-29-2024-win-free-weapons-diamonds-and-more-rewards-today-article-12780833.html",
        urlToImage:
          "https://images.moneycontrol.com/static-mcnews/2024/07/20240729052847_garena5.jpg",
        publishedAt: "2024-07-29T05:29:25Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Delhi liquor policy case: CBI chargesheets chief minister Arvind Kejriwal - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9jYmktY2hhcmdlc2hlZXRzLWRlbGhpLWNtLWFydmluZC1rZWpyaXdhbC1pbi1hbGxlZ2VkLWV4Y2lzZS1wb2xpY3ktY2FzZS0xMDE3MjIyMjk4MjYzOTUuaHRtbNIBigFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9jYmktY2hhcmdlc2hlZXRzLWRlbGhpLWNtLWFydmluZC1rZWpyaXdhbC1pbi1hbGxlZ2VkLWV4Y2lzZS1wb2xpY3ktY2FzZS0xMDE3MjIyMjk4MjYzOTUtYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:12:26Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "Venezuela's Nicolas Maduro wins reelection for third term amid fraud allegations - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihQFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3Mvd29ybGQvdmVuZXp1ZWxhcy1uaWNvbGFzLW1hZHVyby13aW5zLXJlZWxlY3Rpb24tZm9yLXRoaXJkLXRlcm0tYW1pZC1mcmF1ZC1hbGxlZ2F0aW9ucy0xMjc4MDc3MS5odG1s0gGJAWh0dHBzOi8vd3d3Lm1vbmV5Y29udHJvbC5jb20vbmV3cy93b3JsZC92ZW5lenVlbGFzLW5pY29sYXMtbWFkdXJvLXdpbnMtcmVlbGVjdGlvbi1mb3ItdGhpcmQtdGVybS1hbWlkLWZyYXVkLWFsbGVnYXRpb25zLTEyNzgwNzcxLmh0bWwvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:07:15Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Good news for Sunita Williams! Starliner completes docked hot fire test, but NASA yet to announce return date | Mint - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiqQFodHRwczovL3d3dy5saXZlbWludC5jb20vc2NpZW5jZS9uZXdzL2dvb2QtbmV3cy1mb3Itc3VuaXRhLXdpbGxpYW1zLXN0YXJsaW5lci1jb21wbGV0ZXMtZG9ja2VkLWhvdC1maXJlLXRlc3QtYnV0LW5hc2EteWV0LXRvLWFubm91bmNlLXJldHVybi1kYXRlLWlzcy0xMTcyMjIyNTQ2MjcwMC5odG1s0gGtAWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS9zY2llbmNlL25ld3MvZ29vZC1uZXdzLWZvci1zdW5pdGEtd2lsbGlhbXMtc3RhcmxpbmVyLWNvbXBsZXRlcy1kb2NrZWQtaG90LWZpcmUtdGVzdC1idXQtbmFzYS15ZXQtdG8tYW5ub3VuY2UtcmV0dXJuLWRhdGUtaXNzL2FtcC0xMTcyMjIyNTQ2MjcwMC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:56:09Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ABP Live",
        title:
          "NYT Strands Answers For July 29: Having Trouble Guessing The Words? Here Are The Solutions - ABP Live",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijQFodHRwczovL25ld3MuYWJwbGl2ZS5jb20vZ2FtaW5nL255dC1zdHJhbmRzLWFuc3dlcnMtdG9kYXktanVseS0yOS0yMDI0LXdvcmRzLXNvbHV0aW9uLXNwYW5ncmFtLXRvZGF5LWhvdy10by1wbGF5LXdhdGNoLXZpZGVvLXR1dG9yaWFsLTE3MDY0MjTSAZEBaHR0cHM6Ly9uZXdzLmFicGxpdmUuY29tL2dhbWluZy9ueXQtc3RyYW5kcy1hbnN3ZXJzLXRvZGF5LWp1bHktMjktMjAyNC13b3Jkcy1zb2x1dGlvbi1zcGFuZ3JhbS10b2RheS1ob3ctdG8tcGxheS13YXRjaC12aWRlby10dXRvcmlhbC0xNzA2NDI0L2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:47:14Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "MLC 2024: Steven Smith, Marco Jansen star in Washington Freedom's title victory against San Francisco Unicorns - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMizQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9tYWpvci1sZWFndWUtY3JpY2tldC9tbGMtMjAyNC1zdGV2ZW4tc21pdGgtbWFyY28tamFuc2VuLXN0YXItaW4td2FzaGluZ3Rvbi1mcmVlZG9tcy10aXRsZS12aWN0b3J5LWFnYWluc3Qtc2FuLWZyYW5jaXNjby11bmljb3Jucy9hcnRpY2xlc2hvdy8xMTIwOTYyMjIuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:36:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Delhi Rau's IAS centre flooding LIVE: Delhi Police notice to MCD after 3 deaths - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMisQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9kZWxoaS1yYXVzLWlhcy1jZW50cmUtZmxvb2RpbmctbGl2ZS11cGRhdGVzLWp1bHktMjktMjAyNC1tY2Qtc2VhbHMtY29hY2hpbmctaW5zdGl0dXRlcy1iYXNlbWVudHMtMy1hc3BpcmFudHMtZGVhdGgtMTAxNzIyMjEwNzk4ODUxLmh0bWzSAbUBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2luZGlhLW5ld3MvZGVsaGktcmF1cy1pYXMtY2VudHJlLWZsb29kaW5nLWxpdmUtdXBkYXRlcy1qdWx5LTI5LTIwMjQtbWNkLXNlYWxzLWNvYWNoaW5nLWluc3RpdHV0ZXMtYmFzZW1lbnRzLTMtYXNwaXJhbnRzLWRlYXRoLTEwMTcyMjIxMDc5ODg1MS1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:25:40Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "On picnic with family, former Shiv Sena leader's son collapses, dies during group clash at Virar resort - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9jaXR5L211bWJhaS9vbi1waWNuaWMtd2l0aC1mYW1pbHktZm9ybWVyLXNoaXYtc2VuYS1sZWFkZXJzLXNvbi1kaWVzLWR1cmluZy1ncm91cC1jbGFzaC1hdC12aXJhci1yZXNvcnQvYXJ0aWNsZXNob3cvMTEyMDk1NjIzLmNtc9IBqAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9jaXR5L211bWJhaS9vbi1waWNuaWMtd2l0aC1mYW1pbHktZm9ybWVyLXNoaXYtc2VuYS1sZWFkZXJzLXNvbi1kaWVzLWR1cmluZy1ncm91cC1jbGFzaC1hdC12aXJhci1yZXNvcnQvYW1wX2FydGljbGVzaG93LzExMjA5NTYyMy5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:15:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Punjab National Bank share prices rises 7% post Q1 results: Should you Buy, Sell or Hold the stock ? | Stock Market News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipAFodHRwczovL3d3dy5saXZlbWludC5jb20vbWFya2V0L3N0b2NrLW1hcmtldC1uZXdzL3B1bmphYi1uYXRpb25hbC1iYW5rLXNoYXJlLXByaWNlLXJpc2VzLTUtcG9zdC1xMS1yZXN1bHRzLXNob3VsZC15b3UtYnV5LXNlbGwtb3ItaG9sZC10aGUtc3RvY2stMTE3MjIyMjUwODEzNzAuaHRtbNIBqAFodHRwczovL3d3dy5saXZlbWludC5jb20vbWFya2V0L3N0b2NrLW1hcmtldC1uZXdzL3B1bmphYi1uYXRpb25hbC1iYW5rLXNoYXJlLXByaWNlLXJpc2VzLTUtcG9zdC1xMS1yZXN1bHRzLXNob3VsZC15b3UtYnV5LXNlbGwtb3ItaG9sZC10aGUtc3RvY2svYW1wLTExNzIyMjI1MDgxMzcwLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:05:04Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Upstox",
        title:
          "ICICI Bank shares up 2% after Q1 net profit, NII surpass estimates - Upstox",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidmh0dHBzOi8vdXBzdG94LmNvbS9uZXdzL21hcmtldC1uZXdzL2Vhcm5pbmdzL2ljaWNpLWJhbmstc2hhcmVzLXVwLTItYWZ0ZXItcTEtcmVzdWx0cy1zdXJwYXNzLWVzdGltYXRlcy9hcnRpY2xlLTEwNTQzNy_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:03:46Z",
        content: null,
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "Entertainment Desk",
        title:
          "Khatron Ke Khiladi 14: Asim Riaz fails to do task, charges at Abhishek Kumar with a shoe; Rohit Shetty expels him, says ‘utha ke patak dunga’ - The Indian Express",
        description:
          "After an altercation with Rohit Shetty and other contestants, Asim Riaz got expelled from Khatron Ke Khiladi Season 14 for his bad behaviour and for disrespecting other contestants.",
        url: "https://indianexpress.com/article/entertainment/television/khatron-ke-khiladi-14-asim-riaz-fails-to-do-task-charges-at-abhishek-kumar-with-a-shoe-rohit-shetty-expels-him-says-utha-ke-patak-dunga-9481831/",
        urlToImage: "https://images.indianexpress.com/2024/07/Rohit_5e2afc.jpg",
        publishedAt: "2024-07-29T04:02:55Z",
        content:
          "Apart from daredevil stunts, the second episode of Khatron Ke Khiladi Season 14 was full of drama. The episode saw contestant Asim Riaz getting expelled after he had an altercation with the shows hos… [+3847 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Hyderabad: Former Chief Secretary Somesh Kumar, IIT professor, three others booked for GST violations - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipAFodHRwczovL3d3dy5saXZlbWludC5jb20vbmV3cy9pbmRpYS90ZWxhbmdhbmEtaHlkZXJhYmFkLWZvcm1lci1jaGllZi1zZWNyZXRhcnktc29tZXNoLWt1bWFyLWlpdC1wcm9mZXNzb3ItdGhyZWUtb3RoZXJzLWJvb2tlZC1mb3ItZ3N0LXZpb2xhdGlvbnMtMTE3MjIyMjUyNzIxNzkuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:01:14Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Stock market today: BSE Sensex hits lifetime high; Nifty50 just shy of 25,0o0 - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMixAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9idXNpbmVzcy9pbmRpYS1idXNpbmVzcy9zdG9jay1tYXJrZXQtdG9kYXktYnNlLXNlbnNleC1uaWZ0eTUwLWp1bHktMjktMjAyNC1kYWxhbC1zdHJlZXQtaW5kaWFuLWVxdWl0aWVzLWVhcm5pbmdzLXNlYXNvbi1nbG9iYWwtbWFya2V0cy9hcnRpY2xlc2hvdy8xMTIwOTQwMzMuY21z0gHIAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2J1c2luZXNzL2luZGlhLWJ1c2luZXNzL3N0b2NrLW1hcmtldC10b2RheS1ic2Utc2Vuc2V4LW5pZnR5NTAtanVseS0yOS0yMDI0LWRhbGFsLXN0cmVldC1pbmRpYW4tZXF1aXRpZXMtZWFybmluZ3Mtc2Vhc29uLWdsb2JhbC1tYXJrZXRzL2FtcF9hcnRpY2xlc2hvdy8xMTIwOTQwMzMuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:52:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NDTV",
        title:
          "1 Killed, 6 Injured In Mass Shooting At Park In New York: Report - NDTV",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvMS1raWxsZWQtNi1pbmp1cmVkLWluLW1hc3Mtc2hvb3RpbmctYXQtcGFyay1pbi1uZXcteW9yay1yZXBvcnQtNjIxMTM3N9IBbGh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvMS1raWxsZWQtNi1pbmp1cmVkLWluLW1hc3Mtc2hvb3RpbmctYXQtcGFyay1pbi1uZXcteW9yay1yZXBvcnQtNjIxMTM3Ny9hbXAvMQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:51:37Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India.com",
        title:
          "Paris Olympics 2024: Manu Bhaker, PV Sindhu Headline India’s Day 2 Show – In Pictures - India.com",
        description: null,
        url: "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LmluZGlhLmNvbS9waG90b3Mvc3BvcnRzL3BhcmlzLW9seW1waWNzLTIwMjQtbWFudS1iaGFrZXItcHYtc2luZGh1LWhlYWRsaW5lLWluZGlhcy1kYXktMi1zaG93LWluLXBpY3R1cmVzLTM0MTkwNi_SAYABaHR0cHM6Ly93d3cuaW5kaWEuY29tL3Bob3Rvcy9zcG9ydHMvcGFyaXMtb2x5bXBpY3MtMjAyNC1tYW51LWJoYWtlci1wdi1zaW5kaHUtaGVhZGxpbmUtaW5kaWFzLWRheS0yLXNob3ctaW4tcGljdHVyZXMtMzQxOTA2L2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:19:37Z",
        content: null,
      },
    ],
  },
  science: {
    status: "ok",
    totalResults: 43,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today NE",
        title: "Ostrich vs. Eagle: Who Will Win - India Today NE",
        description: null,
        url: "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LmluZGlhdG9kYXluZS5pbi92aXN1YWxzdG9yaWVzL3dlYnN0b3JpZXMvb3N0cmljaC12cy1lYWdsZS1jbGFzaC1vZi10aGUtYXZpYW4tdGl0YW5zLTE1ODAzMC0yOS0wNy0yMDI00gFxaHR0cHM6Ly93d3cuaW5kaWF0b2RheW5lLmluL3Zpc3VhbHN0b3JpZXMvd2Vic3Rvcmllcy9vc3RyaWNoLXZzLWVhZ2xlLWNsYXNoLW9mLXRoZS1hdmlhbi10aXRhbnMtMTU4MDMwLTI5LTA3LTIwMjQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:22:59Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Basic Tutorials",
        title:
          "ESA warns of increasing danger from space debris - Basic Tutorials",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiUmh0dHBzOi8vYmFzaWMtdHV0b3JpYWxzLmNvbS9uZXdzL2VzYS13YXJucy1vZi1pbmNyZWFzaW5nLWRhbmdlci1mcm9tLXNwYWNlLWRlYnJpcy_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:04:33Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Good news for Sunita Williams! Starliner completes docked hot fire test, but NASA yet to announce return date | Mint - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiqQFodHRwczovL3d3dy5saXZlbWludC5jb20vc2NpZW5jZS9uZXdzL2dvb2QtbmV3cy1mb3Itc3VuaXRhLXdpbGxpYW1zLXN0YXJsaW5lci1jb21wbGV0ZXMtZG9ja2VkLWhvdC1maXJlLXRlc3QtYnV0LW5hc2EteWV0LXRvLWFubm91bmNlLXJldHVybi1kYXRlLWlzcy0xMTcyMjIyNTQ2MjcwMC5odG1s0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:56:09Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "SciTechDaily",
        title:
          "New Zealand’s Endangered Birds Find Refuge in Ancient Moa Habitats - SciTechDaily",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9uZXctemVhbGFuZHMtZW5kYW5nZXJlZC1iaXJkcy1maW5kLXJlZnVnZS1pbi1hbmNpZW50LW1vYS1oYWJpdGF0cy_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:32:29Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Eco-Business",
        title:
          "Study revealing seabed minerals produce oxygen casts cloud over critical deep-sea mining negotiations - Eco-Business",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy5lY28tYnVzaW5lc3MuY29tL25ld3Mvc3R1ZHktcmV2ZWFsaW5nLXNlYWJlZC1taW5lcmFscy1wcm9kdWNlLW94eWdlbi1jYXN0cy1jbG91ZC1vdmVyLWNyaXRpY2FsLWRlZXAtc2VhLW1pbmluZy1uZWdvdGlhdGlvbnMv0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:25:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ZAWYA",
        title:
          "Earth is wobbling, days are getting longer due to climate change effects: study - ZAWYA",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijAFodHRwczovL3d3dy56YXd5YS5jb20vZW4vc3BlY2lhbC1jb3ZlcmFnZS96YXd5YS1ncmVlbi9lYXJ0aC1pcy13b2JibGluZy1kYXlzLWFyZS1nZXR0aW5nLWxvbmdlci1kdWUtdG8tY2xpbWF0ZS1jaGFuZ2UtZWZmZWN0cy1zdHVkeS1wZTFiZDM0YtIBkgFodHRwczovL3d3dy56YXd5YS5jb20vZW4vc3BlY2lhbC1jb3ZlcmFnZS96YXd5YS1ncmVlbi9lYXJ0aC1pcy13b2JibGluZy1kYXlzLWFyZS1nZXR0aW5nLWxvbmdlci1kdWUtdG8tY2xpbWF0ZS1jaGFuZ2UtZWZmZWN0cy1zdHVkeS1wZTFiZDM0Yj9hbXA9MQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:18:10Z",
        content: null,
      },
      {
        source: { id: null, name: "DNA India" },
        author: "Sonali Sharma",
        title: "10 amazing images of Moon taken by NASA - DNA India",
        description: "images of Moon taken by NASA",
        url: "https://www.dnaindia.com/web-stories/viral/10-amazing-photos-of-moon-taken-by-nasa-1722218844935",
        urlToImage: null,
        publishedAt: "2024-07-29T02:15:32Z",
        content:
          "During the total solar eclipse, the Suns corona, only visible during the total eclipse, is shown as a crown of white flares from the surface",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Perspective Magazine",
        title:
          "Scottish scientists to spend two years studying MRSA antibiotic resistance - Perspective Magazine",
        description: null,
        url: "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnBlcnNwZWN0aXZlbWVkaWEuY29tL3Njb3R0aXNoLXNjaWVudGlzdHMtdG8tc3BlbmQtdHdvLXllYXJzLXN0dWR5aW5nLW1yc2EtYW50aWJpb3RpYy1yZXNpc3RhbmNlL9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T23:05:11Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "VolcanoDiscovery",
        title:
          "Volcanic activity worldwide 28 Jul 2024: Fuego volcano, Semeru, Ibu, Dukono, Katla, Reventador, Sang... - VolcanoDiscovery",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiowFodHRwczovL3d3dy52b2xjYW5vZGlzY292ZXJ5LmNvbS9lcy92b2xjYW5vLWFjdGl2aXR5L25ld3MvMjQ4MTQ0L1ZvbGNhbmljLWFjdGl2aXR5LXdvcmxkd2lkZS0yOC1KdWwtMjAyNC1GdWVnby12b2xjYW5vLVNlbWVydS1JYnUtRHVrb25vLUthdGxhLVJldmVudGFkb3ItU2FuZy5odG1s0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T22:17:11Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "MSN",
        title: "Time-Lapse Of Sunspot AR3664 Growing Into A Giant - MSN",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3Lm1zbi5jb20vZW4tdXMvbmV3cy90ZWNobm9sb2d5L3RpbWUtbGFwc2Utb2Ytc3Vuc3BvdC1hcjM2NjQtZ3Jvd2luZy1pbnRvLWEtZ2lhbnQvdmktQkIxcU0xS0nSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T21:55:28Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NewsX",
        title:
          "Nuclear-Powered Rockets Set To Ignite The New Space Race - NewsX",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3Lm5ld3N4LmNvbS9zcGFjZS1zY2llbmNlL251Y2xlYXItcG93ZXJlZC1yb2NrZXRzLXNldC10by1pZ25pdGUtdGhlLW5ldy1zcGFjZS1yYWNlL9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T21:00:56Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Devdiscourse",
        title:
          "SpaceX and NASA Set to Launch Crew-9 Mission to ISS - Devdiscourse",
        description: null,
        url: "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LmRldmRpc2NvdXJzZS5jb20vYXJ0aWNsZS90ZWNobm9sb2d5LzMwMzMyOTctc3BhY2V4LWFuZC1uYXNhLXNldC10by1sYXVuY2gtY3Jldy05LW1pc3Npb24tdG8taXNz0gFvaHR0cHM6Ly93d3cuZGV2ZGlzY291cnNlLmNvbS9hcnRpY2xlL3RlY2hub2xvZ3kvMzAzMzI5Ny1zcGFjZXgtYW5kLW5hc2Etc2V0LXRvLWxhdW5jaC1jcmV3LTktbWlzc2lvbi10by1pc3M_YW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T20:58:06Z",
        content: null,
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "Express Web Desk",
        title:
          "Europe’s JUICE probe set for close encounter with Earth before journey to Jupiter - The Indian Express",
        description:
          "Launched in April 2023, JUICE is Europe’s first mission to Jupiter, tasked with studying the planet and its largest moons.",
        url: "https://indianexpress.com/article/technology/science/europe-juice-probe-set-close-encounter-earth-before-jupiter-9481517/",
        urlToImage:
          "https://images.indianexpress.com/2024/07/Untitled-design-23-3.jpg",
        publishedAt: "2024-07-28T19:41:17Z",
        content:
          "European Space Agencys Jupiter Icy Moons Explorer (JUICE) is gearing up for a pivotal maneuver in its mission to the gas giant.Scheduled to fly past Earth on August 20, 2024, the spacecraft will come… [+2618 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Earth.com",
        title:
          "Discovery: How clouds turn tiny water droplets into rain showers - Earth.com",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LmVhcnRoLmNvbS9uZXdzL2hvdy10dXJidWxlbmNlLWNsb3Vkcy1tYWtlcy10aW55LXdhdGVyLWRyb3BsZXRzLXR1cm4taW50by1yYWluLXNob3dlcnMv0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T19:11:29Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "AzerNews.Az",
        title:
          "SpaceX bounces back from Falcon 9 failure with successful Starlink launch - AzerNews.Az",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiKmh0dHBzOi8vd3d3LmF6ZXJuZXdzLmF6L3JlZ2lvbi8yMjkyMjQuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T19:00:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Jagran Josh",
        title:
          "7 Mind-Blowing Fun Facts About Earth You Never Knew - Jagran Josh",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3LmphZ3Jhbmpvc2guY29tL3dlYi1zdG9yaWVzL21pbmQtYmxvd2luZy1mdW4tZmFjdHMtYWJvdXQtZWFydGgteW91LW5ldmVyLWtuZXctMTAxNzMx0gFfaHR0cHM6Ly93d3cuamFncmFuam9zaC5jb20vd2ViLXN0b3JpZXMvbWluZC1ibG93aW5nLWZ1bi1mYWN0cy1hYm91dC1lYXJ0aC15b3UtbmV2ZXIta25ldy0xMDE3MzE?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T17:38:16Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Deccan Herald",
        title:
          "Scientists create 116th element on periodic table; 'possibility' for heaviest element 120 to emerge too - Deccan Herald",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikQFodHRwczovL3d3dy5kZWNjYW5oZXJhbGQuY29tL3NjaWVuY2Uvc2NpZW50aXN0cy1jcmVhdGUtMTE2dGgtZWxlbWVudC1vbi1wZXJpb2RpYy10YWJsZS1wb3NzaWJpbGl0eS1mb3ItaGVhdmllc3QtZWxlbWVudC0xMjAtdG8tZW1lcmdlLXRvby0zMTI1NTg30gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T16:53:52Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Hindu",
        title:
          "Butterflies accumulate enough static electricity to attract pollen - The Hindu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC9idXR0ZXJmbGllcy1hY2N1bXVsYXRlLWVub3VnaC1zdGF0aWMtZWxlY3RyaWNpdHktdG8tYXR0cmFjdC1wb2xsZW4vYXJ0aWNsZTY4NDUwMjcyLmVjZdIBfWh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC9idXR0ZXJmbGllcy1hY2N1bXVsYXRlLWVub3VnaC1zdGF0aWMtZWxlY3RyaWNpdHktdG8tYXR0cmFjdC1wb2xsZW4vYXJ0aWNsZTY4NDUwMjcyLmVjZS9hbXAv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T15:35:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "Hunga Tonga volcano eruption in 2022 might have cooled Earth: Study - WION",
        description: null,
        url: "https://consent.google.com/m",
        urlToImage: null,
        publishedAt: "2024-07-28T14:13:24Z",
        content:
          "We use cookies and data to\r\n<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to un… [+1139 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "MSN",
        title:
          "Scientists find that diamonds may be lurking beneath Mercury's surface - MSN",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5tc24uY29tL2VuLWluL25ld3MvdGVjaGFuZHNjaWVuY2Uvc2NpZW50aXN0cy1maW5kLXRoYXQtZGlhbW9uZHMtbWF5LWJlLWx1cmtpbmctYmVuZWF0aC1tZXJjdXJ5LXMtc3VyZmFjZS9hci1CQjFxTHZQadIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T11:42:27Z",
        content: null,
      },
    ],
  },
  health: {
    status: "ok",
    totalResults: 23,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "9 benefits of consuming 3 cloves of garlic before lunch - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL3dlYi1zdG9yaWVzLzktYmVuZWZpdHMtb2YtY29uc3VtaW5nLTMtY2xvdmVzLW9mLWdhcmxpYy1iZWZvcmUtbHVuY2gvcGhvdG9zdG9yeS8xMTIwOTg3NDUuY21z0gGaAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3Mvd2ViLXN0b3JpZXMvOS1iZW5lZml0cy1vZi1jb25zdW1pbmctMy1jbG92ZXMtb2YtZ2FybGljLWJlZm9yZS1sdW5jaC9waG90b3N0b3J5LzExMjA5ODc0NS5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:30:00Z",
        content: null,
      },
      {
        source: { id: null, name: "India TV News" },
        author: "Muskan Gupta",
        title:
          "Delhi undergoes massive surge in Hepatitis A cases; know causes, symptoms, treatment and preventive measures - India TV News",
        description:
          "Delhi sees a significant increase in Hepatitis A cases; learn about the causes, symptoms, and treatment options to stay informed and protected. Know essential health tips to prevent this viral infection.",
        url: "https://www.indiatvnews.com/health/delhi-undergoes-massive-surge-in-hepatitis-a-cases-know-causes-symptoms-treatment-and-preventive-measures-2024-07-29-944156",
        urlToImage:
          "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/07/befunky-collage-2024-07-29t113203-1722232928.jpg",
        publishedAt: "2024-07-29T06:02:56Z",
        content:
          "Delhi is currently experiencing a significant surge in Hepatitis A cases, raising concerns among health officials and residents alike. Hepatitis A is a liver infection caused by the Hepatitis A virus… [+4259 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Is it possible to reverse diabetes? 5 mantras revealed by senior diabetologist - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMisQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL2hlYWx0aC1uZXdzL2lzLWl0LXBvc3NpYmxlLXRvLXJldmVyc2UtZGlhYmV0ZXMtNS1tYW50cmFzLXJldmVhbGVkLWJ5LXNlbmlvci1kaWFiZXRvbG9naXN0L2FydGljbGVzaG93LzExMjAxNjQ2NC5jbXPSAbUBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vbGlmZS1zdHlsZS9oZWFsdGgtZml0bmVzcy9oZWFsdGgtbmV3cy9pcy1pdC1wb3NzaWJsZS10by1yZXZlcnNlLWRpYWJldGVzLTUtbWFudHJhcy1yZXZlYWxlZC1ieS1zZW5pb3ItZGlhYmV0b2xvZ2lzdC9hbXBfYXJ0aWNsZXNob3cvMTEyMDE2NDY0LmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:47:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Weakness and fatigue: 5 warning signs of blood cancer you shouldn't ignore - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL2hlYWx0aC1uZXdzL3dlYWtuZXNzLWFuZC1mYXRpZ3VlLTUtd2FybmluZy1zaWducy1vZi1ibG9vZC1jYW5jZXIteW91LXNob3VsZG50LWlnbm9yZS9hcnRpY2xlc2hvdy8xMTIwNzAzMDcuY21z0gGwAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3MvaGVhbHRoLW5ld3Mvd2Vha25lc3MtYW5kLWZhdGlndWUtNS13YXJuaW5nLXNpZ25zLW9mLWJsb29kLWNhbmNlci15b3Utc2hvdWxkbnQtaWdub3JlL2FtcF9hcnRpY2xlc2hvdy8xMTIwNzAzMDcuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:30:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Zee News",
        title: "7 Benefits Of Drinking Ash Gourd Juice Daily - Zee News",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vemVlbmV3cy5pbmRpYS5jb20vd2ViLXN0b3JpZXMvbGlmZXN0eWxlLzctYmVuZWZpdHMtb2YtZHJpbmtpbmctYXNoLWdvdXJkLWp1aWNlLWRhaWx5LTI3NzEyNDHSAWRodHRwczovL3plZW5ld3MuaW5kaWEuY29tL3dlYi1zdG9yaWVzL2xpZmVzdHlsZS83LWJlbmVmaXRzLW9mLWRyaW5raW5nLWFzaC1nb3VyZC1qdWljZS1kYWlseS0yNzcxMjQx?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:16:13Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Free Press Journal",
        title:
          "Sleeping With AC On At Night? Know The Possible Side Effects On Health - Free Press Journal",
        description: null,
        url: "https://news.google.com/rss/articles/CBMifWh0dHBzOi8vd3d3LmZyZWVwcmVzc2pvdXJuYWwuaW4vYW1wc3Rvcmllcy9waG90by1nYWxsZXJ5L3NlZXBpbmctd2l0aC1hYy1vbi1hdC1uaWdodC1rbm93LXRoZS1wb3NzaWJsZS1zaWRlLWVmZmVjdHMtb24taGVhbHRo0gF9aHR0cHM6Ly93d3cuZnJlZXByZXNzam91cm5hbC5pbi9hbXBzdG9yaWVzL3Bob3RvLWdhbGxlcnkvc2VlcGluZy13aXRoLWFjLW9uLWF0LW5pZ2h0LWtub3ctdGhlLXBvc3NpYmxlLXNpZGUtZWZmZWN0cy1vbi1oZWFsdGg?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:57:31Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Communications Today",
        title:
          "‘AI significantly more value to us,’ Anand Mahindra reacts - Communications Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LmNvbW11bmljYXRpb25zdG9kYXkuY28uaW4vYWktc2lnbmlmaWNhbnRseS1tb3JlLXZhbHVlLXRvLXVzLWFuYW5kLW1haGluZHJhLXJlYWN0cy_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:38:39Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "People's Daily",
        title:
          "Death toll in India's Gujarat due to suspected Chandipura virus infection rises to 48 - People's Daily",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiNWh0dHA6Ly9lbi5wZW9wbGUuY24vbjMvMjAyNC8wNzI5L2M5MDAwMC0yMDE5OTI4MC5odG1s0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:15:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "221 dengue cases in Punjab, Hoshiarpur worst hit - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiemh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9jaXRpZXMvY2hhbmRpZ2FyaC1uZXdzLzIyMS1kZW5ndWUtY2FzZXMtaW4tcHVuamFiLWhvc2hpYXJwdXItd29yc3QtaGl0LTEwMTcyMjE5MDMwNzU3Ny5odG1s0gF-aHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2NpdGllcy9jaGFuZGlnYXJoLW5ld3MvMjIxLWRlbmd1ZS1jYXNlcy1pbi1wdW5qYWItaG9zaGlhcnB1ci13b3JzdC1oaXQtMTAxNzIyMTkwMzA3NTc3LWFtcC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T00:18:01Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "27% decadal rise in breast, cervical cancer mortality - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9jaXR5L2FobWVkYWJhZC9yaXNpbmctbW9ydGFsaXR5LXJhdGVzLW9mLWJyZWFzdC1hbmQtY2VydmljYWwtY2FuY2VyLWluLWd1amFyYXQvYXJ0aWNsZXNob3cvMTEyMDkxNzQ4LmNtc9IBkAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9jaXR5L2FobWVkYWJhZC9yaXNpbmctbW9ydGFsaXR5LXJhdGVzLW9mLWJyZWFzdC1hbmQtY2VydmljYWwtY2FuY2VyLWluLWd1amFyYXQvYW1wX2FydGljbGVzaG93LzExMjA5MTc0OC5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T23:03:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "9 test positive for Zika virus in Pune district; tally stands at 48 - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vY2l0aWVzL3B1bmUtbmV3cy85LXRlc3QtcG9zaXRpdmUtZm9yLXppa2EtdmlydXMtaW4tcHVuZS1kaXN0cmljdC10YWxseS1zdGFuZHMtYXQtNDgtMTAxNzIyMTg0OTY1NzAwLmh0bWzSAYsBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2NpdGllcy9wdW5lLW5ld3MvOS10ZXN0LXBvc2l0aXZlLWZvci16aWthLXZpcnVzLWluLXB1bmUtZGlzdHJpY3QtdGFsbHktc3RhbmRzLWF0LTQ4LTEwMTcyMjE4NDk2NTcwMC1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T16:42:45Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "8 Foods that can slow down digestion during Monsoons - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2Zvb2QtbmV3cy84LWZvb2RzLXRoYXQtY2FuLXNsb3ctZG93bi1kaWdlc3Rpb24tZHVyaW5nLW1vbnNvb25zL2FydGljbGVzaG93LzExMjA3MTQ0OS5jbXPSAYsBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vbGlmZS1zdHlsZS9mb29kLW5ld3MvOC1mb29kcy10aGF0LWNhbi1zbG93LWRvd24tZGlnZXN0aW9uLWR1cmluZy1tb25zb29ucy9hbXBfYXJ0aWNsZXNob3cvMTEyMDcxNDQ5LmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T15:30:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ChannelOne TV",
        title:
          "Dr. Oum-Kalsoum Zakaria Adam sheds light on 'Head and Neck Cancer' | Sunday Breakfast - ChannelOne TV",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC0RJOERUQ3c1Mml3mAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T15:04:13Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "9 juices to boost vitamin B12 levels in the body - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9uZXdzL3dlYi1zdG9yaWVzLzktanVpY2VzLXRvLWJvb3N0LXZpdGFtaW4tYjEyLWxldmVscy1pbi10aGUtYm9keS9zbGlkZXNob3cvMTEyMDgzNjUxLmNtc9IBdWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9uZXdzL3dlYi1zdG9yaWVzLzktanVpY2VzLXRvLWJvb3N0LXZpdGFtaW4tYjEyLWxldmVscy1pbi10aGUtYm9keS9zbGlkZXNob3cvMTEyMDgzNjUxLmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T11:58:52Z",
        content: null,
      },
      {
        source: { id: null, name: "ScienceAlert" },
        author: "The Conversation",
        title:
          "Here's What 'Diet' Soft Drink Could Be Doing to Your Health in The Long Term - ScienceAlert",
        description:
          "Many people are drinking less sugary soft drink than in the past.",
        url: "https://www.sciencealert.com/heres-what-diet-soft-drink-could-be-doing-to-your-health-in-the-long-term",
        urlToImage:
          "https://www.sciencealert.com/images/2024/07/HandsPoursSoftDrinkIntoCup.jpg",
        publishedAt: "2024-07-28T11:31:53Z",
        content:
          "Many people are drinking less sugary soft drink than in the past. This is a great win for public health, given the recognised risks of diets high in sugar-sweetened drinks.\r\nBut over time, intake of … [+4914 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "‘I felt as if my sperm had let me down’: one man’s IVF journey - The Guardian",
        description: null,
        url: "https://consent.google.com/m",
        urlToImage: null,
        publishedAt: "2024-07-28T10:00:00Z",
        content:
          "We use cookies and data to\r\n<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to un… [+1139 chars]",
      },
      {
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "Shifa Khan",
        title:
          "10 reasons to eat a spoonful of sunflower seeds everyday - The Times of India",
        description:
          "10 reasons to eat a spoonful of sunflower seeds everyday.",
        url: "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/10-reasons-to-eat-a-spoonful-of-sunflower-seeds-everyday/photostory/112068753.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-112070128,imgsize-1370902,width-900,height-1200,resizemode-6/112070128.jpg",
        publishedAt: "2024-07-28T08:30:00Z",
        content:
          "The high content of healthy fats, particularly unsaturated fats, in sunflower seeds can help reduce bad cholesterol levels. This, in turn, lowers the risk of cardiovascular diseases.",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Hitavada",
        title:
          "Dengue, chikungunya cases on rise due to water-logging - The Hitavada",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LnRoZWhpdGF2YWRhLmNvbS9FbmN5Yy8yMDI0LzcvMjgvRGVuZ3VlLWNoaWt1bmd1bnlhLWNhc2VzLW9uLXJpc2UtZHVlLXRvLXdhdGVyLWxvZ2dpbmcuaHRtbNIBamh0dHBzOi8vd3d3LnRoZWhpdGF2YWRhLmNvbS9FbmN5Yy8yMDI0LzcvMjgvRGVuZ3VlLWNoaWt1bmd1bnlhLWNhc2VzLW9uLXJpc2UtZHVlLXRvLXdhdGVyLWxvZ2dpbmcuYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T07:47:24Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "World Hepatitis Day 2024: All about viral hepatitis and preventive measures to stop its transmission - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMixwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL2hlYWx0aC1uZXdzL3dvcmxkLWhlcGF0aXRpcy1kYXktMjAyNC1hbGwtYWJvdXQtdmlyYWwtaGVwYXRpdGlzLWFuZC1wcmV2ZW50aXZlLW1lYXN1cmVzLXRvLXN0b3AtaXRzLXRyYW5zbWlzc2lvbi9hcnRpY2xlc2hvdy8xMTIwNzUwMjkuY21z0gHLAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3MvaGVhbHRoLW5ld3Mvd29ybGQtaGVwYXRpdGlzLWRheS0yMDI0LWFsbC1hYm91dC12aXJhbC1oZXBhdGl0aXMtYW5kLXByZXZlbnRpdmUtbWVhc3VyZXMtdG8tc3RvcC1pdHMtdHJhbnNtaXNzaW9uL2FtcF9hcnRpY2xlc2hvdy8xMTIwNzUwMjkuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T05:02:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "7 natural drinks that help with instant weight loss - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL3dlaWdodC1sb3NzLzctbmF0dXJhbC1kcmlua3MtdGhhdC1oZWxwLXdpdGgtaW5zdGFudC13ZWlnaHQtbG9zcy9hcnRpY2xlc2hvdy8xMTIwNTgyMDkuY21z0gGbAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvaGVhbHRoLWZpdG5lc3Mvd2VpZ2h0LWxvc3MvNy1uYXR1cmFsLWRyaW5rcy10aGF0LWhlbHAtd2l0aC1pbnN0YW50LXdlaWdodC1sb3NzL2FtcF9hcnRpY2xlc2hvdy8xMTIwNTgyMDkuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T01:30:00Z",
        content: null,
      },
    ],
  },
  business: {
    status: "ok",
    totalResults: 68,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "Ola Electric IPO: Some investors may face losses, but it's a multi-bagger for Tiger Global, Matrix - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimwFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvaXBvL29sYS1lbGVjdHJpYy1pcG8tc29tZS1pbnZlc3RvcnMtbWF5LWZhY2UtbG9zc2VzLWJ1dC1pdHMtYS1tdWx0aS1iYWdnZXItZm9yLXRpZ2VyLWdsb2JhbC1tYXRyaXgtMTI3ODA4MjYuaHRtbNIBnwFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvaXBvL29sYS1lbGVjdHJpYy1pcG8tc29tZS1pbnZlc3RvcnMtbWF5LWZhY2UtbG9zc2VzLWJ1dC1pdHMtYS1tdWx0aS1iYWdnZXItZm9yLXRpZ2VyLWdsb2JhbC1tYXRyaXgtMTI3ODA4MjYuaHRtbC9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:54:17Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "Trom Industries IPO Receives 70.16x Subscription on Day 3 So Far, Check GMP Today - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vYnVzaW5lc3MvaXBvL3Ryb20taW5kdXN0cmllcy1pcG8tY2xvc2VzLXRvZGF5LWNoZWNrLXN1YnNjcmlwdGlvbi1zdGF0dXMtZ21wLXRvZGF5LTg5ODIyNzMuaHRtbNIBeWh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vYW1wL2J1c2luZXNzL2lwby90cm9tLWluZHVzdHJpZXMtaXBvLWNsb3Nlcy10b2RheS1jaGVjay1zdWJzY3JpcHRpb24tc3RhdHVzLWdtcC10b2RheS04OTgyMjczLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:30:49Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "Gold Rate Today: Check 22 Carat Price In Your City on July 29 - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vYnVzaW5lc3Mvc2F2aW5ncy1hbmQtaW52ZXN0bWVudHMvZ29sZC1yYXRlLXRvZGF5LW11bWJhaS0yNC1jYXJhdC0xMC1ncmFtLTIyay04LTg5ODIxNjEuaHRtbNIBdmh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vYW1wL2J1c2luZXNzL3NhdmluZ3MtYW5kLWludmVzdG1lbnRzL2dvbGQtcmF0ZS10b2RheS1tdW1iYWktMjQtY2FyYXQtMTAtZ3JhbS0yMmstOC04OTgyMTYxLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:25:31Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "CNBCTV18",
        title:
          "Defence stock with 2,890% returns in five years nearly doubles Q1 revenue, maintains FY25 guidance - CNBCTV18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5jbmJjdHYxOC5jb20vbWFya2V0L3plbi10ZWNobm9sb2dpZXMtc2hhcmUtcHJpY2UtbXVsdGliYWdnZXItZGVmZW5jZS1zdG9jay1xMS1yZXN1bHRzLWZpdmUteWVhci1yZXR1cm5zLTE5NDUwNjkzLmh0bdIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:13:41Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Tata Motors' Jaguar Land Rover manufacturing unit in Tamil Nadu may begin operations late in 2025 | Company Business News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMinAFodHRwczovL3d3dy5saXZlbWludC5jb20vY29tcGFuaWVzL25ld3MvdGF0YS1tb3RvcnMtamFndWFyLWxhbmQtcm92ZXItbWFudWZhY3R1cmluZy11bml0LWluLXRhbWlsLW5hZHUtbWF5LWJlZ2luLW9wZXJhdGlvbnMtbGF0ZS1pbi0yMDI1LTExNzIyMjI2NzUxODIzLmh0bWzSAaABaHR0cHM6Ly93d3cubGl2ZW1pbnQuY29tL2NvbXBhbmllcy9uZXdzL3RhdGEtbW90b3JzLWphZ3Vhci1sYW5kLXJvdmVyLW1hbnVmYWN0dXJpbmctdW5pdC1pbi10YW1pbC1uYWR1LW1heS1iZWdpbi1vcGVyYXRpb25zLWxhdGUtaW4tMjAyNS9hbXAtMTE3MjIyMjY3NTE4MjMuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:04:02Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Stocks to buy: Adani Ports, Cipla, Ashok Leyland among 9 stocks that may rise 4-16% in next 3-4 weeks, say analysts | Stock Market News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMitAFodHRwczovL3d3dy5saXZlbWludC5jb20vbWFya2V0L3N0b2NrLW1hcmtldC1uZXdzL3N0b2Nrcy10by1idXktYWRhbmktcG9ydHMtY2lwbGEtYXNob2stbGV5bGFuZC1hbW9uZy05LXN0b2Nrcy10aGF0LW1heS1yaXNlLTQtMTYtaW4tbmV4dC0zLTQtd2Vla3Mtc2F5LWFuYWx5c3RzLTExNzIyMjI4MTQzMjg3Lmh0bWzSAbgBaHR0cHM6Ly93d3cubGl2ZW1pbnQuY29tL21hcmtldC9zdG9jay1tYXJrZXQtbmV3cy9zdG9ja3MtdG8tYnV5LWFkYW5pLXBvcnRzLWNpcGxhLWFzaG9rLWxleWxhbmQtYW1vbmctOS1zdG9ja3MtdGhhdC1tYXktcmlzZS00LTE2LWluLW5leHQtMy00LXdlZWtzLXNheS1hbmFseXN0cy9hbXAtMTE3MjIyMjgxNDMyODcuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:01:57Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "Bandhan Bank shares leap 11% on robust Q1 results; brokerages boost target prices - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikgFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvZWFybmluZ3MvYmFuZGhhbi1iYW5rLXNoYXJlcy1sZWFwcy0xMS1vbi1yb2J1c3QtcTEtcmVzdWx0cy1icm9rZXJhZ2VzLWJvb3N0LXRhcmdldC1wcmljZXMtMTI3ODA2NzEuaHRtbNIBlgFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvZWFybmluZ3MvYmFuZGhhbi1iYW5rLXNoYXJlcy1sZWFwcy0xMS1vbi1yb2J1c3QtcTEtcmVzdWx0cy1icm9rZXJhZ2VzLWJvb3N0LXRhcmdldC1wcmljZXMtMTI3ODA2NzEuaHRtbC9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:34:41Z",
        content: null,
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT Trending Desk",
        title:
          "Gurgaon techie outsmarts scammer with witty response: ‘Never mess with a developer’ - Hindustan Times",
        description:
          "Gaurav Sharan, a software engineer based in Gurgaon, received a message from a scammer who pretended to be a representative of HDFC Bank. | Trending",
        url: "https://www.hindustantimes.com/trending/gurgaon-techie-outsmarts-scammer-with-witty-response-never-mess-with-a-developer-101722225770981.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2024/07/29/1600x900/photo-1646766677899-9c1750e28b0f_1722225769441_1722225788015.jpg",
        publishedAt: "2024-07-29T04:27:51Z",
        content:
          "A software engineer based in Gurgaon shared his conversation with a scammer on X (formerly Twitter). The scammer had initially messaged him, pretending to be a representative of HDFC Bank.\r\nThe softw… [+1626 chars]",
      },
      {
        source: { id: null, name: "Livemint" },
        author: "Asit Manohar",
        title:
          "IDFC First Bank share price dips after Q1FY25 results. Is this a stock to buy today? | Stock Market News - Mint",
        description:
          "Q1 resaults 2024: Experts believe that IDFC First Bank came out with a muted set of numbers primarily due to increased provisions in JLG business",
        url: "https://www.livemint.com/market/stock-market-news/idfc-first-bank-share-price-dips-after-q1fy25-results-is-this-a-stock-to-buy-today-11722225597264.html",
        urlToImage:
          "https://images.livemint.com/img/2024/07/29/1600x900/IDFC_First_Bank_share_Stocks_to_buy_today_Q1FY25_1722225995321_1722225995481.jpg",
        publishedAt: "2024-07-29T04:16:13Z",
        content:
          "Stocks to buy today:IDFC First share price witnessed some profit booking in the early morning session on Monday. IDFC First Bank share price today opened with a downside gap at 73.69 per share on the… [+2565 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Punjab National Bank share prices rises 7% post Q1 results: Should you Buy, Sell or Hold the stock ? | Stock Market News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipAFodHRwczovL3d3dy5saXZlbWludC5jb20vbWFya2V0L3N0b2NrLW1hcmtldC1uZXdzL3B1bmphYi1uYXRpb25hbC1iYW5rLXNoYXJlLXByaWNlLXJpc2VzLTUtcG9zdC1xMS1yZXN1bHRzLXNob3VsZC15b3UtYnV5LXNlbGwtb3ItaG9sZC10aGUtc3RvY2stMTE3MjIyMjUwODEzNzAuaHRtbNIBqAFodHRwczovL3d3dy5saXZlbWludC5jb20vbWFya2V0L3N0b2NrLW1hcmtldC1uZXdzL3B1bmphYi1uYXRpb25hbC1iYW5rLXNoYXJlLXByaWNlLXJpc2VzLTUtcG9zdC1xMS1yZXN1bHRzLXNob3VsZC15b3UtYnV5LXNlbGwtb3ItaG9sZC10aGUtc3RvY2svYW1wLTExNzIyMjI1MDgxMzcwLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:05:04Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Upstox",
        title:
          "ICICI Bank shares up 2% after Q1 net profit, NII surpass estimates - Upstox",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidmh0dHBzOi8vdXBzdG94LmNvbS9uZXdzL21hcmtldC1uZXdzL2Vhcm5pbmdzL2ljaWNpLWJhbmstc2hhcmVzLXVwLTItYWZ0ZXItcTEtcmVzdWx0cy1zdXJwYXNzLWVzdGltYXRlcy9hcnRpY2xlLTEwNTQzNy_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:03:46Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "CNBCTV18",
        title:
          "Ceigall India IPO: GMP shoots up after price band announcement - CNBCTV18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiggFodHRwczovL3d3dy5jbmJjdHYxOC5jb20vbWFya2V0L2NlaWdhbGwtaW5kaWEtaXBvLWFubm91bmNlcy1wcmljZS1iYW5kLWZvci1pc3N1ZS1rbm93LWdtcC1sb3Qtc2l6ZS1vdGhlci1kZXRhaWxzLWhlcmUtMTk0NTA2MzcuaHRt0gGGAWh0dHBzOi8vd3d3LmNuYmN0djE4LmNvbS9tYXJrZXQvY2VpZ2FsbC1pbmRpYS1pcG8tYW5ub3VuY2VzLXByaWNlLWJhbmQtZm9yLWlzc3VlLWtub3ctZ21wLWxvdC1zaXplLW90aGVyLWRldGFpbHMtaGVyZS0xOTQ1MDYzNy5odG0vYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:00:10Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Stock market today: BSE Sensex hits lifetime high; Nifty50 just shy of 25,0o0 - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMixAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9idXNpbmVzcy9pbmRpYS1idXNpbmVzcy9zdG9jay1tYXJrZXQtdG9kYXktYnNlLXNlbnNleC1uaWZ0eTUwLWp1bHktMjktMjAyNC1kYWxhbC1zdHJlZXQtaW5kaWFuLWVxdWl0aWVzLWVhcm5pbmdzLXNlYXNvbi1nbG9iYWwtbWFya2V0cy9hcnRpY2xlc2hvdy8xMTIwOTQwMzMuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:52:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "Canara Bank forecasts 10-11% hit from RBI's draft LCR norms - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3Lm1vbmV5Y29udHJvbC5jb20vbmV3cy9idXNpbmVzcy9jYW5hcmEtYmFuay1mb3JlY2FzdHMtMTAtMTEtaGl0LWZyb20tcmJpcy1kcmFmdC1sY3Itbm9ybXMtMTI3ODA1MDkuaHRtbNIBdmh0dHBzOi8vd3d3Lm1vbmV5Y29udHJvbC5jb20vbmV3cy9idXNpbmVzcy9jYW5hcmEtYmFuay1mb3JlY2FzdHMtMTAtMTEtaGl0LWZyb20tcmJpcy1kcmFmdC1sY3Itbm9ybXMtMTI3ODA1MDkuaHRtbC9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:06:56Z",
        content: null,
      },
      {
        source: { id: null, name: "Livemint" },
        author: "Riya R Alex",
        title:
          "HDFC Bank revises credit card rules from August 1, 3rd party app transactions, late fees, rewards to cost… | Mint - Mint",
        description:
          "HDFC Bank revises terms and conditions for credit card holders. Fees will be charged on payments done through third-party apps, redeeming rewards, and educational transactions.",
        url: "https://www.livemint.com/money/personal-finance/hdfc-bank-revises-credit-card-rules-from-august-1-3rd-party-app-transactions-late-fees-rewards-to-cost-11722217524239.html",
        urlToImage:
          "https://images.livemint.com/img/2024/07/29/1600x900/2-0-442297710-HDFC-Bank2-0_1680888959773_1722219234985.JPG",
        publishedAt: "2024-07-29T02:39:39Z",
        content:
          "India's biggest private sector bank, HDFC Bank, has brought in new terms and conditions for credit card holders. The new rules will take effect from August 1, 2024.\r\nHere are the updated terms and co… [+2476 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Stocks to buy or sell: GHCL Textiles to CSL Finance — Sumeet Bagadia recommends five breakout shares to buy today | Stock Market News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMitAFodHRwczovL3d3dy5saXZlbWludC5jb20vbWFya2V0L3N0b2NrLW1hcmtldC1uZXdzL3N0b2Nrcy10by1idXktb3Itc2VsbC1naGNsLXRleHRpbGVzLXRvLWNzbC1maW5hbmNlLXN1bWVldC1iYWdhZGlhLXJlY29tbWVuZHMtZml2ZS1icmVha291dC1zaGFyZXMtdG8tYnV5LXRvZGF5LTExNzIyMjE4NjE1NTI4Lmh0bWzSAbgBaHR0cHM6Ly93d3cubGl2ZW1pbnQuY29tL21hcmtldC9zdG9jay1tYXJrZXQtbmV3cy9zdG9ja3MtdG8tYnV5LW9yLXNlbGwtZ2hjbC10ZXh0aWxlcy10by1jc2wtZmluYW5jZS1zdW1lZXQtYmFnYWRpYS1yZWNvbW1lbmRzLWZpdmUtYnJlYWtvdXQtc2hhcmVzLXRvLWJ1eS10b2RheS9hbXAtMTE3MjIyMTg2MTU1MjguaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:17:48Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "Q1 results today: Adani Total Gas, Adani Wilmar among 95 companies to announce earnings on Monday - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirQFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvZWFybmluZ3MvcTEtcmVzdWx0cy10b2RheS1hZGFuaS10b3RhbC1nYXMtYWRhbmktd2lsbWFyLWFtb25nLTk1LWNvbXBhbmllcy10by1hbm5vdW5jZS1lYXJuaW5ncy1vbi1tb25kYXkvYXJ0aWNsZXNob3cvMTEyMDkzNjk3LmNtc9IBsQFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvZWFybmluZ3MvcTEtcmVzdWx0cy10b2RheS1hZGFuaS10b3RhbC1nYXMtYWRhbmktd2lsbWFyLWFtb25nLTk1LWNvbXBhbmllcy10by1hbm5vdW5jZS1lYXJuaW5ncy1vbi1tb25kYXkvYW1wX2FydGljbGVzaG93LzExMjA5MzY5Ny5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:16:12Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Finshots",
        title: "Why is India borrowing in Japanese Yen - Finshots",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vZmluc2hvdHMuaW4vYXJjaGl2ZS93aHktaXMtaW5kaWEtYm9ycm93aW5nLWluLWphcGFuZXNlLXllbi_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:32:41Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "DNA India",
        title:
          "Mukesh Ambani, Ratan Tata to face tough competition from Kumar Mangalam Birla, know Birla's Rs 5000 crore plan... - DNA India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5kbmFpbmRpYS5jb20vYnVzaW5lc3MvcmVwb3J0LW11a2VzaC1hbWJhbmktcmF0YW4tdGF0YS10by1mYWNlLXRvdWdoLWNvbXBldGl0aW9uLWZyb20tYWRpdHlhLWJpcmxhLWdyb3VwLWluZHJpeWEtamV3ZWwtMzA5OTIzN9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:27:00Z",
        content: null,
      },
      {
        source: { id: null, name: "Livemint" },
        author: "Anubhav Mukherjee",
        title:
          "UltraTech Cement's stock seen opening up, driven by positives from India Cements stake buy, ‘near-term profitability…’ | Stock Market News - Mint",
        description:
          "UltraTech Cement’s shares are set to open on a positive note on Monday, July 29, fueled by the completion of the acquisition of a majority stake in India Cements, an analyst told Mint.",
        url: "https://www.livemint.com/market/stock-market-news/ultratech-cements-stock-seen-opening-up-driven-by-positives-from-india-cements-stake-buy-near-term-profitability-11722178281831.html",
        urlToImage:
          "https://images.livemint.com/img/2024/07/28/1600x900/2-0-611783686-ultratech-0_1680243353097_1722181450238.jpg",
        publishedAt: "2024-07-29T01:00:51Z",
        content:
          "UltraTech Cement Ltd., the largest cement manufacturer by market capitalization announced that the Board of Directors have approved the purchase of 32.72 per cent of India Cements, as per the company… [+3496 chars]",
      },
    ],
  },
  entertainment: {
    status: "ok",
    totalResults: 70,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "DNA India",
        title:
          "Meet woman, an Indian, who lives in world’s largest house, larger than Mukesh Ambani, Nita Ambani’s Antilia, she is... - DNA India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy5kbmFpbmRpYS5jb20vdmlyYWwvcmVwb3J0LW1lZXQtd29tYW4tcmFkaGlrYXJhamUtZ2Fla3dhZC1saXZlcy1pbi13b3JsZHMtbGFyZ2VzdC1ob3VzZS1sYXJnZXItbXVrZXNoLWFtYmFuaS1uaXRhLWFtYmFuaS1hbnRpbGlhLWJhcm9kYS0zMDk5MjUy0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:04:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TOI Etimes",
        title:
          "Vicky Kaushal’s Bad Newz crosses Rs 50 crore mark on 10th day - TOI Etimes",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiowFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9lbnRlcnRhaW5tZW50L2hpbmRpL2JvbGx5d29vZC9ib3gtb2ZmaWNlL3ZpY2t5LWthdXNoYWxzLWJhZC1uZXd6LWNyb3NzZXMtcnMtNTAtY3JvcmUtbWFyay1vbi0xMHRoLWRheS9hcnRpY2xlc2hvdy8xMTIwOTY1MDMuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:57:00Z",
        content: null,
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "Entertainment Desk",
        title:
          "Khatron Ke Khiladi 14: Asim Riaz fails to do task, charges at Abhishek Kumar with a shoe; Rohit Shetty expels him, says ‘utha ke patak dunga’ - The Indian Express",
        description:
          "After an altercation with Rohit Shetty and other contestants, Asim Riaz got expelled from Khatron Ke Khiladi Season 14 for his bad behaviour and for disrespecting other contestants.",
        url: "https://indianexpress.com/article/entertainment/television/khatron-ke-khiladi-14-asim-riaz-fails-to-do-task-charges-at-abhishek-kumar-with-a-shoe-rohit-shetty-expels-him-says-utha-ke-patak-dunga-9481831/",
        urlToImage: "https://images.indianexpress.com/2024/07/Rohit_5e2afc.jpg",
        publishedAt: "2024-07-29T04:02:55Z",
        content:
          "Apart from daredevil stunts, the second episode of Khatron Ke Khiladi Season 14 was full of drama. The episode saw contestant Asim Riaz getting expelled after he had an altercation with the shows hos… [+3847 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title:
          "Amitabh Bachchan shares 'then and now' running video, Ranveer Singh gushes over it - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijgFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL21vdmllcy9jZWxlYnJpdGllcy9zdG9yeS9hbWl0YWJoLWJhY2hjaGFuLXN0aWxsLXJ1bm5pbmctZm9yLXdvcmstcmFudmVlci1zaW5naC1yZWFjdHMtd2F0Y2gtdmlkZW8tMjU3MzEwMS0yMDI0LTA3LTI50gGSAWh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vYW1wL21vdmllcy9jZWxlYnJpdGllcy9zdG9yeS9hbWl0YWJoLWJhY2hjaGFuLXN0aWxsLXJ1bm5pbmctZm9yLXdvcmstcmFudmVlci1zaW5naC1yZWFjdHMtd2F0Y2gtdmlkZW8tMjU3MzEwMS0yMDI0LTA3LTI5?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:00:15Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Javed Akhtar's Twitter account hacked, lyricist addresses ‘totally harmless’ tweet sent out about Indian Olympics team - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2QvamF2ZWQtYWtodGFyLXR3aXR0ZXItYWNjb3VudC1oYWNrZWQteC10d2VldC1pbmRpYW4tdGVhbS1mb3Itb2x5bXBpY3MtMTAxNzIyMjIyMTEyMzg4Lmh0bWzSAZQBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2VudGVydGFpbm1lbnQvYm9sbHl3b29kL2phdmVkLWFraHRhci10d2l0dGVyLWFjY291bnQtaGFja2VkLXgtdHdlZXQtaW5kaWFuLXRlYW0tZm9yLW9seW1waWNzLTEwMTcyMjIyMjExMjM4OC1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:27:43Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Koimoi",
        title:
          "Deadpool & Wolverine Box Office Collection Day 3 (Early Trends): Ryan Reynolds & Hugh Jackman End The Weekend On A Thunderous Note With 65 Crore+ Earnings! - Koimoi",
        description: null,
        url: "https://news.google.com/rss/articles/CBMitQFodHRwczovL3d3dy5rb2ltb2kuY29tL2JveC1vZmZpY2UvZGVhZHBvb2wtd29sdmVyaW5lLWJveC1vZmZpY2UtY29sbGVjdGlvbi1kYXktMy1lYXJseS10cmVuZHMtcnlhbi1yZXlub2xkcy1odWdoLWphY2ttYW4tZW5kLXRoZS13ZWVrZW5kLW9uLWEtdGh1bmRlcm91cy1ub3RlLXdpdGgtNjUtY3JvcmUtZWFybmluZ3Mv0gG5AWh0dHBzOi8vd3d3LmtvaW1vaS5jb20vYm94LW9mZmljZS9kZWFkcG9vbC13b2x2ZXJpbmUtYm94LW9mZmljZS1jb2xsZWN0aW9uLWRheS0zLWVhcmx5LXRyZW5kcy1yeWFuLXJleW5vbGRzLWh1Z2gtamFja21hbi1lbmQtdGhlLXdlZWtlbmQtb24tYS10aHVuZGVyb3VzLW5vdGUtd2l0aC02NS1jcm9yZS1lYXJuaW5ncy9hbXAv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:01:43Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "M9",
        title: "Raja Saab: Real Test Of Prabhas’ Stardom - M9",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiRWh0dHBzOi8vd3d3Lm05Lm5ld3MvbW92aWVuZXdzL3JhamEtc2FhYi1yZWFsLXRlc3Qtb2YtcHJhYmhhcy1zdGFyZG9tL9IBSWh0dHBzOi8vd3d3Lm05Lm5ld3MvbW92aWVuZXdzL3JhamEtc2FhYi1yZWFsLXRlc3Qtb2YtcHJhYmhhcy1zdGFyZG9tL2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:33:58Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "PV Sindhu gives Ram Charan, Upasana tour of Paris Olympics, plays with their dog Rhyme. Watch - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMioQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC90ZWx1Z3UtY2luZW1hL3B2LXNpbmRodS1naXZlcy1yYW0tY2hhcmFuLXVwYXNhbmEtcGFyaXMtb2x5bXBpY3MtdG91ci1wbGF5cy13aXRoLWRvZy1yaHltZS13YXRjaC0xMDE3MjIyMTU0MTI3NDAuaHRtbNIBpQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC90ZWx1Z3UtY2luZW1hL3B2LXNpbmRodS1naXZlcy1yYW0tY2hhcmFuLXVwYXNhbmEtcGFyaXMtb2x5bXBpY3MtdG91ci1wbGF5cy13aXRoLWRvZy1yaHltZS13YXRjaC0xMDE3MjIyMTU0MTI3NDAtYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:31:49Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "123telugu",
        title:
          "Ticket prices slashed for Mega hero’s upcoming movie - 123telugu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vbW5ld3MvdGlja2V0LXByaWNlcy1zbGFzaGVkLWZvci1tZWdhLWhlcm9zLXVwY29taW5nLW1vdmllLmh0bWzSAVxodHRwczovL3d3dy4xMjN0ZWx1Z3UuY29tL21uZXdzL3RpY2tldC1wcmljZXMtc2xhc2hlZC1mb3ItbWVnYS1oZXJvcy11cGNvbWluZy1tb3ZpZS5odG1sL2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:31:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title:
          "Horoscope Today, July 29, 2024: Check here Astrological prediction for all zodiac signs - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirgFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL2hvcm9zY29wZXMvc3RvcnkvaG9yb3Njb3BlLXRvZGF5LWp1bHktMjktYXJpZXMtdGF1cnVzLWdlbWluaS1jYW5jZXItbGVvLXZpcmdvLWxpYnJhLXNjb3JwaW8tc2FnaXR0YXJpdXMtY2Fwcmljb3JuLWFxdWFyaXVzLXBpc2Nlcy0yNTcyOTA5LTIwMjQtMDctMjnSAbIBaHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi9hbXAvaG9yb3Njb3Blcy9zdG9yeS9ob3Jvc2NvcGUtdG9kYXktanVseS0yOS1hcmllcy10YXVydXMtZ2VtaW5pLWNhbmNlci1sZW8tdmlyZ28tbGlicmEtc2NvcnBpby1zYWdpdHRhcml1cy1jYXByaWNvcm4tYXF1YXJpdXMtcGlzY2VzLTI1NzI5MDktMjAyNC0wNy0yOQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:00:45Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Farah Khan and Sajid Khan's mother Menka Irani passes away: Jannat Zubair, Krushna Abhishek and Kashmera - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi1wFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90di9uZXdzL2hpbmRpL2ZhcmFoLWtoYW4tYW5kLXNhamlkLWtoYW5zLW1vdGhlci1tZW5rYS1pcmFuaS1wYXNzZXMtYXdheS1qYW5uYXQtenViYWlyLWtydXNobmEtYWJoaXNoZWstYW5kLWthc2htZXJhLXNoYWgtcmVhY2gtb3V0LXRvLWV4cHJlc3MtY29uZG9sZW5jZXMvYXJ0aWNsZXNob3cvMTEyMDkyNzk3LmNtc9IB2wFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90di9uZXdzL2hpbmRpL2ZhcmFoLWtoYW4tYW5kLXNhamlkLWtoYW5zLW1vdGhlci1tZW5rYS1pcmFuaS1wYXNzZXMtYXdheS1qYW5uYXQtenViYWlyLWtydXNobmEtYWJoaXNoZWstYW5kLWthc2htZXJhLXNoYWgtcmVhY2gtb3V0LXRvLWV4cHJlc3MtY29uZG9sZW5jZXMvYW1wX2FydGljbGVzaG93LzExMjA5Mjc5Ny5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T00:08:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Weekly Career Horoscope for July 29 – August 4, 2024 - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMieWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlL3dlZWtseS1jYXJlZXItaG9yb3Njb3BlLWZvci1qdWx5LTI5LWF1Z3VzdC00LTIwMjQtMTAxNzIyMTk1NzcyNzI4Lmh0bWzSAX1odHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS93ZWVrbHktY2FyZWVyLWhvcm9zY29wZS1mb3ItanVseS0yOS1hdWd1c3QtNC0yMDI0LTEwMTcyMjE5NTc3MjcyOC1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T21:30:14Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "soompi",
        title:
          "BTS's Jimin Becomes 1st K-Pop Soloist In History To Enter Top 2 Of Billboard 200 With Multiple Albums - soompi",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijgFodHRwczovL3d3dy5zb29tcGkuY29tL2FydGljbGUvMTY3NzQ4NHdwcC9idHNzLWppbWluLWJlY29tZXMtMXN0LWstcG9wLXNvbG9pc3QtaW4taGlzdG9yeS10by1lbnRlci10b3AtMi1vZi1iaWxsYm9hcmQtMjAwLXdpdGgtbXVsdGlwbGUtYWxidW1z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T20:46:49Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Aquarius Daily Horoscope Today, July 29, 2024 predicts good returns - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9hcXVhcml1cy1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVseS0yOS0yMDI0LXByZWRpY3RzLWdvb2QtcmV0dXJucy0xMDE3MjIxODgzMjQ3NjcuaHRtbNIBjQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9hcXVhcml1cy1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVseS0yOS0yMDI0LXByZWRpY3RzLWdvb2QtcmV0dXJucy0xMDE3MjIxODgzMjQ3NjctYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T19:23:28Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Sagittarius Daily Horoscope Today, July 29, 2024 predicts love tensions - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYXN0cm9sb2d5L2hvcm9zY29wZS9zYWdpdHRhcml1cy1kYWlseS1ob3Jvc2NvcGUtdG9kYXktanVseS0yOS0yMDI0LXByZWRpY3RzLWxvdmUtdGVuc2lvbnMtMTAxNzIyMTg4MzA0NDQ1Lmh0bWzSAZEBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2FzdHJvbG9neS9ob3Jvc2NvcGUvc2FnaXR0YXJpdXMtZGFpbHktaG9yb3Njb3BlLXRvZGF5LWp1bHktMjktMjAyNC1wcmVkaWN0cy1sb3ZlLXRlbnNpb25zLTEwMTcyMjE4ODMwNDQ0NS1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T19:20:47Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TOI Etimes",
        title:
          "Ranbir Kapoor reveals father Rishi Kapoor was rude towards fans who approached him for autographs and pic - TOI Etimes",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi6gFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9lbnRlcnRhaW5tZW50L2hpbmRpL2JvbGx5d29vZC9uZXdzL3JhbmJpci1rYXBvb3ItcmV2ZWFscy1mYXRoZXItcmlzaGkta2Fwb29yLXdhcy1ydWRlLXRvd2FyZHMtZmFucy13aG8tYXBwcm9hY2hlZC1oaW0tZm9yLWF1dG9ncmFwaHMtYW5kLXBpY3R1cmVzLWktd291bGQtc2VlLXRoZS1mYW5zLWZhY2UtL2FydGljbGVzaG93LzExMjA4ODgzMi5jbXPSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T19:04:00Z",
        content: null,
      },
      {
        source: { id: null, name: "Zoom" },
        author: "Sumit Rajguru",
        title:
          "Bigg Boss Marathi 5: Full Contestants List With Photos - Times Now",
        description:
          "Bigg Boss Marathi 5 Contestants List: Bigg Boss Marathi season 5 has started today with a bang. Let's meet 16 contestants of the Riteish Deshmukh show.",
        url: "https://www.timesnownews.com/entertainment-news/tv/bigg-boss-marathi-5-full-and-final-confirmed-contestants-list-with-photos-article-112087740",
        urlToImage:
          "https://static.tnn.in/thumb/msid-112088530,thumbsize-118508,width-1280,height-720,resizemode-75/112088530.jpg?quality=100",
        publishedAt: "2024-07-28T17:42:55Z",
        content:
          "The webpage at https://ssum-sec.casalemedia.com/usermatch?cb=https%3A%2F%2Fow.pubmatic.com%2Fsetuid%3Fgpp%3D%26bidder%3Dix%26gdpr%3D%26gdpr_consent%3D%26gpp%3D%26gpp_sid%3D%26f%3Db%26uid%3D&amp;gdpr=… [+156 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Khushi Kapoor Drops Hints About Her Connection With Vedang? - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zaG9ydC12aWRlb3MvZW50ZXJ0YWlubWVudC9raHVzaGkta2Fwb29yLWRyb3BzLWhpbnRzLWFib3V0LWhlci1jb25uZWN0aW9uLXdpdGgtdmVkYW5nL3Nob3J0dGFrZXMvMTEyMDg4MzIzLmNtc9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T17:32:47Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Poonam Sinha Films daughter Sonakshi Strutting Down The Ramp - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zaG9ydC12aWRlb3MvZW50ZXJ0YWlubWVudC9wb29uYW0tc2luaGEtZmlsbXMtZGF1Z2h0ZXItc29uYWtzaGktc3RydXR0aW5nLWRvd24tdGhlLXJhbXAvc2hvcnR0YWtlcy8xMTIwODgzMTUuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T17:31:51Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TellyChakkar",
        title:
          "Khatron Ke Khiladi 14: Rohit Shetty Ka Nikala Asim Ke Badtmijiyon Par Gussa,Dhakke Maar Nikala Bahar - TellyChakkar",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC0duZk5vMDFnRlpnmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T17:26:58Z",
        content: null,
      },
    ],
  },
  sports: {
    status: "ok",
    totalResults: 36,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Paris Olympics 2024 Day 3 Live Updates: More Indian shooting medals up for grabs - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiuwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vc3BvcnRzL29seW1waWNzL3BhcmlzLW9seW1waWNzLTIwMjQtZGF5LTMtbGl2ZS11cGRhdGVzLXNob290aW5nLXJhbWl0YS1qaW5kYWwtYXJqdW4tYmFidXRhLW1hbnUtYmhha2VyLWFyY2hlcnktYmFkbWludG9uLWhvY2tleS1qdWx5LTI5LTEwMTcyMjIyNjI0NzQ2My5odG1s0gG_AWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9zcG9ydHMvb2x5bXBpY3MvcGFyaXMtb2x5bXBpY3MtMjAyNC1kYXktMy1saXZlLXVwZGF0ZXMtc2hvb3RpbmctcmFtaXRhLWppbmRhbC1hcmp1bi1iYWJ1dGEtbWFudS1iaGFrZXItYXJjaGVyeS1iYWRtaW50b24taG9ja2V5LWp1bHktMjktMTAxNzIyMjI2MjQ3NDYzLWFtcC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:18:37Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "India Seal T20I Series Against Sri Lanka With a Game to Spare to Kick-start Gautam Gambhir Era - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiigFodHRwczovL3d3dy5uZXdzMTguY29tL2NyaWNrZXQvaW5kaWEtc2VhbC10MjBpLXNlcmllcy1hZ2FpbnN0LXNyaS1sYW5rYS13aXRoLWEtZ2FtZS10by1zcGFyZS10by1raWNrLXN0YXJ0LWdhdXRhbS1nYW1iaGlyLWVyYS04OTgxOTY5Lmh0bWzSAY4BaHR0cHM6Ly93d3cubmV3czE4LmNvbS9hbXAvY3JpY2tldC9pbmRpYS1zZWFsLXQyMGktc2VyaWVzLWFnYWluc3Qtc3JpLWxhbmthLXdpdGgtYS1nYW1lLXRvLXNwYXJlLXRvLWtpY2stc3RhcnQtZ2F1dGFtLWdhbWJoaXItZXJhLTg5ODE5NjkuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:51:50Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NDTV Sports",
        title:
          "Irfan Pathan's Blunt 'Riyan Parag Warning' As Gautam Gambhir Makes His Sanju Samson Stance Clear - NDTV Sports",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilQFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9zcmktbGFua2EtdnMtaW5kaWEtMjAyNC9pcmZhbi1wYXRoYW5zLWJsdW50LXJpeWFuLXBhcmFnLXdhcm5pbmctYXMtZ2F1dGFtLWdhbWJoaXItbWFrZXMtaGlzLXNhbmp1LXNhbXNvbi1zdGFuY2UtY2xlYXItNjIxMjA5ONIBmwFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9zcmktbGFua2EtdnMtaW5kaWEtMjAyNC9pcmZhbi1wYXRoYW5zLWJsdW50LXJpeWFuLXBhcmFnLXdhcm5pbmctYXMtZ2F1dGFtLWdhbWJoaXItbWFrZXMtaGlzLXNhbmp1LXNhbXNvbi1zdGFuY2UtY2xlYXItNjIxMjA5OC9hbXAvMQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:48:01Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "MLC 2024: Steven Smith, Marco Jansen star in Washington Freedom's title victory against San Francisco Unicorns - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMizQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9tYWpvci1sZWFndWUtY3JpY2tldC9tbGMtMjAyNC1zdGV2ZW4tc21pdGgtbWFyY28tamFuc2VuLXN0YXItaW4td2FzaGluZ3Rvbi1mcmVlZG9tcy10aXRsZS12aWN0b3J5LWFnYWluc3Qtc2FuLWZyYW5jaXNjby11bmljb3Jucy9hcnRpY2xlc2hvdy8xMTIwOTYyMjIuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:36:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Rohit pulls off Suryakumar Yadav-like heart-stopping catch - WATCH - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9uZXdzL3JvaGl0LXB1bGxzLW9mZi1zdXJ5YWt1bWFyLXlhZGF2LWxpa2UtaGVhcnQtc3RvcHBpbmctY2F0Y2gtd2F0Y2gvYXJ0aWNsZXNob3cvMTEyMDk1OTM2LmNtc9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:23:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Indian Express",
        title:
          "Football is replete with spying episodes, Canada’s drone disaster at Paris Olympics just the latest incident - The Indian Express",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipQFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvc3BvcnRzL2Zvb3RiYWxsL2Zvb3RiYWxsLWlzLXJlcGxldGUtd2l0aC1zcHlpbmctZXBpc29kZXMtY2FuYWRhcy1kcm9uZS1kaXNhc3Rlci1hdC1wYXJpcy1vbHltcGljcy1qdXN0LXRoZS1sYXRlc3QtaW5jaWRlbnQtOTQ4MTg1NS_SAaoBaHR0cHM6Ly9pbmRpYW5leHByZXNzLmNvbS9hcnRpY2xlL3Nwb3J0cy9mb290YmFsbC9mb290YmFsbC1pcy1yZXBsZXRlLXdpdGgtc3B5aW5nLWVwaXNvZGVzLWNhbmFkYXMtZHJvbmUtZGlzYXN0ZXItYXQtcGFyaXMtb2x5bXBpY3MtanVzdC10aGUtbGF0ZXN0LWluY2lkZW50LTk0ODE4NTUvbGl0ZS8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:21:48Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India.com",
        title:
          "Paris Olympics 2024: Manu Bhaker, PV Sindhu Headline India’s Day 2 Show – In Pictures - India.com",
        description: null,
        url: "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LmluZGlhLmNvbS9waG90b3Mvc3BvcnRzL3BhcmlzLW9seW1waWNzLTIwMjQtbWFudS1iaGFrZXItcHYtc2luZGh1LWhlYWRsaW5lLWluZGlhcy1kYXktMi1zaG93LWluLXBpY3R1cmVzLTM0MTkwNi_SAYABaHR0cHM6Ly93d3cuaW5kaWEuY29tL3Bob3Rvcy9zcG9ydHMvcGFyaXMtb2x5bXBpY3MtMjAyNC1tYW51LWJoYWtlci1wdi1zaW5kaHUtaGVhZGxpbmUtaW5kaWFzLWRheS0yLXNob3ctaW4tcGljdHVyZXMtMzQxOTA2L2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:19:37Z",
        content: null,
      },
      {
        source: { id: null, name: "India Today" },
        author: "India Today Sports Desk",
        title:
          "Olympics 2024 Badminton: Injury withdrawals impact Lakshya Sen, Sat-Chi in group stages - India Today",
        description:
          "Satwik-Chirag has suffered the same fate as Lakshya Sen as their next opponents Mark Lamsfuss and Marvin Seidel withdrew from the competition on Monday July 29",
        url: "https://www.indiatoday.in/sports/olympics/story/paris-olympics-2024-badminton-satwik-chirag-lakshya-sen-mark-lamsfuss-and-marvin-seidel-withdrawal-2573087-2024-07-29",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/paris-olympics-2024-290000290-16x9_0.jpg?VersionId=eHhy6pQ825bdkF95NENNFtBoszFNVyvN",
        publishedAt: "2024-07-29T03:05:10Z",
        content:
          "India's Satwik-Chirag suffered the same fate as Lakshya Sen as they will not be playing their second group game on Monday, July 29. The match has gotten cancelled following Mark Lamsfuss and Marvin S… [+2122 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ICC Cricket",
        title:
          "Shastri’s advice to Hardik Pandya after captaincy snub - ICC Cricket",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiV2h0dHBzOi8vd3d3LmljYy1jcmlja2V0LmNvbS9uZXdzL3NoYXN0cmktcy1hZHZpY2UtdG8taGFyZGlrLXBhbmR5YS1hZnRlci1jYXB0YWluY3ktc251YtIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:52:58Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "'Hum aa ke khel ke gaye hai, aa toh sahi ek dafaa': Former cricketer invites Indian team to Pakistan for - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi1QFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9uZXdzL2h1bS1hYWtlLWtoZWxrZS1nYXllLWhhaS1hYS10b2gtc2FoaS1lay1kYWZhYS1mb3JtZXItY3JpY2tldGVyLWludml0ZXMtaW5kaWFuLWNyaWNrZXQtdGVhbS10by1wbGF5LWljYy1jaGFtcGlvbnMtdHJvcGh5LWluLXBha2lzdGFuL2FydGljbGVzaG93LzExMjA5MzkzNC5jbXPSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:45:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Rahul Dravid's 'phenomenal' take on Manu Bhaker's 'incredible' fightback from Tokyo setback to Paris Olympic medal haul - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiuAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vc3BvcnRzL29seW1waWNzL3JhaHVsLWRyYXZpZC1waGVub21lbmFsLXRha2UtbWFudS1iaGFrZXItaW5jcmVkaWJsZS1maWdodGJhY2stdG9reW8tc2V0YmFjay1wYXJpcy1vbHltcGljcy1icm9uemUtbWVkYWwtaGF1bC1oaXN0b3J5LTEwMTcyMjIxNjk3MzU5My5odG1s0gG8AWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9zcG9ydHMvb2x5bXBpY3MvcmFodWwtZHJhdmlkLXBoZW5vbWVuYWwtdGFrZS1tYW51LWJoYWtlci1pbmNyZWRpYmxlLWZpZ2h0YmFjay10b2t5by1zZXRiYWNrLXBhcmlzLW9seW1waWNzLWJyb256ZS1tZWRhbC1oYXVsLWhpc3RvcnktMTAxNzIyMjE2OTczNTkzLWFtcC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:05:41Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "EuroSport Removes Commentator Bob Ballard From Paris Olympics Coverage After Sexist Remark - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihAFodHRwczovL3d3dy5uZXdzMTguY29tL3dvcmxkL2V1cm9zcG9ydC1yZW1vdmVzLWNvbW1lbnRhdG9yLWJvYi1iYWxsYXJkLWZyb20tcGFyaXMtb2x5bXBpY3MtY292ZXJhZ2UtYWZ0ZXItc2V4aXN0LXJlbWFyay04OTgyMTAwLmh0bWzSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:03:03Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "India's tennis campaign ends at Paris Olympics in single day as Sumit Nagal, Rohan Bopanna-Sriram Balaji lose 1st round - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMitAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vc3BvcnRzL29seW1waWNzL2luZGlhLXRlbm5pcy1jYW1wYWlnbi1lbmRzLXBhcmlzLW9seW1waWNzLTIwMjQtc2luZ2xlLWRheS1zdW1pdC1uYWdhbC1yb2hhbi1ib3Bhbm5hLXNyaXJhbS1iYWxhamktbG9zZS0xc3Qtcm91bmQtMTAxNzIyMjE0Nzk3OTIyLmh0bWzSAbgBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL3Nwb3J0cy9vbHltcGljcy9pbmRpYS10ZW5uaXMtY2FtcGFpZ24tZW5kcy1wYXJpcy1vbHltcGljcy0yMDI0LXNpbmdsZS1kYXktc3VtaXQtbmFnYWwtcm9oYW4tYm9wYW5uYS1zcmlyYW0tYmFsYWppLWxvc2UtMXN0LXJvdW5kLTEwMTcyMjIxNDc5NzkyMi1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:08:57Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Paris Olympics 2024 Day 3 (July 29) India Full Schedule: Eyes on Ramita Jindal, Babuta - What's India's schedule today? - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vc3BvcnRzL29seW1waWNzL3BhcmlzLW9seW1waWNzLTIwMjQtZGF5LTMtanVseS0yOS1pbmRpYS1mdWxsLXNjaGVkdWxlLXJhbWl0YS1qaW5kYWwtYXJqdW4tYmFidXRhLXdoYXQtaW5kaWEtc2NoZWR1bGUtdG9kYXktMTAxNzIyMTcyNDQ4OTEwLmh0bWzSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T00:48:35Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "Joe Root Creates History, Becomes 1st Batter In The World To… - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3Lm5ld3MxOC5jb20vY3JpY2tldC9qb2Utcm9vdC1jcmVhdGVzLWhpc3RvcnktYmVjb21lcy0xc3QtYmF0dGVyLWluLXRoZS13b3JsZC10by04OTgxNDY0Lmh0bWzSAWtodHRwczovL3d3dy5uZXdzMTguY29tL2FtcC9jcmlja2V0L2pvZS1yb290LWNyZWF0ZXMtaGlzdG9yeS1iZWNvbWVzLTFzdC1iYXR0ZXItaW4tdGhlLXdvcmxkLXRvLTg5ODE0NjQuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T18:23:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ESPNcricinfo",
        title:
          "Stokes and Wood enter record books after starring in Edgbaston win - ESPNcricinfo",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihAFodHRwczovL3d3dy5lc3BuY3JpY2luZm8uY29tL3N0b3J5L3d0Yy1lbmctdnMtd2ktYmVuLXN0b2tlcy1hbmQtbWFyay13b29kLWVudGVyLXJlY29yZC1ib29rcy1hZnRlci1zdGFycmluZy1pbi1lZGdiYXN0b24td2luLTE0NDUyODbSAZEBaHR0cHM6Ly93d3cuZXNwbmNyaWNpbmZvLmNvbS9zdG9yeS93dGMtZW5nLXZzLXdpLWJlbi1zdG9rZXMtYW5kLW1hcmstd29vZC1lbnRlci1yZWNvcmQtYm9va3MtYWZ0ZXItc3RhcnJpbmctaW4tZWRnYmFzdG9uLXdpbi0xNDQ1Mjg2P3BsYXRmb3JtPWFtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T16:30:41Z",
        content: null,
      },
      {
        source: { id: null, name: "ESPN India" },
        author: "Laurence Edmondson",
        title: "Russell stripped of Spa win after investigation - ESPN India",
        description:
          "George Russell was stripped of his victory at the Belgian Grand Prix after his Mercedes car was found to be underweight after the chequered flag.",
        url: "https://www.espn.in/f1/story/_/id/40664612/george-russell-investigation-underweight-car-winning-belgian-gp",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0728%2Fr1364582_1296x729_16%2D9.jpg",
        publishedAt: "2024-07-28T16:28:00Z",
        content:
          "George Russell was stripped of his victory at the Belgian Grand Prix after his Mercedes car was found to be underweight after the chequered flag.Russell's car was weighed after the race and found to … [+3394 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "England & Wales Cricket Board",
        title:
          "Wood Completes Brilliant 5-Fer! | Highlights - England v West Indies Day 3 | Rothesay Test 2024 - England & Wales Cricket Board",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC1BSRzNhby1mR1YwmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-28T16:24:25Z",
        content: null,
      },
      {
        source: { id: null, name: "NDTV News" },
        author: "Press Trust of India",
        title:
          "\"We Will Remember This Day\": Harmanpreet Kaur After India's Women's Asia Cup Final Loss - NDTV Sports",
        description:
          "This is only the second time that India haven't won the Women's Asia Cup in nine overall attempts.",
        url: "https://sports.ndtv.com/womens-t20-asia-cup-2024/we-will-remember-this-day-and-work-hard-harmanpreet-kaur-6208704",
        urlToImage:
          "https://c.ndtvimg.com/2021-07/jnk93m2k_harmanpreet-kaur_625x300_08_July_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        publishedAt: "2024-07-28T15:28:36Z",
        content:
          "A distraught India captain Harmanpreet Kaur admitted that there is room for a lot of improvement before the upcoming T20 World Cup and her team won't easily forget the eight-wicket humbling at the ha… [+1988 chars]",
      },
      {
        source: { id: null, name: "Olympics.com" },
        author: "Utathya Nag",
        title:
          "Paris 2024 Olympics: India medals tally and winners list - full table - Olympics",
        description:
          "Know list of Indian medal winners at the Paris 2024 Olympics. Get medals tally and know how many medals Indian athletes have won in each sport. Full table.",
        url: "https://olympics.com/en/news/paris-2024-olympics-india-medals-tally-winners-table",
        urlToImage:
          "https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/fetdneycmcv3h56mce0e",
        publishedAt: "2024-07-28T15:20:00Z",
        content:
          "A total of 117 Indian athletes, including five reserves, are on the hunt for medals and sporting immortality at the Paris 2024 Olympics, which runs from July 26 to August 11.\r\nThere will be Indian in… [+2024 chars]",
      },
    ],
  },
  technology: {
    status: "ok",
    totalResults: 65,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Communications Today",
        title:
          "Apple’s AI features rollout will miss upcoming iPhone software overhaul - Communications Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmNvbW11bmljYXRpb25zdG9kYXkuY28uaW4vYXBwbGVzLWFpLWZlYXR1cmVzLXJvbGxvdXQtd2lsbC1taXNzLXVwY29taW5nLWlwaG9uZS1zb2Z0d2FyZS1vdmVyaGF1bC_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:32:42Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "HMD Crest And Crest Max 5G With 50MP Selfie Camera Launched In India: Price, Features - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vdGVjaC9obWQtY3Jlc3QtYW5kLWNyZXN0LW1heC01Zy13aXRoLTUwbXAtc2VsZmllLWNhbWVyYS1sYXVuY2hlZC1pbi1pbmRpYS1wcmljZS1mZWF0dXJlcy04OTc5MzQ0Lmh0bWzSAYABaHR0cHM6Ly93d3cubmV3czE4LmNvbS9hbXAvdGVjaC9obWQtY3Jlc3QtYW5kLWNyZXN0LW1heC01Zy13aXRoLTUwbXAtc2VsZmllLWNhbWVyYS1sYXVuY2hlZC1pbi1pbmRpYS1wcmljZS1mZWF0dXJlcy04OTc5MzQ0Lmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:12:38Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Gadgets 360",
        title:
          "Gemini Chatbot for Android to Reportedly Get an AI-Powered Image Editing Feature - Gadgets 360",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vd3d3LmdhZGdldHMzNjAuY29tL2FpL25ld3MvZ2VtaW5pLWFpLWNoYXRib3QtYW5kcm9pZC1pbWFnZS1lZGl0aW5nLWZlYXR1cmUtcmVwb3J0LTYyMTI0MDXSAWVodHRwczovL3d3dy5nYWRnZXRzMzYwLmNvbS9haS9uZXdzL2dlbWluaS1haS1jaGF0Ym90LWFuZHJvaWQtaW1hZ2UtZWRpdGluZy1mZWF0dXJlLXJlcG9ydC02MjEyNDA1L2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T06:00:03Z",
        content: null,
      },
      {
        source: { id: null, name: "SamMobile" },
        author: "SamMobile, Abhijeet Mishra",
        title:
          "One UI 7.0 Samsung Internet app available for download - SamMobile - Samsung news",
        description:
          "The One UI 7.0 update isn't out yet, but a few of the Samsung apps from the next version of ...",
        url: "https://www.sammobile.com/news/one-ui-7-0-samsung-internet-app-leak-download/",
        urlToImage:
          "https://www.sammobile.com/wp-content/uploads/2021/08/Samsung-Internet-Z-Flip-3-720x405.jpg",
        publishedAt: "2024-07-29T05:52:00Z",
        content:
          "The One UI 7.0 update isn't out yet, but a few of the Samsung apps from the next version of One UI have leaked online. Following a leak for the Clock app, someone has now shared One UI 7's Samsung In… [+723 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "HT Tech",
        title:
          "Pixel 9 Pro, Vivo V40, Moto Edge 50 and more: New smartphones launching in August 2024 - HT Tech",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikwFodHRwczovL3RlY2guaGluZHVzdGFudGltZXMuY29tL21vYmlsZS9uZXdzL3BpeGVsLTktcHJvLXZpdm8tdjQwLW1vdG8tZWRnZS01MC1hbmQtbW9yZS1uZXctc21hcnRwaG9uZXMtbGF1bmNoaW5nLWluLWF1Z3VzdC0yMDI0LTcxNzIyMjMwNjQ1MDM5Lmh0bWzSAZcBaHR0cHM6Ly90ZWNoLmhpbmR1c3RhbnRpbWVzLmNvbS9hbXAvbW9iaWxlL25ld3MvcGl4ZWwtOS1wcm8tdml2by12NDAtbW90by1lZGdlLTUwLWFuZC1tb3JlLW5ldy1zbWFydHBob25lcy1sYXVuY2hpbmctaW4tYXVndXN0LTIwMjQtNzE3MjIyMzA2NDUwMzkuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:45:04Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title: "Reno12 5G: Your Go-To AI-Powered Companion - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9zcG9uc29yZWQtcG9zdC9yZW5vMTItNWcteW91ci1nby10by1haS1wb3dlcmVkLWNvbXBhbmlvbi0xMDE3MjIyMjc1NzM1MzYuaHRtbNIBcGh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9zcG9uc29yZWQtcG9zdC9yZW5vMTItNWcteW91ci1nby10by1haS1wb3dlcmVkLWNvbXBhbmlvbi0xMDE3MjIyMjc1NzM1MzYtYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:33:44Z",
        content: null,
      },
      {
        source: { id: null, name: "Moneycontrol" },
        author: "Diya Sharma",
        title:
          "Garena Free Fire MAX redeem codes for July 29, 2024: Win free weapons, diamonds, and more rewards today - Moneycontrol",
        description:
          "Redeeming these codes unlocks various in-game rewards, including skins, weapons, and character upgrades.",
        url: "https://www.moneycontrol.com/technology/garena-free-fire-max-redeem-codes-for-july-29-2024-win-free-weapons-diamonds-and-more-rewards-today-article-12780833.html",
        urlToImage:
          "https://images.moneycontrol.com/static-mcnews/2024/07/20240729052847_garena5.jpg",
        publishedAt: "2024-07-29T05:29:25Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title: "Google Pixel 9 AI features - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vdmlzdWFsc3Rvcmllcy90ZWNobm9sb2d5L2dvb2dsZS1waXhlbC05LWFpLWZlYXR1cmVzLWxlYWtlZC0xNTgxMzUtMjktMDctMjAyNNIBZmh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vdmlzdWFsc3Rvcmllcy90ZWNobm9sb2d5L2dvb2dsZS1waXhlbC05LWFpLWZlYXR1cmVzLWxlYWtlZC0xNTgxMzUtMjktMDctMjAyNA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:26:49Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "HP India launches ‘Be Unstoppable’ campaign to showcase the power of AI PCs - Exchange4Media",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihQFodHRwczovL3d3dy5leGNoYW5nZTRtZWRpYS5jb20vYWR2ZXJ0aXNpbmctbmV3cy9ocC1pbmRpYS1sYXVuY2hlcy1iZS11bnN0b3BwYWJsZS1jYW1wYWlnbi10by1zaG93Y2FzZS10aGUtcG93ZXItb2YtYWktcGNzLTEzNTk3OS5odG1s0gGJAWh0dHBzOi8vd3d3LmV4Y2hhbmdlNG1lZGlhLmNvbS9hbXAvYWR2ZXJ0aXNpbmctbmV3cy9ocC1pbmRpYS1sYXVuY2hlcy1iZS11bnN0b3BwYWJsZS1jYW1wYWlnbi10by1zaG93Y2FzZS10aGUtcG93ZXItb2YtYWktcGNzLTEzNTk3OS5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:09:16Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Indian Express",
        title:
          "Qualcomm’s Snapdragon Summit 2024 to begin on October 21: Snapdragon 8 Gen 4 anticipated - The Indian Express",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvdGVjaG5vbG9neS9tb2JpbGUtdGFicy9xdWFsY29tbXMtc25hcGRyYWdvbi1zdW1taXQtMjAyNC1vY3RvYmVyLTIxLXNuYXBkcmFnb24tOC1nZW4tNC05NDgyMDYxL9IBhQFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvdGVjaG5vbG9neS9tb2JpbGUtdGFicy9xdWFsY29tbXMtc25hcGRyYWdvbi1zdW1taXQtMjAyNC1vY3RvYmVyLTIxLXNuYXBkcmFnb24tOC1nZW4tNC05NDgyMDYxL2xpdGUv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T05:01:12Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Times Now",
        title:
          "iPhone 16, iPhone 16 Plus, iPhone 16 Pro And iPhone 16 Pro Max: Launch Date, Price, Specs, Camera And More - Times Now",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipgFodHRwczovL3d3dy50aW1lc25vd25ld3MuY29tL3RlY2hub2xvZ3ktc2NpZW5jZS9pcGhvbmUtMTYtaXBob25lLTE2LXBsdXMtaXBob25lLTE2LXByby1hbmQtaXBob25lLTE2LXByby1tYXgtbGF1bmNoLWRhdGUtcHJpY2Utc3BlY3MtY2FtZXJhLWFuZC1tb3JlLWFydGljbGUtMTEyMDk2MDc30gGqAWh0dHBzOi8vd3d3LnRpbWVzbm93bmV3cy5jb20vdGVjaG5vbG9neS1zY2llbmNlL2lwaG9uZS0xNi1pcGhvbmUtMTYtcGx1cy1pcGhvbmUtMTYtcHJvLWFuZC1pcGhvbmUtMTYtcHJvLW1heC1sYXVuY2gtZGF0ZS1wcmljZS1zcGVjcy1jYW1lcmEtYW5kLW1vcmUtYXJ0aWNsZS0xMTIwOTYwNzcvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:51:43Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ABP Live",
        title:
          "NYT Strands Answers For July 29: Having Trouble Guessing The Words? Here Are The Solutions - ABP Live",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijQFodHRwczovL25ld3MuYWJwbGl2ZS5jb20vZ2FtaW5nL255dC1zdHJhbmRzLWFuc3dlcnMtdG9kYXktanVseS0yOS0yMDI0LXdvcmRzLXNvbHV0aW9uLXNwYW5ncmFtLXRvZGF5LWhvdy10by1wbGF5LXdhdGNoLXZpZGVvLXR1dG9yaWFsLTE3MDY0MjTSAZEBaHR0cHM6Ly9uZXdzLmFicGxpdmUuY29tL2dhbWluZy9ueXQtc3RyYW5kcy1hbnN3ZXJzLXRvZGF5LWp1bHktMjktMjAyNC13b3Jkcy1zb2x1dGlvbi1zcGFuZ3JhbS10b2RheS1ob3ctdG8tcGxheS13YXRjaC12aWRlby10dXRvcmlhbC0xNzA2NDI0L2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:47:14Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Best phones to buy under ₹10,000 in July 2024: iQOO Z9 Lite 5G, Poco M6 Pro 5G and more | Mint - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilwFodHRwczovL3d3dy5saXZlbWludC5jb20vdGVjaG5vbG9neS9nYWRnZXRzL2Jlc3QtcGhvbmVzLXRvLWJ1eS11bmRlci1ycy0xMC0wMDAtaW4tanVseS0yMDI0LWlxb28tejktbGl0ZS01Zy1wb2NvLW02LXByby01Zy1hbmQtbW9yZS0xMTcyMjIyMzgxODQ4Ny5odG1s0gGbAWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS90ZWNobm9sb2d5L2dhZGdldHMvYmVzdC1waG9uZXMtdG8tYnV5LXVuZGVyLXJzLTEwLTAwMC1pbi1qdWx5LTIwMjQtaXFvby16OS1saXRlLTVnLXBvY28tbTYtcHJvLTVnLWFuZC1tb3JlL2FtcC0xMTcyMjIyMzgxODQ4Ny5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T04:40:19Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Exchange4Media",
        title:
          "Cookies stay on menu: What about investments on alternative adtech? - Exchange4Media",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5leGNoYW5nZTRtZWRpYS5jb20vZGlnaXRhbC1uZXdzL2Nvb2tpZXMtc3RheS1vbi1tZW51LXdoYXQtaGFwcGVucy10by1pbnZlc3RtZW50cy1tYWRlLWluLWFsdGVybmF0aXZlLXRlY2hub2xvZ2llcy0xMzU5NzUuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:49:26Z",
        content: null,
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "Tech Desk",
        title:
          "From Nothing Phone (2a) Plus to Moto Edge 50: 5 unique phones launching this week - The Indian Express",
        description:
          "Here are some of the most unique phones launching in the next few days.",
        url: "https://indianexpress.com/article/technology/mobile-tabs/unique-phones-launching-in-august-2024-9480750/",
        urlToImage:
          "https://images.indianexpress.com/2024/07/upcoming-phones-august.jpg",
        publishedAt: "2024-07-29T03:33:44Z",
        content:
          "Smartphone makers primarily experiment with colour, material, and finish to design devices that stand out from the rest. Thanks to immense competition, this has become more evident than ever before, … [+4151 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title:
          "Redmi Pad Pro 5G, Pad SE 4G to launch in India today: How to watch livestream and what to expect - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMioQFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL3RlY2hub2xvZ3kvbmV3cy9zdG9yeS9yZWRtaS1wYWQtcHJvLTVnLXBhZC1zZS00Zy10by1sYXVuY2gtaW4taW5kaWEtdG9kYXktaG93LXRvLXdhdGNoLWxpdmVzdHJlYW0tYW5kLXdoYXQtdG8tZXhwZWN0LTI1NzMwODktMjAyNC0wNy0yOdIBpQFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL2FtcC90ZWNobm9sb2d5L25ld3Mvc3RvcnkvcmVkbWktcGFkLXByby01Zy1wYWQtc2UtNGctdG8tbGF1bmNoLWluLWluZGlhLXRvZGF5LWhvdy10by13YXRjaC1saXZlc3RyZWFtLWFuZC13aGF0LXRvLWV4cGVjdC0yNTczMDg5LTIwMjQtMDctMjk?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T03:16:56Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NDTV",
        title:
          "Government Warns Of Phishing Attack Targeting CrowdStrike Users - NDTV",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3Lm5kdHYuY29tL2luZGlhLW5ld3MvZ292ZXJubWVudC13YXJucy1vZi1waGlzaGluZy1hdHRhY2stdGFyZ2V0aW5nLWNyb3dkc3RyaWtlLXVzZXJzLTYyMTE1NjHSAW1odHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL2dvdmVybm1lbnQtd2FybnMtb2YtcGhpc2hpbmctYXR0YWNrLXRhcmdldGluZy1jcm93ZHN0cmlrZS11c2Vycy02MjExNTYxL2FtcC8x?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:42:14Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Hindu",
        title:
          "Google Pixel 7 vs Google Pixel 8: Ahead of Google Pixel 9 launch, see the specs, features, prices - The Hindu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC90ZWNobm9sb2d5L2dhZGdldHMvbmV3cy1hYm91dC1waXhlbC1nb29nbGUtcGl4ZWwtOS9hcnRpY2xlNjg0NDkwNzcuZWNl0gFtaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL3NjaS10ZWNoL3RlY2hub2xvZ3kvZ2FkZ2V0cy9uZXdzLWFib3V0LXBpeGVsLWdvb2dsZS1waXhlbC05L2FydGljbGU2ODQ0OTA3Ny5lY2UvYW1wLw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:27:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Samsung",
        title:
          "Galaxy Tablets: Smarter, More Meaningful Learning through Play - Samsung",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vbmV3cy5zYW1zdW5nLmNvbS9teS9nYWxheHktdGFibGV0cy1zbWFydGVyLW1vcmUtbWVhbmluZ2Z1bC1sZWFybmluZy10aHJvdWdoLXBsYXnSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T02:00:05Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "ChatGPT maker OpenAI testing SearchGPT: 4 key things to know about the AI-powered search engine set to ta - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMixwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90ZWNobm9sb2d5L3RlY2gtbmV3cy9jaGF0Z3B0LW1ha2VyLW9wZW5haS10ZXN0aW5nLXNlYXJjaGdwdC00LWtleS10aGluZ3MtdG8ta25vdy1hYm91dC10aGUtYWktcG93ZXJlZC1zZWFyY2gtZW5naW5lLXNldC10by10YWtlLW9uLWdvb2dsZS9hcnRpY2xlc2hvdy8xMTIwNzk3MzYuY21z0gHLAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL3RlY2hub2xvZ3kvdGVjaC1uZXdzL2NoYXRncHQtbWFrZXItb3BlbmFpLXRlc3Rpbmctc2VhcmNoZ3B0LTQta2V5LXRoaW5ncy10by1rbm93LWFib3V0LXRoZS1haS1wb3dlcmVkLXNlYXJjaC1lbmdpbmUtc2V0LXRvLXRha2Utb24tZ29vZ2xlL2FtcF9hcnRpY2xlc2hvdy8xMTIwNzk3MzYuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-29T01:33:00Z",
        content: null,
      },
    ],
  },
};

function myFunction(category) {
  console.log(category);
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(articles[category]); // Fulfill the promise with a message
    } else {
      reject("Operation failed."); // Reject the promise with an error message
    }
  });
}

export { myFunction };
