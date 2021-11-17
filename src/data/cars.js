const cars = [
  {
    name: "ALPHA",
    slug: "alpha",
    color: "red",
    timeline: [
      {
        name: "Conversations",
        body: "Conversations was an integration that allowed the user to message the dealer in real time. If the dealer wasn't available then a watson based bot would take over and continue the conversation to the best of its abilities. This included many calls to different endpoints, websocket connections, dynamic templating, and a boat load of vanilla js.",
      },
      {
        name: "Online Shopper",
        body: "This feature allowed a customer to go through the process of buying a car without stepping foot in the dealership...well almost. It enabled users to fill out all of their information with the promise of receiving a real time pre-approved quote from the dealership.",
      },
      {
        name: "In-between features",
        body: "When I wasn't working on a new feature or product I was usually fixing bugs and writing tests, not the most engaging work but it's always worth while.",
      },
    ],
  },
  {
    name: "BETA",
    slug: "beta",
    color: "blue",
    timeline: [
      {
        name: "Trims",
        body: "Create /research/trims and related pages. This involved new endpoints, query's, css, html, and DB models to help with the ingestion of a third party data pipeline.",
      },
      {
        name: "Lead Path",
        body: "Fraudnet integration with replayable jobs and email to dealers.",
      },
      {
        name: "Load Testing",
        body: "Added a new python based load testing tool to the umbrella app with tests that would run popular pages at 10% normal traffic to get a feel for how the new site was going to handle traffic.",
      },
      {
        name: "Data Ingestion",
        body: "Created a new AWS Lambda using Terraform that copies objects from our alpha account to our beta account and stores the new objects in newly created paths.",
      },
      {
        name: "Reverse Proxy",
        body: "Added structs/validation/endpoints to a reverse proxy that would take the incoming data and feed it back to alpha unchanged while still adding it to our new Beta DB.",
      },
      {
        name: "Vehicle Badging",
        body: "Added badges and conditional rendering logic to multiple pages. Added price comparison tool. Added tooltips/modals to describe the meaning of each badge.",
      },
    ],
  },
]
module.exports = { cars }
