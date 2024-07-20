const articles = {
  general: {
    status: "ok",
    totalResults: 38,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Microsoft outage LIVE updates: Wipro unaffected, says CEO Srinivas Pallia - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYnVzaW5lc3MvbWljcm9zb2Z0LW91dGFnZS1saXZlLXVwZGF0ZXMtdGVjaG5pY2FsLWdsaXRjaGVzLWRpc3J1cHQtc2VydmljZXMtd29ybGR3aWRlLTEwMTcyMTM3MzAyOTU3My5odG1s0gGMAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9idXNpbmVzcy9taWNyb3NvZnQtb3V0YWdlLWxpdmUtdXBkYXRlcy10ZWNobmljYWwtZ2xpdGNoZXMtZGlzcnVwdC1zZXJ2aWNlcy13b3JsZHdpZGUtMTAxNzIxMzczMDI5NTczLWFtcC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T16:23:21Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NDTV",
        title:
          "Over 300 Indian Students Return Home As 64 Die In Bangladesh Protests - NDTV",
        description: null,
        url: "https://news.google.com/rss/articles/CBMioAFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL2JhbmdsYWRlc2gtcHJvdGVzdHMtaW5kaWFucy1yZXR1cm4tZnJvbS1iYW5nbGFkZXNoLW92ZXItMzAwLWluZGlhbi1zdHVkZW50cy1yZXR1cm4taG9tZS1hcy02NC1kaWUtaW4tYmFuZ2xhZGVzaC1wcm90ZXN0cy02MTQzMTAz0gGmAWh0dHBzOi8vd3d3Lm5kdHYuY29tL2luZGlhLW5ld3MvYmFuZ2xhZGVzaC1wcm90ZXN0cy1pbmRpYW5zLXJldHVybi1mcm9tLWJhbmdsYWRlc2gtb3Zlci0zMDAtaW5kaWFuLXN0dWRlbnRzLXJldHVybi1ob21lLWFzLTY0LWRpZS1pbi1iYW5nbGFkZXNoLXByb3Rlc3RzLTYxNDMxMDMvYW1wLzE?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T16:15:22Z",
        content: null,
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "Rupsa Chakraborty",
        title:
          "As state records highest ever Zika outbreak, Mumbai’s surveillance and testing draw criticism - The Indian Express",
        description:
          "A senior health officer from Maharashtra expressed concerns that with Pune's significant number of cases and Mumbai's large floating population, it is improbable that the virus is absent from the city.",
        url: "https://indianexpress.com/article/cities/mumbai/as-state-records-highest-ever-zika-outbreak-mumbais-surveillance-and-testing-draw-criticism-9464170/",
        urlToImage: "https://images.indianexpress.com/2024/07/Zika.jpg",
        publishedAt: "2024-07-19T15:39:29Z",
        content:
          "Maharashtra has reported 28 Zika cases this year, the highest number of cases since the first case was reported in 2021. While Pune district accounts for 24 of the total cases reported so far, Mumbai… [+2572 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "UN top court terms Israel's occupation of Palestinian territory 'illegal'; Netanyahu says 'decision of lies' - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vd29ybGQtbmV3cy91bi10b3AtY291cnQtdGVybXMtaXNyYWVscy1vY2N1cGF0aW9uLW9mLXBhbGVzdGluaWFuLXRlcnJpdG9yeS1pbGxlZ2FsLW5ldGFueWFodS1zYXlzLWRlY2lzaW9uLW9mLWxpZXMtMTAxNzIxNDAwOTU0MTEwLmh0bWzSAakBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL3dvcmxkLW5ld3MvdW4tdG9wLWNvdXJ0LXRlcm1zLWlzcmFlbHMtb2NjdXBhdGlvbi1vZi1wYWxlc3Rpbmlhbi10ZXJyaXRvcnktaWxsZWdhbC1uZXRhbnlhaHUtc2F5cy1kZWNpc2lvbi1vZi1saWVzLTEwMTcyMTQwMDk1NDExMC1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T15:19:54Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Scroll.in",
        title:
          "Gujarat: Suspected Chandipura virus deaths rise to 20 - Scroll.in",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vc2Nyb2xsLmluL2xhdGVzdC8xMDcwODc3L2d1amFyYXQtc3VzcGVjdGVkLWNoYW5kaXB1cmEtdmlydXMtZGVhdGhzLXJpc2UtdG8tMjDSAVlodHRwczovL2FtcC5zY3JvbGwuaW4vbGF0ZXN0LzEwNzA4NzcvZ3VqYXJhdC1zdXNwZWN0ZWQtY2hhbmRpcHVyYS12aXJ1cy1kZWF0aHMtcmlzZS10by0yMA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:25:00Z",
        content: null,
      },
      {
        source: { id: null, name: "NDTV News" },
        author: "NDTV Sports Desk",
        title:
          "India vs Pakistan LIVE, Women's Asia Cup T20: Pooja Vastrakar's Twin Strikes Keep Ind On Top, Pak Eye Recovery - NDTV Sports",
        description:
          "India vs Pakistan Women LIVE Scorecard: India vs Pakistan, Women's Asia Cup 2024, LIVE Updates: Deepti Sharma picked three wickets while Pooja Vastrakar, Renuka Singh and Shreyanka Patil took two each.",
        url: "https://sports.ndtv.com/womens-t20-asia-cup-2024/india-vs-pakistan-live-score-womens-asia-cup-t20-2024-2nd-match-today-ind-vs-pak-live-scorecard-6141163",
        urlToImage:
          "https://c.ndtvimg.com/2022-12/bqk5cjqg_smriti-mandhana-shafali-verma-bcci_625x300_11_December_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        publishedAt: "2024-07-19T13:54:18Z",
        content:
          "India vs Pakistan, Women's Asia Cup 2024, LIVE Updates: Deepti Sharma picked three wickets while Pooja Vastrakar, Renuka Singh and Shreyanka Patil took two each as India bowled out Pakistan for 108 i… [+631 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "RIL Q1 Results: PAT drops 5% YoY to Rs 15,138 crore; revenue jumps 12% - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilAFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvZWFybmluZ3MvcmVsaWFuY2UtcTEtcmVzdWx0cy1wYXQtZHJvcHMtNS15b3ktdG8tcnMtMTUxMzgtY3JvcmUtcmV2ZW51ZS1qdW1wcy0xMi9hcnRpY2xlc2hvdy8xMTE4NjMwMjcuY21z0gGYAWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9tYXJrZXRzL3N0b2Nrcy9lYXJuaW5ncy9yZWxpYW5jZS1xMS1yZXN1bHRzLXBhdC1kcm9wcy01LXlveS10by1ycy0xNTEzOC1jcm9yZS1yZXZlbnVlLWp1bXBzLTEyL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjMwMjcuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:51:31Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "After India captaincy snub, can Hardik Pandya retain MI's top post next season? - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9pbmRpYS1pbi1zcmktbGFua2EvYWZ0ZXItaW5kaWEtY2FwdGFpbmN5LXNudWItY2FuLWhhcmRpay1wYW5keWEtcmV0YWluLW1pcy10b3AtcG9zdC1uZXh0LXNlYXNvbi9hcnRpY2xlc2hvdy8xMTE4NjUxODMuY21z0gGwAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL3Nwb3J0cy9jcmlja2V0L2luZGlhLWluLXNyaS1sYW5rYS9hZnRlci1pbmRpYS1jYXB0YWluY3ktc251Yi1jYW4taGFyZGlrLXBhbmR5YS1yZXRhaW4tbWlzLXRvcC1wb3N0LW5leHQtc2Vhc29uL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjUxODMuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:55:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "PINKVILLA",
        title:
          "Bad Newz Opening Day Box Office Trends: Vicky Kaushal aims to deliver his biggest opener in India - PINKVILLA",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimwFodHRwczovL3d3dy5waW5rdmlsbGEuY29tL2VudGVydGFpbm1lbnQvYm94LW9mZmljZS9iYWQtbmV3ei1vcGVuaW5nLWRheS1ib3gtb2ZmaWNlLXRyZW5kcy12aWNreS1rYXVzaGFsLWFpbXMtdG8tZGVsaXZlci1oaXMtYmlnZ2VzdC1vcGVuZXItaW4taW5kaWEtMTMyOTk4NdIBnwFodHRwczovL3d3dy5waW5rdmlsbGEuY29tL2VudGVydGFpbm1lbnQvYm94LW9mZmljZS9iYWQtbmV3ei1vcGVuaW5nLWRheS1ib3gtb2ZmaWNlLXRyZW5kcy12aWNreS1rYXVzaGFsLWFpbXMtdG8tZGVsaXZlci1oaXMtYmlnZ2VzdC1vcGVuZXItaW4taW5kaWEtMTMyOTk4NT9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:41:20Z",
        content: null,
      },
      {
        source: { id: null, name: "NDTV News" },
        author: null,
        title:
          '"Attack On Constitution": Priyanka Gandhi Hits Out At Kanwar Yatra Order - NDTV',
        description:
          "The police order to display the names of eatery owners along the Kanwar Yatra route in Muzaffarnagar, Uttar Pradesh, has been strongly criticised by Congress's Priyanka Gandhi Vadra, who said it was against the Constitution.",
        url: "https://www.ndtv.com/india-news/attack-on-constitution-priyanka-gandhi-hits-out-at-kanwar-yatra-order-6141151",
        urlToImage:
          "https://c.ndtvimg.com/2024-05/si9b4h4k_priyanka-gandhi-vadra-morena-_625x300_02_May_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
        publishedAt: "2024-07-19T12:01:10Z",
        content:
          "New Delhi: The police order to display the names of eatery owners along the Kanwar Yatra route in Muzaffarnagar, Uttar Pradesh, has been strongly criticised by Congress's Priyanka Gandhi Vadra, who s… [+1892 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "‘Why Should You Not Be Terminated As IAS?’ UPSC Files FIR Against Puja Khedkar; She Reacts - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3Lm5ld3MxOC5jb20vaW5kaWEvdXBzYy1maWxlcy1jb21wbGFpbnQtYWdhaW5zdC1pYXMtdHJhaW5lZS1wdWphLWtoZWRrYXItODk3MTQ2NC5odG1s0gFjaHR0cHM6Ly93d3cubmV3czE4LmNvbS9hbXAvaW5kaWEvdXBzYy1maWxlcy1jb21wbGFpbnQtYWdhaW5zdC1pYXMtdHJhaW5lZS1wdWphLWtoZWRrYXItODk3MTQ2NC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:59:20Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Bigg Boss OTT 3’s Payal Malik says she is going to divorce husband Armaan; says, “He can stay with Kritik - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi0AFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90di9uZXdzL2hpbmRpL2JpZ2ctYm9zcy1vdHQtM3MtcGF5YWwtbWFsaWstc2F5cy1zaGUtaXMtZ29pbmctdG8tZGl2b3JjZS1odXNiYW5kLWFybWFhbi1zYXlzLWhlLWNhbi1zdGF5LXdpdGgta3JpdGlrYS1hbmQtaWxsLXRha2UtY2FyZS1vZi10aGUta2lkcy9hcnRpY2xlc2hvdy8xMTE4NjM5MjkuY21z0gHUAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL3R2L25ld3MvaGluZGkvYmlnZy1ib3NzLW90dC0zcy1wYXlhbC1tYWxpay1zYXlzLXNoZS1pcy1nb2luZy10by1kaXZvcmNlLWh1c2JhbmQtYXJtYWFuLXNheXMtaGUtY2FuLXN0YXktd2l0aC1rcml0aWthLWFuZC1pbGwtdGFrZS1jYXJlLW9mLXRoZS1raWRzL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjM5MjkuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:55:00Z",
        content: null,
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT Entertainment Desk",
        title:
          "What if Ambanis were middle class and Anant-Radhika had a simple Indian wedding à la Vivah. Watch AI generated pics - Hindustan Times",
        description:
          "What if Radhika Merchant asked Anant Ambani, ‘Jal lenge?’ Take a look at these AI generated pics of the newlywed couple inspired by the film Vivah. | Bollywood",
        url: "https://www.hindustantimes.com/entertainment/bollywood/what-if-ambanis-were-middle-class-and-anant-radhika-had-a-simple-indian-wedding-a-la-vivah-watch-ai-generated-pics-101721386461714.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2024/07/19/1600x900/ambani_1721386965251_1721386965675.jpg",
        publishedAt: "2024-07-19T11:33:41Z",
        content:
          "Anant Ambani and Radhika Merchant's grand wedding celebrations last week were the talk of the town. From extravagant designer outfits to a star-studded baraat and live performances from noted singers… [+2346 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Usha Vance faces massive flak as she hails her Indian immigrant parents at RNC, Trump campaign says ‘it is disgusting…’ - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiugFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vd29ybGQtbmV3cy91cy1uZXdzL3VzaGEtdmFuY2UtZmFjZXMtbWFzc2l2ZS1mbGFrLWFzLXNoZS1oYWlscy1oZXItaW5kaWFuLWltbWlncmFudC1wYXJlbnRzLWF0LXJuYy10cnVtcC1jYW1wYWlnbi1zYXlzLWl0LWlzLWRpc2d1c3RpbmctMTAxNzIxMzgyNDE0OTM2Lmh0bWzSAb4BaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL3dvcmxkLW5ld3MvdXMtbmV3cy91c2hhLXZhbmNlLWZhY2VzLW1hc3NpdmUtZmxhay1hcy1zaGUtaGFpbHMtaGVyLWluZGlhbi1pbW1pZ3JhbnQtcGFyZW50cy1hdC1ybmMtdHJ1bXAtY2FtcGFpZ24tc2F5cy1pdC1pcy1kaXNndXN0aW5nLTEwMTcyMTM4MjQxNDkzNi1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:07:39Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Business Standard",
        title:
          "OnePlus Pad 2: Unboxing tablet with Qualcomm Snapdragon 8 Gen 3 chip - Business Standard",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC2R4TlNYU25VR0hZmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:58:45Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ET Now",
        title:
          "HDFC Bank Q1 results FY 2024-25 date, time: Check FULL earnings schedule - ET Now",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiemh0dHBzOi8vd3d3LmV0bm93bmV3cy5jb20vbWFya2V0cy9oZGZjLWJhbmstcTEtcmVzdWx0cy1meS0yMDI0LTI1LWRhdGUtdGltZS1jaGVjay1mdWxsLWVhcm5pbmdzLXNjaGVkdWxlLWFydGljbGUtMTExODYwMTA40gF-aHR0cHM6Ly93d3cuZXRub3duZXdzLmNvbS9tYXJrZXRzL2hkZmMtYmFuay1xMS1yZXN1bHRzLWZ5LTIwMjQtMjUtZGF0ZS10aW1lLWNoZWNrLWZ1bGwtZWFybmluZ3Mtc2NoZWR1bGUtYXJ0aWNsZS0xMTE4NjAxMDgvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:50:18Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Nativeplanet",
        title:
          "Risk of Brain Infections During Monsoon in Coastal and Northeastern India; Preventive Measures for Travelers - Nativeplanet",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5uYXRpdmVwbGFuZXQuY29tL25ld3Mvcmlzay1vZi1icmFpbi1pbmZlY3Rpb25zLWR1cmluZy1tb25zb29uLWluLWNvYXN0YWwtbm9ydGhlYXN0ZXJuLWluZGlhLW5ld3MtZm9yLXRyYXZlbGVycy0wMTI5MTMuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:45:50Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "After Nitish's JD(U), Chirag Paswan opposes Kanwar Yatra rules for UP eateries - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiigFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9hZnRlci1uaXRpc2hzLWpkLXUtY2hpcmFnLXBhc3dhbi1vcHBvc2VzLWthbndhci15YXRyYS1ydWxlcy1mb3ItdXAtZWF0ZXJpZXMtMTAxNzIxMzgyMzQ3OTAyLmh0bWzSAY4BaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2luZGlhLW5ld3MvYWZ0ZXItbml0aXNocy1qZC11LWNoaXJhZy1wYXN3YW4tb3Bwb3Nlcy1rYW53YXIteWF0cmEtcnVsZXMtZm9yLXVwLWVhdGVyaWVzLTEwMTcyMTM4MjM0NzkwMi1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:14:42Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "Wipro Q1 Results: Net profit up 4.6% on-year to Rs 3,003 crore; guidance raised - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvZWFybmluZ3Mvd2lwcm8tcTEtcmVzdWx0cy1uZXQtcHJvZml0LXJldmVudWUtdXBkYXRlLWZ5MjUtZ3Jvd3RoLWd1aWRhbmNlLTEyNzcyOTc0Lmh0bWzSAYUBaHR0cHM6Ly93d3cubW9uZXljb250cm9sLmNvbS9uZXdzL2J1c2luZXNzL2Vhcm5pbmdzL3dpcHJvLXExLXJlc3VsdHMtbmV0LXByb2ZpdC1yZXZlbnVlLXVwZGF0ZS1meTI1LWdyb3d0aC1ndWlkYW5jZS0xMjc3Mjk3NC5odG1sL2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:08:30Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Study observes smaller black hole in binary system for the first time - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zY2llbmNlL2ZpcnN0LWRpcmVjdC1vYnNlcnZhdGlvbi1vZi1zbWFsbGVyLWJsYWNrLWhvbGUtaW4tYmluYXJ5LXN5c3RlbS9hcnRpY2xlc2hvdy8xMTE4NTkyNzYuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:28:00Z",
        content: null,
      },
    ],
  },
  science: {
    status: "ok",
    totalResults: 44,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "WNCT-TV 9 On Your Side",
        title:
          "Rare Dinosaur Skeleton Exposed in Brazil After Erosion From Catastrophic Flooding - WNCT-TV 9 On Your Side",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiCzlHajNNTTR3dExJmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:13:24Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "VideoFromSpace",
        title:
          "Gas giant exoplanet seen transforming into a hot Jupiter - VideoFromSpace",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC3kwYXBGRzlteUUwmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:53:11Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "WION",
        title:
          "After spending $450mn on lunar exploration mission, NASA abruptly cancels it - WION",
        description: null,
        url: "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3Lndpb25ld3MuY29tL3NjaWVuY2UvYWZ0ZXItc3BlbmRpbmctNDUwbW4tb24tbHVuYXItZXhwbG9yYXRpb24tbWlzc2lvbi1uYXNhLWFicnVwdGx5LWNhbmNlbHMtaXQtNzQyNDA00gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:28:13Z",
        content: null,
      },
      {
        source: { id: "the-hindu", name: "The Hindu" },
        author: "Chris Wilson ,  Reuben Nowell &  Tim Barraclough",
        title:
          "Tiny animals use stolen genes to fight infections – and could fight antibiotic resistance too - The Hindu",
        description:
          "Microscopic animals copy antibiotic recipes from bacteria to fight infections, offering potential shortcuts in drug development.",
        url: "https://www.thehindu.com/sci-tech/health/tiny-animals-use-stolen-genes-to-fight-infections-and-could-fight-antibiotic-resistance-too/article68421581.ece",
        urlToImage:
          "https://th-i.thgim.com/public/incoming/aj9xw2/article68421861.ece/alternates/LANDSCAPE_1200/IMG_3TH-TEST_2_1_E184N7J4.jpg",
        publishedAt: "2024-07-19T11:38:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Tech Explorist",
        title:
          "Small Yet Mighty: Peatland Microorganisms have a big impact on climate - Tech Explorist",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnRlY2hleHBsb3Jpc3QuY29tL3NtYWxsLXlldC1taWdodHktcGVhdGxhbmQtbWljcm9vcmdhbmlzbXMtYmlnLWltcGFjdC1jbGltYXRlLzg2MjgyL9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:33:05Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Study observes smaller black hole in binary system for the first time - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zY2llbmNlL2ZpcnN0LWRpcmVjdC1vYnNlcnZhdGlvbi1vZi1zbWFsbGVyLWJsYWNrLWhvbGUtaW4tYmluYXJ5LXN5c3RlbS9hcnRpY2xlc2hvdy8xMTE4NTkyNzYuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:28:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "290-ft Apollo asteroid is coming towards Earth at full speed, know what NASA says - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL3NjaWVuY2UvMjkwLWZ0LWFwb2xsby1hc3Rlcm9pZC1pcy1jb21pbmctdG93YXJkcy1lYXJ0aC1hdC1mdWxsLXNwZWVkLWtub3ctd2hhdC1uYXNhLXNheXMtYXJ0aWNsZS0xMjc3MjkxNy5odG1s0gGPAWh0dHBzOi8vd3d3Lm1vbmV5Y29udHJvbC5jb20vc2NpZW5jZS8yOTAtZnQtYXBvbGxvLWFzdGVyb2lkLWlzLWNvbWluZy10b3dhcmRzLWVhcnRoLWF0LWZ1bGwtc3BlZWQta25vdy13aGF0LW5hc2Etc2F5cy1hcnRpY2xlLTEyNzcyOTE3Lmh0bWwvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:09:24Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Innovation News Network",
        title:
          "PLATO telescope to find Earth-like planets from 2026 - Innovation News Network",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vd3d3Lmlubm92YXRpb25uZXdzbmV0d29yay5jb20vcGxhdG8tdGVsZXNjb3BlLXRvLWZpbmQtZWFydGgtbGlrZS1wbGFuZXRzLWZyb20tMjAyNi80OTQxMS_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:47:51Z",
        content: null,
      },
      {
        source: { id: null, name: "NDTV News" },
        author: null,
        title:
          "Halfway Through The Current Solar Cycle, The Sun Is Starting Its Next - NDTV",
        description:
          "Even though the Sun is just halfway through its current cycle, the first rumblings of its next 11-year solar cycle have been detected in sound waves within it, according to a team of researchers.",
        url: "https://www.ndtv.com/science/halfway-through-the-current-solar-cycle-the-sun-is-starting-its-next-6139499",
        urlToImage:
          "https://c.ndtvimg.com/2022-09/cqi3c0n_the-sun-generic_625x300_13_September_22.jpg",
        publishedAt: "2024-07-19T08:45:09Z",
        content:
          "This current cycle is presently reaching its peak, or solar maximum. (Representational)\r\nNew Delhi: Even though the Sun is just halfway through its current cycle, the first rumblings of its next 11-y… [+1648 chars]",
      },
      {
        source: { id: null, name: "Adda247.com" },
        author: "Piyush Shukla",
        title: "NASA’s Historic Discovery: Six New Exoplanets - Adda247",
        description:
          "NASA has achieved a significant milestone with the discovery of six new exoplanets: HD 36384 b, TOI-198 b, TOI-2095 b, TOI-2095 c, TOI-4860 b, and MWC 758 c. This brings the total number of confirmed exoplanets outside our solar system to 5,502, marking a rem…",
        url: "https://currentaffairs.adda247.com/nasas-historic-discovery-six-new-exoplanets/",
        urlToImage:
          "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/07/19132807/exoplanet-144618925-16x9-1.jpg",
        publishedAt: "2024-07-19T07:59:48Z",
        content:
          "NASA has achieved a significant milestone with the discovery of six new exoplanets: HD 36384 b, TOI-198 b, TOI-2095 b, TOI-2095 c, TOI-4860 b, and MWC 758 c. This brings the total number of confirmed… [+2011 chars]",
      },
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title:
          "Climate change alters planetary spin | WION Climate Tracker - WION",
        description:
          "Scientists from the Swiss Federal Institute of Technology in Zurich (ETH) have determined that under the influence of climate warming, water from glaciers mo...",
        url: "https://www.youtube.com/watch?v=r22DfBTejK0",
        urlToImage: "https://i.ytimg.com/vi/r22DfBTejK0/maxresdefault.jpg",
        publishedAt: "2024-07-19T07:47:34Z",
        content:
          "403.\r\nThats an error.\r\nWe're sorry, but you do not have access to this page. \r\nThats all we know.",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title:
          "Europe's Juice probe to conduct double flyby with Earth, Moon; slingshot to Jupiter - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL3NjaWVuY2Uvc3RvcnkvZXVyb3Blcy1qdWljZS1wcm9iZS10by1jb25kdWN0LWRvdWJsZS1mbHlieS13aXRoLWVhcnRoLW1vb24tc2xpbmdzaG90LXRvLWp1cGl0ZXItMjU2OTAzOC0yMDI0LTA3LTE50gGPAWh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vYW1wL3NjaWVuY2Uvc3RvcnkvZXVyb3Blcy1qdWljZS1wcm9iZS10by1jb25kdWN0LWRvdWJsZS1mbHlieS13aXRoLWVhcnRoLW1vb24tc2xpbmdzaG90LXRvLWp1cGl0ZXItMjU2OTAzOC0yMDI0LTA3LTE5?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:32:36Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "AI helps NASA's Mars Rover in scientific exploration on the red planet - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL3NjaWVuY2UvYWktaGVscHMtbmFzYXMtbWFycy1yb3Zlci1pbi1zY2llbnRpZmljLWV4cGxvcmF0aW9uLW9uLXRoZS1yZWQtcGxhbmV0LWFydGljbGUtMTI3NzI2MzUuaHRtbNIBhAFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL3NjaWVuY2UvYWktaGVscHMtbmFzYXMtbWFycy1yb3Zlci1pbi1zY2llbnRpZmljLWV4cGxvcmF0aW9uLW9uLXRoZS1yZWQtcGxhbmV0LWFydGljbGUtMTI3NzI2MzUuaHRtbC9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:21:14Z",
        content: null,
      },
      {
        source: { id: null, name: "India Today" },
        author: "India Today Science Desk",
        title:
          "Curiosity rover discovers never-before-seen mysterious crystals on Mars - India Today",
        description:
          "On May 30 2024 the rover inadvertently cracked open a rock revealing vibrant yellow sulfur crystals that have never been observed on Mars before",
        url: "https://www.indiatoday.in/science/story/curiosity-rover-discovers-never-before-seen-mysterious-crystals-on-mars-2568990-2024-07-19",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/mars-crystal-discovery-190411581-16x9_0.jpg?VersionId=F5ZZI18YMRPZuR7AbgVLEPsvxjIrKsYC",
        publishedAt: "2024-07-19T07:12:10Z",
        content:
          "Nasa's Curiosity rover has made a groundbreaking discovery on Mars, uncovering rocks composed of a mysterious crystals. \r\nThese crystals, analysis reveled, are pure sulfur - a first of its kind disco… [+2106 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Republic World",
        title:
          "How NASA and SpaceX Will Bring Down the Space Station When It Gets Retired - Republic World",
        description: null,
        url: "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LnJlcHVibGljd29ybGQuY29tL3NjaWVuY2UvaG93LW5hc2EtYW5kLXNwYWNleC13aWxsLWJyaW5nLWRvd24tdGhlLXNwYWNlLXN0YXRpb24td2hlbi1pdC1nZXRzLXJldGlyZWTSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:03:02Z",
        content: null,
      },
      {
        source: { id: null, name: "Etedge-insights.com" },
        author: "Sarika Tiwari",
        title:
          "The rapid decline of Sea Ice Reflectivity: A global climate crisis - ET Edge Insights - ET Edge Insights",
        description:
          "The decline in sea ice reflectivity is accelerating global warming, pushing the impacts of climate change toward the upper limits of model predictions. As sea",
        url: "https://etedge-insights.com/sdgs-and-esg/climate-change/the-rapid-decline-of-sea-ice-reflectivity-a-global-climate-crisis/",
        urlToImage:
          "https://etedge-insights.com/wp-content/uploads/2024/07/Sea-Ice.jpg",
        publishedAt: "2024-07-19T06:28:07Z",
        content:
          "The decline in sea ice reflectivity is accelerating global warming, pushing the impacts of climate change toward the upper limits of model predictions. As sea ice in the Arctic and Antarctic continue… [+3818 chars]",
      },
      {
        source: { id: null, name: "Bizzbuzz.news" },
        author: "Jayani Chandrapala And Lisa Newman",
        title:
          "Tailored food aromas can help space travellers to enjoy ‘tasty’ food - Bizz Buzz",
        description:
          "The experience of food in space is very different from that on Earth",
        url: "https://www.bizzbuzz.news/LifeStyle/tailored-food-aromas-can-help-space-travellers-to-enjoy-tasty-food-1329653",
        urlToImage:
          "https://www.bizzbuzz.news/h-upload/2024/07/19/1930122-food.webp",
        publishedAt: "2024-07-19T05:41:36Z",
        content:
          "VR is a vital training environment for astronauts because of its unmatched ability to create a realistic sense of presence, crucial for studying what it is like to live in a spacecraft\r\nAstronauts of… [+5870 chars]",
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "Neha Yadav",
        title:
          "10 jaw-dropping images of galaxies taken by NASA's Hubble Space Telescope - Hindustan Times",
        description:
          "10 jaw-dropping images of galaxies taken by NASA's Hubble Space Telescope",
        url: "https://www.hindustantimes.com/web-stories/in-focus/10-jaw-dropping-images-of-galaxies-taken-by-nasas-hubble-space-telescope-101721209541638.html",
        urlToImage: null,
        publishedAt: "2024-07-19T03:30:12Z",
        content:
          "By Neha YadavPublished Jul 19, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Space.com",
        title:
          "NASA wants fresh ideas for recycling garbage on the moon - Space.com",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiPWh0dHBzOi8vd3d3LnNwYWNlLmNvbS9uYXNhLW1vb24tZ2FyYmFnZS1yZWN5Y2xpbmctbHVuYXJlY3ljbGXSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-18T19:00:26Z",
        content: null,
      },
      {
        source: { id: null, name: "Phys.Org" },
        author: "Jim Shelton",
        title:
          "A new explanation for Jupiter's shrinking Great Red Spot - Phys.org",
        description:
          "Jupiter's Great Red Spot—the biggest windstorm in the solar system—is shrinking, and a new study may help explain why.",
        url: "https://phys.org/news/2024-07-explanation-jupiter-great-red.html",
        urlToImage:
          "https://scx2.b-cdn.net/gfx/news/2024/a-new-explanation-for.jpg",
        publishedAt: "2024-07-18T16:44:19Z",
        content:
          "Jupiter's Great Red Spotthe biggest windstorm in the solar systemis shrinking, and a new study may help explain why.\r\nLocated in Jupiter's southern hemisphere, the Great Red Spot is a swirling, red-o… [+3964 chars]",
      },
    ],
  },
  health: {
    status: "ok",
    totalResults: 70,
    articles: [
      {
        source: { id: null, name: "The Indian Express" },
        author: "Rupsa Chakraborty",
        title:
          "As state records highest ever Zika outbreak, Mumbai’s surveillance and testing draw criticism - The Indian Express",
        description:
          "A senior health officer from Maharashtra expressed concerns that with Pune's significant number of cases and Mumbai's large floating population, it is improbable that the virus is absent from the city.",
        url: "https://indianexpress.com/article/cities/mumbai/as-state-records-highest-ever-zika-outbreak-mumbais-surveillance-and-testing-draw-criticism-9464170/",
        urlToImage: "https://images.indianexpress.com/2024/07/Zika.jpg",
        publishedAt: "2024-07-19T15:39:29Z",
        content:
          "Maharashtra has reported 28 Zika cases this year, the highest number of cases since the first case was reported in 2021. While Pune district accounts for 24 of the total cases reported so far, Mumbai… [+2572 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Clinical Trials Arena",
        title:
          "Seventh patient ‘cured’ of HIV among highlights at AIDS 2024 - Clinical Trials Arena",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiR2h0dHBzOi8vd3d3LmNsaW5pY2FsdHJpYWxzYXJlbmEuY29tL25ld3MvaGl2LWFpZHMtY29uZmVyZW5jZS1qdWx5LTIwMjQv0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T15:06:14Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "IIT Guwahati researchers discover RNA-destroying function of p30 protein in African swine fever virus - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiqAFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbmV3cy9zY2llbmNlL2lpdC1ndXdhaGF0aS1yZXNlYXJjaGVycy1kaXNjb3Zlci1ybmEtZGVzdHJveWluZy1mdW5jdGlvbi1vZi1wMzAtcHJvdGVpbi1pbi1hZnJpY2FuLXN3aW5lLWZldmVyLXZpcnVzL2FydGljbGVzaG93LzExMTg2NzY2NS5jbXPSAawBaHR0cHM6Ly9tLmVjb25vbWljdGltZXMuY29tL25ld3Mvc2NpZW5jZS9paXQtZ3V3YWhhdGktcmVzZWFyY2hlcnMtZGlzY292ZXItcm5hLWRlc3Ryb3lpbmctZnVuY3Rpb24tb2YtcDMwLXByb3RlaW4taW4tYWZyaWNhbi1zd2luZS1mZXZlci12aXJ1cy9hbXBfYXJ0aWNsZXNob3cvMTExODY3NjY1LmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:59:59Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "WION",
        title:
          "Scientists close to creating 'one and done' anti-flu vaccine to kill future pandemic - WION",
        description: null,
        url: "https://news.google.com/rss/articles/CBMieWh0dHBzOi8vd3d3Lndpb25ld3MuY29tL3NjaWVuY2Uvc2NpZW50aXN0cy1jbG9zZS10by1jcmVhdGluZy1vbmUtYW5kLWRvbmUtYW50aS1mbHUtdmFjY2luZS10by1raWxsLWZ1dHVyZS1wYW5kZW1pYy03NDI0NDfSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:40:02Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Scroll.in",
        title:
          "Gujarat: Suspected Chandipura virus deaths rise to 20 - Scroll.in",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vc2Nyb2xsLmluL2xhdGVzdC8xMDcwODc3L2d1amFyYXQtc3VzcGVjdGVkLWNoYW5kaXB1cmEtdmlydXMtZGVhdGhzLXJpc2UtdG8tMjDSAVlodHRwczovL2FtcC5zY3JvbGwuaW4vbGF0ZXN0LzEwNzA4NzcvZ3VqYXJhdC1zdXNwZWN0ZWQtY2hhbmRpcHVyYS12aXJ1cy1kZWF0aHMtcmlzZS10by0yMA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:25:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title: "10 most common symptoms of zinc deficiency - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi6QFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL2hlYWx0aC1hbmQtZml0bmVzcy9zeW1wdG9tcy1vZi16aW5jLWRlZmljaWVuY3ktaGFpci1sb3NzLXVuZXhwbGFpbmVkLXdlaWdodC1sb3NzLWZsdWN0dWF0aW5nLWJsb29kLXN1Z2FyLWxldmVscy1sb3NzLW9mLXNlbnNlLW9mLXNtZWxsLWZyZXF1ZW50LWluZmVjdGlvbnMtZGlhcnJoZWEtYmx1cnJlZC12aXNpb24tdmlzdWFsLXN0b3J5LTIyODI4ODUuaHRtbNIB6QFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL2hlYWx0aC1hbmQtZml0bmVzcy9zeW1wdG9tcy1vZi16aW5jLWRlZmljaWVuY3ktaGFpci1sb3NzLXVuZXhwbGFpbmVkLXdlaWdodC1sb3NzLWZsdWN0dWF0aW5nLWJsb29kLXN1Z2FyLWxldmVscy1sb3NzLW9mLXNlbnNlLW9mLXNtZWxsLWZyZXF1ZW50LWluZmVjdGlvbnMtZGlhcnJoZWEtYmx1cnJlZC12aXNpb24tdmlzdWFsLXN0b3J5LTIyODI4ODUuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:44:18Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title: "Lungs: 10 Most Common Causes For Pulmonary Embolism - NDTV",
        description: null,
        url: "https://consent.google.com/m",
        urlToImage: null,
        publishedAt: "2024-07-19T13:35:36Z",
        content:
          "We use cookies and data to\r\n<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to un… [+1139 chars]",
      },
      {
        source: { id: null, name: "India Today" },
        author: "INDIATODAY",
        title: "5 Habits To Prevent Cognitive Decline - India Today",
        description:
          "Here are five habits to follow to prevent cognitive decline.",
        url: "https://www.indiatoday.in/visualstories/education/5-habits-to-prevent-cognitive-decline-153426-19-07-2024",
        urlToImage:
          "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/07/photo-1605_1721394107.jpg",
        publishedAt: "2024-07-19T13:02:43Z",
        content:
          "A brain-healthy diet involves avoiding processed foods, sugary snacks, and excessive alcohol. Instead, prioritize foods rich in omega-3 fatty acids, antioxidants, healthy fats, whole grains, lean pro… [+32 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Global Polio Eradication Initiative",
        title:
          "GPEI-Variant type 2 poliovirus isolated from sewage samples in Gaza - Global Polio Eradication Initiative",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vcG9saW9lcmFkaWNhdGlvbi5vcmcvbmV3cy1wb3N0L3ZhcmlhbnQtdHlwZS0yLXBvbGlvdmlydXMtaXNvbGF0ZWQtZnJvbS1zZXdhZ2Utc2FtcGxlcy1pbi1nYXphL9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:41:14Z",
        content: null,
      },
      {
        source: { id: null, name: "News18" },
        author: null,
        title:
          "What Is KP.3 Variant and What Are Its Symptoms? Know All About The New Rapidly Spreading COVID-19 Strain - News18",
        description:
          "What is the KP.3 variant of COVID-19? What are the symptoms of the KP.3 variant? Know all about the new COVID-19 variant and precautions to be taken against it.",
        url: "https://www.news18.com/explainers/what-is-kp-3-variant-and-what-are-its-symptoms-know-all-about-the-new-rapidly-spreading-covid-19-strain-8971155.html",
        urlToImage:
          "https://images.news18.com/ibnlive/uploads/2024/05/img-79-2024-05-7d6a59ffc9cb9f75777dab6c2f1b4cd5-16x9.jpg?impolicy=website&width=1200&height=675",
        publishedAt: "2024-07-19T12:34:49Z",
        content:
          "Is it too early to say Coronavirus has ended? It probably is. The number of COVID-19 have begun rising again in the United State with new variants FLiRT and now KP.3. US President Joe Biden, too, tes… [+2358 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ETHealthWorld",
        title:
          "With onset of monsoon, cases of dengue, typhoid are on the rise in Telangana - ETHealthWorld",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijgFodHRwczovL2hlYWx0aC5lY29ub21pY3RpbWVzLmluZGlhdGltZXMuY29tL25ld3MvaW5kdXN0cnkvd2l0aC1vbnNldC1vZi1tb25zb29uLWNhc2VzLW9mLWRlbmd1ZS10eXBob2lkLWFyZS1vbi10aGUtcmlzZS1pbi10ZWxhbmdhbmEvMTExODY0Mzkz0gGSAWh0dHBzOi8vaGVhbHRoLmVjb25vbWljdGltZXMuaW5kaWF0aW1lcy5jb20vYW1wL25ld3MvaW5kdXN0cnkvd2l0aC1vbnNldC1vZi1tb25zb29uLWNhc2VzLW9mLWRlbmd1ZS10eXBob2lkLWFyZS1vbi10aGUtcmlzZS1pbi10ZWxhbmdhbmEvMTExODY0Mzkz?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:16:09Z",
        content: null,
      },
      {
        source: { id: null, name: "India Today" },
        author: "INDIATODAY",
        title: "5 Stress Releasing Techniques For Students - India Today",
        description:
          "Here are some stress-releasing techniques specifically tailored for students.",
        url: "https://www.indiatoday.in/visualstories/education/5-stress-releasing-techniques-for-students-153280-19-07-2024",
        urlToImage:
          "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/07/photo-1541_1721372430.jpg",
        publishedAt: "2024-07-19T11:36:27Z",
        content:
          "A balanced diet of fruits, vegetables, whole grains, lean proteins, and healthy fats supports, brain function, and overall health, improving mood, concentration, and academic performance while managi… [+31 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title: "7 Immunity Boosting Foods For Monsoon - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3Lm5ld3MxOC5jb20vd2ViLXN0b3JpZXMvbGlmZXN0eWxlLzctaW1tdW5pdHktYm9vc3RpbmctZm9vZHMtZm9yLW1vbnNvb24tMjI4MTg5Ny_SAVtodHRwczovL3d3dy5uZXdzMTguY29tL3dlYi1zdG9yaWVzL2xpZmVzdHlsZS83LWltbXVuaXR5LWJvb3N0aW5nLWZvb2RzLWZvci1tb25zb29uLTIyODE4OTcv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:33:09Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economist",
        title: "Dicky birds: the next pandemic? - The Economist",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC3pJY293R2hXU0NvmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:29:09Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Cureus",
        title:
          "Evaluation of the Tensor Fascia Lata Muscle Pedicle Bone Grafting Technique in the Management of Avascular Necrosis of the Femoral Head: An Observational Clinical Study - Cureus",
        description: null,
        url: "https://news.google.com/rss/articles/CBMizgFodHRwczovL3d3dy5jdXJldXMuY29tL2FydGljbGVzLzE3ODU3Ny1ldmFsdWF0aW9uLW9mLXRoZS10ZW5zb3ItZmFzY2lhLWxhdGEtbXVzY2xlLXBlZGljbGUtYm9uZS1ncmFmdGluZy10ZWNobmlxdWUtaW4tdGhlLW1hbmFnZW1lbnQtb2YtYXZhc2N1bGFyLW5lY3Jvc2lzLW9mLXRoZS1mZW1vcmFsLWhlYWQtYW4tb2JzZXJ2YXRpb25hbC1jbGluaWNhbC1zdHVkedIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:27:33Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TheHealthSite",
        title:
          "Vector-Borne Diseases Surge In India Expert Provides Insights On Precautionary Measures | TheHealthSite.c - TheHealthSite",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikgFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL3ZlY3Rvci1ib3JuZS1kaXNlYXNlcy1zdXJnZS1pbi1pbmRpYS1leHBlcnQtcHJvdmlkZXMtaW5zaWdodHMtb24tcHJlY2F1dGlvbmFyeS1tZWFzdXJlcy0xMTA5MzQ0L9IBlgFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL3ZlY3Rvci1ib3JuZS1kaXNlYXNlcy1zdXJnZS1pbi1pbmRpYS1leHBlcnQtcHJvdmlkZXMtaW5zaWdodHMtb24tcHJlY2F1dGlvbmFyeS1tZWFzdXJlcy0xMTA5MzQ0L2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:17:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Indian Express",
        title:
          "How cycling can reduce knee pain and arthritis risk - The Indian Express",
        description: null,
        url: "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vd2ViLXN0b3JpZXMvd2VsbG5lc3MvaG93LWN5Y2xpbmctY2FuLXJlZHVjZS1rbmVlLXBhaW4tYW5kLWFydGhyaXRpcy1yaXNrLzk0NjE4MDYv0gFraHR0cHM6Ly9pbmRpYW5leHByZXNzLmNvbS93ZWItc3Rvcmllcy93ZWxsbmVzcy9ob3ctY3ljbGluZy1jYW4tcmVkdWNlLWtuZWUtcGFpbi1hbmQtYXJ0aHJpdGlzLXJpc2svOTQ2MTgwNi8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:15:23Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "Scientists in the UK, find miracle drug that can increase longevity by 25 years - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilgFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFnYXppbmVzL3BhbmFjaGUvc2NpZW50aXN0cy1pbi10aGUtdWstZmluZC1taXJhY2xlLWRydWctdGhhdC1jYW4taW5jcmVhc2UtbG9uZ2V2aXR5LWJ5LTI1LXllYXJzL2FydGljbGVzaG93LzExMTg2MjY1NC5jbXPSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:13:55Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Free Press Journal",
        title:
          "Pimpri Chinchwad: PCMC Issues Caution as 23 Dengue Cases Confirmed - Free Press Journal",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LmZyZWVwcmVzc2pvdXJuYWwuaW4vcHVuZS9waW1wcmktY2hpbmNod2FkLXBjbWMtaXNzdWVzLWNhdXRpb24tYXMtMjMtZGVuZ3VlLWNhc2VzLWNvbmZpcm1lZNIBamh0dHBzOi8vd3d3LmZyZWVwcmVzc2pvdXJuYWwuaW4vYW1wL3B1bmUvcGltcHJpLWNoaW5jaHdhZC1wY21jLWlzc3Vlcy1jYXV0aW9uLWFzLTIzLWRlbmd1ZS1jYXNlcy1jb25maXJtZWQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:10:32Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Nativeplanet",
        title:
          "Risk of Brain Infections During Monsoon in Coastal and Northeastern India; Preventive Measures for Travelers - Nativeplanet",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5uYXRpdmVwbGFuZXQuY29tL25ld3Mvcmlzay1vZi1icmFpbi1pbmZlY3Rpb25zLWR1cmluZy1tb25zb29uLWluLWNvYXN0YWwtbm9ydGhlYXN0ZXJuLWluZGlhLW5ld3MtZm9yLXRyYXZlbGVycy0wMTI5MTMuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:45:50Z",
        content: null,
      },
    ],
  },
  business: {
    status: "ok",
    totalResults: 25,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Microsoft outage LIVE updates: Wipro unaffected, says CEO Srinivas Pallia - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vYnVzaW5lc3MvbWljcm9zb2Z0LW91dGFnZS1saXZlLXVwZGF0ZXMtdGVjaG5pY2FsLWdsaXRjaGVzLWRpc3J1cHQtc2VydmljZXMtd29ybGR3aWRlLTEwMTcyMTM3MzAyOTU3My5odG1s0gGMAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9idXNpbmVzcy9taWNyb3NvZnQtb3V0YWdlLWxpdmUtdXBkYXRlcy10ZWNobmljYWwtZ2xpdGNoZXMtZGlzcnVwdC1zZXJ2aWNlcy13b3JsZHdpZGUtMTAxNzIxMzczMDI5NTczLWFtcC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T16:23:21Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "RIL Q1 Results: PAT drops 5% YoY to Rs 15,138 crore; revenue jumps 12% - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilAFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvZWFybmluZ3MvcmVsaWFuY2UtcTEtcmVzdWx0cy1wYXQtZHJvcHMtNS15b3ktdG8tcnMtMTUxMzgtY3JvcmUtcmV2ZW51ZS1qdW1wcy0xMi9hcnRpY2xlc2hvdy8xMTE4NjMwMjcuY21z0gGYAWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9tYXJrZXRzL3N0b2Nrcy9lYXJuaW5ncy9yZWxpYW5jZS1xMS1yZXN1bHRzLXBhdC1kcm9wcy01LXlveS10by1ycy0xNTEzOC1jcm9yZS1yZXZlbnVlLWp1bXBzLTEyL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjMwMjcuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:51:31Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ET Now",
        title:
          "HDFC Bank Q1 results FY 2024-25 date, time: Check FULL earnings schedule - ET Now",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiemh0dHBzOi8vd3d3LmV0bm93bmV3cy5jb20vbWFya2V0cy9oZGZjLWJhbmstcTEtcmVzdWx0cy1meS0yMDI0LTI1LWRhdGUtdGltZS1jaGVjay1mdWxsLWVhcm5pbmdzLXNjaGVkdWxlLWFydGljbGUtMTExODYwMTA40gF-aHR0cHM6Ly93d3cuZXRub3duZXdzLmNvbS9tYXJrZXRzL2hkZmMtYmFuay1xMS1yZXN1bHRzLWZ5LTIwMjQtMjUtZGF0ZS10aW1lLWNoZWNrLWZ1bGwtZWFybmluZ3Mtc2NoZWR1bGUtYXJ0aWNsZS0xMTE4NjAxMDgvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:50:18Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "JSW Steel Q1 Results: Profit falls 64% YoY to Rs 845 crore, misses estimates - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilwFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvZWFybmluZ3MvanN3LXN0ZWVsLXExLXJlc3VsdHMtcHJvZml0LWZhbGxzLTY0LXlveS10by1ycy04NDUtY3JvcmUtbWlzc2VzLWVzdGltYXRlcy9hcnRpY2xlc2hvdy8xMTE4NjE0OTguY21z0gGbAWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9tYXJrZXRzL3N0b2Nrcy9lYXJuaW5ncy9qc3ctc3RlZWwtcTEtcmVzdWx0cy1wcm9maXQtZmFsbHMtNjQteW95LXRvLXJzLTg0NS1jcm9yZS1taXNzZXMtZXN0aW1hdGVzL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjE0OTguY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:36:29Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Benzinga India",
        title:
          "BPCL Q1 Net Profit More Than Halves, Shares Spiral Downwards - Benzinga India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vaW4uYmVuemluZ2EuY29tL2NvbnRlbnQvMzk4NTU4MDMvYnBjbC1xMS1uZXQtcHJvZml0LW1vcmUtdGhhbi1oYWx2ZXMtc2hhcmVzLXNwaXJhbC1kb3dud2FyZHPSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:13:27Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "Wipro Q1 Results: Net profit up 4.6% on-year to Rs 3,003 crore; guidance raised - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvZWFybmluZ3Mvd2lwcm8tcTEtcmVzdWx0cy1uZXQtcHJvZml0LXJldmVudWUtdXBkYXRlLWZ5MjUtZ3Jvd3RoLWd1aWRhbmNlLTEyNzcyOTc0Lmh0bWzSAYUBaHR0cHM6Ly93d3cubW9uZXljb250cm9sLmNvbS9uZXdzL2J1c2luZXNzL2Vhcm5pbmdzL3dpcHJvLXExLXJlc3VsdHMtbmV0LXByb2ZpdC1yZXZlbnVlLXVwZGF0ZS1meTI1LWdyb3d0aC1ndWlkYW5jZS0xMjc3Mjk3NC5odG1sL2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:08:30Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "CarDekho",
        title:
          "Tata Curvv And Tata Curvv EV Exterior Revealed, EV Version To Be Launched First - CarDekho",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5jYXJkZWtoby5jb20vaW5kaWEtY2FyLW5ld3MvdGF0YS1jdXJ2di1hbmQtdGF0YS1jdXJ2di1ldi1leHRlcmlvci1yZXZlYWxlZC1ldi12ZXJzaW9uLXRvLWJlLWxhdW5jaGVkLWZpcnN0LTMyODUxLmh0bdIBhgFodHRwczovL3d3dy5jYXJkZWtoby5jb20vaW5kaWEtY2FyLW5ld3MvdGF0YS1jdXJ2di1hbmQtdGF0YS1jdXJ2di1ldi1leHRlcmlvci1yZXZlYWxlZC1ldi12ZXJzaW9uLXRvLWJlLWxhdW5jaGVkLWZpcnN0LTMyODUxLmh0bT9hbXA9MQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:47:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "RVNL shares surge over 8%. 2 reasons behind the rally - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMifWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9tYXJrZXRzL3N0b2Nrcy9uZXdzL3J2bmwtc2hhcmVzLXN1cmdlLW92ZXItOC0yLXJlYXNvbnMtYmVoaW5kLXRoZS1yYWxseS9hcnRpY2xlc2hvdy8xMTE4NTg5OTUuY21z0gGBAWh0dHBzOi8vbS5lY29ub21pY3RpbWVzLmNvbS9tYXJrZXRzL3N0b2Nrcy9uZXdzL3J2bmwtc2hhcmVzLXN1cmdlLW92ZXItOC0yLXJlYXNvbnMtYmVoaW5kLXRoZS1yYWxseS9hbXBfYXJ0aWNsZXNob3cvMTExODU4OTk1LmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:16:32Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "CNBCTV18",
        title:
          "Shaktikanta Das flags concerns on low deposit growth, says household savings moving from banks to MFs - CNBCTV18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMikgFodHRwczovL3d3dy5jbmJjdHYxOC5jb20vZWNvbm9teS9zaGFrdGlrYW50YS1kYXMtZmxhZ3MtY29uY2VybnMtb24tbG93LWRlcG9zaXQtZ3Jvd3RoLXNheXMtaG91c2Vob2xkLXNhdmluZ3MtbW92aW5nLWZyb20tYmFua3MtdG8tbWZzLTE5NDQ1NzE2Lmh0bdIBlgFodHRwczovL3d3dy5jbmJjdHYxOC5jb20vZWNvbm9teS9zaGFrdGlrYW50YS1kYXMtZmxhZ3MtY29uY2VybnMtb24tbG93LWRlcG9zaXQtZ3Jvd3RoLXNheXMtaG91c2Vob2xkLXNhdmluZ3MtbW92aW5nLWZyb20tYmFua3MtdG8tbWZzLTE5NDQ1NzE2Lmh0bS9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:51:24Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Moneycontrol",
        title:
          "HAL, BEL, other defence stocks slump on profit booking ahead of Budget 2024 - Moneycontrol",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiigFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvbWFya2V0cy9oYWwtYmVsLW90aGVyLWRlZmVuY2Utc3RvY2tzLXNsdW1wLW9uLXByb2ZpdC1ib29raW5nLWFoZWFkLW9mLWJ1ZGdldC0yMDI0LTEyNzcyOTAzLmh0bWzSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:09:35Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "No office, no leaves! HCLTech links employee leaves to office attendance - CNBCTV18",
        description: null,
        url: "https://consent.google.com/m",
        urlToImage: null,
        publishedAt: "2024-07-19T07:32:32Z",
        content:
          "We use cookies and data to\r\n<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to un… [+1139 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "SpiceJet shares soar after announcement of board meeting to discuss capital infusion via QIP on July 23 | Company Business News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiowFodHRwczovL3d3dy5saXZlbWludC5jb20vY29tcGFuaWVzL25ld3Mvc3BpY2VqZXQtc2hhcmVzLXNvYXItYWZ0ZXItYW5ub3VuY2VtZW50LW9mLWJvYXJkLW1lZXRpbmctdG8tZGlzY3Vzcy1jYXBpdGFsLWluZnVzaW9uLXZpYS1xaXAtb24tanVseS0yMy0xMTcyMTM3MDYwNzk2OC5odG1s0gGnAWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS9jb21wYW5pZXMvbmV3cy9zcGljZWpldC1zaGFyZXMtc29hci1hZnRlci1hbm5vdW5jZW1lbnQtb2YtYm9hcmQtbWVldGluZy10by1kaXNjdXNzLWNhcGl0YWwtaW5mdXNpb24tdmlhLXFpcC1vbi1qdWx5LTIzL2FtcC0xMTcyMTM3MDYwNzk2OC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:13:32Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Indian embassy's big update after New Delhi-San Francisco Air India flight diverted to Russia - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9pbmRpYW4tZW1iYXNzeXMtYmlnLXVwZGF0ZS1hZnRlci1uZXctZGVsaGktc2FuLWZyYW5jaXNjby1haXItaW5kaWEtZmxpZ2h0LWRpdmVydGVkLXRvLXJ1c3NpYS0xMDE3MjEzNjg2NTc2NDEuaHRtbNIBnwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vaW5kaWEtbmV3cy9pbmRpYW4tZW1iYXNzeXMtYmlnLXVwZGF0ZS1hZnRlci1uZXctZGVsaGktc2FuLWZyYW5jaXNjby1haXItaW5kaWEtZmxpZ2h0LWRpdmVydGVkLXRvLXJ1c3NpYS0xMDE3MjEzNjg2NTc2NDEtYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:02:12Z",
        content: null,
      },
      {
        source: { id: null, name: "Benzinga" },
        author: "Nivedita Hazra",
        title:
          "Paytm's Net Loss Soars To ₹839 Cr, Shares Recover As Street Expected Worse - Benzinga India",
        description:
          "The firm's revenue from operations fell 36% to ₹1501 crore in the April-June period from ₹2,341 crore in Q1 2024 after the Reserve Bank of India's curbs on its payments banks business.",
        url: "https://in.benzinga.com/content/39853723/paytms-net-loss-soars-to-839-cr-shares-recover-as-street-expected-worse",
        urlToImage:
          "https://cdn.benzinga.com/files/images/story/2024/07/19/Guwahati-Paytm.jpeg?width=1200&height=800&fit=crop",
        publishedAt: "2024-07-19T06:24:00Z",
        content:
          "Shares of Paytm's parent company One97 Communications were largely flat after the firm reported its first-quarter results for the financial year 2024.\r\nWhat Happened: Paytm saw its consolidated net l… [+2711 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Benzinga India",
        title:
          "JSW Infrastructure Shares Plunge After Weak Earnings, Brokerages Divided - Benzinga India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vaW4uYmVuemluZ2EuY29tL2NvbnRlbnQvMzk4NTM2OTkvanN3LWluZnJhc3RydWN0dXJlLXNoYXJlcy1wbHVuZ2UtYWZ0ZXItd2Vhay1lYXJuaW5ncy1icm9rZXJhZ2VzLWRpdmlkZWTSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T06:17:57Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Airtel follows Reliance Jio to introduce unlimited 5G data booster packs: Check rates here | Company Business News - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilQFodHRwczovL3d3dy5saXZlbWludC5jb20vY29tcGFuaWVzL25ld3MvYWlydGVsLWZvbGxvd3MtcmVsaWFuY2UtamlvLXRvLWludHJvZHVjZS11bmxpbWl0ZWQtNWctZGF0YS1ib29zdGVyLXBhY2tzLWNoZWNrLXJhdGVzLWhlcmUtMTE3MjEzNjQ5MDYxODMuaHRtbNIBmQFodHRwczovL3d3dy5saXZlbWludC5jb20vY29tcGFuaWVzL25ld3MvYWlydGVsLWZvbGxvd3MtcmVsaWFuY2UtamlvLXRvLWludHJvZHVjZS11bmxpbWl0ZWQtNWctZGF0YS1ib29zdGVyLXBhY2tzLWNoZWNrLXJhdGVzLWhlcmUvYW1wLTExNzIxMzY0OTA2MTgzLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T05:49:42Z",
        content: null,
      },
      {
        source: { id: null, name: "Benzinga" },
        author: "Nivedita Hazra",
        title:
          "Tata Communications' Shares See-Saw After Q1 Results, Motilal Oswal Maintains 'Neutral' Rating - Benzinga India",
        description:
          "The consolidated EBITDA margin increased by 140 basis points quarter-over-quarter to 20%. Motilal Oswal expects the firm's long-term margin target to remain between 23% and 25%.",
        url: "https://in.benzinga.com/content/39853235/tata-communications-shares-see-saw-after-q1-results-motilal-oswal-maintains-neutral-rating",
        urlToImage:
          "https://cdn.benzinga.com/files/images/story/2024/07/19/Tata-Digital-Tata-Sons.jpeg?width=1200&height=800&fit=crop",
        publishedAt: "2024-07-19T04:36:31Z",
        content:
          "Shares of Tata Communications fell on Friday after the firm delivered its first-quarter results for the financial year 2025. \r\nWhat Happened: The firm reported a consolidated net profit of 332.84 cro… [+1615 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Upstox",
        title:
          "Persistent Systems cracks over 7% post Q1 earnings; EBIT margin slips 50 bps QoQ - Upstox",
        description: null,
        url: "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vdXBzdG94LmNvbS9uZXdzL21hcmtldC1uZXdzL3N0b2Nrcy9wZXJzaXN0ZW50LXN5c3RlbXMtY3JhY2tzLW92ZXItNy1wb3N0LXExLWVhcm5pbmdzLXBhdC1zbGlwcy0yLTgtcW8tcS9hcnRpY2xlLTEwMzAwNi_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T04:27:57Z",
        content: null,
      },
      {
        source: { id: null, name: "Business Standard" },
        author: "Business Standard",
        title:
          "Infosys stock best IT bet post Q1, say analysts; target price increased - Business Standard",
        description:
          "Infosys Share Price: This came after Infosys trumped street estimates in its financial performance for the first quarter of financial year 2024-25 (Q1FY25) while also giving higher growth guidance than expected for FY25",
        url: "https://www.business-standard.com/markets/news/infosys-stock-best-it-bet-post-q1-say-analysts-target-price-increased-124071900148_1.html",
        urlToImage:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/18/thumb/fitandfill/400X400/1721294796-1941.JPG",
        publishedAt: "2024-07-19T04:11:13Z",
        content:
          "Jefferies, too raised its target price at Rs 2,040 from 1,630 with a Buy rating on Infosys.  Further, JP Morgan also remained Overweight on the IT major with a raised target price at Rs 1,950.  At 09… [+184 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Hacker News",
        title:
          "WazirX Cryptocurrency Exchange Loses $230 Million in Major Security Breach - The Hacker News",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vdGhlaGFja2VybmV3cy5jb20vMjAyNC8wNy93YXppcngtY3J5cHRvY3VycmVuY3ktZXhjaGFuZ2UtbG9zZXMuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T04:07:00Z",
        content: null,
      },
    ],
  },
  entertainment: {
    status: "ok",
    totalResults: 68,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Hina Khan drops new pictures from work diaries post surgery after breast cancer diagnosis - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMingFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC90di9oaW5hLWtoYW4tZHJvcHMtbmV3LXBpY3R1cmVzLWZyb20td29yay1kaWFyaWVzLXBvc3Qtc3VyZ2VyeS1hZnRlci1icmVhc3QtY2FuY2VyLWRpYWdub3Npcy0xMDE3MjEzOTY2NjI4MjcuaHRtbNIBogFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC90di9oaW5hLWtoYW4tZHJvcHMtbmV3LXBpY3R1cmVzLWZyb20td29yay1kaWFyaWVzLXBvc3Qtc3VyZ2VyeS1hZnRlci1icmVhc3QtY2FuY2VyLWRpYWdub3Npcy0xMDE3MjEzOTY2NjI4MjctYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:46:42Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "123telugu",
        title:
          "Finally, noted producer ends rumors of rift between Allu Arjun and Sukumar - 123telugu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vbW5ld3MvZmluYWxseS1ub3RlZC1wcm9kdWNlci1lbmRzLXJ1bW9ycy1vZi1yaWZ0LWJldHdlZW4tYWxsdS1hcmp1bi1hbmQtc3VrdW1hci5odG1s0gFyaHR0cHM6Ly93d3cuMTIzdGVsdWd1LmNvbS9tbmV3cy9maW5hbGx5LW5vdGVkLXByb2R1Y2VyLWVuZHMtcnVtb3JzLW9mLXJpZnQtYmV0d2Vlbi1hbGx1LWFyanVuLWFuZC1zdWt1bWFyLmh0bWwvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:30:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "Arjun Kapoor Drops Cryptic Post Amid Breakup Rumours With Malaika Arora: 'Staying Positive Does Not...' - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijAFodHRwczovL3d3dy5uZXdzMTguY29tL21vdmllcy9hcmp1bi1rYXBvb3ItZHJvcHMtY3J5cHRpYy1wb3N0LWFtaWQtYnJlYWt1cC1ydW1vdXJzLXdpdGgtbWFsYWlrYS1hcm9yYS1zdGF5aW5nLXBvc2l0aXZlLWRvZXMtbm90LTg5NzE5NTYuaHRtbNIBkAFodHRwczovL3d3dy5uZXdzMTguY29tL2FtcC9tb3ZpZXMvYXJqdW4ta2Fwb29yLWRyb3BzLWNyeXB0aWMtcG9zdC1hbWlkLWJyZWFrdXAtcnVtb3Vycy13aXRoLW1hbGFpa2EtYXJvcmEtc3RheWluZy1wb3NpdGl2ZS1kb2VzLW5vdC04OTcxOTU2Lmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:52:20Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "PINKVILLA",
        title:
          "Bad Newz Opening Day Box Office Trends: Vicky Kaushal aims to deliver his biggest opener in India - PINKVILLA",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimwFodHRwczovL3d3dy5waW5rdmlsbGEuY29tL2VudGVydGFpbm1lbnQvYm94LW9mZmljZS9iYWQtbmV3ei1vcGVuaW5nLWRheS1ib3gtb2ZmaWNlLXRyZW5kcy12aWNreS1rYXVzaGFsLWFpbXMtdG8tZGVsaXZlci1oaXMtYmlnZ2VzdC1vcGVuZXItaW4taW5kaWEtMTMyOTk4NdIBnwFodHRwczovL3d3dy5waW5rdmlsbGEuY29tL2VudGVydGFpbm1lbnQvYm94LW9mZmljZS9iYWQtbmV3ei1vcGVuaW5nLWRheS1ib3gtb2ZmaWNlLXRyZW5kcy12aWNreS1rYXVzaGFsLWFpbXMtdG8tZGVsaXZlci1oaXMtYmlnZ2VzdC1vcGVuZXItaW4taW5kaWEtMTMyOTk4NT9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:41:20Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "123telugu",
        title:
          "Vikram and Pa. Ranjith’s Thangalaan locks its release date - 123telugu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vbW5ld3MvdmlrcmFtLWFuZC1wYS1yYW5qaXRocy10aGFuZ2FsYWFuLWxvY2tzLWl0cy1yZWxlYXNlLWRhdGUuaHRtbNIBYWh0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vbW5ld3MvdmlrcmFtLWFuZC1wYS1yYW5qaXRocy10aGFuZ2FsYWFuLWxvY2tzLWl0cy1yZWxlYXNlLWRhdGUuaHRtbC9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:36:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "When Abhishek Bachchan Spoke About 'Being Torn' Between Aishwarya Rai, Jaya Bachchan: 'Maa And Her Are...' - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijAFodHRwczovL3d3dy5uZXdzMTguY29tL21vdmllcy93aGVuLWFiaGlzaGVrLWJhY2hjaGFuLXNwb2tlLWFib3V0LWJlaW5nLXRvcm4tYmV0d2Vlbi1haXNod2FyeWEtcmFpLWpheWEtYmFjaGNoYW4tbWFhLWFuZC1oZXItYXJlLTg5NzE2ODYuaHRtbNIBkAFodHRwczovL3d3dy5uZXdzMTguY29tL2FtcC9tb3ZpZXMvd2hlbi1hYmhpc2hlay1iYWNoY2hhbi1zcG9rZS1hYm91dC1iZWluZy10b3JuLWJldHdlZW4tYWlzaHdhcnlhLXJhaS1qYXlhLWJhY2hjaGFuLW1hYS1hbmQtaGVyLWFyZS04OTcxNjg2Lmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:56:55Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Bigg Boss OTT 3’s Payal Malik says she is going to divorce husband Armaan; says, “He can stay with Kritik - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi0AFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90di9uZXdzL2hpbmRpL2JpZ2ctYm9zcy1vdHQtM3MtcGF5YWwtbWFsaWstc2F5cy1zaGUtaXMtZ29pbmctdG8tZGl2b3JjZS1odXNiYW5kLWFybWFhbi1zYXlzLWhlLWNhbi1zdGF5LXdpdGgta3JpdGlrYS1hbmQtaWxsLXRha2UtY2FyZS1vZi10aGUta2lkcy9hcnRpY2xlc2hvdy8xMTE4NjM5MjkuY21z0gHUAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL3R2L25ld3MvaGluZGkvYmlnZy1ib3NzLW90dC0zcy1wYXlhbC1tYWxpay1zYXlzLXNoZS1pcy1nb2luZy10by1kaXZvcmNlLWh1c2JhbmQtYXJtYWFuLXNheXMtaGUtY2FuLXN0YXktd2l0aC1rcml0aWthLWFuZC1pbGwtdGFrZS1jYXJlLW9mLXRoZS1raWRzL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjM5MjkuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:55:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "123telugu",
        title: "Review: The Birthday Boy – Only for a few thrills - 123telugu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vcmV2aWV3cy90aGUtYmlydGhkYXktYm95LXRlbHVndS1tb3ZpZS1yZXZpZXcuaHRtbNIBT2h0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vcmV2aWV3cy90aGUtYmlydGhkYXktYm95LXRlbHVndS1tb3ZpZS1yZXZpZXcuaHRtbC9hbXA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:46:31Z",
        content: null,
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT Entertainment Desk",
        title:
          "What if Ambanis were middle class and Anant-Radhika had a simple Indian wedding à la Vivah. Watch AI generated pics - Hindustan Times",
        description:
          "What if Radhika Merchant asked Anant Ambani, ‘Jal lenge?’ Take a look at these AI generated pics of the newlywed couple inspired by the film Vivah. | Bollywood",
        url: "https://www.hindustantimes.com/entertainment/bollywood/what-if-ambanis-were-middle-class-and-anant-radhika-had-a-simple-indian-wedding-a-la-vivah-watch-ai-generated-pics-101721386461714.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2024/07/19/1600x900/ambani_1721386965251_1721386965675.jpg",
        publishedAt: "2024-07-19T11:33:41Z",
        content:
          "Anant Ambani and Radhika Merchant's grand wedding celebrations last week were the talk of the town. From extravagant designer outfits to a star-studded baraat and live performances from noted singers… [+2346 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Lensmen Reviews",
        title:
          "Idiyan Chandhu Review | Peter Hein’s Action Is Not Enough to Cover up the Flaws of This Lackluster Movie - Lensmen Reviews",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiRmh0dHBzOi8vbGVuc21lbnJldmlld3MuY29tL2lkaXlhbi1jaGFuZGh1LW1hbGF5YWxhbS1tb3ZpZS1yZXZpZXctMjAyNC_SAUpodHRwczovL2xlbnNtZW5yZXZpZXdzLmNvbS9pZGl5YW4tY2hhbmRodS1tYWxheWFsYW0tbW92aWUtcmV2aWV3LTIwMjQvP2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:05:29Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "123telugu",
        title:
          "OTT Review : Anjali’s Bahishkarana – Telugu web series on ZEE5 - 123telugu",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LjEyM3RlbHVndS5jb20vcmV2aWV3cy9vdHQtcmV2aWV3LWFuamFsaXMtYmFoaXNoa2FyYW5hLXRlbHVndS13ZWItc2VyaWVzLW9uLXplZTUuaHRtbNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:46:36Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Rajeev Sen reacts to fans questioning him if he will get back with ex-wife Charu Asopa; says ‘It's very important to be happy in each other's company’ - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi3AFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90di9uZXdzL2hpbmRpL3JhamVldi1zZW4tcmVhY3RzLXRvLWZhbnMtcXVlc3Rpb25pbmctaGltLWlmLWhlLXdpbGwtZ2V0LWJhY2std2l0aC1leC13aWZlLWNoYXJ1LWFzb3BhLXNheXMtaXRzLXZlcnktaW1wb3J0YW50LXRvLWJlLWhhcHB5LWluLWVhY2gtb3RoZXJzLWNvbXBhbnkvcGhvdG9zdG9yeS8xMTE4NTkyOTguY21z0gHiAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL3R2L25ld3MvaGluZGkvcmFqZWV2LXNlbi1yZWFjdHMtdG8tZmFucy1xdWVzdGlvbmluZy1oaW0taWYtaGUtd2lsbC1nZXQtYmFjay13aXRoLWV4LXdpZmUtY2hhcnUtYXNvcGEtc2F5cy1pdHMtdmVyeS1pbXBvcnRhbnQtdG8tYmUtaGFwcHktaW4tZWFjaC1vdGhlcnMtY29tcGFueS9hbXBfZXRwaG90b3N0b3J5LzExMTg1OTI5OC5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:31:58Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Koimoi",
        title:
          "Kill Box Office Collection Day 14: Lakshya’s Actioner Thrives Amidst Sarfira & Indian 2; To Face Bad Newz Impact - Koimoi",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihQFodHRwczovL3d3dy5rb2ltb2kuY29tL2JveC1vZmZpY2Uva2lsbC1ib3gtb2ZmaWNlLWNvbGxlY3Rpb24tZGF5LTE0LWxha3NoeWFzLWFjdGlvbmVyLXRocml2ZXMtYW1pZHN0LXNhcmZpcmEtdG8tZmFjZS1iYWQtbmV3ei1pbXBhY3Qv0gGJAWh0dHBzOi8vd3d3LmtvaW1vaS5jb20vYm94LW9mZmljZS9raWxsLWJveC1vZmZpY2UtY29sbGVjdGlvbi1kYXktMTQtbGFrc2h5YXMtYWN0aW9uZXItdGhyaXZlcy1hbWlkc3Qtc2FyZmlyYS10by1mYWNlLWJhZC1uZXd6LWltcGFjdC9hbXAv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T09:27:21Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Quint",
        title:
          "Former Actor Krishna Kumar's Daughter Tishaa Dies After Battle With Cancer - The Quint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiggFodHRwczovL3d3dy50aGVxdWludC5jb20vZW50ZXJ0YWlubWVudC9jZWxlYnJpdGllcy9mb3JtZXItYWN0b3Ita3Jpc2huYS1rdW1hcnMtZGF1Z2h0ZXItdGlzaGFhLWt1bWFyLWRpZXMtYWZ0ZXItYmF0dGxlLXdpdGgtY2FuY2Vy0gGMAWh0dHBzOi8vd3d3LnRoZXF1aW50LmNvbS9hbXAvc3RvcnkvZW50ZXJ0YWlubWVudC9jZWxlYnJpdGllcy9mb3JtZXItYWN0b3Ita3Jpc2huYS1rdW1hcnMtZGF1Z2h0ZXItdGlzaGFhLWt1bWFyLWRpZXMtYWZ0ZXItYmF0dGxlLXdpdGgtY2FuY2Vy?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:56:48Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Gulte",
        title: "Pekamedalu Movie Review - Gulte",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiQWh0dHBzOi8vd3d3Lmd1bHRlLmNvbS9tb3ZpZXJldmlld3MvMzA1NTg4L3Bla2FtZWRhbHUtbW92aWUtcmV2aWV30gFFaHR0cHM6Ly93d3cuZ3VsdGUuY29tL21vdmllcmV2aWV3cy8zMDU1ODgvcGVrYW1lZGFsdS1tb3ZpZS1yZXZpZXcvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:09:18Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TOI Etimes",
        title:
          "'A top Bollywood star caught in a compromising position by his wife in a vanity van, two months after wed - TOI Etimes",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi7QFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9lbnRlcnRhaW5tZW50L2hpbmRpL2JvbGx5d29vZC9uZXdzL2EtdG9wLWJvbGx5d29vZC1zdGFyLWNhdWdodC1pbi1hLWNvbXByb21pc2luZy1wb3NpdGlvbi1ieS1oaXMtd2lmZS1pbi1hLXZhbml0eS12YW4tdHdvLW1vbnRocy1hZnRlci13ZWRkaW5nLWZpbG1tYWtlci12aXNoYWwtcHVuamFiaS1yZXZlYWxzL2FydGljbGVzaG93LzExMTg1NTk5MC5jbXPSAfEBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vZW50ZXJ0YWlubWVudC9oaW5kaS9ib2xseXdvb2QvbmV3cy9hLXRvcC1ib2xseXdvb2Qtc3Rhci1jYXVnaHQtaW4tYS1jb21wcm9taXNpbmctcG9zaXRpb24tYnktaGlzLXdpZmUtaW4tYS12YW5pdHktdmFuLXR3by1tb250aHMtYWZ0ZXItd2VkZGluZy1maWxtbWFrZXItdmlzaGFsLXB1bmphYmktcmV2ZWFscy9hbXBfYXJ0aWNsZXNob3cvMTExODU1OTkwLmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:28:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TOI Etimes",
        title:
          "Kartik Aaryan celebrates one month of 'Chandu Champion' release, pens gratitude note - TOI Etimes",
        description: null,
        url: "https://news.google.com/rss/articles/CBMisgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9lbnRlcnRhaW5tZW50L2hpbmRpL2JvbGx5d29vZC9uZXdzL2thcnRpay1hYXJ5YW4tY2VsZWJyYXRlcy1vbmUtbW9udGgtb2YtY2hhbmR1LWNoYW1waW9uLXJlbGVhc2UtcGVucy1ncmF0aXR1ZGUtbm90ZS9hcnRpY2xlc2hvdy8xMTE4NTU4MTMuY21z0gG2AWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2VudGVydGFpbm1lbnQvaGluZGkvYm9sbHl3b29kL25ld3Mva2FydGlrLWFhcnlhbi1jZWxlYnJhdGVzLW9uZS1tb250aC1vZi1jaGFuZHUtY2hhbXBpb24tcmVsZWFzZS1wZW5zLWdyYXRpdHVkZS1ub3RlL2FtcF9hcnRpY2xlc2hvdy8xMTE4NTU4MTMuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:10:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Times Now",
        title:
          "Ram Charan Becomes The First Indian To Be Awarded The Ambassador For Indian Art & Culture At IIFM - Times Now",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiqAFodHRwczovL3d3dy50aW1lc25vd25ld3MuY29tL2VudGVydGFpbm1lbnQtbmV3cy90ZWx1Z3UvcmFtLWNoYXJhbi1iZWNvbWVzLXRoZS1maXJzdC1pbmRpYW4tdG8tYmUtYXdhcmRlZC10aGUtYW1iYXNzYWRvci1mb3ItaW5kaWFuLWFydC1jdWx0dXJlLWF0LWlpZm0tYXJ0aWNsZS0xMTE4NTU3MTbSAawBaHR0cHM6Ly93d3cudGltZXNub3duZXdzLmNvbS9lbnRlcnRhaW5tZW50LW5ld3MvdGVsdWd1L3JhbS1jaGFyYW4tYmVjb21lcy10aGUtZmlyc3QtaW5kaWFuLXRvLWJlLWF3YXJkZWQtdGhlLWFtYmFzc2Fkb3ItZm9yLWluZGlhbi1hcnQtY3VsdHVyZS1hdC1paWZtLWFydGljbGUtMTExODU1NzE2L2FtcA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:05:37Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "TOI Etimes",
        title:
          "Action-packed ‘Deva’ starring Shahid Kapoor and Pooja Hegde gets a new release date - TOI Etimes",
        description: null,
        url: "https://news.google.com/rss/articles/CBMisgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9lbnRlcnRhaW5tZW50L2hpbmRpL2JvbGx5d29vZC9uZXdzL2FjdGlvbi1wYWNrZWQtZGV2YS1zdGFycmluZy1zaGFoaWQta2Fwb29yLWFuZC1wb29qYS1oZWdkZS1nZXRzLWEtbmV3LXJlbGVhc2UtZGF0ZS9hcnRpY2xlc2hvdy8xMTE4NTUzNjQuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T06:53:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Anant Ambani wore a brooch with Dhirubhai Ambani's picture at his wedding reception - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiqAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2Zhc2hpb24vYnV6ei9hbmFudC1hbWJhbmktd29yZS1hLWJyb29jaC13aXRoLWRoaXJ1YmhhaS1hbWJhbmlzLXBpY3R1cmUtYXQtaGlzLXdlZGRpbmctcmVjZXB0aW9uL2FydGljbGVzaG93LzExMTg1NDgwMC5jbXPSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T06:45:00Z",
        content: null,
      },
    ],
  },
  sports: {
    status: "ok",
    totalResults: 44,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "Sportstar",
        title:
          "Neeraj Chopra: ‘Need to compete with hosh and josh at Paris Olympics’ - Sportstar",
        description: null,
        url: "https://news.google.com/rss/articles/CBMisQFodHRwczovL3Nwb3J0c3Rhci50aGVoaW5kdS5jb20vb2x5bXBpY3MvcGFyaXMtMjAyNC9pbnRlcnZpZXdzL25lZXJhai1jaG9wcmEtcGFyaXMtMjAyNC1vbHltcGljcy1qYXZlbGluLXRocm93LWZvcm0taW5qdXJ5LXVwZGF0ZS1pbnRlcnZpZXctaW5kaWFuLXNwb3J0cy1uZXdzL2FydGljbGU2ODQxMzUzNi5lY2XSAbYBaHR0cHM6Ly9zcG9ydHN0YXIudGhlaGluZHUuY29tL29seW1waWNzL3BhcmlzLTIwMjQvaW50ZXJ2aWV3cy9uZWVyYWotY2hvcHJhLXBhcmlzLTIwMjQtb2x5bXBpY3MtamF2ZWxpbi10aHJvdy1mb3JtLWluanVyeS11cGRhdGUtaW50ZXJ2aWV3LWluZGlhbi1zcG9ydHMtbmV3cy9hcnRpY2xlNjg0MTM1MzYuZWNlL2FtcC8?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T16:19:08Z",
        content: null,
      },
      {
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "TOI Sports Desk",
        title:
          "Mohammed Shami names these two players as his best friends in Team India - The Times of India",
        description:
          "Cricket News: Star India pacer Mohammed Shami, who has returned to bowling in the nets after being out of action since the ODI World Cup due to ankle injury, reveal",
        url: "https://timesofindia.indiatimes.com/sports/cricket/news/mohammed-shami-names-these-two-players-as-his-best-friends-in-team-india/articleshow/111868415.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-111868429,width-1070,height-580,imgsize-42858,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        publishedAt: "2024-07-19T15:37:00Z",
        content:
          "Your Privacy\r\nWhen you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used t… [+2093 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "Ravindra Jadeja Unlikely To Play ODIs For India Again – Reports - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vY3JpY2tldC9yYXZpbmRyYS1qYWRlamEtdW5saWtlbHktdG8tcGxheS1vZGlzLWZvci1pbmRpYS1hZ2Fpbi1yZXBvcnRzLTg5NzE0NzguaHRtbNIBbWh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vYW1wL2NyaWNrZXQvcmF2aW5kcmEtamFkZWphLXVubGlrZWx5LXRvLXBsYXktb2Rpcy1mb3ItaW5kaWEtYWdhaW4tcmVwb3J0cy04OTcxNDc4Lmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:31:12Z",
        content: null,
      },
      {
        source: { id: null, name: "NDTV News" },
        author: "NDTV Sports Desk",
        title:
          "India vs Pakistan LIVE, Women's Asia Cup T20: Pooja Vastrakar's Twin Strikes Keep Ind On Top, Pak Eye Recovery - NDTV Sports",
        description:
          "India vs Pakistan Women LIVE Scorecard: India vs Pakistan, Women's Asia Cup 2024, LIVE Updates: Deepti Sharma picked three wickets while Pooja Vastrakar, Renuka Singh and Shreyanka Patil took two each.",
        url: "https://sports.ndtv.com/womens-t20-asia-cup-2024/india-vs-pakistan-live-score-womens-asia-cup-t20-2024-2nd-match-today-ind-vs-pak-live-scorecard-6141163",
        urlToImage:
          "https://c.ndtvimg.com/2022-12/bqk5cjqg_smriti-mandhana-shafali-verma-bcci_625x300_11_December_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        publishedAt: "2024-07-19T13:54:18Z",
        content:
          "India vs Pakistan, Women's Asia Cup 2024, LIVE Updates: Deepti Sharma picked three wickets while Pooja Vastrakar, Renuka Singh and Shreyanka Patil took two each as India bowled out Pakistan for 108 i… [+631 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NDTV Sports",
        title:
          "England vs West Indies: England's 156.26 kmph Sensation, Breaks 'Fastest Over' Record vs West Indies.. - NDTV Sports",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihwFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L2VuZ2xhbmQtdnMtd2VzdC1pbmRpZXMtZW5nbGFuZHMtMTU2LTI2LWttcGgtc2Vuc2F0aW9uLWJyZWFrcy1mYXN0ZXN0LW92ZXItcmVjb3JkLXZzLXdlc3QtaW5kaWVzLTYxNDE2NTPSAY0BaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vY3JpY2tldC9lbmdsYW5kLXZzLXdlc3QtaW5kaWVzLWVuZ2xhbmRzLTE1Ni0yNi1rbXBoLXNlbnNhdGlvbi1icmVha3MtZmFzdGVzdC1vdmVyLXJlY29yZC12cy13ZXN0LWluZGllcy02MTQxNjUzL2FtcC8x?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:25:32Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "After India captaincy snub, can Hardik Pandya retain MI's top post next season? - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9pbmRpYS1pbi1zcmktbGFua2EvYWZ0ZXItaW5kaWEtY2FwdGFpbmN5LXNudWItY2FuLWhhcmRpay1wYW5keWEtcmV0YWluLW1pcy10b3AtcG9zdC1uZXh0LXNlYXNvbi9hcnRpY2xlc2hvdy8xMTE4NjUxODMuY21z0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:55:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "News18",
        title:
          "As Hardik Pandya And Natasa Stankovic Part Ways, A Look At Their Net Worth - News18",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vbW92aWVzL2FzLWhhcmRpay1wYW5keWEtYW5kLW5hdGFzYS1zdGFua292aWMtcGFydC13YXlzLWEtbG9vay1hdC10aGVpci1uZXQtd29ydGgtODk3MTMyNy5odG1s0gF4aHR0cHM6Ly93d3cubmV3czE4LmNvbS9hbXAvbW92aWVzL2FzLWhhcmRpay1wYW5keWEtYW5kLW5hdGFzYS1zdGFua292aWMtcGFydC13YXlzLWEtbG9vay1hdC10aGVpci1uZXQtd29ydGgtODk3MTMyNy5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:28:56Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Natasa Stankovic shares first post after announcing separation from Hardik Pandya, spends quality time with son Agastya - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiwgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2QvbmF0YXNhLXN0YW5rb3ZpYy1zaGFyZXMtZmlyc3QtcG9zdC1hZnRlci1hbm5vdW5jaW5nLXNlcGFyYXRpb24tZnJvbS1oYXJkaWstcGFuZHlhLXNwZW5kcy1xdWFsaXR5LXRpbWUtd2l0aC1zb24tYWdhc3R5YS0xMDE3MjEzNzc2NjQwNzEuaHRtbNIBxgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2QvbmF0YXNhLXN0YW5rb3ZpYy1zaGFyZXMtZmlyc3QtcG9zdC1hZnRlci1hbm5vdW5jaW5nLXNlcGFyYXRpb24tZnJvbS1oYXJkaWstcGFuZHlhLXNwZW5kcy1xdWFsaXR5LXRpbWUtd2l0aC1zb24tYWdhc3R5YS0xMDE3MjEzNzc2NjQwNzEtYW1wLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:42:18Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ESPN India",
        title:
          "Are Yoro, Zirkzee signings proof of positive changes to Man United's transfer policy? - ESPN India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LmVzcG4uaW4vZm9vdGJhbGwvc3RvcnkvXy9pZC80MDU4ODI3Mi9tYW4tdW5pdGVkLXRyYW5zZmVyLXBvbGljeS1sZW55LXlvcm8tam9zaHVhLXppcmt6ZWXSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T08:00:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Virat Kohli promises BCCI to move on from past feuds with Gautam Gambhir for greater good of Indian cricket: Report - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vY3JpY2tldC92aXJhdC1rb2hsaS1wcm9taXNlcy1iY2NpLXRvLW1vdmUtb24tZnJvbS1wYXN0LWZldWRzLXdpdGgtZ2F1dGFtLWdhbWJoaXItZm9yLWdyZWF0ZXItZ29vZC1vZi1pbmRpYW4tY3JpY2tldC1yZXBvcnQtMTAxNzIxMzczMjk3Njk3Lmh0bWzSAbIBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2NyaWNrZXQvdmlyYXQta29obGktcHJvbWlzZXMtYmNjaS10by1tb3ZlLW9uLWZyb20tcGFzdC1mZXVkcy13aXRoLWdhdXRhbS1nYW1iaGlyLWZvci1ncmVhdGVyLWdvb2Qtb2YtaW5kaWFuLWNyaWNrZXQtcmVwb3J0LTEwMTcyMTM3MzI5NzY5Ny1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:26:21Z",
        content: null,
      },
      {
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "TOI Sports Desk",
        title:
          "Olympics: India's tryst with fourth-place heartbreaks - The Times of India",
        description:
          "Paris Olympics 2024 News: India's Olympic fourth-place finishes include Neville D'Souza 1956, Milkha Singh 1960, PT Usha 1984, men's hockey 1980, Bhupathi-Paes 2004, Kunjarani",
        url: "https://timesofindia.indiatimes.com/sports/paris-olympics-2024/olympics-indias-tryst-with-fourth-place-heartbreaks/articleshow/111855851.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-111855835,width-1070,height-580,imgsize-56216,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        publishedAt: "2024-07-19T07:13:00Z",
        content:
          "Your Privacy\r\nWhen you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used t… [+2093 chars]",
      },
      {
        source: { id: null, name: "NDTV News" },
        author: "NDTV News Desk",
        title:
          "\"Reaping What He Had Sown\": Ex-India Star's Blunt Take On Amit Mishra's Remarks At Virat Kohli - NDTV Sports",
        description:
          "Lucknow Super Giants spinner Amit Mishra's remarks on star India batter Virat Kohli has sparked a huge debate.",
        url: "https://sports.ndtv.com/cricket/reaping-what-was-sown-ex-india-stars-blunt-take-on-amit-mishras-remarks-at-virat-kohli-6131708",
        urlToImage:
          "https://c.ndtvimg.com/2024-07/5am3nbsg_virat-kohli-afp_625x300_02_July_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738",
        publishedAt: "2024-07-19T07:09:42Z",
        content:
          "Lucknow Super Giants spinner Amit Mishra's remarks on star India batter Virat Kohli have sparked a huge debate. Mishra, who recently appeared on a podcast, stated that due to immense power and fame, … [+1781 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Barca Blaugranes",
        title:
          "Barcelona fans send donations to try and help sign Nico Williams - Barca Blaugranes",
        description: null,
        url: "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LmJhcmNhYmxhdWdyYW5lcy5jb20vMjAyNC83LzE5LzI0MjAxNDIyL2JhcmNlbG9uYS1mYW5zLXNlbmQtZG9uYXRpb25zLXRvLXRyeS1hbmQtaGVscC1zaWduLW5pY28td2lsbGlhbXPSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T07:00:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Firstpost",
        title:
          "Exclusive | 'Indian shooters will face lot of competition, it won't be easy': Olympian Joydeep Karmakar - Firstpost",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LmZpcnN0cG9zdC5jb20vc3BvcnRzL2luZGlhLXBhcmlzLW9seW1waWNzLTIwMjQtc2hvb3RpbmctcHJldmlldy1qb3lkZWVwLWthcm1ha2FyLWludGVydmlldy0xMzc5NDYyMi5odG1s0gF4aHR0cHM6Ly93d3cuZmlyc3Rwb3N0LmNvbS9zcG9ydHMvaW5kaWEtcGFyaXMtb2x5bXBpY3MtMjAyNC1zaG9vdGluZy1wcmV2aWV3LWpveWRlZXAta2FybWFrYXItaW50ZXJ2aWV3LTEzNzk0NjIyLmh0bWwvYW1w?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T06:55:36Z",
        content: null,
      },
      {
        source: { id: null, name: "Livemint" },
        author: "Livemint",
        title:
          "'Why no Sanju Samson, Abhishek Sharma?' Shashi Tharoor questions India's squad for Sri Lanka, takes a jibe at BCCI | Mint - Mint",
        description:
          "Abhishek Sharma scored his maiden domestic century in the recent T20I series against Zimbabwe, while Sanju Samson scored a ton in the last ODI series against South Africa.",
        url: "https://www.livemint.com/sports/cricket-news/why-no-sanju-samson-abhishek-sharma-shashi-tharoor-questions-indias-squad-for-sri-lanka-takes-a-jibe-at-bcci-11721364466561.html",
        urlToImage:
          "https://images.livemint.com/img/2024/07/19/1600x900/PTI05-01-2024-000253A-0_1714654032356_1721365804946.jpg",
        publishedAt: "2024-07-19T05:38:07Z",
        content:
          "After days of rumours and speculation, the BCCI finally announced India's squad for the T20 and ODI series in Sri Lanka, which will start later this month. The series has attracted a lot of attention… [+2374 chars]",
      },
      {
        source: { id: null, name: "Business Standard" },
        author: "Business Standard",
        title:
          "Gujarat Titans' ownership up for grabs: Adani, Torrent lead the race - Business Standard",
        description:
          "Gujarat Titans: A year after a major captaincy change, IPL franchise Gujarat Titans' owner, CVC Capital Partners, is looking to sell its controlling stake and is in talks with Adani and Torrent Group",
        url: "https://www.business-standard.com/sports/other-sports-news/gujarat-titans-ownership-up-for-grabs-adani-torrent-lead-the-race-124071900159_1.html",
        urlToImage:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/05/thumb/featurecrop/400X400/1712313262-3896.jpg",
        publishedAt: "2024-07-19T04:21:32Z",
        content:
          "Gujarat Titans' players after Punjab Kings won the IPL 2024 T20 cricket match at the Narendra Modi Stadium, in Ahmedabad, Thursday, April 4, 2024. (PTI: Photo/Vijay Verma)",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ICC Cricket",
        title:
          "Fresh injury concerns for Australia ahead of T20 World Cup - ICC Cricket",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3LmljYy1jcmlja2V0LmNvbS9uZXdzL2ZyZXNoLWluanVyeS1jb25jZXJucy1mb3ItYXVzdHJhbGlhLWFoZWFkLW9mLXQyMC13b3JsZC1jdXDSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T04:08:35Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "NDTV Sports",
        title:
          "Ishan Kishan Snubbed Again, Report Reveals Only Way India Star Can Return - NDTV Sports",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihgFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L2lzaGFuLWtpc2hhbi1ub3doZXJlLW9uLWJjY2lzLXNlbGVjdGlvbi1yYWRhci1yZXBvcnQtcmV2ZWFscy13aHktaGUtd2FzbnQtcGlja2VkLWZvci1zbC1zZXJpZXMtNjEzNjIxMNIBjAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L2lzaGFuLWtpc2hhbi1ub3doZXJlLW9uLWJjY2lzLXNlbGVjdGlvbi1yYWRhci1yZXBvcnQtcmV2ZWFscy13aHktaGUtd2FzbnQtcGlja2VkLWZvci1zbC1zZXJpZXMtNjEzNjIxMC9hbXAvMQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T01:57:32Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Cricket Monthly",
        title: "Book, line, thinker - The Cricket Monthly",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LnRoZWNyaWNrZXRtb250aGx5LmNvbS9zdG9yeS8xNDQzNDQwL2Jvb2stLWxpbmUtLXRoaW5rZXLSAQA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T01:45:02Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Cricbuzz",
        title:
          "Renewed focus on internationals playing domestic games under Gambhir's watch - Cricbuzz",
        description: null,
        url: "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LmNyaWNidXp6LmNvbS9jcmlja2V0LW5ld3MvMTMxMDgzL3JlbmV3ZWQtZm9jdXMtb24taW50ZXJuYXRpb25hbHMtcGxheWluZy1kb21lc3RpYy1nYW1lcy11bmRlci1nYW1iaGlycy13YXRjaNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T01:39:39Z",
        content: null,
      },
    ],
  },
  technology: {
    status: "ok",
    totalResults: 69,
    articles: [
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Financial Express",
        title:
          "Mix Flip: Xiaomi’s first flip phone makes every other flip phone look dated - The Financial Express",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlL3RlY2hub2xvZ3ktbWl4LWZsaXAteGlhb21pcy1maXJzdC1mbGlwLXBob25lLW1ha2VzLWV2ZXJ5LW90aGVyLWZsaXAtcGhvbmUtbG9vay1kYXRlZC0zNTU4OTQ4L9IBiAFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlL3RlY2hub2xvZ3ktbWl4LWZsaXAteGlhb21pcy1maXJzdC1mbGlwLXBob25lLW1ha2VzLWV2ZXJ5LW90aGVyLWZsaXAtcGhvbmUtbG9vay1kYXRlZC0zNTU4OTQ4L2xpdGUv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T15:55:06Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title:
          "Samsung Galaxy Z Fold 6 Battery Drain Test | Display test, Benchmarks, Performance, and Gaming 🔥 - India Today - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMinQFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL3RlY2hub2xvZ3kvdmlkZW8vdmlkZW8vc2Ftc3VuZy1nYWxheHktei1mb2xkLTYtYmF0dGVyeS1kcmFpbi10ZXN0LWRpc3BsYXktdGVzdC1iZW5jaG1hcmtzLXBlcmZvcm1hbmNlLWFuZC1nYW1pbmctMjU2OTMwNC0yMDI0LTA3LTE50gGhAWh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vYW1wL3RlY2hub2xvZ3kvdmlkZW8vdmlkZW8vc2Ftc3VuZy1nYWxheHktei1mb2xkLTYtYmF0dGVyeS1kcmFpbi10ZXN0LWRpc3BsYXktdGVzdC1iZW5jaG1hcmtzLXBlcmZvcm1hbmNlLWFuZC1nYW1pbmctMjU2OTMwNC0yMDI0LTA3LTE5?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T15:29:37Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "ZDNet",
        title:
          "You can still buy any iPhone 15 model for one cent after Prime Day - here's how the deal works - ZDNet",
        description: null,
        url: "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnpkbmV0LmNvbS9hcnRpY2xlL3lvdS1jYW4tc3RpbGwtYnV5LWFuLWlwaG9uZS0xNS1mb3Itb25lLWNlbnQtYWZ0ZXItcHJpbWUtZGF5LXdoYXQteW91LXNob3VsZC1rbm93L9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T15:28:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Economic Times",
        title:
          "Amazon Prime Day Sale 2024: Up to 60% off on Tablets and Laptops - The Economic Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMijwFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vdG9wLXRyZW5kaW5nLXByb2R1Y3RzL25ld3MvYW1hem9uLXByaW1lLWRheS1zYWxlLTIwMjQtdXAtdG8tNjAtb2ZmLW9uLXRhYmxldHMtYW5kLWxhcHRvcHMvYXJ0aWNsZXNob3cvMTExODY3NTI5LmNtc9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T15:10:18Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Mint",
        title:
          "Amazon Prime Days 2024: HONOR 200 Series goes on sale starting at midnight | Mint - Mint",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5saXZlbWludC5jb20vdGVjaG5vbG9neS9nYWRnZXRzL2FtYXpvbi1wcmltZS1kYXlzLTIwMjQtaG9ub3ItMjAwLXNlcmllcy1nb2VzLW9uLXNhbGUtc3RhcnRpbmctYXQtbWlkbmlnaHQtMTE3MjEzOTkwNDAwOTAuaHRtbNIBjQFodHRwczovL3d3dy5saXZlbWludC5jb20vdGVjaG5vbG9neS9nYWRnZXRzL2FtYXpvbi1wcmltZS1kYXlzLTIwMjQtaG9ub3ItMjAwLXNlcmllcy1nb2VzLW9uLXNhbGUtc3RhcnRpbmctYXQtbWlkbmlnaHQvYW1wLTExNzIxMzk5MDQwMDkwLmh0bWw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:39:41Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Hindustan Times",
        title:
          "Smile to take the next leap: Games are adapting further for the differently abled - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vbGlmZXN0eWxlL2FydC1jdWx0dXJlL3NtaWxlLXRvLXRha2UtdGhlLW5leHQtbGVhcC1nYW1lcy1hcmUtYWRhcHRpbmctZnVydGhlci1mb3ItdGhlLWRpZmZlcmVudGx5LWFibGVkLTEwMTcyMTM5OTkyNjUzMi5odG1s0gGeAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS9saWZlc3R5bGUvYXJ0LWN1bHR1cmUvc21pbGUtdG8tdGFrZS10aGUtbmV4dC1sZWFwLWdhbWVzLWFyZS1hZGFwdGluZy1mdXJ0aGVyLWZvci10aGUtZGlmZmVyZW50bHktYWJsZWQtMTAxNzIxMzk5OTI2NTMyLWFtcC5odG1s?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:38:45Z",
        content: null,
      },
      {
        source: { id: "the-times-of-india", name: "The Times of India" },
        author: "Tarun Verma",
        title:
          "Best Phones Under 70000 for Superb User Experience and Performance - The Times of India",
        description:
          "Here is a detailed article on some of the best phones under 70000 for excellent performance to ensure the best results and user experience. This article willl also let you know how you can choose the perfect smartphone for yourself.",
        url: "https://timesofindia.indiatimes.com/hot-picks/best-phones-under-70000-for-superb-user-experience-and-performance/articleshow/111860207.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-111860207,width-1070,height-580,imgsize-421461,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        publishedAt: "2024-07-19T14:02:00Z",
        content:
          "Your Privacy\r\nWhen you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used t… [+2093 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Search Engine Land",
        title:
          "7 strategies to maximize your AI-powered search market share - Search Engine Land",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vc2VhcmNoZW5naW5lbGFuZC5jb20vYWktcG93ZXJlZC1zZWFyY2gtbWF4aW1pemUtbWFya2V0LXNoYXJlLTQ0NDI2NNIBAA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T14:00:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Financial Express",
        title:
          "Quality control issues delay Samsung Galaxy Buds 3 Pro shipments to late August - The Financial Express",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlL3RlY2hub2xvZ3ktcXVhbGl0eS1jb250cm9sLWlzc3Vlcy1kZWxheS1zYW1zdW5nLWdhbGF4eS1idWRzLTMtcHJvLXNoaXBtZW50cy10by1sYXRlLWF1Z3VzdC0zNTU4ODQyL9IBjgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlL3RlY2hub2xvZ3ktcXVhbGl0eS1jb250cm9sLWlzc3Vlcy1kZWxheS1zYW1zdW5nLWdhbGF4eS1idWRzLTMtcHJvLXNoaXBtZW50cy10by1sYXRlLWF1Z3VzdC0zNTU4ODQyL2xpdGUv?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:56:59Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Noise ColorFit Pulse 4 Max with AMOLED display, AI create feature launched, priced at Rs 2,499 - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90ZWNobm9sb2d5L3dlYXJhYmxlcy9ub2lzZS1jb2xvcmZpdC1wdWxzZS00LW1heC13aXRoLWFtb2xlZC1kaXNwbGF5LWFpLWNyZWF0ZS1mZWF0dXJlLWxhdW5jaGVkLXByaWNlZC1hdC1ycy0yNDk5L2FydGljbGVzaG93LzExMTg2NTUyNC5jbXPSAbIBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vdGVjaG5vbG9neS93ZWFyYWJsZXMvbm9pc2UtY29sb3JmaXQtcHVsc2UtNC1tYXgtd2l0aC1hbW9sZWQtZGlzcGxheS1haS1jcmVhdGUtZmVhdHVyZS1sYXVuY2hlZC1wcmljZWQtYXQtcnMtMjQ5OS9hbXBfYXJ0aWNsZXNob3cvMTExODY1NTI0LmNtcw?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T13:07:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "From Kim Kardashian's vampire to cryotherapy - trendy facials in Mumbai that are a hit - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL3Nwb3RsaWdodC90cmVuZHktZmFjaWFscy1pbi1tdW1iYWktZnJvbS1raW0ta2FyZGFzaGlhbnMtdmFtcGlyZS10by1jcnlvdGhlcmFweS9hcnRpY2xlc2hvdy8xMTE4NjQ4OTMuY21z0gGbAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2xpZmUtc3R5bGUvc3BvdGxpZ2h0L3RyZW5keS1mYWNpYWxzLWluLW11bWJhaS1mcm9tLWtpbS1rYXJkYXNoaWFucy12YW1waXJlLXRvLWNyeW90aGVyYXB5L2FtcF9hcnRpY2xlc2hvdy8xMTE4NjQ4OTMuY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:47:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title: "Gadgets | Home safe home - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vbWFnYXppbmUvc3VwcGxlbWVudC9zdG9yeS8yMDI0MDcyOS1nYWRnZXRzLWhvbWUtc2FmZS1ob21lLTI1NjkwMjctMjAyNC0wNy0xOdIBamh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vYW1wL21hZ2F6aW5lL3N1cHBsZW1lbnQvc3RvcnkvMjAyNDA3MjktZ2FkZ2V0cy1ob21lLXNhZmUtaG9tZS0yNTY5MDI3LTIwMjQtMDctMTk?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:41:42Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "CNET",
        title: "iOS 18 Hands-On: Prepare for a Lot of Changes - CNET",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC1V0cUc2aUQ2N0d3mAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T12:00:35Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "India Today",
        title:
          "Amazon Prime Day sale early deals: iPhone 13 to ASUS Vivobook 15, all discount details here - India Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMinAFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL3RlY2hub2xvZ3kvbmV3cy9zdG9yeS9hbWF6b24tcHJpbWUtZGF5LXNhbGUtZWFybHktZGVhbHMtaXBob25lLTEzLXRvLWFzdXMtdml2b2Jvb2stMTUtYWxsLWRpc2NvdW50LWRldGFpbHMtaGVyZS0yNTY5MDUwLTIwMjQtMDctMTnSAaABaHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi9hbXAvdGVjaG5vbG9neS9uZXdzL3N0b3J5L2FtYXpvbi1wcmltZS1kYXktc2FsZS1lYXJseS1kZWFscy1pcGhvbmUtMTMtdG8tYXN1cy12aXZvYm9vay0xNS1hbGwtZGlzY291bnQtZGV0YWlscy1oZXJlLTI1NjkwNTAtMjAyNC0wNy0xOQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T11:49:25Z",
        content: null,
      },
      {
        source: { id: null, name: "Cionews.co.in" },
        author: null,
        title:
          "OpenAI releases an affordable tiny AI model GPT-4o Mini - CIO News",
        description:
          "Maker of ChatGPT In an effort to lower the cost of its technology and use less energy, OpenAI announced on Thursday that it will be releasing the GPT-4o Tiny,",
        url: "https://cionews.co.in/openai-releases-an-affordable-tiny-ai-model/",
        urlToImage:
          "https://cionews.co.in/wp-content/uploads/2024/07/Article-Main-Image-5-10.png",
        publishedAt: "2024-07-19T11:31:51Z",
        content:
          "ChatGPT Maker OpenAI said on Thursday that it will be launching the GPT-4o mini, a compact, economical AI model, in an effort to reduce the cost of its technology and use less energy.\r\nMaker of ChatG… [+2665 chars]",
      },
      {
        source: { id: "the-verge", name: "The Verge" },
        author: "Jess Weatherbed",
        title:
          "Google is purging ‘low-quality’ Android apps next month - The Verge",
        description:
          "Google is raising its minimum quality requirements for Android apps and will remove those that don’t meet expectations from the Play Store starting August 31st.",
        url: "https://www.theverge.com/2024/7/19/24201756/google-play-store-update-purge-low-quality-android-apps",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/J0IE5HlhxRZSnmkPQKPcDTj7zno=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23999606/acastro_STK460_googlePlay_03.jpg",
        publishedAt: "2024-07-19T11:26:25Z",
        content:
          "Google is purging low-quality Android apps next month\r\nGoogle is purging low-quality Android apps next month\r\n / Play Store apps will be required to provide a stable, engaging, responsive user experi… [+1479 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "Business Standard",
        title:
          "OnePlus Pad 2: Unboxing tablet with Qualcomm Snapdragon 8 Gen 3 chip - Business Standard",
        description: null,
        url: "https://news.google.com/rss/articles/CCAiC2R4TlNYU25VR0hZmAEB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:58:45Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "WhatsApp is working on a security checkup feature: Here’s what it will mean for users - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiowFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90ZWNobm9sb2d5L3NvY2lhbC93aGF0c2FwcC1pcy13b3JraW5nLW9uLWEtc2VjdXJpdHktY2hlY2t1cC1mZWF0dXJlLWhlcmVzLXdoYXQtaXQtd2lsbC1tZWFuLWZvci11c2Vycy9hcnRpY2xlc2hvdy8xMTE4NjE5NzguY21z0gGnAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL3RlY2hub2xvZ3kvc29jaWFsL3doYXRzYXBwLWlzLXdvcmtpbmctb24tYS1zZWN1cml0eS1jaGVja3VwLWZlYXR1cmUtaGVyZXMtd2hhdC1pdC13aWxsLW1lYW4tZm9yLXVzZXJzL2FtcF9hcnRpY2xlc2hvdy8xMTE4NjE5NzguY21z?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:47:00Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "UC Today",
        title: "How to Use Meta AI WhatsApp for Business Messaging - UC Today",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnVjdG9kYXkuY29tL3VuaWZpZWQtY29tbXVuaWNhdGlvbnMvaG93LXRvLXVzZS1tZXRhLWFpLXdoYXRzYXBwLWZvci1idXNpbmVzcy1tZXNzYWdpbmcv0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:09:34Z",
        content: null,
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: "The Times of India",
        title:
          "Itel ColorPro 5G phone quick review: For the masses - The Times of India",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90ZWNobm9sb2d5L3Jldmlld3MvaXRlbC1jb2xvcnByby01Zy1waG9uZS1xdWljay1yZXZpZXctZm9yLXRoZS1tYXNzZXMvYXJ0aWNsZXNob3cvMTExODYwMjQzLmNtc9IBhwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS90ZWNobm9sb2d5L3Jldmlld3MvaXRlbC1jb2xvcnByby01Zy1waG9uZS1xdWljay1yZXZpZXctZm9yLXRoZS1tYXNzZXMvYW1wX2FydGljbGVzaG93LzExMTg2MDI0My5jbXM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-19T10:05:00Z",
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
