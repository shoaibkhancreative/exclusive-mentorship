// Curriculum data for the 13-chapter Trading Mentorship program.
// Each chapter carries its own price (individual purchase) and its class list.
// Class objects carry `tagline` (shown on Homepage) and `description` (shown on the Chapter page only).

export const chapters = [
  {
    id: 1,
    slug: 'the-architecture-of-markets',
    title: 'The Architecture of Markets',
    tagline: 'Every empire needs a foundation. This is yours.',
    price: 300,
    overview:
      "Before you can think like an institution, you need to speak the market's language fluently. This chapter takes you from complete beginner to someone who can hold their own in any trading conversation — every style, product, and mechanic you'll rely on for the rest of your career.",
    classes: [
      { title: 'Welcome to the Trading World', tagline: 'Find the trading style built for your life.', description: 'Discover every trading style that exists (Position, Swing, Day, Scalping) and find the one built for your life.' },
      { title: 'The Markets You Can Trade', tagline: 'Every market. Every instrument. Mapped.', description: 'Forex, Crypto, Commodities, Stocks & Indices — and the exact instruments (Spot, CFDs, Futures, Options) used to trade each one.' },
      { title: 'Reading the Language of Charts', tagline: 'Read charts like a pro from day one.', description: 'Candlesticks, chart types, and timeframes: the visual alphabet every profitable trader reads instantly.' },
      { title: 'Technical vs. Fundamental Analysis', tagline: 'Two lenses. Zero traps.', description: 'The two lenses top traders use together, and why relying on only one is how retail traders get trapped.' },
      { title: "Who's Really Behind Your Broker", tagline: 'Pick a broker that won\'t hunt you.', description: "Market Maker, ECN & STP brokers exposed, plus the exact checklist to pick one that won't work against you." },
      { title: 'Speak Like a Trader', tagline: 'Lot size, leverage — speak like a pro.', description: 'Lot size, contract size, and leverage: the three terms that separate professionals from guessers.' },
      { title: 'The Numbers That Run Your Account', tagline: 'Master pips, margin & spread.', description: "Pips, margin, equity, spread & commission: master the math behind every trade you'll ever place." },
      { title: 'Orders & Positions', tagline: 'Enter and exit with precision.', description: 'How you actually enter and exit the market, from market orders to stop orders, buy-side to sell-side.' },
      { title: 'Not Your Keys, Not Your Coins', tagline: 'Keep your crypto capital yours.', description: 'The crypto wallets worth trusting, and the safety habits that keep your capital yours.' },
      { title: 'Retail Traders vs. Smart Money', tagline: 'Stop thinking like the 90%.', description: 'The uncomfortable truth about why 90% lose, and the exact shift in thinking that starts right now.' }
    ],
  },
  {
    id: 2,
    slug: 'smart-money-and-the-liquidity-game',
    title: 'Smart Money & The Liquidity Game',
    tagline: "Stop guessing where price goes. Start knowing where it's pulled.",
    price: 400,
    overview:
      'This is where you stop trading like everyone else. Every concept here reveals how institutions engineer moves, hunt liquidity, and leave footprints retail traders never notice — until now.',
    classes: [
      { title: 'Swing Points & Legs', tagline: 'The DNA of every setup.', description: 'The building blocks every structure, trend, and setup is built from.' },
      { title: 'BSL & SSL', tagline: 'Find where price gets pulled.', description: 'Buy-Side and Sell-Side Liquidity, the two magnets that quietly control every price swing.' },
      { title: 'IRL vs. ERL', tagline: 'Know which liquidity is next.', description: 'Internal Range vs. External Range Liquidity, and how to know which one price is targeting next.' },
      { title: 'Engineered Liquidity', tagline: 'Spot traps before you step in.', description: 'How the market manufactures traps that look like opportunities.' },
      { title: 'Time-Based & Candle-Based Liquidity', tagline: 'Liquidity clues inside every candle.', description: 'The liquidity clues hiding inside candle formations most traders scroll straight past.' },
      { title: 'Draw on Liquidity (DOL)', tagline: 'See where price wants to go.', description: 'The single concept that tells you where price wants to go before it gets there.' },
      { title: 'Liquidity Voids & Liquidity Pools', tagline: 'Why price races or stalls.', description: 'Why price refuses to sit still in some zones and refuses to leave others.' },
      { title: 'Protected & Phantom Liquidity', tagline: 'Hidden levels smart money uses.', description: 'The hidden liquidity levels 95% of retail traders never even know exist.' },
      { title: 'Sweep vs. Run', tagline: 'Trapped or paid — know the difference.', description: 'The one-second distinction that decides whether you get trapped or get paid.' },
      { title: 'High-Resistance vs. Low-Resistance Liquidity Runs', tagline: 'Read the fight before price arrives.', description: 'Read how hard price will fight to reach a level before it even gets close.' }
    ],
  },
  {
    id: 3,
    slug: 'reading-the-institutional-footprint',
    title: 'Reading the Institutional Footprint',
    tagline: "Every big player leaves a trace. Here's how to read it.",
    price: 450,
    overview:
      'Order blocks, fair value gaps, breakers — this is the toolkit that lets you see exactly where institutions entered, defended, and reversed. Master this chapter and charts stop looking like noise.',
    classes: [
      { title: 'Fair Value Gaps & Inversion FVGs', tagline: 'Trade imbalance when price returns.', description: 'The imbalance price almost always comes back to close, and how to trade the moment it does.' },
      { title: 'BISI, SIBI & Balanced Price Range', tagline: 'Read imbalance with ICT precision.', description: 'The three-letter concepts elite ICT traders use to read imbalance with surgical precision.' },
      { title: 'Order Blocks — The Institutional Footprint', tagline: 'Spot where smart money entered.', description: 'Spot the exact candles where smart money built their position.' },
      { title: 'Breaker Blocks', tagline: 'Turn failed OBs into A+ setups.', description: 'Turn a "failed" order block into one of the highest-probability trades in your playbook.' },
      { title: 'Mitigation Blocks & Rejection Blocks', tagline: 'Fix or reject — know which.', description: 'The difference between price fixing a mistake and price rejecting a level outright.' },
      { title: 'Propulsion Blocks & Reclaimed Order Blocks', tagline: 'Advanced continuation signals revealed.', description: 'The advanced continuation signals most retail traders have never even heard of.' },
      { title: 'Volume Imbalance & Vacuum Gaps', tagline: 'Fast fills vs. slow drifts.', description: 'Why some gaps get filled slowly and others get vacuumed shut in a single candle.' },
      { title: 'Opening Gaps', tagline: 'Read sentiment from the open.', description: 'What they reveal about sentiment before the first candle even closes.' },
      { title: 'Premium vs. Discount & The Optimal Trade Entry', tagline: 'Buy cheap. Sell expensive. Like institutions.', description: 'The exact zone institutions buy cheap and sell expensive — and how you can too.' }
    ],
  },
  {
    id: 4,
    slug: 'market-structure--the-institutional-blueprint',
    title: 'Market Structure — The Institutional Blueprint',
    tagline: "Structure isn't random. It's a blueprint you can learn to read.",
    price: 500,
    overview:
      'This chapter is the difference between reacting to price and anticipating it. Learn to read structure the way institutions build it — across every timeframe, session, and quarter of the year.',
    classes: [
      { title: 'Break of Structure (BOS)', tagline: 'Confirm the trend before the crowd.', description: 'Confirm a trend is continuing before the crowd even notices.' },
      { title: 'Change of Character (CHoCH)', tagline: 'Catch reversals at first sight.', description: 'Catch the earliest possible signal that a reversal is underway.' },
      { title: 'How Institutions Really Build Market Structure', tagline: 'The blueprint behind every swing.', description: 'The blueprint behind every high and low on your chart.' },
      { title: 'Reading Multiple Timeframes Like a Pro', tagline: 'Never fight the real trend again.', description: 'Align higher and lower timeframes so you never fight the real trend again.' },
      { title: 'Weekly Profile', tagline: 'Know Monday\'s move before it happens.', description: 'Walk into every Monday already knowing where price is likely headed.' },
      { title: 'Daily Profile — From Internal to External Range', tagline: 'Track every day\'s structure.', description: "Track how each day's structure unfolds from open to close." },
      { title: 'Power of Three (AMD)', tagline: 'The three-act play behind every day.', description: 'Accumulation, Manipulation, Distribution: the three-act play that runs every single day.' },
      { title: 'MMXM — The Market Maker Buy Model', tagline: 'Institutional bullish blueprint decoded.', description: 'The exact blueprint institutions follow when building a bullish move.' },
      { title: 'MMXM — The Market Maker Sell Model', tagline: 'Catch bearish moves from candle one.', description: 'Its bearish mirror image, and how to catch it from the very first candle.' },
      { title: 'Quarterly Theory', tagline: 'Zoom out. See the bigger cycle.', description: 'Zoom out to the multi-month cycle that makes your daily trades make sense.' }
    ],
  },
  {
    id: 5,
    slug: 'time-and-price--the-hidden-clock-of-the-market',
    title: 'Time & Price — The Hidden Clock of the Market',
    tagline: "The market doesn't just move by price. It moves on a schedule.",
    price: 550,
    overview:
      "Two traders can read the exact same setup and get opposite results — because one of them understood time, and the other didn't. This chapter hands you the market's internal clock.",
    classes: [
      { title: 'The Three Sessions — Asia, London & New York', tagline: 'Three cities. Three personalities.', description: 'Three cities, three personalities, three completely different ways price behaves.' },
      { title: 'Killzones', tagline: 'Trade 90 minutes, not 8 hours.', description: 'Stop watching charts for 8 hours a day when 90 minutes is enough.' },
      { title: '90-Minute Cycles & Candle Range Theory', tagline: 'The rhythm behind every intraday move.', description: 'The repeating rhythm behind every intraday move, decoded.' },
      { title: 'CBDR — Central Bank Dealer Range', tagline: 'The overnight range that sets tomorrow.', description: 'The overnight range that quietly sets up the entire next day.' },
      { title: 'IPDA — The Algorithm Behind Every Price Move', tagline: 'Finally understand why price moves.', description: 'The closest thing to understanding "why" price does what it does, when it does it.' },
      { title: 'The Judas Swing', tagline: 'Win on the other side of fakeouts.', description: 'The fakeout designed to trap the majority — and how to be on the other side of it.' },
      { title: 'ICT Macros', tagline: 'The exact minutes institutions deliver.', description: 'The precise minute-by-minute windows institutions favor for real delivery.' },
      { title: 'Bringing It Together', tagline: 'One unified time-based entry model.', description: 'Fuse sessions, killzones, and macros into one unified entry model.' }
    ],
  },
  {
    id: 6,
    slug: 'who-controls-the-money--central-banks-decoded',
    title: 'Who Controls the Money — Central Banks Decoded',
    tagline: 'Every chart move traces back to a decision made in a boardroom.',
    price: 600,
    overview:
      "You can't out-trade decisions you don't understand. This chapter demystifies the institutions that quietly set the tone for every currency pair on your watchlist.",
    classes: [
      { title: 'The History & Evolution of Money', tagline: 'Know what money really is.', description: 'Understand what money actually is before you spend your career trading it.' },
      { title: 'The Fed, ECB & BoE', tagline: 'The banks that move the majors.', description: 'The three central banks that move the majors.' },
      { title: 'BoJ, SNB, RBNZ, RBA & BoC', tagline: "The rest of the world's power players.", description: "The rest of the world's power players." },
      { title: 'What Central Banks Actually Control', tagline: 'Mandates, tools & levers explained.', description: 'Price stability, employment, exchange rates: the mandates and tools behind every decision.' },
      { title: 'Forward Guidance', tagline: 'Hear the real message before headlines.', description: 'Learn to hear what a central bank is really saying before it becomes the headline.' },
      { title: 'Interest Rates', tagline: 'Why rates move markets hardest.', description: 'Why rate decisions move markets harder than almost anything else.' },
      { title: 'Inflation & The Business Cycle', tagline: 'Trade with the economic waves.', description: 'Why economies move in waves — and why your trades should move with them.' }
    ],
  },
  {
    id: 7,
    slug: 'the-data-and-news-that-move-markets',
    title: 'The Data & News That Move Markets',
    tagline: "The headline hits. The chart reacts. You'll already know why.",
    price: 650,
    overview:
      "Data releases move markets in seconds. This chapter turns a confusing economic calendar into a clear edge — knowing exactly what's coming, what it means, and what to do about it.",
    classes: [
      { title: 'GDP, Retail Sales & Unemployment', tagline: 'Three numbers. One clear picture.', description: 'The three numbers that reveal whether an economy is thriving or struggling.' },
      { title: 'CPI, PPI & The Dollar Index (DXY)', tagline: 'Inflation & dollar — tracked.', description: 'The inflation numbers and dollar benchmark every serious trader watches religiously.' },
      { title: 'Balance of Trade & Geopolitical Risk', tagline: 'Forces that blow up trades overnight.', description: 'The forces most retail traders ignore, right up until they blow up a trade.' },
      { title: 'High-Impact News', tagline: 'Hundreds of pips in minutes.', description: 'A framework for the news events capable of moving hundreds of pips in minutes.' },
      { title: 'Medium & Low-Impact News', tagline: 'Cut the calendar noise.', description: 'Stop drowning in a calendar full of noise.' },
      { title: 'Correlation & Inter-Market Analysis', tagline: 'Confirm your bias before entry.', description: 'Interest rate differentials and cross-market clues that confirm your bias before you even enter.' },
      { title: 'COT Report & Open Interest', tagline: 'See what institutions are holding.', description: 'See what institutions are actually positioned for, straight from the source.' },
      { title: 'Risk-On vs. Risk-Off', tagline: 'Sentiment shifts that move everything.', description: 'Understand the sentiment shifts that move entire asset classes together.' }
    ],
  },
  {
    id: 8,
    slug: 'the-psychology-of-the-elite-trader',
    title: 'The Psychology of the Elite Trader',
    tagline: 'Your strategy gets you to the trade. Your mind decides if you survive it.',
    price: 750,
    overview:
      "This is the chapter most traders skip — and the reason most traders fail. Every technical concept you've learned means nothing without the mindset to execute it under pressure, trade after trade, year after year.",
    classes: [
      { title: "The Trader's Mindset", tagline: 'Winners think differently. Here\'s how.', description: 'The invisible difference between the traders who make it and the ones who quit.' },
      { title: 'Patience & Discipline', tagline: 'The two habits pros never skip.', description: 'Build the two habits that quietly separate professionals from everyone else.' },
      { title: 'Emotional Resilience & Detachment', tagline: 'Leave yesterday\'s loss behind.', description: "Trade without carrying yesterday's loss into today's chart." },
      { title: 'Thinking in Probabilities', tagline: 'End revenge trading for good.', description: 'The mental shift that ends revenge trading for good.' },
      { title: 'Fear of Failure & Fear of Not Being Good Enough', tagline: 'Kill the fears killing your entries.', description: 'Confront the two fears quietly sabotaging your entries.' },
      { title: 'Greed, FOMO & Impatience', tagline: 'Spot the three silent account killers.', description: 'Recognize the three silent account killers the instant they show up.' },
      { title: 'Surviving Losing Streaks', tagline: 'Losing streak ≠ blown account.', description: 'The exact mindset shift that keeps a losing streak from becoming a blown account.' },
      { title: 'Lack of Discipline & the "Next Best Strategy" Trap', tagline: 'Strategy-hopping is expensive.', description: 'Why jumping strategies is the single most expensive habit in trading.' },
      { title: 'Building a Journal That Actually Makes You Better', tagline: 'Journal like a pro, not a diarist.', description: 'Structure, cadence, and the emotional record most traders never bother to keep.' },
      { title: 'Screenshots, Positive Reinforcement & Coping Mechanisms', tagline: 'Turn your journal into an edge.', description: 'Turn your journal from a diary into a genuine performance engine.' }
    ],
  },
  {
    id: 9,
    slug: 'risk-and-capital-management--the-professionals-edge',
    title: "Risk & Capital Management — The Professional's Edge",
    tagline: 'Strategies win trades. Risk management wins careers.',
    price: 850,
    overview:
      "Every funded, sustainably profitable trader shares one thing in common — and it isn't their strategy. This chapter installs the exact risk framework that keeps you in the game long enough to win.",
    classes: [
      { title: 'Risk Management 101 — Risk Per Trade', tagline: 'One number. Setback or disaster.', description: 'The single number that determines whether one bad trade is a setback or a disaster.' },
      { title: 'Position Sizing Made Practical', tagline: 'Size every trade in seconds.', description: 'Calculate the exact size of every trade without opening a single spreadsheet.' },
      { title: 'R-Multiples & Risk-to-Reward Thinking', tagline: 'Stop counting pips. Start counting R.', description: 'Stop counting pips and start counting what actually builds an account.' },
      { title: 'Drawdown Limits & Capital Protection', tagline: 'Survive the rough months.', description: 'The rules that keep a rough month from becoming your last month.' },
      { title: 'The Best Trade Is Often No Trade', tagline: 'Sometimes sitting out wins.', description: 'The most profitable decision many traders never learn to make.' },
      { title: 'Correlation Risk', tagline: 'You\'re risking 5x more than you think.', description: 'Discover the hidden way traders 5x their risk without realizing it.' },
      { title: 'Trading as a Business, Not a Hobby', tagline: 'Turn trading into real income.', description: 'The mindset shift that turns a side habit into a real income stream.' },
      { title: 'Building Your Personal Risk Management Framework', tagline: 'One system for every trade.', description: 'Combine every rule in this chapter into one system for every trade.' }
    ],
  },
  {
    id: 10,
    slug: 'high-probability-ict-strategy-models',
    title: 'High-Probability ICT Strategy Models',
    tagline: "The chapter competitors charge full price for. We're just getting started.",
    price: 950,
    overview:
      'The exact, named ICT strategy models used to hunt specific, repeatable setups. This is where every concept from the last nine chapters converges into pull-the-trigger trading systems.',
    classes: [
      { title: 'What Makes a Setup Truly "High-Probability"?', tagline: 'Edge or lucky guess — know which.', description: 'The checklist that separates a real edge from a lucky guess.' },
      { title: 'Turtle Soup', tagline: 'Fade false breakouts with precision.', description: 'Trade the exact moment a false breakout snaps back the other way.' },
      { title: 'Silver Bullet', tagline: 'ICT\'s most replicable setup.', description: 'One of the most replicable setups in the entire ICT methodology.' },
      { title: 'Asian Sweep', tagline: 'Profit from the quiet session.', description: 'Turn the "quiet" Asian session into a genuine trading edge.' },
      { title: 'The Unicorn Model', tagline: 'Rare setup. Massive conviction.', description: 'A rare, high-conviction setup worth learning to spot on sight.' },
      { title: 'The Venom Model', tagline: 'Strike fast on continuation.', description: 'A precision continuation model built for traders who want to strike fast.' },
      { title: 'The Box Setup', tagline: 'Rules-based range trading, zero guesswork.', description: 'A clean, rules-based range strategy that removes guesswork from choppy markets.' },
      { title: 'The ATM Model', tagline: 'One setup at a time. Cash machine.', description: 'Treat the market like your own personal cash machine, one high-probability setup at a time.' },
      { title: 'OSOK — One Shot, One Kill', tagline: 'Fewer trades. Far higher quality.', description: "The sniper's mentality applied to trade selection: fewer trades, far higher quality." }
    ],
  },
  {
    id: 11,
    slug: 'execution-mastery--sessions-confluence-and-precision-entries',
    title: 'Execution Mastery — Sessions, Confluence & Precision Entries',
    tagline: 'Knowing the setup is step one. Pulling the trigger perfectly is step two.',
    price: 0,
    overview:
      'Strategy knowledge without execution is just theory. This chapter turns everything you know into a repeatable, testable, tradeable process.',
    classes: [
      { title: 'Trading the London Open', tagline: 'The most explosive hour of the day.', description: 'Position yourself for one of the most volatile, opportunity-rich hours of the day.' },
      { title: 'Trading the New York Session', tagline: 'Master the session that closes the day.', description: 'Master the session that decides how the entire day closes out.' },
      { title: 'The Reversal Trading Framework', tagline: 'Catch turns with confidence.', description: 'A step-by-step process for catching turns with confidence, not hope.' },
      { title: 'The Continuation Trading Framework', tagline: 'Ride trends with a clear process.', description: 'Ride the trend instead of fighting it, with an exact process to follow.' },
      { title: 'Stacking Confluence', tagline: 'Filter out average trades entirely.', description: 'The layering technique that filters average trades out of your day entirely.' },
      { title: 'Scalping vs. Intraday Swing', tagline: 'Find your natural execution speed.', description: 'Find the execution speed that actually fits your personality and schedule.' },
      { title: 'Backtesting Your Strategy the Right Way', tagline: 'Prove your edge before risking real money.', description: 'Prove your edge on historical data before you risk a single dollar.' },
      { title: 'Forward Testing on Demo', tagline: 'Backtest to live — zero risk bridge.', description: 'Bridge the gap between backtest and live account with zero financial risk.' },
      { title: 'Building Your Own Strategy Playbook', tagline: 'Your setups. One document. For years.', description: "Package every setup you trade into one document you'll use for years." }
    ],
  },
  {
    id: 12,
    slug: 'prop-firm-mastery--get-funded-stay-funded-scale-fast',
    title: 'Prop Firm Mastery — Get Funded, Stay Funded, Scale Fast',
    tagline: 'Why risk your own capital when you can trade with theirs?',
    price: 0,
    overview:
      'This is the chapter that turns skill into capital. Learn exactly how funded trading works, how to pass on your first attempt, and how to scale a funded account into a genuine income stream.',
    classes: [
      { title: 'What Is Proprietary Trading?', tagline: 'Trade with their capital, not yours.', description: "Understand funded trading, profit splits, and why it's the fastest path to real capital." },
      { title: 'Evaluation Challenges vs. Instant Funding', tagline: 'Pick the funding path for your edge.', description: 'Compare the two funding routes and pick the one that fits your edge.' },
      { title: 'Understanding Every Prop Firm Rule', tagline: 'Fine print that kills applications.', description: 'Daily loss limits, time limits, and the fine print that trips up most applicants.' },
      { title: 'The Roadmap to Passing Your Funding Challenge', tagline: 'Pass on your first attempt.', description: 'A step-by-step plan to clear your evaluation without needing a second attempt.' },
      { title: 'Why 90% of Traders Fail Their Challenge', tagline: 'Every trap. Mapped out.', description: 'The exact traps that end challenges early, mapped out so you can avoid every one.' },
      { title: 'Maintaining Your Funded Account Long-Term', tagline: 'Stay funded month after month.', description: 'The habits that keep a funded account funded, month after month.' },
      { title: 'Scaling Your Funded Capital', tagline: 'One account → real trading business.', description: 'Turn one funded account into a genuinely meaningful trading business.' },
      { title: 'Choosing the Best Prop Firm for an ICT Trader', tagline: 'Rules that fit your strategy.', description: 'A clear framework for picking a firm whose rules actually fit your strategy.' },
      { title: 'Managing Multiple Funded Accounts at Once', tagline: 'More income. Same stress level.', description: 'Scale your income without multiplying your stress or your risk.' },
      { title: 'Taxes & Treating Trading Income Like a Real Business', tagline: 'Keep what you actually earn.', description: 'What no one tells new funded traders about keeping what they earn.' },
      { title: 'Handling a Failed Challenge', tagline: 'Failed challenge → best lesson yet.', description: 'Turn a failed attempt into your most valuable lesson yet.' }
    ],
  },
  {
    id: 13,
    slug: 'your-trading-business--personal-plan-and-graduation',
    title: 'Your Trading Business — Personal Plan & Graduation',
    tagline: "Everything you've learned becomes worthless without one final piece: your own plan.",
    price: 0,
    overview:
      'The capstone chapter. Every concept, every model, every psychological lesson gets distilled into a single, personalized trading plan — and you walk out the other side a professional trader, not just a course graduate.',
    classes: [
      { title: 'Why Every Trader Needs a Written Trading Plan', tagline: 'The doc pros have. Amateurs don\'t.', description: 'The single document separating professionals from permanent beginners.' },
      { title: 'Finding Your Personal Trading Edge', tagline: 'Your setups. Your sessions. Your markets.', description: 'Identify the specific setups, sessions, and markets built for your strengths.' },
      { title: 'Setting Entry, Stop-Loss & Take-Profit Rules', tagline: 'Never freeze at entry again.', description: "Rules so clear you'll never freeze at the moment of entry again." },
      { title: 'The Pre-Trade Checklist', tagline: 'Last defense against emotional mistakes.', description: 'The last line of defense between a good setup and an emotional mistake.' },
      { title: 'Daily Routine & Time Management', tagline: 'Trade your day like a funded pro.', description: 'Structure your trading day the way funded professionals structure theirs.' },
      { title: 'Writing Down Your Complete Trading Plan', tagline: 'Every lesson → one living document.', description: "Turn every lesson in this mentorship into one document you'll trade from for years." },
      { title: 'Combining Personal Capital With Prop Capital', tagline: 'Two income streams. One business.', description: 'Structure both income streams into one coherent trading business.' },
      { title: 'Your First 90 Days', tagline: 'Week by week after graduation.', description: 'Exactly what to do, week by week, the moment this course ends.' },
      { title: 'Building Long-Term Consistency', tagline: 'Profitable in year three, not just month one.', description: 'The habits that keep you profitable in year three, not just month one.' },
      { title: 'Graduation — Becoming a Professional Trader', tagline: 'Walk out a pro, not a graduate.', description: 'Close the final chapter as a professional, with the plan, the psychology, and the edge to prove it.' }
    ],
  }
];

export const totalClasses = chapters.reduce((sum, ch) => sum + ch.classes.length, 0);

export function getChapterBySlug(slug) {
  return chapters.find((c) => c.slug === slug);
}
