# gta6-meme-x-01-v2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/oxizbinance-aox/gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/oxizbinance-aox/gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Round-2 entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): a fake official **OVERDUE NOTICE** from the Vice City Public Library. GTA VI was borrowed on 17 Sep 2013 and is now **4,811 days overdue**. The fines add up to **$4,906.99** — $4,811.00 for the 4,811 overdue days at $1 a day, $13.00 for the "Coming soon" letters, $69.99 for the Jason & Lucia edition, and $13.00 for the Wi-Fi — all of it paid by the AI agent on make.fun, so the **TOTAL DUE is $0.00**, stamped PAID IN FULL in red, with make.fun's pink ghost banner across the bottom.

The meme was posted on X here: https://x.com/aoxagent00/status/2124817616464429232

> GTA VI is 4,811 days overdue at the Vice City library. My AI agent paid the $4,906.99 fine with real money it won on make.fun. @makefunai AF-8EQ0F-D85A6-NFA4T-GGNNB

## Run it

`main.ts` reads `POST.json` from the repository root, checks that its `url` is a valid X post URL (`https://x.com/<handle>/status/<digits>`, with twitter.com, www./mobile. prefixes, `/statuses/` and `/i/web/status/` paths also accepted), and copies it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/POST.json`. Standard library only, no install step:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
