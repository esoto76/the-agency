export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    mainName: "the agency",
    streetAddress: "11200 Montwood Dr, El Paso, Texas 79936",
    phone: "(915) 593-7218",
    title: "real estate and property management",
    services: [
      {
        name: "locatorService",
        title: "locator services",
        txt: [
          "Our company can help you locate qualified tenants for your property. Rental prospects go under our application process and sign a Texas Residential Lease prepared by us at our office or online. After move in is complete, management will be transferred to you.",
        ],
      },
      {
        name: "moveOutService",
        title: "move out services",
        txt: [
          "Evictions and move outs can be hard to handle if you do not count with a property manager. We can help you with an eviction process or conduct a final walk thru with your tenants.",
        ],
      },
      {
        name: "propertyManagementService",
        title: "property management",
        txt: [
          [
            "Find qualified tenants for your property",
            "Tenants credit, criminal background, and rental history are screened",
            "income verification",
            "Sign Texas Residential Lease",
            "Collect and store deposit",
            "Once move out is complete deposit is returned accordingly",
            "Collect rent and send to owner",
            "Buildium access",
            "Tenant has 24/7 access to account where they can pay online, post maintenance requests, and set up automatic withdrawal",
            "Owner has 24/7 access to their property, contracts, payments available, deductions",
            "Maintenance",
            "Work needed on the property is performed by our contractors in a 24-48-hour period",
            "Inspections",
          ],
          "Our realtors come with extensive property management backgrounds making the process of hiring a property manager easier. Our services require no upfront fees, we can start advertising in less than 24 hours.",
        ],
      },
    ],
  }),
});
