{
  /* <div className="experience-section dp-section">
      <h2 className="dp-title">Experience</h2>
      <p className="dp-section--text">
        Cars.com has been my home as a subcontractor over the past two years.
        I've spent my time building many different products/features with some
        of the most incredible people I've ever had the privilege of coming
        across.
      </p>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
          date="Year 1"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Conversations</h3>
          <p>
            Conversations was an integration that allowed the user to message
            the dealer in real time. If the dealer wasn't available then a
            watson based bot would take over and continue the conversation to
            the best of its abilities. This included many calls to different
            endpoints, websocket connections, dynamic templating, and a boat
            load of vanilla js.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Year 1"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Online Shopper</h3>
          <p>
            This feature allowed a customer to go through the process of buying
            a car without stepping foot in the dealership...well almost. It
            enabled users to fill out all of their information with the promise
            of receiving a real time pre-approved quote from the dealership.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Year 1"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">
            In-between features
          </h3>
          <p>
            When I wasn't working on a new feature or product I was usually
            fixing bugs and writing tests, not the most engaging work but it's
            always worth while.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Beta</h3>
          <p>
            I joined what was called "team Beta" in the second year of work with
            the privilege of developing Cars.com from the ground up with new
            technologies. We worked in a methodology called "Shape Up" were we
            worked in small teams for 6 weeks on a tangible goal.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h4 className="vertical-timeline-element-subtitle">Cycle: 1</h4>
          <p>
            Create /research/trims and related pages. This involved new
            endpoints, query's, css, html, and DB models to help with the
            ingestion of a third party data pipeline.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Cycle: 2</h3>
          <p>Fraudnet integration with replayable jobs and email to dealers.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Cycle: 3</h3>
          <p>
            Created a new AWS Lambda using Terraform that copies objects from
            our alpha account to our beta account and stores the new objects in
            newly created paths. Add a new pythons based load testing tool to
            the umbrella app with tests that would run popular pages at 10%
            normal traffic to get a feel for how the new site was going to
            handle traffic. I was moved midway through this cycle to a different
            team to help fill the position of someone who recently left the
            company. On the new team I worked on adding
            structs/validation/endpoints to a reverse proxy that would take the
            incoming data and feed it back to alpha unchanged while still adding
            it to our new Beta DB.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Cycle: 4</h3>
          <p>
            Added "badges" and conditional rendering logic to multiple pages.
            Added price comparison tool. Added tooltips/modals to describe the
            meaning of each badge.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Cycle: 5</h3>
          <p>
            Consumed third party API and stored the data in an ETS table for
            caching rather than making the call on every page load. Added APR
            section to page. Conditionally render linkpacks for makes that have
            less than 20 listings. I spent quite a bit of extra time adding DB
            index's and looking at parallel scans trying to figure out how much
            it would cost to make this call. Unfortunately COVID ended that
            study before I got an answer.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Year 2"
          iconStyle={{ background: "#2cfcfd", color: "#fff" }}
          contentStyle={{ background: "#353535", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #353535" }}
        >
          <h3 className="vertical-timeline-element-title">Cooldown: </h3>
          <p>
            Every 6 weeks we take 2 weeks to work on whatever we want. I spend
            most cooldowns adding unit tests, reviewing PR's, and looking into
            new technologies. Occasionally I'll take on some larger work with a
            small team of whoever is interested. For example, adding a E2E
            tester to our pipeline and writing tests for it.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <div className="contact-section dp-section">
      <h2 className="dp-title">Contact</h2>
      <p className="dp-section--text">
        I'm open to remote opportunities with great culture. I enjoy fullstack
        development using Elixir and React the most. You can probably get the
        fastest reply by sending me an email.
      </p>
      <p className="dp-section--text">Email: australinsurf@gmail.com</p>
      <p className="dp-section--text">
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/austinbentley/">
          https://www.linkedin.com/in/austinbentley/
        </a>
      </p>
      <p className="dp-section--text">Residence: Albuquerque, NM</p>
    </div> */
}
