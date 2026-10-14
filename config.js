// ============================================================
//  WaziCap AppFolio Accounting Tracker — configuration
//  Edit this file to add/remove banks or tasks. No other
//  file needs to change.
// ============================================================

window.TRACKER_CONFIG = {
  title: "AppFolio Accounting Tracker",
  owner: "WaziCap",

  // Where completed-checkmarks are stored so the whole team sees them.
  // Leave repo blank to run in "this browser only" mode (localStorage).
  sync: {
    repo: "sagarhai88/appfolio-tracker",
    branch: "main",
    statusFile: "data/status.json",
  },

  // Bank accounts to reconcile every month (from AppFolio
  // "Bank Account Association" export, 10/09/2026).
  // Properties are shown as a hint under each bank.
  banks: [
    { id: "1280-loop-288",      name: "1280 Loop 288 LLC",
      properties: ["1280 S Loop 288 – Denton, TX"] },
    { id: "1320-evansville",    name: "1320 Evansville, LLC",
      properties: ["1320 Vann Avenue – Evansville, IN"] },
    { id: "2401-us-380",        name: "2401 US 380, LLC",
      properties: ["2401 US-380 – Cross Roads, TX"] },
    { id: "502-fountain",       name: "502 Fountain Parkway",
      properties: ["502 Fountain Parkway – Grand Prairie, TX"] },
    { id: "trinity",            name: "Business Park at Trinity LLC",
      properties: ["Trinity Business Park – Building A (12200 Trinity Blvd)",
                   "Trinity Business Park – Building B (12240 Trinity Blvd)",
                   "Trinity Business Park – Building C (12174 Trinity Blvd)"] },
    { id: "c-store-wholesaler", name: "C Store Wholesaler LLC",
      properties: ["Family Dollar – Dunkirk, IN", "Family Dollar – Rossville, GA"] },
    { id: "cockrell-pinnacle",  name: "Cockrell Hill Pinnacle",
      properties: ["Cockrell Hill – 5815 S Cockrell Hill Rd, Dallas", "Vacant Lots – Cockrell Hill"] },
    { id: "cockrell-partners",  name: "Cockrell Hill Partners, INC",
      properties: ["Vacant Lot – 13228 Trinity Blvd, Euless", "12977 Trinity Blvd Ste 105, Euless"] },
    { id: "dummy",              name: "Dummy",
      properties: ["2657 Northaven Rd, Dallas", "2667 Northaven Rd, Dallas"] },
    { id: "fd-portfolios",      name: "FD Portfolios LLC",
      properties: ["Family Dollar – Baldwin, LA", "Family Dollar – Lufkin, TX", "Family Dollar – Newton, TX",
                   "Family Dollar – Oberlin, LA", "Family Dollar – Ozark, AR", "Family Dollar – Pine Prairie, LA"] },
    { id: "harry-hines",        name: "Harry Hines Denton Drive",
      properties: ["Plaza Latina 2.0 – 11200 Harry Hines Blvd, Dallas"] },
    { id: "palmhurst",          name: "Palmhurst Properties, LLC",
      properties: ["Palmhurst Shopping Center – Palmhurst, TX"] },
    { id: "shoppes-square",     name: "Shoppes At The Square LLC",
      properties: ["1500 N Old Decatur Rd – Saginaw, TX"] },
    { id: "tx-family",          name: "TX Family Holdings LLC",
      properties: ["93 County St – Taunton, MA"] },
    { id: "wazicap-hoa",        name: "WaziCap HOA Management",
      properties: ["Sight Condominium Association – 1111 Raiford Rd, Carrollton"] },
  ],

  // Monthly tasks. Each month's page lists what is DUE that month.
  //   dueDay:   day of the month the task is due ("last" = last day)
  //   startDay: optional first day of the working window (shown on the calendar)
  //   forPrior: true = the task is about the previous month (Oct page: "Reconcile – Sep statements")
  monthly: [
    { id: "recon",         label: "Reconcile previous month", perBank: true, startDay: 1, dueDay: 7, forPrior: true },
    { id: "rent-receipts", label: "Enter rent receipts",    perBank: true,  dueDay: 5                                    },
    { id: "placeholder-gl",label: "Clean up PLACEHOLDER GL",perBank: false, dueDay: "last"                               },
  ],

  // Yearly tasks — same bank grid as monthly. "dueDate" is MM-DD.
  yearly: [
    { id: "budget", label: "Create next year budget", perBank: true, dueDate: "12-15" },
    { id: "cam",    label: "Set up CAM for tenants",  perBank: true, dueDate: "12-15" },
  ],

  // Family Dollar reimbursements — one row per store (all entities), shown on the Yearly tab.
  familyDollar: {
    title: "Family Dollar – tax & insurance reimbursements",
    locations: [
      { id: "fd-dunkirk",      name: "Dunkirk, IN",      address: "1153 S Main St",            entity: "C Store Wholesaler LLC" },
      { id: "fd-rossville",    name: "Rossville, GA",    address: "824 Mission Ridge Rd",      entity: "C Store Wholesaler LLC" },
      { id: "fd-baldwin",      name: "Baldwin, LA",      address: "910 Main Street",           entity: "FD Portfolios LLC" },
      { id: "fd-lufkin",       name: "Lufkin, TX",       address: "2500 E. Denman Ave",        entity: "FD Portfolios LLC" },
      { id: "fd-newton",       name: "Newton, TX",       address: "515 West Court St.",        entity: "FD Portfolios LLC" },
      { id: "fd-oberlin",      name: "Oberlin, LA",      address: "8702 U.S. Highway 165",     entity: "FD Portfolios LLC" },
      { id: "fd-ozark",        name: "Ozark, AR",        address: "1008 W. Commercial St.",    entity: "FD Portfolios LLC" },
      { id: "fd-pine-prairie", name: "Pine Prairie, LA", address: "10729 Veteran Memorial",    entity: "FD Portfolios LLC" },
    ],
    tasks: [
      { id: "fd-tax-req", label: "Property tax – requested", dueDate: "12-15" },
      { id: "fd-tax-rec", label: "Property tax – received",  dueDate: "12-15" },
      { id: "fd-ins-req", label: "Insurance – requested",    dueDate: "12-15" },
      { id: "fd-ins-rec", label: "Insurance – received",     dueDate: "12-15" },
    ],
  },
};
