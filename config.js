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
      properties: ["Vacant Lot – 13228 Trinity Blvd, Euless", "12977 Trinity Blvd Ste 105, Euless"],
      note: "Not activated for payments in AppFolio" },
    { id: "dummy",              name: "Dummy",
      properties: ["2657 Northaven Rd, Dallas", "2667 Northaven Rd, Dallas"],
      note: "Placeholder bank in AppFolio — confirm whether this needs reconciling" },
    { id: "fd-portfolios",      name: "FD Portfolios LLC",
      properties: ["Family Dollar – Baldwin, LA", "Family Dollar – Lufkin, TX", "Family Dollar – Newton, TX",
                   "Family Dollar – Oberlin, LA", "Family Dollar – Ozark, AR", "Family Dollar – Pine Prairie, LA"] },
    { id: "harry-hines",        name: "Harry Hines Denton Drive",
      properties: ["Plaza Latina 2.0 – 11200 Harry Hines Blvd, Dallas"] },
    { id: "palmhurst",          name: "Palmhurst Properties, LLC",
      properties: ["Palmhurst Shopping Center – Palmhurst, TX"] },
    { id: "shoppes-square",     name: "Shoppes At The Square LLC",
      properties: ["1500 N Old Decatur Rd – Saginaw, TX"],
      note: "Not activated for payments in AppFolio" },
    { id: "tx-family",          name: "TX Family Holdings LLC",
      properties: ["93 County St – Taunton, MA"],
      note: "Not activated for payments in AppFolio" },
    { id: "wazicap-hoa",        name: "WaziCap HOA Management",
      properties: ["Sight Condominium Association – 1111 Raiford Rd, Carrollton"] },
  ],

  // Monthly tasks. "dueDay" = day of the FOLLOWING month the task is due
  // (e.g. September's reconciliations are due October 15).
  // Set followingMonth:false to make it due within the same month.
  monthly: [
    { id: "recon",         label: "Reconcile bank account", perBank: true,  dueDay: 15, followingMonth: true },
    { id: "rent-receipts", label: "Enter rent receipts",    perBank: false, dueDay: 5,  followingMonth: false },
  ],

  // Yearly tasks. "dueDate" is MM-DD. Add as needed.
  yearly: [
    // { id: "1099s",      label: "Issue 1099s to vendors",         dueDate: "01-31" },
    // { id: "cam-recon",  label: "CAM / NNN reconciliations",      dueDate: "03-31" },
    // { id: "tax-return", label: "Entity tax returns to CPA",      dueDate: "03-15" },
  ],
};
