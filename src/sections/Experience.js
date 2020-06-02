import React from "react";
function Experience() {
  return (
    <div className="experience-section dp-section">
      <h2 className="dp-title">Experience</h2>
      <p className="dp-section--text">
        Cars.com has been my home as a subcontractor over the past two years.
        I've spent my time building many different products/features with some
        of the most incredible people I've ever had the privlage of coming
        across.
      </p>
      <h4 className="dp-subtitle">Year 1</h4>
      <p className="dp-section--text">
        Cars.com has been my home as a subcontractor over the past two years.
        I've spent my time building many different products/features with some
        of the most incredible people I've ever had the privlage of coming
        across.
      </p>
      <h4 className="dp-subtitle--secondary">Conversations:</h4>
      <p className="dp-section--text">
        Conversations was an integration that allowed the user to message the
        dealer in real time. If the dealer wasn't available then a watson based
        bot would take over and continue the conversation to the best of its
        ability's. This included many calls to different endpoints, websocket
        connections, dynamic templating, and a boat load of vanilla js.
      </p>
      <h4 className="dp-subtitle--secondary">Online Shopper:</h4>
      <p className="dp-section--text">
        This feature allowed a customer to go through the process of buying a
        car without stepping foot in the dealership...well almost. It enabled
        users to fill out all of their information with the promise of recieving
        a real time pre-approved quote from the dealership.
      </p>
      <h4 className="dp-subtitle--secondary">In-between features:</h4>
      <p className="dp-section--text">
        When I wasn't working on a new feature or product I was usally fixing
        bugs and writing tests, not the most engaging work but it's always worth
        while.
      </p>
      <h4 className="dp-subtitle">Year 2</h4>
      <p className="dp-section--text">
        I joined what was called "team Beta" in the second year of work with the
        privlage of developing Cars.com from the ground up with new
        technologies. We worked in a methodology called "Shape Up" were we
        worked in small teams for 6 weeks on a tangible goal.
      </p>
      <h4 className="dp-subtitle--secondary">Cycle 1:</h4>
      <p className="dp-section--text">
        Create /research/trims and related pages. This involved new endpoints,
        query's, css, html, and DB models to help with the ingestion of a third
        party data pipeline.
      </p>
      <h4 className="dp-subtitle--secondary">Cycle 2:</h4>
      <p className="dp-section--text">
        Fraudnet integration with replayable jobs and email to dealer.
      </p>
      <h4 className="dp-subtitle--secondary">Cycle 3:</h4>
      <p className="dp-section--text">
        Created a new AWS Lambda using Terraform that copies objects from our
        alpha account to our beta account and stores the new objects in newly
        created paths. Add a new pythons based load testing tool to the umbrella
        app with tests that would run popular pages at 10% normal traffic to get
        a feel for how the new site was going to handle traffic. I was moved
        midway through this cycle to a different team to help fill the position
        of someone who recently left the company. On the new team I worked on
        adding structs/validation/ednpoints to a reverse proxy that would take
        the incoming data and feed it back to alpha unchanged while still adding
        it to our new Beta DB.
      </p>
      <h4 className="dp-subtitle--secondary">Cycle 4:</h4>
      <p className="dp-section--text">
        Added "badges" and conditional rendering logic to multiple pages. Added
        price comparison tool. Added tooltips/modals to describe the meaning of
        each badge.
      </p>
      <h4 className="dp-subtitle--secondary">Cycle 5:</h4>
      <p className="dp-section--text">
        Consumed third party API and stored the data in an ETS table for caching
        rather than making the call on every page load. Added APR section to
        page. Conditionally render linkpacks for makes that have less than 20
        listings. I spent quite a bit of extra time adding DB index's and
        looking at parallel scans trying to figure out how much it would cost to
        make this call. Unfortunaly COVID ended that study before I got an
        answer.
      </p>
      <h4 className="dp-subtitle--secondary">Cooldown:</h4>
      <p className="dp-section--text">
        Every 6 weeks we take 2 weeks to work on whatever we want. I spent most
        cooldowns adding unit tests, reviewing PR's, and looking into new
        technologies. I did help add a E2E tester to our pipeline and write
        tests for it during one cooldown.
      </p>
    </div>
  );
}

export default Experience;
