import React from 'react';

const AfrihealsCareers = () => {
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
            color: #fff;
          }
          
          .title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: initial;
            color: #f4d4b7;
          }
          
          .subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #f4d4b7;
          }
          
          .content {
            max-width: 800px;
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }

          .quote {
            font-style: italic;
            font-size: 1.3rem;
            color: #008080;
            padding: 2rem;
            background: #f4d4b7;
            border-left: 4px solid #f4d4b7;
            max-width: 700px;
          }
        `}
      </style>

      <div className="wrapper">
        <section className="section">
          <h1 className="title">The AfriBreath Journey</h1>
          <div className="content">
            <p>Back in 2018, I had a vision, a digital magazine for Africa. I called it AfriBreath.</p>
            <p>I was so sure of the idea that I paid a designer on Fiverr to craft a beautiful logo. My brother and two cousins joined in on the idea. We brainstormed, planned, and dreamt big.</p>
            <p>But we didn’t launch. Why? We underestimated the execution. We lacked structure, commitment, and funds. Life happened. The idea faded… for a while.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">Pivoting to Education</h2>
          <div className="content">
            <p>Years later, AfriBreath came back to life, but in a new form.</p>
            <p>We pivoted into an online school, offering training programs for aspiring tech professionals. That period opened my eyes to the demand for structured learning in Africa. But again, we didn’t go far. We lacked a clear monetization plan and couldn’t keep up with operational costs.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">From School to Tech Company</h2>
          <div className="content">
            <p>Next, we evolved into a tech/software company, building MVPs, offering dev services, and creating products.</p>
            <p>It was more promising, but still unstable. Revenue was inconsistent, and we didn’t have the business foundation to scale properly.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">The Virtual Internship Experiment</h2>
          <div className="content">
            <p>In 2023, we reimagined AfriBreath again, this time, as a virtual internship platform. The idea felt perfect: help students gain experience and connect startups with fresh talent.</p>
            <p>I was excited. My team was excited. We built fast, but didn’t start small.</p>
            <p>We hired an HR Manager, a Product Manager, and Developers, all before confirming product-market fit. It felt right at the time, but it was the wrong move.</p>
            <p>A week before launching in 2024, we crunched the numbers. The result was devastating: our revenue model couldn’t sustain the structure we built. We would lose more money than we’d ever make.</p>
            <p>So, just days before launch, we shut it down.</p>
          </div>

          <div className="content">
            <p><strong>Lesson 1:</strong> Start small. Prove your model before building a team.</p>
            <p><strong>Lesson 2:</strong> Prioritize revenue over perfection. A functional MVP beats a polished product that doesn’t sell.</p>
            <p><strong>Lesson 3:</strong> The right team a big team. Don’t hire out of ambition—hire out of necessity.</p>
            <p><strong>Lesson 4:</strong> Think through profitability from day one. A great idea without a revenue plan is a liability.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">The August 2024 Pause</h2>
          <div className="content">
            <p>In August 2024, we decided to officially pause AfriBreath’s operations. Not because it failed, but because it needed to evolve again. We owed our team transparency and took steps to settle pending salaries and express our gratitude before the pause.</p>
            <p>AfriBreath didn’t die. It matured. It became a parent company. And that decision gave birth to something new.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="subtitle">LeadPay: The Next Chapter</h2>
          <div className="content">
            <p>Out of the lessons and losses, we’re now building <strong>LeadPay</strong>, a modern payment experience for businesses and individuals, think Link.com by Stripe, but for Africa.</p>
            <p>This time, we’re starting small, validating every step, and keeping things lean. AfriBreath now serves as the holding company for this new wave of innovation.</p>
          </div>
        </section>

        <section className="section">
          <div className="quote">
            “AfriBreath wasn’t just a brand. It was a journey. Every pivot, every lesson, every pause, it shaped the clarity I now have today.”
          </div>
        </section>
      </div>
    </main>
  );
};

export default AfrihealsCareers;
