import React from 'react';
import KarptureOld from '../../assets/works/karpture/karpture-old.png';
import KarptureNew from '../../assets/works/karpture/karpture-new.png';

const KarptureStory = () => {
  return (
    <main className="founder-body">
      <style>
        {`
          .founder-body {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            color: #333;
            font-family: "Montserrat";
            line-height: 1.6;
          }

          .section {
            margin-bottom: 4rem;
            text-align: left;
            color: var(--text-color);
          }

          .title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: initial;
            color: var(--header-color);
          }

          .subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--header-color);
          }

          .content {
            max-width: 800px;
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }

          .quote {
            font-style: italic;
            font-size: 1.3rem;
            color: var(--bg-color);
            padding: 2rem;
            background: var(--accent-color);
            border-left: 4px solid var(--accent-color);
            max-width: 700px;
          }
        
          a {
            color: var(--link-color);
            text-decoration: none;
            margin: 0 1rem;
          }
        `}
      </style>

      <div className="wrapper">
        <section className="section">
          <h1 className="title">The Story Behind Karpture</h1>
          <div className="content">
            <p>You know those moments when you hit Ctrl + C like four times just to be sure it worked? Yeah, that’s me. Every single day.</p>
            <p>And the crazy part? I sometimes forget I already copied something important before smashing another Ctrl + C over it. Just like that, gone!</p>
            <p>So instead of whining about it again for the hundredth time, I did what any developer who’s fed up would do: I built something.</p>
            <p>That’s how Karpture was born.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">I Started with What I know</h2>
          <div className="content">
            <p>I didn’t open 10 tabs looking for a “perfect tech stack.” I didn’t try to overthink it. I just asked myself: “What do I already know that’s enough to get this done?”</p>
            <p>The answer? HTML. CSS. JS. And of course, the good ol’ manifest.json.</p>
            <p>The first actual task wasn’t even about writing code. It was just:
              <br /><br /><em>git init</em>
              <br /><em>npm init</em>
            </p>
            <p>Starting a Git repo felt like a warm-up lap before the real sprint. And trust me, there’s a kind of magic in that. Once the repo was alive, the project started breathing.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">Break it Down or Burn Out</h2>
          <div className="content">
            <p>One of the smartest things I did? I broke the entire build down into the tiniest possible pieces:</p>
            <ul>
              <li>Each file I needed to create</li>
              <li>Each little function I needed to write</li>
              <li>Each folder that needed to exist</li>
            </ul>
            <p>It wasn’t about trying to finish the app in one sitting. It was about giving every file its own day or its own moment.</p>
            <p>By Day 3, I was deep into fixing my event listener for copy actions. By Day 5, I had the clipboard data storing properly in localStorage.</p>
            <p>It wasn’t about building fast. It was about building without feeling overwhelmed.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">Forget Beautiful. Make it Work First.</h2>
          <div className="content">
            <p>If I had opened Figma on Day 1, I’d probably still be stuck designing the logo 😅</p>
            <p>Instead, I ignored all that. I didn’t care if it looked ugly, because beauty doesn’t fix bugs. I only had one goal: Make it functional first. Pretty can come later.</p>
            <p>A functional app, no matter how simple or ugly, is 1000x better than a beautiful prototype that never ships.</p>
          </div>

          {/* Image Section */}
          <div className="image-wrapper">
            {/* Replace with actual image */}
            <img src={KarptureOld} alt="" />
          </div>

        </section>



        <section className="section">
          <h2 className="subtitle">It’s Just Version 1, And That’s Okay</h2>
          <div className="content">
            <p>Karpture wasn’t built to be a “perfect” app. It was built to solve one specific problem.</p>
            <p>Sure, I’ve got ideas for version 2, better UX, cloud sync, maybe even an AI assistant to auto-label copied items. But for now? It does what I need. And that’s a win.</p>
            <p>Fun twist? I facilitated a QA class on Scrum and Agile around the same time and used Karpture as our case study. We treated it like a mini-sprint project. The best part? The students renamed it! It was initially called ClipKip, but after some brainstorming, they came up with Karpture, and it stuck.</p>
            <p>I even added them as contributors for the v1.0.1 release on<a href="https://www.producthunt.com/products/clipkip?launch=karpture" target='_blank'>Product Hunt.</a> Now, it’s live on the Chrome Web Store as a proper extension. We’re already planning what comes next.</p>
          </div>
        </section>

        <section className="section">
          <div className="quote">
            “Karpture isn’t fancy. But it works. It was born out of a need. It’s simple, and I plan to improve it. But version 1 is out there, nd that’s what matters.”
          </div>
          {/* Image Section */}
          <div className="image-wrapper">
            {/* Replace with actual image */}
            <img src={KarptureNew} alt="" />
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">Why Build Like This?</h2>
          <div className="content">
            <p>You move faster. You actually ship. You get real feedback early. You avoid burnout from chasing perfection. You know what to fix instead of guessing.</p>
            <p>If you’ve been thinking of building something too, just start. Not everything has to be a full-blown startup or a viral product. Sometimes, building that one thing that solves your personal pain point is all the push you need.</p>
            <p>Don’t start with Figma. Don’t waste 2 months writing the perfect PRD. Don’t overthink the UI.</p>
            <p>Start by solving one clear problem. Ship something basic, something functional. Let your first version look like it was built in a weekend (because maybe it was).</p>
            <p>Truth is, if you wait until it’s perfect, you’ll either get stuck or quit.</p>

            <p>Would you like to try out karpture?<a href="https://clipkip-site.vercel.app/" target='_blank'>Check it out right here</a></p>
          </div>


        </section>

      </div>
    </main>
  );
};

export default KarptureStory;