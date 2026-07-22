(function () {
  "use strict";
  const locations = {
  "garden3d-head-design": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "mindgrub-senior-product-designer": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "knguru-ux-ui-designer": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "lumapad-ui-ux": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "lumapad-frontend": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "lumapad-solidity": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "twinings-ai-graduate": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "gnani-ai-intern": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remote-ai-engineers": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "techtree-fullstack-ai": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "codecrafters-software-engineer": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nigeria-fullstack": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "cet-senior-fullstack": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "serbia-senior-frontend": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "anthropic-london-senior-engineer": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "replit-enterprise-product": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "replit-product-data-scientist": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "goodyear-digital-comms": {
    "lat": 33.43532,
    "lng": -112.35821,
    "mapCity": "Goodyear, Arizona, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remote-video-editor": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remote-email-marketing": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remote-social-media": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remote-senior-sdr": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remote-sdr-na": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "fullscale-engineering-ph": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "ofi-junior-fullstack": {
    "lat": 14.58691,
    "lng": 121.0614,
    "mapCity": "Pasig, National Capital Region, Philippines",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "ofi-web-intern": {
    "lat": 14.58691,
    "lng": 121.0614,
    "mapCity": "Pasig, National Capital Region, Philippines",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "optibpo-graphic-designer": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "cmg-webflow-designer": {
    "lat": 32.78306,
    "lng": -96.80667,
    "mapCity": "Dallas, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "india-graphic-intern": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "east-midlands-graphic": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "joblume-fullstack-us": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "polcode-python-ai": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "capitalone-lead-ai": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "mastercard-forward-ai": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "roberthalf-data-engineer": {
    "lat": 42.29171,
    "lng": -85.58723,
    "mapCity": "Kalamazoo, Michigan, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "roberthalf-creative-director": {
    "lat": 28.03947,
    "lng": -81.9498,
    "mapCity": "Lakeland, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "roberthalf-solution-architect": {
    "lat": 42.27756,
    "lng": -83.74088,
    "mapCity": "Ann Arbor, Michigan, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "wifi-tribe-community-leader": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "owlcat-game-designer": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5810461039": {
    "lat": 47.25288,
    "lng": -122.44429,
    "mapCity": "Tacoma, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810429508": {
    "lat": 32.71571,
    "lng": -117.16472,
    "mapCity": "San Diego, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810436619": {
    "lat": 47.25288,
    "lng": -122.44429,
    "mapCity": "Tacoma, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810682896": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810856317": {
    "lat": 39.29038,
    "lng": -76.61219,
    "mapCity": "Baltimore, Maryland, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810436926": {
    "lat": 45.71067,
    "lng": -122.64899,
    "mapCity": "Salmon Creek, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135136": {
    "lat": 54.44954,
    "lng": 23.22195,
    "mapCity": "Jonai, Marijampolė County, Lithuania",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810332790": {
    "lat": 49.24966,
    "lng": -123.11934,
    "mapCity": "Vancouver, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135132": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135152": {
    "lat": 13.21055,
    "lng": 79.0956,
    "mapCity": "Chittoor, Andhra Pradesh, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135146": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135147": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135133": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135162": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135165": {
    "lat": 53.55014,
    "lng": -113.46871,
    "mapCity": "Edmonton, Alberta, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809382532": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5809414446": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809409418": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809412319": {
    "lat": 35.7721,
    "lng": -78.63861,
    "mapCity": "Raleigh, North Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135201": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5809428692": {
    "lat": 30.30854,
    "lng": -97.94501,
    "mapCity": "Bee Cave, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809421545": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809382878": {
    "lat": 25.77288,
    "lng": -80.34783,
    "mapCity": "Fountainbleau, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809421282": {
    "lat": 41.95586,
    "lng": -87.8709,
    "mapCity": "Schiller Park, Illinois, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135151": {
    "lat": 12.97194,
    "lng": 77.59369,
    "mapCity": "Bengaluru, Karnataka, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135137": {
    "lat": 54.44954,
    "lng": 23.22195,
    "mapCity": "Jonai, Marijampolė County, Lithuania",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135210": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135209": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135144": {
    "lat": -22.46917,
    "lng": -48.9875,
    "mapCity": "Agudos, São Paulo, Brazil",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135160": {
    "lat": 51.31889,
    "lng": -2.20861,
    "mapCity": "Trowbridge, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135148": {
    "lat": 54.44954,
    "lng": 23.22195,
    "mapCity": "Jonai, Marijampolė County, Lithuania",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809413051": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5809426878": {
    "lat": 38.91289,
    "lng": -77.20081,
    "mapCity": "Pimmit Hills, Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5810253721": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135199": {
    "lat": 40.68066,
    "lng": -73.47429,
    "mapCity": "Massapequa, New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135142": {
    "lat": 29.19111,
    "lng": 73.20861,
    "mapCity": "Anūpgarh, Rajasthan, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135131": {
    "lat": -31.92,
    "lng": 115.83509,
    "mapCity": "Mount Hawthorn, Western Australia, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135158": {
    "lat": 53.56539,
    "lng": -0.07553,
    "mapCity": "Grimsby, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5808819354": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135077": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135156": {
    "lat": 51.62197,
    "lng": -3.92631,
    "mapCity": "St Thomas, Wales, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135172": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135183": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135107": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135113": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135114": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135102": {
    "lat": 52.2,
    "lng": 0.11667,
    "mapCity": "Cambridge, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135119": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135111": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135108": {
    "lat": 29.42412,
    "lng": -98.49363,
    "mapCity": "San Antonio, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135143": {
    "lat": 43.70643,
    "lng": -79.39864,
    "mapCity": "Toronto, Ontario, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135110": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135128": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135140": {
    "lat": 27.96282,
    "lng": 79.73827,
    "mapCity": "Tilhar, Uttar Pradesh, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135207": {
    "lat": 43.38621,
    "lng": -79.83713,
    "mapCity": "Burlington, Ontario, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135105": {
    "lat": 37.6818,
    "lng": -76.423,
    "mapCity": "Christ Church, Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135120": {
    "lat": 42.22093,
    "lng": -70.93977,
    "mapCity": "Weymouth, Massachusetts, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135134": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135129": {
    "lat": 29.76328,
    "lng": -95.36327,
    "mapCity": "Houston, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135109": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135121": {
    "lat": 39.5,
    "lng": 62.93333,
    "mapCity": "Moor, Turkmenistan",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135205": {
    "lat": 49.05798,
    "lng": -122.25257,
    "mapCity": "Abbotsford British Columbia, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135139": {
    "lat": 30.83982,
    "lng": 76.94065,
    "mapCity": "Kālka, Himachal Pradesh, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135124": {
    "lat": 55.04514,
    "lng": -1.62246,
    "mapCity": "Wideopen, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135104": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135153": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135122": {
    "lat": 50.11861,
    "lng": -5.53715,
    "mapCity": "Penzance, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135101": {
    "lat": -30.77081,
    "lng": 25.8667,
    "mapCity": "Content, Eastern Cape, South Africa",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135083": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135112": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135125": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135185": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135076": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135117": {
    "lat": 40.4165,
    "lng": -3.70256,
    "mapCity": "Madrid, Spain",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135116": {
    "lat": 30.71047,
    "lng": -96.86331,
    "mapCity": "Milano, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135106": {
    "lat": 13.25072,
    "lng": -59.64396,
    "mapCity": "Speightstown, Saint Peter, Barbados",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135138": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135130": {
    "lat": 61.21806,
    "lng": -149.90028,
    "mapCity": "Anchorage, Alaska, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135082": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135206": {
    "lat": 50.66648,
    "lng": -120.3192,
    "mapCity": "Kamloops, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135059": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135061": {
    "lat": 37.77493,
    "lng": -122.41942,
    "mapCity": "San Francisco, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5806774739": {
    "lat": 49.24966,
    "lng": -123.11934,
    "mapCity": "Vancouver, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135127": {
    "lat": 20.55005,
    "lng": -103.4435,
    "mapCity": "Santa Anita, Jalisco, Mexico",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135060": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135054": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135073": {
    "lat": 42.55843,
    "lng": -70.88005,
    "mapCity": "Beverly, Massachusetts, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135070": {
    "lat": 42.55843,
    "lng": -70.88005,
    "mapCity": "Beverly, Massachusetts, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135069": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135040": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135072": {
    "lat": 42.55843,
    "lng": -70.88005,
    "mapCity": "Beverly, Massachusetts, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135071": {
    "lat": 42.55843,
    "lng": -70.88005,
    "mapCity": "Beverly, Massachusetts, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5806978253": {
    "lat": 45.71067,
    "lng": -122.64899,
    "mapCity": "Salmon Creek, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135063": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135159": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135157": {
    "lat": 52.2,
    "lng": 0.11667,
    "mapCity": "Cambridge, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135067": {
    "lat": -25.24997,
    "lng": 151.98581,
    "mapCity": "Good Night, Queensland, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135062": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135064": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135041": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135074": {
    "lat": 42.55843,
    "lng": -70.88005,
    "mapCity": "Beverly, Massachusetts, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135164": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135042": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135036": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5805819087": {
    "lat": 45.66651,
    "lng": -122.56093,
    "mapCity": "Orchards, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135010": {
    "lat": 28.57144,
    "lng": 77.23272,
    "mapCity": "Defence Colony, National Capital Territory of Delhi, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135030": {
    "lat": 29.94791,
    "lng": 78.16025,
    "mapCity": "Haridwar, Uttarakhand, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135019": {
    "lat": 53.36797,
    "lng": -1.84536,
    "mapCity": "High Peak, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135046": {
    "lat": 58.73333,
    "lng": 5.7,
    "mapCity": "Time, Rogaland, Norway",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135043": {
    "lat": 45.52345,
    "lng": -122.67621,
    "mapCity": "Portland, Oregon, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135017": {
    "lat": 45.66244,
    "lng": -110.56104,
    "mapCity": "Livingston, Montana, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135065": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135035": {
    "lat": 37.97476,
    "lng": -87.55585,
    "mapCity": "Evansville, Indiana, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135037": {
    "lat": -8.05389,
    "lng": -34.88111,
    "mapCity": "Recife, Pernambuco, Brazil",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135015": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135032": {
    "lat": 26.1844,
    "lng": 91.7458,
    "mapCity": "Guwahati, Assam, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135047": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5806697618": {
    "lat": 35.00737,
    "lng": -80.94508,
    "mapCity": "Fort Mill, South Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135025": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135014": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135048": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5806733289": {
    "lat": 33.749,
    "lng": -84.38798,
    "mapCity": "Atlanta, Georgia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5806732560": {
    "lat": 35.22709,
    "lng": -80.84313,
    "mapCity": "Charlotte, North Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5806721376": {
    "lat": 44.97997,
    "lng": -93.26384,
    "mapCity": "Minneapolis, Minnesota, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5805827751": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135029": {
    "lat": 23.25469,
    "lng": 77.40289,
    "mapCity": "Bhopal, Madhya Pradesh, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5805704883": {
    "lat": 30.26715,
    "lng": -97.74306,
    "mapCity": "Austin, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5803519620": {
    "lat": 38.96872,
    "lng": -77.3411,
    "mapCity": "Reston, Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5802341927": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5804143319": {
    "lat": 39.76838,
    "lng": -86.15804,
    "mapCity": "Indianapolis, Indiana, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5804213930": {
    "lat": 41.66121,
    "lng": -72.77954,
    "mapCity": "New Britain, Connecticut, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2091068": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091069": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-1919266": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-1919265": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5803946968": {
    "lat": 41.02649,
    "lng": -73.62846,
    "mapCity": "Greenwich, Connecticut, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5803946924": {
    "lat": 25.77427,
    "lng": -80.19366,
    "mapCity": "Miami, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5803946957": {
    "lat": 29.76328,
    "lng": -95.36327,
    "mapCity": "Houston, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5802147732": {
    "lat": 53.33306,
    "lng": -6.24889,
    "mapCity": "Dublin, Leinster, Ireland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5802186942": {
    "lat": 53.33306,
    "lng": -6.24889,
    "mapCity": "Dublin, Leinster, Ireland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5801527258": {
    "lat": 38.89511,
    "lng": -77.03637,
    "mapCity": "Washington D.C., District of Columbia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5801527320": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5801136002": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091067": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2069746": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5798566314": {
    "lat": 34.87762,
    "lng": -82.35734,
    "mapCity": "Liberty Park, South Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5799039636": {
    "lat": 41.85003,
    "lng": -87.65005,
    "mapCity": "Chicago, Illinois, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5798446252": {
    "lat": 43.6135,
    "lng": -116.20345,
    "mapCity": "Boise, Idaho, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5797887331": {
    "lat": 47.65966,
    "lng": -117.42908,
    "mapCity": "Spokane, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5797820478": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5797744764": {
    "lat": 47.60621,
    "lng": -122.33207,
    "mapCity": "Seattle, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2091062": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090989": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5797552148": {
    "lat": 53.33306,
    "lng": -6.24889,
    "mapCity": "Dublin, Leinster, Ireland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-1680495": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "month-5796286144": {
    "lat": 38.41925,
    "lng": -82.44515,
    "mapCity": "Huntington, West Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5795144909": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5795018584": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091048": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091052": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091053": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091051": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091057": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091054": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091056": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091049": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091059": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091050": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091058": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091055": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5792103925": {
    "lat": 34.98814,
    "lng": -92.58433,
    "mapCity": "Lollie, Arkansas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2090949": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remotive-2086540": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091047": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091045": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5790229960": {
    "lat": 53.33306,
    "lng": -6.24889,
    "mapCity": "Dublin, Leinster, Ireland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-1185979": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "month-5788690684": {
    "lat": 35.82348,
    "lng": -78.82556,
    "mapCity": "Morrisville, North Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788557421": {
    "lat": 32.71571,
    "lng": -117.16472,
    "mapCity": "San Diego, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788557401": {
    "lat": 39.18554,
    "lng": 27.60945,
    "mapCity": "Soma, Manisa, Republic of Türkiye",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788557409": {
    "lat": 37.28717,
    "lng": -121.94996,
    "mapCity": "Campbell, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788557402": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5786562523": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5786587799": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5787467418": {
    "lat": 41.9659,
    "lng": -87.65262,
    "mapCity": "Uptown, Illinois, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-1749306": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090986": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090942": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "month-5784562995": {
    "lat": 41.63892,
    "lng": -87.60727,
    "mapCity": "Dolton, Illinois, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5783304074": {
    "lat": 53.33306,
    "lng": -6.24889,
    "mapCity": "Dublin, Leinster, Ireland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5782888199": {
    "lat": 38.96872,
    "lng": -77.3411,
    "mapCity": "Reston, Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2090985": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090903": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091039": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5778301127": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2091038": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5775469924": {
    "lat": 34.02112,
    "lng": -118.39647,
    "mapCity": "Culver City, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2091035": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090984": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ily5u3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10vlsxk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-g4dax6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i6igvr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1tmb449": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fxaqyz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13obeka": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i4lzi6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19zmgay": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qwzn4w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xliabp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1jri0wx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dlkkxb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wm90lq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ir7o88": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-77xe31": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-glvyla": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1he3ryn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1svslwg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15oycd0": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-ro0eqn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dh42pj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1l2s9mh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-f6tw2i": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1427254": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-x19av8": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-uqh94f": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1kihkvq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-frr23s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-f7vtc0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1oc5jwt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2ylokm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1w3h9nm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xaxf6b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16ign47": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11wcca9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rhaa1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-s1djjp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gzn4d2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dck4aw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ij0lh2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6l01aa": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19276zq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2bbyx7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-saoujh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ceet0c": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6epfl7": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1llt4ha": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-w48yvm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11nx71n": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n7wogr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hf2688": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-pyce0x": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1j0wlr4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fqx4cu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1s77rvr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xdsh0q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-40z5a8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1e3od6o": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-aq26xw": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1635825": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ltqter": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1llgg99": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-3d55ym": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ts679b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ek7qx6": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1nor8r6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8i3369": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-xm4aie": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1e4rf6s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ca5a6r": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11kq0f8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hcxnj3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ym5kiv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1a94hs7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1p1aks8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-oxy0ig": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-892796": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-158b4xk": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-4x6uk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1eq4udf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-7qlvpi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-p2u492": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u2o2ji": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1efqj53": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-17uuzk9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10i5kay": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149612": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149622": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147795": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149598": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149599": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149614": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149609": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149625": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149610": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149624": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "jobicy-149616": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149589": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149623": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149621": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149615": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149611": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149607": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149602": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149592": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149584": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149586": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149594": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149591": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149620": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149590": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149605": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149601": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149596": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149593": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149585": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-148939": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149617": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149618": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149604": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149603": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149595": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149600": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149588": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149619": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149608": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149613": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149597": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1y12lqt": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1i2tr5h": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1er4cu6": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-15vcjyz": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1gcpqq4": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-5fbn39": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kimzf3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1q95mlc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1jj7m2g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-i86ue7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-199frxs": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-pu1bs9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-4nunkm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13pljss": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n928t7": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-11r2c88": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-yyahoo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1y2ogn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hkxwuv": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-3zl975": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-q3c0ww": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18aia30": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n7bqei": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kln789": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8co2hy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-croqdf": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ceoigf": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1x0b8us": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xcok2j": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wrhjya": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-4wmazd": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18ourq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-sdg8sw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1flg9d7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xkbcod": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19silsk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gkkyds": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-82jb25": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10k62uq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14ren4s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-12jo56b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-yvvnlt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gqkv6b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14pm0er": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hzr2wl": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1fr9i0o": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bdz0ts": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hx878z": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-3k3sch": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u7c1i9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1mqo8nh": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1k74hva": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1lmcqn7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1jadsqf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dq3fi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bdgcyx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1kmfyo3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xg15d1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yybq33": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u82qxz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-er0rqo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-v5o8vn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ikq4ot": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-17pybuo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vimoma": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19jep11": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-s14h2t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19435ql": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bfp3so": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-35wmb8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6t6m2c": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ayvquv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-p5e4wa": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-iffr07": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-if8a2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18mkw2r": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15nrrzy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18aw9e8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-jniym1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j9ykmr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1rzbh8v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1sl93bv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zy7bn0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14xycrv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kq9gih": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ipsvb5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-exh5gf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13s0otg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1d4luo7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j4bqo6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11vxtpb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-oyalea": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-h8zyu7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-plfiy0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n6rkwx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10v1y5d": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8rfv3c": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wi1g0u": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fchwpo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zlp5ss": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1s095yj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1wduar5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10fp5v6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8prj4g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-e8rdt6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-58tegi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-tyd0c6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cuyzlc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n8wsyg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j9y9s0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dome5e": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1eq927w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1j2edgc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-3briwa": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-118yi02": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i4bc8w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16f63cs": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-9c15k": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-onogig": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-sqnci5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-55tdea": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11omqum": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-3qjnw4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1wdz1zr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1e1ygyt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-y6bc0i": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-187njn3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gon3g7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1v64yc7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1x7q2fo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hn4fsl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xmn73": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-d0hm79": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ir9lzs": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dxy7w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-i8jyc7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-sic5ue": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gfs3p1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-9ywa0h": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-too18x": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qh4tdu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vfnn2c": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hcolo8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1inrya9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1w5kcxv": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vc6hrx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cgit69": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-q12vmc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1blvbb1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1eec37b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1342may": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-l4i4nz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1s87sd7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-182vij3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1rzqnlm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-180a2re": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-b8f79v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i4xjuv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mjwh2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i90yx8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-q943ok": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vtr11v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11gxxlu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vop3wv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gg4xmk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-md7sva": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-voohfo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1opeb85": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-28u637": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dsb7ir": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j77wh7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-uv5hby": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gxdpp1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2c0lrd": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-nt0rl3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dhhjh4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ssz3m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-57y78": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gsa53e": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11zch0v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-119ch47": {
    "lat": 28.13755,
    "lng": -15.58454,
    "mapCity": "Cabo Verde, Canary Islands, Spain",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-pt5v79": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kriq4t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-jmnsn1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13mvfk1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ny8k4g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fd9ew0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11jw5ew": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-uclbni": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-scauvx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1d54y1b": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hf37pc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-o9f75p": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1juykew": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1l8j7f": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fp0ieh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-187wd31": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u48fni": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gdfgl2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-tbszpe": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ujgnff": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1iatizz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11g5lti": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16tsfy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1thss63": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fpqz8s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j5kljx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1v305dw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1brazx7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1c7375c": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zjxox7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ft5ip0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1t1r5pk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-91atu9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-eg6tw8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-daczui": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hg9mum": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j9p6i9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1306snf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1m6rjzu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1a730gb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11ryihu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-u67ter": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-a1huxn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-183l6l": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fujw6f": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15l5si": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-r9a2ng": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1x5vdo6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-lehmiu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rkst6g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1aq0fhg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vlbsud": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-a2bkz4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19vu03x": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qitduo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1nsba0g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cjcfte": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1plevbw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-137tiuv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ft9n6a": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dhww18": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2rlfud": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qtlsnq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-5akpmd": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-anz56i": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n8yvh": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-fgw315": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-q2numm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qvdmb5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vqfrtp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-re0dey": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1584k1d": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1khnm8t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ztuwb7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1tjefyu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-c88y1s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1rstc4n": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-brceey": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1t36n27": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-583mee": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-99zspr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1uo5fw4": {
    "lat": 37.77493,
    "lng": -122.41942,
    "mapCity": "San Francisco, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "himalayas-1nu99wk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mpqf74": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-7vh0yn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qeb2ue": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-p5ao9r": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-i7apic": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13lfb01": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hmszcj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1svmrvq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-17tj7f3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-u4iv1w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1lb7pdx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6hmnq9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1id41y8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-spusgf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yrqel8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1km97v6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ryjmyu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qz8c8g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-44vwxj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1iahq5h": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-z2byao": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1t61nzu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fjvp5a": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bsnd9d": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kp6jx7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-pokugn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gmcwnq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18tuvgn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i5gp70": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-4fe3wb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-sr5uj7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18zgbd": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hyqaj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bbcr8d": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hjwoda": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hlj9wr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-n8uxkz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6ct3d2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wh9aiv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qrafdw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6tv2eg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hr895w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fx88so": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gp2yrg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-z2xkqx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i959po": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qqra2r": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-k5cpgl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-e49ps7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xftzce": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-l56mnx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1stxluy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-h4ow2m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wrz90g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-142747": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149577": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149576": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149581": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149580": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149579": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145556": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149578": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-13ptaus": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-156qzm0": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-w2l9yu": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1uojio5": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-196nphm": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  }
};
  (window.WORK_JOBS || []).forEach((job) => { if (locations[job.id]) Object.assign(job, locations[job.id]); });
  if (window.WORK_DATA_META) {
    window.WORK_DATA_META.cityPointTotal = window.WORK_JOBS.filter((job) => job.mapPrecision === "city").length;
    window.WORK_DATA_META.headquartersPointTotal = window.WORK_JOBS.filter((job) => job.mapBasis === "company-hq").length;
    window.WORK_DATA_META.locationRule = "城市点只表示职位明确城市或可核实的公司总部；国家、地区与全球远程岗位不伪造城市坐标。";
  }
})();
