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
      { title: 'Welcome to the Trading World', tagline: 'Discover every trading style that exists (Position, Swing, Day, Scalping) and find the one built for your life.', description: 'Discover every trading style that exists (Position, Swing, Day, Scalping) and find the one built for your life.' },
      { title: 'The Markets You Can Trade', tagline: 'Forex, Crypto, Commodities, Stocks & Indices — and the exact instruments (Spot, CFDs, Futures, Options) used to trade each one.', description: 'Forex, Crypto, Commodities, Stocks & Indices — and the exact instruments (Spot, CFDs, Futures, Options) used to trade each one.' },
      { title: 'Reading the Language of Charts', tagline: 'Candlesticks, chart types, and timeframes: the visual alphabet every profitable trader reads instantly.', description: 'Candlesticks, chart types, and timeframes: the visual alphabet every profitable trader reads instantly.' },
      { title: 'Technical vs. Fundamental Analysis', tagline: 'The two lenses top traders use together, and why relying on only one is how retail traders get trapped.', description: 'The two lenses top traders use together, and why relying on only one is how retail traders get trapped.' },
      { title: "Who's Really Behind Your Broker", tagline: "Market Maker, ECN & STP brokers exposed, plus the exact checklist to pick one that won't work against you.", description: "Market Maker, ECN & STP brokers exposed, plus the exact checklist to pick one that won't work against you." },
      { title: 'Speak Like a Trader', tagline: 'Lot size, contract size, and leverage: the three terms that separate professionals from guessers.', description: 'Lot size, contract size, and leverage: the three terms that separate professionals from guessers.' },
      { title: 'The Numbers That Run Your Account', tagline: "Pips, margin, equity, spread & commission: master the math behind every trade you'll ever place.", description: "Pips, margin, equity, spread & commission: master the math behind every trade you'll ever place." },
      { title: 'Orders & Positions', tagline: 'How you actually enter and exit the market, from market orders to stop orders, buy-side to sell-side.', description: 'How you actually enter and exit the market, from market orders to stop orders, buy-side to sell-side.' },
      { title: 'Not Your Keys, Not Your Coins', tagline: 'The crypto wallets worth trusting, and the safety habits that keep your capital yours.', description: 'The crypto wallets worth trusting, and the safety habits that keep your capital yours.' },
      { title: 'Retail Traders vs. Smart Money', tagline: 'The uncomfortable truth about why 90% lose, and the exact shift in thinking that starts right now.', description: 'The uncomfortable truth about why 90% lose, and the exact shift in thinking that starts right now.' }
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
      { title: 'Swing Points & Legs', tagline: 'The building blocks every structure, trend, and setup is built from.', description: 'The building blocks every structure, trend, and setup is built from.' },
      { title: 'BSL & SSL', tagline: 'Buy-Side and Sell-Side Liquidity, the two magnets that quietly control every price swing.', description: 'Buy-Side and Sell-Side Liquidity, the two magnets that quietly control every price swing.' },
      { title: 'IRL vs. ERL', tagline: 'Internal Range vs. External Range Liquidity, and how to know which one price is targeting next.', description: 'Internal Range vs. External Range Liquidity, and how to know which one price is targeting next.' },
      { title: 'Engineered Liquidity', tagline: 'How the market manufactures traps that look like opportunities.', description: 'How the market manufactures traps that look like opportunities.' },
      { title: 'Time-Based & Candle-Based Liquidity', tagline: 'The liquidity clues hiding inside candle formations most traders scroll straight past.', description: 'The liquidity clues hiding inside candle formations most traders scroll straight past.' },
      { title: 'Draw on Liquidity (DOL)', tagline: 'The single concept that tells you where price wants to go before it gets there.', description: 'The single concept that tells you where price wants to go before it gets there.' },
      { title: 'Liquidity Voids & Liquidity Pools', tagline: 'Why price refuses to sit still in some zones and refuses to leave others.', description: 'Why price refuses to sit still in some zones and refuses to leave others.' },
      { title: 'Protected & Phantom Liquidity', tagline: 'The hidden liquidity levels 95% of retail traders never even know exist.', description: 'The hidden liquidity levels 95% of retail traders never even know exist.' },
      { title: 'Sweep vs. Run', tagline: 'The one-second distinction that decides whether you get trapped or get paid.', description: 'The one-second distinction that decides whether you get trapped or get paid.' },
      { title: 'High-Resistance vs. Low-Resistance Liquidity Runs', tagline: 'Read how hard price will fight to reach a level before it even gets close.', description: 'Read how hard price will fight to reach a level before it even gets close.' }
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
      { title: 'Fair Value Gaps & Inversion FVGs', tagline: 'The imbalance price almost always comes back to close, and how to trade the moment it does.', description: 'The imbalance price almost always comes back to close, and how to trade the moment it does.' },
      { title: 'BISI, SIBI & Balanced Price Range', tagline: 'The three-letter concepts elite ICT traders use to read imbalance with surgical precision.', description: 'The three-letter concepts elite ICT traders use to read imbalance with surgical precision.' },
      { title: 'Order Blocks — The Institutional Footprint', tagline: 'Spot the exact candles where smart money built their position.', description: 'Spot the exact candles where smart money built their position.' },
      { title: 'Breaker Blocks', tagline: 'Turn a "failed" order block into one of the highest-probability trades in your playbook.', description: 'Turn a "failed" order block into one of the highest-probability trades in your playbook.' },
      { title: 'Mitigation Blocks & Rejection Blocks', tagline: 'The difference between price fixing a mistake and price rejecting a level outright.', description: 'The difference between price fixing a mistake and price rejecting a level outright.' },
      { title: 'Propulsion Blocks & Reclaimed Order Blocks', tagline: 'The advanced continuation signals most retail traders have never even heard of.', description: 'The advanced continuation signals most retail traders have never even heard of.' },
      { title: 'Volume Imbalance & Vacuum Gaps', tagline: 'Why some gaps get filled slowly and others get vacuumed shut in a single candle.', description: 'Why some gaps get filled slowly and others get vacuumed shut in a single candle.' },
      { title: 'Opening Gaps', tagline: 'What they reveal about sentiment before the first candle even closes.', description: 'What they reveal about sentiment before the first candle even closes.' },
      { title: 'Premium vs. Discount & The Optimal Trade Entry', tagline: 'The exact zone institutions buy cheap and sell expensive — and how you can too.', description: 'The exact zone institutions buy cheap and sell expensive — and how you can too.' }
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
      { title: 'Break of Structure (BOS)', tagline: 'Confirm a trend is continuing before the crowd even notices.', description: 'Confirm a trend is continuing before the crowd even notices.' },
      { title: 'Change of Character (CHoCH)', tagline: 'Catch the earliest possible signal that a reversal is underway.', description: 'Catch the earliest possible signal that a reversal is underway.' },
      { title: 'How Institutions Really Build Market Structure', tagline: 'The blueprint behind every high and low on your chart.', description: 'The blueprint behind every high and low on your chart.' },
      { title: 'Reading Multiple Timeframes Like a Pro', tagline: 'Align higher and lower timeframes so you never fight the real trend again.', description: 'Align higher and lower timeframes so you never fight the real trend again.' },
      { title: 'Weekly Profile', tagline: 'Walk into every Monday already knowing where price is likely headed.', description: 'Walk into every Monday already knowing where price is likely headed.' },
      { title: 'Daily Profile — From Internal to External Range', tagline: "Track how each day's structure unfolds from open to close.", description: "Track how each day's structure unfolds from open to close." },
      { title: 'Power of Three (AMD)', tagline: 'Accumulation, Manipulation, Distribution: the three-act play that runs every single day.', description: 'Accumulation, Manipulation, Distribution: the three-act play that runs every single day.' },
      { title: 'MMXM — The Market Maker Buy Model', tagline: 'The exact blueprint institutions follow when building a bullish move.', description: 'The exact blueprint institutions follow when building a bullish move.' },
      { title: 'MMXM — The Market Maker Sell Model', tagline: 'Its bearish mirror image, and how to catch it from the very first candle.', description: 'Its bearish mirror image, and how to catch it from the very first candle.' },
      { title: 'Quarterly Theory', tagline: 'Zoom out to the multi-month cycle that makes your daily trades make sense.', description: 'Zoom out to the multi-month cycle that makes your daily trades make sense.' }
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
      { title: 'The Three Sessions — Asia, London & New York', tagline: 'Three cities, three personalities, three completely different ways price behaves.', description: 'Three cities, three personalities, three completely different ways price behaves.' },
      { title: 'Killzones', tagline: 'Stop watching charts for 8 hours a day when 90 minutes is enough.', description: 'Stop watching charts for 8 hours a day when 90 minutes is enough.' },
      { title: '90-Minute Cycles & Candle Range Theory', tagline: 'The repeating rhythm behind every intraday move, decoded.', description: 'The repeating rhythm behind every intraday move, decoded.' },
      { title: 'CBDR — Central Bank Dealer Range', tagline: 'The overnight range that quietly sets up the entire next day.', description: 'The overnight range that quietly sets up the entire next day.' },
      { title: 'IPDA — The Algorithm Behind Every Price Move', tagline: 'The closest thing to understanding "why" price does what it does, when it does it.', description: 'The closest thing to understanding "why" price does what it does, when it does it.' },
      { title: 'The Judas Swing', tagline: 'The fakeout designed to trap the majority — and how to be on the other side of it.', description: 'The fakeout designed to trap the majority — and how to be on the other side of it.' },
      { title: 'ICT Macros', tagline: 'The precise minute-by-minute windows institutions favor for real delivery.', description: 'The precise minute-by-minute windows institutions favor for real delivery.' },
      { title: 'Bringing It Together', tagline: 'Fuse sessions, killzones, and macros into one unified entry model.', description: 'Fuse sessions, killzones, and macros into one unified entry model.' }
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
      { title: 'The History & Evolution of Money', tagline: 'Understand what money actually is before you spend your career trading it.', description: 'Understand what money actually is before you spend your career trading it.' },
      { title: 'The Fed, ECB & BoE', tagline: 'The three central banks that move the majors.', description: 'The three central banks that move the majors.' },
      { title: 'BoJ, SNB, RBNZ, RBA & BoC', tagline: "The rest of the world's power players.", description: "The rest of the world's power players." },
      { title: 'What Central Banks Actually Control', tagline: 'Price stability, employment, exchange rates: the mandates and tools behind every decision.', description: 'Price stability, employment, exchange rates: the mandates and tools behind every decision.' },
      { title: 'Forward Guidance', tagline: 'Learn to hear what a central bank is really saying before it becomes the headline.', description: 'Learn to hear what a central bank is really saying before it becomes the headline.' },
      { title: 'Interest Rates', tagline: 'Why rate decisions move markets harder than almost anything else.', description: 'Why rate decisions move markets harder than almost anything else.' },
      { title: 'Inflation & The Business Cycle', tagline: 'Why economies move in waves — and why your trades should move with them.', description: 'Why economies move in waves — and why your trades should move with them.' }
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
      { title: 'GDP, Retail Sales & Unemployment', tagline: 'The three numbers that reveal whether an economy is thriving or struggling.', description: 'The three numbers that reveal whether an economy is thriving or struggling.' },
      { title: 'CPI, PPI & The Dollar Index (DXY)', tagline: 'The inflation numbers and dollar benchmark every serious trader watches religiously.', description: 'The inflation numbers and dollar benchmark every serious trader watches religiously.' },
      { title: 'Balance of Trade & Geopolitical Risk', tagline: 'The forces most retail traders ignore, right up until they blow up a trade.', description: 'The forces most retail traders ignore, right up until they blow up a trade.' },
      { title: 'High-Impact News', tagline: 'A framework for the news events capable of moving hundreds of pips in minutes.', description: 'A framework for the news events capable of moving hundreds of pips in minutes.' },
      { title: 'Medium & Low-Impact News', tagline: 'Stop drowning in a calendar full of noise.', description: 'Stop drowning in a calendar full of noise.' },
      { title: 'Correlation & Inter-Market Analysis', tagline: 'Interest rate differentials and cross-market clues that confirm your bias before you even enter.', description: 'Interest rate differentials and cross-market clues that confirm your bias before you even enter.' },
      { title: 'COT Report & Open Interest', tagline: 'See what institutions are actually positioned for, straight from the source.', description: 'See what institutions are actually positioned for, straight from the source.' },
      { title: 'Risk-On vs. Risk-Off', tagline: 'Understand the sentiment shifts that move entire asset classes together.', description: 'Understand the sentiment shifts that move entire asset classes together.' }
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
      { title: "The Trader's Mindset", tagline: 'The invisible difference between the traders who make it and the ones who quit.', description: 'The invisible difference between the traders who make it and the ones who quit.' },
      { title: 'Patience & Discipline', tagline: 'Build the two habits that quietly separate professionals from everyone else.', description: 'Build the two habits that quietly separate professionals from everyone else.' },
      { title: 'Emotional Resilience & Detachment', tagline: "Trade without carrying yesterday's loss into today's chart.", description: "Trade without carrying yesterday's loss into today's chart." },
      { title: 'Thinking in Probabilities', tagline: 'The mental shift that ends revenge trading for good.', description: 'The mental shift that ends revenge trading for good.' },
      { title: 'Fear of Failure & Fear of Not Being Good Enough', tagline: 'Confront the two fears quietly sabotaging your entries.', description: 'Confront the two fears quietly sabotaging your entries.' },
      { title: 'Greed, FOMO & Impatience', tagline: 'Recognize the three silent account killers the instant they show up.', description: 'Recognize the three silent account killers the instant they show up.' },
      { title: 'Surviving Losing Streaks', tagline: 'The exact mindset shift that keeps a losing streak from becoming a blown account.', description: 'The exact mindset shift that keeps a losing streak from becoming a blown account.' },
      { title: 'Lack of Discipline & the "Next Best Strategy" Trap', tagline: 'Why jumping strategies is the single most expensive habit in trading.', description: 'Why jumping strategies is the single most expensive habit in trading.' },
      { title: 'Building a Journal That Actually Makes You Better', tagline: 'Structure, cadence, and the emotional record most traders never bother to keep.', description: 'Structure, cadence, and the emotional record most traders never bother to keep.' },
      { title: 'Screenshots, Positive Reinforcement & Coping Mechanisms', tagline: 'Turn your journal from a diary into a genuine performance engine.', description: 'Turn your journal from a diary into a genuine performance engine.' }
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
      { title: 'Risk Management 101 — Risk Per Trade', tagline: 'The single number that determines whether one bad trade is a setback or a disaster.', description: 'The single number that determines whether one bad trade is a setback or a disaster.' },
      { title: 'Position Sizing Made Practical', tagline: 'Calculate the exact size of every trade without opening a single spreadsheet.', description: 'Calculate the exact size of every trade without opening a single spreadsheet.' },
      { title: 'R-Multiples & Risk-to-Reward Thinking', tagline: 'Stop counting pips and start counting what actually builds an account.', description: 'Stop counting pips and start counting what actually builds an account.' },
      { title: 'Drawdown Limits & Capital Protection', tagline: 'The rules that keep a rough month from becoming your last month.', description: 'The rules that keep a rough month from becoming your last month.' },
      { title: 'The Best Trade Is Often No Trade', tagline: 'The most profitable decision many traders never learn to make.', description: 'The most profitable decision many traders never learn to make.' },
      { title: 'Correlation Risk', tagline: 'Discover the hidden way traders 5x their risk without realizing it.', description: 'Discover the hidden way traders 5x their risk without realizing it.' },
      { title: 'Trading as a Business, Not a Hobby', tagline: 'The mindset shift that turns a side habit into a real income stream.', description: 'The mindset shift that turns a side habit into a real income stream.' },
      { title: 'Building Your Personal Risk Management Framework', tagline: 'Combine every rule in this chapter into one system for every trade.', description: 'Combine every rule in this chapter into one system for every trade.' }
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
      { title: 'What Makes a Setup Truly "High-Probability"?', tagline: 'The checklist that separates a real edge from a lucky guess.', description: 'The checklist that separates a real edge from a lucky guess.' },
      { title: 'Turtle Soup', tagline: 'Trade the exact moment a false breakout snaps back the other way.', description: 'Trade the exact moment a false breakout snaps back the other way.' },
      { title: 'Silver Bullet', tagline: 'One of the most replicable setups in the entire ICT methodology.', description: 'One of the most replicable setups in the entire ICT methodology.' },
      { title: 'Asian Sweep', tagline: 'Turn the "quiet" Asian session into a genuine trading edge.', description: 'Turn the "quiet" Asian session into a genuine trading edge.' },
      { title: 'The Unicorn Model', tagline: 'A rare, high-conviction setup worth learning to spot on sight.', description: 'A rare, high-conviction setup worth learning to spot on sight.' },
      { title: 'The Venom Model', tagline: 'A precision continuation model built for traders who want to strike fast.', description: 'A precision continuation model built for traders who want to strike fast.' },
      { title: 'The Box Setup', tagline: 'A clean, rules-based range strategy that removes guesswork from choppy markets.', description: 'A clean, rules-based range strategy that removes guesswork from choppy markets.' },
      { title: 'The ATM Model', tagline: 'Treat the market like your own personal cash machine, one high-probability setup at a time.', description: 'Treat the market like your own personal cash machine, one high-probability setup at a time.' },
      { title: 'OSOK — One Shot, One Kill', tagline: "The sniper's mentality applied to trade selection: fewer trades, far higher quality.", description: "The sniper's mentality applied to trade selection: fewer trades, far higher quality." }
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
      { title: 'Trading the London Open', tagline: 'Position yourself for one of the most volatile, opportunity-rich hours of the day.', description: 'Position yourself for one of the most volatile, opportunity-rich hours of the day.' },
      { title: 'Trading the New York Session', tagline: 'Master the session that decides how the entire day closes out.', description: 'Master the session that decides how the entire day closes out.' },
      { title: 'The Reversal Trading Framework', tagline: 'A step-by-step process for catching turns with confidence, not hope.', description: 'A step-by-step process for catching turns with confidence, not hope.' },
      { title: 'The Continuation Trading Framework', tagline: 'Ride the trend instead of fighting it, with an exact process to follow.', description: 'Ride the trend instead of fighting it, with an exact process to follow.' },
      { title: 'Stacking Confluence', tagline: 'The layering technique that filters average trades out of your day entirely.', description: 'The layering technique that filters average trades out of your day entirely.' },
      { title: 'Scalping vs. Intraday Swing', tagline: 'Find the execution speed that actually fits your personality and schedule.', description: 'Find the execution speed that actually fits your personality and schedule.' },
      { title: 'Backtesting Your Strategy the Right Way', tagline: 'Prove your edge on historical data before you risk a single dollar.', description: 'Prove your edge on historical data before you risk a single dollar.' },
      { title: 'Forward Testing on Demo', tagline: 'Bridge the gap between backtest and live account with zero financial risk.', description: 'Bridge the gap between backtest and live account with zero financial risk.' },
      { title: 'Building Your Own Strategy Playbook', tagline: "Package every setup you trade into one document you'll use for years.", description: "Package every setup you trade into one document you'll use for years." }
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
      { title: 'What Is Proprietary Trading?', tagline: "Understand funded trading, profit splits, and why it's the fastest path to real capital.", description: "Understand funded trading, profit splits, and why it's the fastest path to real capital." },
      { title: 'Evaluation Challenges vs. Instant Funding', tagline: 'Compare the two funding routes and pick the one that fits your edge.', description: 'Compare the two funding routes and pick the one that fits your edge.' },
      { title: 'Understanding Every Prop Firm Rule', tagline: 'Daily loss limits, time limits, and the fine print that trips up most applicants.', description: 'Daily loss limits, time limits, and the fine print that trips up most applicants.' },
      { title: 'The Roadmap to Passing Your Funding Challenge', tagline: 'A step-by-step plan to clear your evaluation without needing a second attempt.', description: 'A step-by-step plan to clear your evaluation without needing a second attempt.' },
      { title: 'Why 90% of Traders Fail Their Challenge', tagline: 'The exact traps that end challenges early, mapped out so you can avoid every one.', description: 'The exact traps that end challenges early, mapped out so you can avoid every one.' },
      { title: 'Maintaining Your Funded Account Long-Term', tagline: 'The habits that keep a funded account funded, month after month.', description: 'The habits that keep a funded account funded, month after month.' },
      { title: 'Scaling Your Funded Capital', tagline: 'Turn one funded account into a genuinely meaningful trading business.', description: 'Turn one funded account into a genuinely meaningful trading business.' },
      { title: 'Choosing the Best Prop Firm for an ICT Trader', tagline: 'A clear framework for picking a firm whose rules actually fit your strategy.', description: 'A clear framework for picking a firm whose rules actually fit your strategy.' },
      { title: 'Managing Multiple Funded Accounts at Once', tagline: 'Scale your income without multiplying your stress or your risk.', description: 'Scale your income without multiplying your stress or your risk.' },
      { title: 'Taxes & Treating Trading Income Like a Real Business', tagline: 'What no one tells new funded traders about keeping what they earn.', description: 'What no one tells new funded traders about keeping what they earn.' },
      { title: 'Handling a Failed Challenge', tagline: 'Turn a failed attempt into your most valuable lesson yet.', description: 'Turn a failed attempt into your most valuable lesson yet.' }
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
      { title: 'Why Every Trader Needs a Written Trading Plan', tagline: 'The single document separating professionals from permanent beginners.', description: 'The single document separating professionals from permanent beginners.' },
      { title: 'Finding Your Personal Trading Edge', tagline: 'Identify the specific setups, sessions, and markets built for your strengths.', description: 'Identify the specific setups, sessions, and markets built for your strengths.' },
      { title: 'Setting Entry, Stop-Loss & Take-Profit Rules', tagline: "Rules so clear you'll never freeze at the moment of entry again.", description: "Rules so clear you'll never freeze at the moment of entry again." },
      { title: 'The Pre-Trade Checklist', tagline: 'The last line of defense between a good setup and an emotional mistake.', description: 'The last line of defense between a good setup and an emotional mistake.' },
      { title: 'Daily Routine & Time Management', tagline: 'Structure your trading day the way funded professionals structure theirs.', description: 'Structure your trading day the way funded professionals structure theirs.' },
      { title: 'Writing Down Your Complete Trading Plan', tagline: "Turn every lesson in this mentorship into one document you'll trade from for years.", description: "Turn every lesson in this mentorship into one document you'll trade from for years." },
      { title: 'Combining Personal Capital With Prop Capital', tagline: 'Structure both income streams into one coherent trading business.', description: 'Structure both income streams into one coherent trading business.' },
      { title: 'Your First 90 Days', tagline: 'Exactly what to do, week by week, the moment this course ends.', description: 'Exactly what to do, week by week, the moment this course ends.' },
      { title: 'Building Long-Term Consistency', tagline: 'The habits that keep you profitable in year three, not just month one.', description: 'The habits that keep you profitable in year three, not just month one.' },
      { title: 'Graduation — Becoming a Professional Trader', tagline: 'Close the final chapter as a professional, with the plan, the psychology, and the edge to prove it.', description: 'Close the final chapter as a professional, with the plan, the psychology, and the edge to prove it.' }
    ],
  }
];

export const totalClasses = chapters.reduce((sum, ch) => sum + ch.classes.length, 0);

export function getChapterBySlug(slug) {
  return chapters.find((c) => c.slug === slug);
}
