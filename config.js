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
  // Bank accounts to reconcile every month, with their AppFolio properties and
  // current tenants (Rent Roll export 10/19/2026). Tenants get a "Past due" checkbox.
  // Sight HOA and Plaza Latina tenants are intentionally left out.
  banks: [
    { id: "1280-loop-288", name: "1280 Loop 288 LLC",
      properties: [
        { name: "1280 S Loop 288 \u2013 Denton, TX", tenants: [
          { id: "unit-a-t-mobile", unit: "unit A", name: "T-Mobile" },
          { id: "unit-b-a-max", unit: "Unit B", name: "A- MAX" },
          { id: "7-11-the-local-shoppe-llc", unit: "7/11", name: "The Local Shoppe, LLC" },
        ] },
      ] },
    { id: "1320-evansville", name: "1320 Evansville, LLC",
      properties: [
        { name: "1320 Vann Avenue \u2013 Evansville, IN", tenants: [
          { id: "100-family-dollar-stores-of-indiana-llc", unit: "100", name: "Family Dollar Stores of Indiana, LLC" },
        ] },
      ] },
    { id: "2401-us-380", name: "2401 US 380, LLC",
      properties: [
        { name: "2401 US-380 \u2013 Cross Roads, TX", tenants: [
          { id: "local-shoppe-local-shoppe", unit: "Local Shoppe", name: "Local Shoppe" },
        ] },
      ] },
    { id: "502-fountain", name: "502 Fountain Parkway",
      properties: [
        { name: "502 Fountain Parkway \u2013 Grand Prairie, TX", tenants: [
          { id: "502-tw-distributors-lp", unit: "502", name: "TW Distributors LP" },
        ] },
      ] },
    { id: "trinity", name: "Business Park at Trinity LLC",
      properties: [
        { name: "Trinity Business Park \u2013 Building A (12200 Trinity Blvd)", tenants: [] },
        { name: "Trinity Business Park \u2013 Building B (12240 Trinity Blvd)", short: "Bldg B", tenants: [
          { id: "building-b-unit-1-daiohs-usa", unit: "Unit 1", name: "Daiohs USA" },
          { id: "building-b-unit-2-avyna-cosmetics", unit: "Unit 2", name: "Avyna Cosmetics" },
        ] },
        { name: "Trinity Business Park \u2013 Building C (12174 Trinity Blvd)", short: "Bldg C", tenants: [
          { id: "building-c-padel-growth-partners-llc", unit: "", name: "Padel Growth Partners LLC" },
        ] },
      ] },
    { id: "c-store-wholesaler", name: "C Store Wholesaler LLC",
      properties: [
        { name: "Family Dollar \u2013 Dunkirk, IN", tenants: [] },
        { name: "Family Dollar \u2013 Rossville, GA", tenants: [] },
      ] },
    { id: "cockrell-pinnacle", name: "Cockrell Hill Pinnacle",
      properties: [
        { name: "Cockrell Hill \u2013 5815 S Cockrell Hill Rd, Dallas", tenants: [
          { id: "110-fermin-reyes", unit: "110", name: "Fermin Reyes" },
          { id: "120-digiretail-llc", unit: "120", name: "DigiRetail, LLC" },
          { id: "200-the-local-shoppe-708", unit: "200", name: "The Local Shoppe # 708" },
        ] },
        { name: "Vacant Lots \u2013 Cockrell Hill", tenants: [] },
      ] },
    { id: "cockrell-partners", name: "Cockrell Hill Partners, INC",
      properties: [
        { name: "Vacant Lot \u2013 13228 Trinity Blvd, Euless", tenants: [] },
        { name: "12977 Trinity Blvd Ste 105, Euless", tenants: [] },
      ] },
    { id: "dummy", name: "Dummy",
      properties: [
        { name: "2657 Northaven Rd, Dallas", tenants: [] },
        { name: "2667 Northaven Rd, Dallas", tenants: [] },
      ] },
    { id: "fd-portfolios", name: "FD Portfolios LLC",
      properties: [
        { name: "Family Dollar \u2013 Baldwin, LA", tenants: [
          { id: "store-28408-family-dollar-store-of-louis", unit: "Store # 28408", name: "Family Dollar Store of Louisiana" },
        ] },
        { name: "Family Dollar \u2013 Lufkin, TX", tenants: [
          { id: "29124-family-dollar-store-of-louisiana", unit: "29124", name: "Family Dollar Store of Louisiana" },
        ] },
        { name: "Family Dollar \u2013 Newton, TX", tenants: [
          { id: "store-28951-family-dollar-store-of-louis", unit: "Store # 28951", name: "Family Dollar Store of Louisiana" },
        ] },
        { name: "Family Dollar \u2013 Oberlin, LA", tenants: [
          { id: "store-28622-family-dollar-store-of-louis", unit: "Store # 28622", name: "Family Dollar Store of Louisiana" },
        ] },
        { name: "Family Dollar \u2013 Ozark, AR", tenants: [
          { id: "store-29079-family-dollar-store-of-louis", unit: "Store # 29079", name: "Family Dollar Store of Louisiana" },
        ] },
        { name: "Family Dollar \u2013 Pine Prairie, LA", tenants: [
          { id: "store-29360-family-dollar-store-of-louis", unit: "Store # 29360", name: "Family Dollar Store of Louisiana" },
        ] },
      ] },
    { id: "harry-hines", name: "Harry Hines Denton Drive",
      properties: [
        { name: "Plaza Latina 2.0 \u2013 11200 Harry Hines Blvd, Dallas", tenants: [] },
      ] },
    { id: "palmhurst", name: "Palmhurst Properties, LLC",
      properties: [
        { name: "Palmhurst Shopping Center \u2013 Palmhurst, TX", tenants: [
          { id: "324104-blue-dental-pllc", unit: "324104", name: "Blue Dental, PLLC" },
          { id: "324108-exotic-puff-and-stuff-llc", unit: "324108", name: "Exotic Puff and Stuff LLC" },
          { id: "324112-armendaris-family-clinic", unit: "324112", name: "Armendaris Family Clinic" },
          { id: "416100-univista-intermediatenholdco-llc", unit: "416100", name: "UniVista IntermediatenHoldco, LLC," },
          { id: "416102-irepair", unit: "416102", name: "Irepair", status: "Notice-Unrented" },
          { id: "416104-sally-beauty-supply-llc-3539", unit: "416104", name: "Sally Beauty Supply, LLC #3539" },
          { id: "416106-a-list-nails", unit: "416106", name: "A List Nails" },
          { id: "416110-t-mobile", unit: "416110", name: "T - Mobile" },
          { id: "416114-ayvaz-pizza-llc-store-39510", unit: "416114", name: "Ayvaz Pizza, LLC Store #39510" },
        ] },
      ] },
    { id: "shoppes-square", name: "Shoppes At The Square LLC",
      properties: [
        { name: "1500 N Old Decatur Rd \u2013 Saginaw, TX", tenants: [] },
      ] },
    { id: "tx-family", name: "TX Family Holdings LLC",
      properties: [
        { name: "93 County St \u2013 Taunton, MA", tenants: [
          { id: "the-local-shoppe-the-local-shoppe", unit: "The Local Shoppe", name: "The Local Shoppe" },
        ] },
      ] },
    { id: "wazicap-hoa", name: "WaziCap HOA Management",
      properties: [
        { name: "Sight Condominium Association \u2013 1111 Raiford Rd, Carrollton", tenants: [] },
      ] },
  ],

  // Monthly tasks. Each month's page lists what is DUE that month.
  //   dueDay:   day of the month the task is due ("last" = last day)
  //   startDay: optional first day of the working window (shown on the calendar)
  //   forPrior: true = the task is about the previous month (Oct page: "Reconcile – Sep statements")
  monthly: [
    { id: "recon",         label: "Reconcile previous month", perBank: true, startDay: 1, dueDay: 7, forPrior: true },
    { id: "rent-receipts", label: "Enter rent receipts",    perBank: true,  dueDay: 5                                    },
    { id: "placeholder-gl",label: "Clean up PLACEHOLDER GL",perBank: false, dueDay: "last"                               },
    { id: "past-due",      label: "Past due",               perTenant: true                                             },
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
