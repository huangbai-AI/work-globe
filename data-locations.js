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
  "arbeitnow-artist-manager-influencer-manager-mulheim-246750": {
    "lat": 51.43218,
    "lng": 6.87967,
    "mapCity": "Mülheim, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-artist-manager-influencer-manager-berlin-301597": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-backend-developer-php-postgresql-hamburg-472726": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-datenerfassungsmitarbeiter-burgbernheim-59279": {
    "lat": 49.45103,
    "lng": 10.32385,
    "mapCity": "Burgbernheim, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-finance-managerin-berlin-135145": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-artist-manager-influencer-manager-berlin-394739": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-artist-manager-influencer-manager-mulheim-383590": {
    "lat": 51.43218,
    "lng": 6.87967,
    "mapCity": "Mülheim, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-linkedin-gtm-consultant-berlin-296412": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-backend-developer-php-postgresql-hamburg-193730": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-full-stack-python-engineer-network-planning-berlin-414270": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-it-auditor-it-revisor-berlin-379588": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-product-management-lead-munich-12266": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-seo-aeo-geo-llm-b2b-saas-rosenheim-241606": {
    "lat": 47.85637,
    "lng": 12.12247,
    "mapCity": "Rosenheim, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5805731632": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5805827751": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-steuerberater-in-dulmen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-325384": {
    "lat": 51.83149,
    "lng": 7.28075,
    "mapCity": "Dülmen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-erkrath-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-146623": {
    "lat": 51.22235,
    "lng": 6.90831,
    "mapCity": "Erkrath, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-friedberg-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-22057": {
    "lat": 50.33739,
    "lng": 8.75591,
    "mapCity": "Friedberg, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-murr-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-122418": {
    "lat": 48.96207,
    "lng": 9.25924,
    "mapCity": "Murr, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-oberstdorf-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-27413": {
    "lat": 47.40724,
    "lng": 10.27939,
    "mapCity": "Oberstdorf, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-oettingen-in-bayern-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-496800": {
    "lat": 48.95274,
    "lng": 10.60465,
    "mapCity": "Oettingen in Bayern, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-ruppach-goldhausen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-386791": {
    "lat": 50.46667,
    "lng": 7.88333,
    "mapCity": "Ruppach-Goldhausen, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-stockheim-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-213193": {
    "lat": 51.02326,
    "lng": 5.74499,
    "mapCity": "Stokkem, Flanders, Belgium",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-trainee-artist-manager-influencer-manager-mulheim-95673": {
    "lat": 51.43218,
    "lng": 6.87967,
    "mapCity": "Mülheim, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-trainee-artist-manager-influencer-manager-berlin-45330": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-social-media-essen-5152": {
    "lat": 51.45657,
    "lng": 7.01228,
    "mapCity": "Essen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-business-intelligence-analyst-all-genders-berlin-62137": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-cro-conversion-activation-manager-app-frankfurt-am-main-178499": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-finance-managerin-frankfurt-am-main-34189": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-full-stack-java-entwickler-munich-45701": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-seniorservice-manager-mobilfunk-b2b-key-account-energiewirtschaft-cologne-55460": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134981": {
    "lat": -35.11986,
    "lng": 139.27345,
    "mapCity": "Murray Bridge, South Australia, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-3d-artist-blender-realtime-anwendungen-munich-331526": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-absolvent-bwl-vwl-wirtschaftsingenieur-als-einstieg-in-die-beratung-vollzeit-kempten-allgau-329255": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-abteilungsleiter-department-manager-hamburg-427990": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-accounting-finance-manager-berlin-187622": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134958": {
    "lat": -34.92866,
    "lng": 138.59863,
    "mapCity": "Adelaide, South Australia, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134962": {
    "lat": -6.21462,
    "lng": 106.84513,
    "mapCity": "Jakarta, Jakarta Special Capital Region, Indonesia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134973": {
    "lat": 37.38283,
    "lng": -5.97317,
    "mapCity": "Seville, Andalusia, Spain",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134943": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-ai-engineer-llm-rag-agentic-systems-stuttgart-126679": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134941": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-anlagenbuchhalter-assetmanagement-munich-423616": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-assistant-store-manager-munich-403243": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-assistant-to-the-director-project-coordinator-all-genders-berlin-13693": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-auftragskoordinator-produktionsplanung-munich-58335": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-automatisierungs-ki-entwickler-dingolfing-229637": {
    "lat": 48.64244,
    "lng": 12.49283,
    "mapCity": "Dingolfing, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bachelorarbeit-ki-gestutzte-automatisierung-des-datenimports-im-data-warehouse-heidelberg-199638": {
    "lat": 49.40768,
    "lng": 8.69079,
    "mapCity": "Heidelberg, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bauingenieur-projektmanagement-minden-366079": {
    "lat": 32.61543,
    "lng": -93.28684,
    "mapCity": "Minden, Louisiana, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-berechnungsingenieur-strukturanalyse-munich-151441": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bereichsleiter-tga-und-hotel-technik-100000-140000-eur-hanover-409338": {
    "lat": 52.37052,
    "lng": 9.73322,
    "mapCity": "Hanover, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bilanzbuchhalter-wiesbaden-346978": {
    "lat": 50.08601,
    "lng": 8.24435,
    "mapCity": "Wiesbaden, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bilanzbuchhalter-bremen-280596": {
    "lat": 53.07582,
    "lng": 8.80717,
    "mapCity": "Bremen, Free Hanseatic City of Bremen, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bilanzbuchhalterin-senior-finanzbuchhalterin-velbert-456733": {
    "lat": 51.33537,
    "lng": 7.04348,
    "mapCity": "Velbert, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-business-development-manager-suddeutschland-bochum-361394": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-business-process-consultant-plm-windchill-eschborn-49603": {
    "lat": 50.14328,
    "lng": 8.57111,
    "mapCity": "Eschborn, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-change-oe-consultant-fuhrung-digitale-transformation-frankfurt-am-main-311190": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-computer-vision-engineer-dingolfing-418034": {
    "lat": 48.64244,
    "lng": 12.49283,
    "mapCity": "Dingolfing, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134953": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-controller-riskmanagement-im-bankenwesen-frankfurt-am-main-258746": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-controller-im-offentlichen-dienst-munich-180962": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-coo-geschaftsfuhrerin-mit-operations-scaling-verantwortung-munich-114712": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134945": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-cyber-security-engineer-nordlingen-54128": {
    "lat": 48.85122,
    "lng": 10.48868,
    "mapCity": "Nördlingen, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-data-engineer-berlin-466297": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-data-engineer-munich-309780": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-debitorenbuchhalter-mit-schwerpunkt-e-commerce-dusseldorf-10502": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134970": {
    "lat": 30.32443,
    "lng": 78.03392,
    "mapCity": "Dehradun, Uttarakhand, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134989": {
    "lat": 38.58157,
    "lng": -121.4944,
    "mapCity": "Sacramento, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-elektroniker-fur-automatisierungstechnik-hamburg-274233": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-embedded-rust-engineer-hamburg-461582": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-engineering-lead-part-time-berlin-243330": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-entwicklungsingenieur-nachhaltige-kunststoffe-verfahrenstechnik-schwerte-148057": {
    "lat": 51.44387,
    "lng": 7.5675,
    "mapCity": "Schwerte, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-eu-freelancer-inbound-kundenservice-100-homeoffice-hamburg-83254": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-family-office-manager-finance-administration-munich-490706": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-filialleiter-store-manager-reserved-store-bremen-365029": {
    "lat": 53.07582,
    "lng": 8.80717,
    "mapCity": "Bremen, Free Hanseatic City of Bremen, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-finance-controlling-manager-frankfurt-am-main-342322": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founders-associate-munchen-316388": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-frontend-developer-intern-unpaid-puchheim-124552": {
    "lat": 48.15,
    "lng": 11.35,
    "mapCity": "Puchheim, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-growth-manager-berlin-440966": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-haustechniker-gebaudemanagement-munich-108488": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-haustechniker-gebaudetechnik-munich-197299": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-head-of-marketing-inbound-sales-munich-433256": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-hr-office-coordinator-in-teilzeit-standort-bienenbuttel-11425": {
    "lat": 53.14157,
    "lng": 10.48679,
    "mapCity": "Bienenbüttel, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-implementierungsmanager-gn-projektmanager-gn-frankfurt-am-main-394003": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-implementierungsmanager-gn-projektmanager-gn-berlin-416680": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-internship-in-operations-all-genders-berlin-436873": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ios-engineer-mobile-platform-cologne-93296": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-projektmanager-software-implementierung-munich-314900": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-projektmanager-softwareentwicklung-munich-172309": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-support-specialist-2nd-level-munich-457666": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-system-engineer-bochum-249725": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemadministrator-local-it-administrator-marl-231393": {
    "lat": 51.65671,
    "lng": 7.09038,
    "mapCity": "Marl, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemadministrator-mitarbeiter-it-support-in-teilzeit-20-25-std-dormagen-43199": {
    "lat": 51.09683,
    "lng": 6.83167,
    "mapCity": "Dormagen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemadministrator-stellvertretende-it-fachbereichsleitung-gelsenkirchen-330362": {
    "lat": 51.50508,
    "lng": 7.09654,
    "mapCity": "Gelsenkirchen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemelektroniker-bochum-307468": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-creative-school-of-ideas-hamburg-182849": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-fullstack-engineer-festanstellung-vollzeit-munchen-munich-18468": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-google-performance-analytics-manager-stuttgart-125959": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-marketing-communications-manager-schwerpunkt-content-social-media-pr-berlin-181564": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kaufmannischer-mitarbeiter-im-finanz-und-rechnungswesen-berlin-200224": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-key-account-success-manager-hamburg-294282": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ki-manager-ihk-weiterbildung-100-remote-berlin-138908": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-konfigurationsmanager-produktkoordinator-munich-236869": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kreditorenbuchhalter-sap-munich-3039": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kreditsachbearbeiter-munich-457889": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kundenberater-private-banking-munich-448573": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kundenbetreuer-immobilienverwaltung-munich-52495": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kundendienst-techniker-servicetechniker-im-aussendienst-pfungstadt-468211": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-lead-test-manager-dusseldorf-313277": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-leadership-trainerin-fuhrung-digitale-transformation-frankfurt-am-main-701": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-machine-learning-engineer-stuttgart-412768": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134960": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-managing-director-finance-solutions-stuttgart-102108": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-marketing-manager-b2b-berlin-96308": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-marketingkoordinator-dach-willich-237055": {
    "lat": 51.26371,
    "lng": 6.54734,
    "mapCity": "Willich, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mediengestalterin-digital-print-kleve-107863": {
    "lat": 51.78826,
    "lng": 6.13865,
    "mapCity": "Kleve, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mitarbeiter-fur-montagearbeiten-gebaudeautomation-und-sicherheitstechnik-oberhausen-180224": {
    "lat": 51.47805,
    "lng": 6.8625,
    "mapCity": "Oberhausen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mitarbeiter-qualitatssicherung-vollzeit-kempten-allgau-230002": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134987": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134940": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-niederlassungsleiter-heidelberg-406254": {
    "lat": 49.40768,
    "lng": 8.69079,
    "mapCity": "Heidelberg, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-niederlassungsleiter-medizinische-anu-in-arnstadt-288095": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-niederlassungsleiter-gn-branch-manager-gn-neuss-72734": {
    "lat": 51.19807,
    "lng": 6.68504,
    "mapCity": "Neuss, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-niederlassungsleitung-gn-fur-die-bereiche-medizin-pflege-saarbrucken-24487": {
    "lat": 49.23262,
    "lng": 7.00982,
    "mapCity": "Saarbrücken, Saarland, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-objektverwalter-facility-management-munich-387184": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-online-marketing-manager-paid-content-leipzig-247117": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-online-marketing-manager-stuttgart-380688": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-online-marketing-manager-e-commerce-anklam-317141": {
    "lat": 53.85637,
    "lng": 13.68965,
    "mapCity": "Anklam, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-operations-client-manager-mit-perspektive-auf-teamleitung-cologne-175326": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-performance-marketing-manager-leipzig-262734": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personaldisponent-gn-vertriebsdisponent-gn-solingen-130206": {
    "lat": 51.17343,
    "lng": 7.0845,
    "mapCity": "Solingen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personaldisponent-gn-vertriebsdisponent-gn-oberhausen-120147": {
    "lat": 51.47805,
    "lng": 6.8625,
    "mapCity": "Oberhausen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personaldisponent-gn-vertriebsdisponent-gn-grossbeeren-389534": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-personaldisponent-onsite-manager-gn-gerne-mit-polnisch-oder-rumanischkenntnissen-hamburg-329385": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalreferent-munich-106415": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalreferent-hr-administration-arbeitnehmeruberlassung-munich-160443": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalreferent-personalentwicklung-ausbildung-munich-123833": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalsachbearbeiter-miwid-essen-349440": {
    "lat": 51.45657,
    "lng": 7.01228,
    "mapCity": "Essen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-pflichtpraktikant-business-development-hr-office-management-berlin-262856": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-pflichtpraktikum-im-bereich-grafikdesign-stuttgart-52001": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-pflichtpraktikum-online-marketing-manager-stuttgart-240723": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-pr-talent-pool-junior-bis-senior-berlin-remote-367410": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-praktikant-masterand-ai-automation-internal-operations-leipzig-157607": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-pressesprecher-im-ehrenamt-homeoffice-berlin-418766": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-principal-corporate-law-corporate-financing-berlin-406201": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-principal-machine-learning-engineer-hamburg-429549": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-privatkundenberater-in-hoya-339596": {
    "lat": 52.80856,
    "lng": 9.14043,
    "mapCity": "Hoya, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-product-manager-bess-pcs-munich-395576": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
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
  "arbeitnow-product-owner-berlin-287693": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-product-owner-app-manager-reken-66367": {
    "lat": 51.83042,
    "lng": 7.04544,
    "mapCity": "Groß Reken, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-produktionsarbeiterin-berlin-104469": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-produktionsplaner-prozesskoordinator-solingen-306130": {
    "lat": 51.17343,
    "lng": 7.0845,
    "mapCity": "Solingen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-project-manager-controls-furth-301550": {
    "lat": 49.47593,
    "lng": 10.98856,
    "mapCity": "Fürth, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektcontroller-munich-10436": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektkoordinatorin-werbetechnik-kundenberatung-auftragsabwicklung-tuntenhausen-223214": {
    "lat": 47.93509,
    "lng": 12.01518,
    "mapCity": "Tuntenhausen, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektleiter-simulationssysteme-munich-138321": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektleiter-technisches-gebaudemanagement-dresden-348404": {
    "lat": 51.05089,
    "lng": 13.73832,
    "mapCity": "Dresden, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanager-im-online-marketing-in-berlin-440171": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanager-prozessoptimierung-munich-382637": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanager-vertragsmanagement-munich-274986": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanagerin-anlagenbau-dresden-411017": {
    "lat": 51.05089,
    "lng": 13.73832,
    "mapCity": "Dresden, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-promoter-handelspartner-100-remote-stuttgart-259558": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-prozessingenieur-dosier-und-wasseraufbereitungstechnik-wurzburg-418805": {
    "lat": 49.79391,
    "lng": 9.95121,
    "mapCity": "Würzburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-purchase-manager-einkaufsleiter-mit-erfahrung-berlin-387656": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-recruiter-grossenhain-18501": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-sachbearbeiter-controlling-und-finanzen-munich-307839": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sachbearbeiter-customer-service-und-kundenbetreuung-munich-6690": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sachbearbeiter-finanzen-verwaltungsfachkraft-munich-463334": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sachbearbeiter-logistik-materialdisposition-munich-382781": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sap-inhouse-consultant-business-partner-munich-381695": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sap-sd-consultant-mannheim-397703": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sap-wm-ewm-consultant-cologne-351922": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sea-manager-im-online-marketing-in-berlin-61874": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134967": {
    "lat": 30.73629,
    "lng": 76.7884,
    "mapCity": "Chandigarh, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-security-architect-specialist-stuttgart-271167": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-account-manager-berlin-80895": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-accountant-bilanzbuchhalter-augsburg-227510": {
    "lat": 48.37154,
    "lng": 10.89851,
    "mapCity": "Augsburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-azure-cloud-platform-architect-nuremberg-340896": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-backend-engineer-typescript-nestjs-nodejs-munich-81636": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-backend-engineer-typescript-nestjs-nodejs-berlin-317808": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-crm-manager-hamburg-108782": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-full-stack-engineer-hybrid-munich-5678": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-google-performance-analytics-manager-stuttgart-92499": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-international-marketing-manager-nordics-berlin-77176": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-it-administrator-bochum-287050": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-it-administrator-in-der-workplace-verwaltung-ehingen-206068": {
    "lat": 48.28259,
    "lng": 9.72749,
    "mapCity": "Ehingen, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-marketing-manager-berlin-mitte-59057": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-microsoft-ai-copilot-engineer-nuremberg-244482": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-microsoft-cloud-transformation-architect-nuremberg-195639": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-php-software-engineer-berlin-407683": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134961": {
    "lat": 37.48522,
    "lng": -122.23635,
    "mapCity": "Redwood City, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-product-marketing-manager-hamburg-156764": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-sales-consultant-vollzeit-german-speaking-munchen-12821": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-sales-engineer-in-munchen-berlin-munich-93074": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-sap-btp-developer-munich-141741": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-ruby-on-rails-100-remote-willich-63518": {
    "lat": 51.26371,
    "lng": 6.54734,
    "mapCity": "Willich, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-seo-marketing-manager-munich-14970": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-service-desk-spezialist-onsite-in-koln-cologne-37436": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-site-integration-tester-furth-227811": {
    "lat": 49.47593,
    "lng": 10.98856,
    "mapCity": "Fürth, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-soc-consultant-security-operations-center-berlin-347681": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-social-creative-hamburg-143648": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-social-media-werkstudent-munich-91568": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-social-media-strategy-manager-berlin-113855": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-software-test-engineer-sichere-kommunikation-stuttgart-208650": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-softwareentwickler-c-qt-munich-70638": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-solution-engineer-erp-saas-stuttgart-59102": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-aach-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-192764": {
    "lat": 49.78333,
    "lng": 6.6,
    "mapCity": "Aach, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-blaustein-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-374961": {
    "lat": 48.41658,
    "lng": 9.91744,
    "mapCity": "Blaustein, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-grossraschen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-314720": {
    "lat": 51.5876,
    "lng": 14.01093,
    "mapCity": "Großräschen, Brandenburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-hassmersheim-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-34254": {
    "lat": 49.3,
    "lng": 9.15,
    "mapCity": "Haßmersheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-weil-der-stadt-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-448791": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-steuerberater-in-wernigerode-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-347291": {
    "lat": 51.83652,
    "lng": 10.78216,
    "mapCity": "Wernigerode, Saxony-Anhalt, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-wittenberge-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-412777": {
    "lat": 53.00005,
    "lng": 11.74944,
    "mapCity": "Wittenberge, Brandenburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-wolken-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-332369": {
    "lat": 50.33333,
    "lng": 7.46667,
    "mapCity": "Wolken, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellte-oder-entgeltabrechnerin-plus-homeoffice-option-stuttgart-98562": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-strategischer-projektentwickler-erfurt-115326": {
    "lat": 50.97734,
    "lng": 11.03536,
    "mapCity": "Erfurt, Thuringia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134959": {
    "lat": -33.86785,
    "lng": 151.20732,
    "mapCity": "Sydney, New South Wales, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-systemadministrator-munich-443121": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-teaching-assistant-vibe-coding-cologne-140768": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-team-lead-accounting-bochum-409158": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-teamlead-online-marketing-e-commerce-anklam-379522": {
    "lat": 53.85637,
    "lng": 13.68965,
    "mapCity": "Anklam, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-teamleiter-facility-management-gebaudeservice-leipzig-53654": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technical-account-manager-b2b-m2m-mobilfunk-cologne-481605": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technical-account-manager-b2b-mcptt-mobilfunk-cologne-10367": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-techniker-systemintegration-mechatronik-munich-54136": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technische-qualitatskontrolle-berlin-461254": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technischer-objektverwalter-stuttgart-170385": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technischer-projektmanager-software-integrationen-munich-172806": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technischer-property-manager-munich-62236": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technischer-sachbearbeiter-disposition-wangen-im-allgau-51408": {
    "lat": 47.6895,
    "lng": 9.83247,
    "mapCity": "Wangen, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-tiktok-social-commerce-lead-stuttgart-124805": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-traumpraktikum-mit-perspektive-werde-fachinformatiker-fur-anwendungsentwicklung-bei-uns-in-berlin-335643": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ui-ux-designer-intern-unpaid-puchheim-330030": {
    "lat": 48.15,
    "lng": 11.35,
    "mapCity": "Puchheim, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-vergabemanager-offentliche-ausschreibung-munich-431947": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-vertriebscontroller-im-bankenumfeld-munich-8344": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-vertriebsdisponent-gn-personalmanager-gn-im-bereich-medizin-pflege-berlin-160376": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-verwaltungsfachwirt-sachbearbeiter-finanzwesen-munich-46123": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-all-genders-controlling-munich-462448": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-all-genders-controlling-berlin-55266": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-all-genders-finance-munich-394155": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-finance-beratung-unternehmerisch-leistungsbasiert-hamburg-86695": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-informatik-wirtschaftsinformatik-schweinfurt-89115": {
    "lat": 50.04937,
    "lng": 10.22175,
    "mapCity": "Schweinfurt, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-e-mail-marketing-crm-manager-munich-12036": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-marketing-communications-bonn-239767": {
    "lat": 50.73438,
    "lng": 7.09549,
    "mapCity": "Bonn, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-office-managerin-berlin-24669": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-projektmanagement-pulsnitz-483868": {
    "lat": 51.1832,
    "lng": 14.01416,
    "mapCity": "Pulsnitz, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-cfo-office-berlin-99479": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-film-festival-operations-remote-berlin-457853": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-office-feelgood-management-berlin-224417": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-performance-marketing-all-genders-mannheim-221828": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-in-finanzbuchhaltung-schwerpunkt-forderungsmanagement-bochum-308324": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-in-in-der-telefonischen-immobilienberatung-20-stunden-woche-bochum-229837": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-in-supply-chain-coordination-and-support-wurzburg-229461": {
    "lat": 49.79391,
    "lng": 9.95121,
    "mapCity": "Würzburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-wirtschaftsinformatiker-it-projektmanager-vollzeit-mwd-lohr-am-main-147750": {
    "lat": 49.98922,
    "lng": 9.57223,
    "mapCity": "Lohr a. Main, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-texterin-teilzeit-munchen-390017": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-growth-consultant-all-genders-berlin-261036": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-it-systems-engineer-backup-storage-nuremberg-243806": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-key-account-manager-hamburg-252099": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-performance-manager-sea-in-munchen-oder-remote-deutschlandweit-munich-377012": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-product-manager-procurement-portfolio-management-berlin-393507": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-python-entwickler-stuttgart-293615": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-research-consultant-frankfurt-am-main-348792": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-sea-consultant-all-genders-berlin-64472": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-05-marketing-manager-pullach-182128": {
    "lat": 48.06122,
    "lng": 11.52148,
    "mapCity": "Pullach im Isartal, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-accountant-in-vollzeit-dusseldorf-185583": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134930": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-ai-devops-engineer-automation-builder-munich-416030": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ai-driven-content-creator-e-commerce-brand-designer-hamburg-355704": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
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
  "arbeitnow-anzeigenverkauf-fur-verantwortlichen-journalismus-bochum-333262": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5802341927": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-art-directorin-munchen-495415": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134942": {
    "lat": -12.04318,
    "lng": -77.02824,
    "mapCity": "Lima, Lima Province, Peru",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bauleiter-windparkbau-frankfurt-am-main-147100": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bauleiter-windparkbau-freiburg-im-breisgau-204584": {
    "lat": 47.9959,
    "lng": 7.85222,
    "mapCity": "Freiburg im Breisgau, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bauleiter-windparkbau-aschersleben-274615": {
    "lat": 51.75742,
    "lng": 11.46084,
    "mapCity": "Aschersleben, Saxony-Anhalt, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-beratender-senior-java-entwickler-stuttgart-496398": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bereichsleiter-tga-und-hotel-technik-100000-140000-eur-bielefeld-294530": {
    "lat": 52.03333,
    "lng": 8.53333,
    "mapCity": "Bielefeld, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bezahltes-pflichtpraktikum-customer-support-im-tierversicherung-startup-100-homeoffice-berlin-213322": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bilanzbuchhalter-bremen-417561": {
    "lat": 53.07582,
    "lng": 8.80717,
    "mapCity": "Bremen, Free Hanseatic City of Bremen, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bilanzbuchhalter-senior-accountant-cologne-54006": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-blanzbuchhalter-bexbach-6763": {
    "lat": 49.34615,
    "lng": 7.25527,
    "mapCity": "Bexbach, Saarland, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134966": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134951": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-consultant-business-consulting-forderbank-frankfurt-am-main-159818": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134932": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-content-producer-videoschnitt-berlin-186331": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-controller-bad-worishofen-474150": {
    "lat": 48.00674,
    "lng": 10.59666,
    "mapCity": "Bad Wörishofen, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-controller-sommerda-376877": {
    "lat": 51.15914,
    "lng": 11.11524,
    "mapCity": "Sömmerda, Thuringia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134947": {
    "lat": 25.05823,
    "lng": -77.34306,
    "mapCity": "Nassau, New Providence, Bahamas",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134897": {
    "lat": 40.44062,
    "lng": -79.99589,
    "mapCity": "Pittsburgh, Pennsylvania, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134990": {
    "lat": 34.05223,
    "lng": -118.24368,
    "mapCity": "Los Angeles, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-customer-success-manager-europe-remote-berlin-414783": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134892": {
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
  "remoteok-1134954": {
    "lat": 33.15067,
    "lng": -96.82361,
    "mapCity": "Frisco, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-digital-designer-fur-sportcontent-dortmund-183566": {
    "lat": 51.51494,
    "lng": 7.466,
    "mapCity": "Dortmund, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134952": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5804213930": {
    "lat": 41.66121,
    "lng": -72.77954,
    "mapCity": "New Britain, Connecticut, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134997": {
    "lat": -12.13588,
    "lng": -77.00742,
    "mapCity": "Santiago de Surco, Lima region, Peru",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134946": {
    "lat": 43.15478,
    "lng": -77.61556,
    "mapCity": "Rochester, New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-engineer-applied-ai-engineering-full-stack-berlin-339455": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134919": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-enterprise-account-executive-munich-197606": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-esg-manager-everyone-is-welcome-berlin-261094": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134977": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134950": {
    "lat": 23.5,
    "lng": -75.76667,
    "mapCity": "Exuma Harbour Estates, Exuma, Bahamas",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-fachassistent-digitalisierung-und-it-prozesse-35000-60000-eur-jahresgehalt-altdorf-296850": {
    "lat": 46.88042,
    "lng": 8.64441,
    "mapCity": "Altdorf, Canton of Uri, Switzerland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134956": {
    "lat": 37.77493,
    "lng": -122.41942,
    "mapCity": "San Francisco, California, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134976": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founding-head-of-engineering-berlin-71649": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-full-stack-developer-schmalkalden-370081": {
    "lat": 50.72136,
    "lng": 10.44386,
    "mapCity": "Schmalkalden, Thuringia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-genai-agentic-ai-solutions-architect-all-genders-frankfurt-am-main-154233": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134925": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-growth-manager-stralsund-454462": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2091068": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-hedging-specialist-fur-kritische-rohstoffe-porta-westfalica-115683": {
    "lat": 52.22961,
    "lng": 8.91612,
    "mapCity": "Porta Westfalica, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-hil-test-engineer-gilching-483772": {
    "lat": 48.10755,
    "lng": 11.2936,
    "mapCity": "Gilching, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134900": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-internship-product-management-energy-products-tariffs-berlin-332985": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-projektleiter-honorarabrechnung-munich-449737": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-support-spezialist-windows-und-linux-munich-459493": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemadministrator-augsburg-343651": {
    "lat": 48.37154,
    "lng": 10.89851,
    "mapCity": "Augsburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemadministrator-hamburg-390104": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-crm-manager-campaigns-remote-oder-hybrid-biberach-39318": {
    "lat": 48.09345,
    "lng": 9.79053,
    "mapCity": "Biberach an der Riss, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-digital-designer-fur-social-content-oberursel-155089": {
    "lat": 50.20731,
    "lng": 8.57747,
    "mapCity": "Oberursel, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-it-systemadministrator-hamburg-484805": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134912": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134935": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134921": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-kundenberater-pflege-gesundheitsprodukte-lubeck-403179": {
    "lat": 53.86893,
    "lng": 10.68729,
    "mapCity": "Lübeck, Schleswig-Holstein, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kyc-analyst-munich-193689": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-lager-manager-berlin-218251": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-lead-engineer-service-platform-munich-393195": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-local-marketing-manager-karlsruhe-19036": {
    "lat": 49.00937,
    "lng": 8.40444,
    "mapCity": "Karlsruhe, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-lohnbuchhalter-bis-zu-65000-eur-jahresgehalt-landshut-208852": {
    "lat": 48.52961,
    "lng": 12.16179,
    "mapCity": "Landshut, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-manager-digital-growth-berlin-463073": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-marketing-working-student-hamburg-105921": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-medical-equipment-and-device-service-technician-engineer-berlin-germany-332066": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134949": {
    "lat": 47.56494,
    "lng": -52.70931,
    "mapCity": "St. John's, Newfoundland and Labrador, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mitarbeiter-kundenbetreuung-datenerfassung-teilzeit-minijob-werkstudent-straubing-461498": {
    "lat": 48.88126,
    "lng": 12.57385,
    "mapCity": "Straubing, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mitarbeiter-kundenbetreuung-datenerfassung-teilzeit-minijob-werkstudent-cham-139449": {
    "lat": 49.22565,
    "lng": 12.65501,
    "mapCity": "Cham, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mitarbeiter-kundenbetreuung-datenerfassung-teilzeit-minijob-werkstudent-amberg-421582": {
    "lat": 49.44287,
    "lng": 11.86267,
    "mapCity": "Amberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134957": {
    "lat": 38.84872,
    "lng": -76.92386,
    "mapCity": "Suitland, Maryland, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-nebenjob-ki-sprachassistent-mit-deiner-stimme-testen-remote-leipzig-322701": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-online-kundendienst-customer-service-der-smantry-app-full-remote-minijob-giengen-421570": {
    "lat": 48.62219,
    "lng": 10.24312,
    "mapCity": "Giengen an der Brenz, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-online-marketing-manager-in-vollzeit-cologne-26083": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134894": {
    "lat": 55.04514,
    "lng": -1.62246,
    "mapCity": "Wideopen, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-operations-lead-bochum-143561": {
    "lat": 51.48165,
    "lng": 7.21648,
    "mapCity": "Bochum, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-people-office-managerin-hamburg-96663": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-performance-marketing-manager-berlin-236178": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-performance-marketing-manager-emea-stuttgart-63370": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalreferent-leipzig-97873": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalsachbearbeiter-teilzeit-breitengussbach-264945": {
    "lat": 49.97209,
    "lng": 10.88591,
    "mapCity": "Breitengüßbach, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-praktikantin-social-media-video-editing-content-strategie-berlin-377255": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134948": {
    "lat": 45.52345,
    "lng": -122.67621,
    "mapCity": "Portland, Oregon, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-product-owner-sales-specialist-brunnthal-281324": {
    "lat": 48.00652,
    "lng": 11.68405,
    "mapCity": "Brunnthal, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektentwickler-fur-erneuerbare-energien-molbergen-163583": {
    "lat": 52.85805,
    "lng": 7.92548,
    "mapCity": "Molbergen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanagement-paderborn-195776": {
    "lat": 51.71905,
    "lng": 8.75439,
    "mapCity": "Paderborn, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanager-wegerecht-und-flachensicherung-erneuerbare-energien-molbergen-392091": {
    "lat": 52.85805,
    "lng": 7.92548,
    "mapCity": "Molbergen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanager-windenergie-mit-dem-schwerpunkt-genehmigungsverfahren-molbergen-281603": {
    "lat": 52.85805,
    "lng": 7.92548,
    "mapCity": "Molbergen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanager-technisches-projektmanagement-fokus-offshore-netzanbindung-molbergen-363111": {
    "lat": 52.85805,
    "lng": 7.92548,
    "mapCity": "Molbergen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektplaner-terminplaner-infrastrukturausbau-und-trassenbau-molbergen-251809": {
    "lat": 52.85805,
    "lng": 7.92548,
    "mapCity": "Molbergen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134978": {
    "lat": 51.48,
    "lng": -3.18,
    "mapCity": "Cardiff, Wales, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134898": {
    "lat": 36.21398,
    "lng": -83.29489,
    "mapCity": "Morristown, Tennessee, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134923": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134968": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-quality-control-expert-warmepumpe-berlin-355391": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-quereinsteiger-kein-abschluss-notig-ziel-bis-zu-5000-eur-im-monat-hamburg-370788": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-recruiting-specialist-all-genders-befristet-auf-14-monate-hamburg-173083": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-referentin-fur-social-media-marketing-in-teilzeit-20-25-stunden-bonn-15980": {
    "lat": 50.73438,
    "lng": 7.09549,
    "mapCity": "Bonn, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1135011": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1135012": {
    "lat": 29.76328,
    "lng": -95.36327,
    "mapCity": "Houston, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134931": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-sales-lead-hanover-356202": {
    "lat": 52.37052,
    "lng": 9.73322,
    "mapCity": "Hanover, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-consultant-omnissa-horizon-vdi-frankfurt-am-main-336781": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-full-stack-developerin-furth-107822": {
    "lat": 49.47593,
    "lng": 10.98856,
    "mapCity": "Fürth, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
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
  "arbeitnow-senior-it-operations-specialist-furth-393455": {
    "lat": 49.47593,
    "lng": 10.98856,
    "mapCity": "Fürth, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-network-security-engineer-zurich-schweiz-cisco-fortinet-munich-81674": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-product-manager-operations-martech-automation-all-genders-berlin-275551": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-sales-consultant-vollzeit-german-speaking-bad-krozingen-282770": {
    "lat": 47.91667,
    "lng": 7.7,
    "mapCity": "Bad Krozingen, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-sap-business-one-berater-cloud-migration-zukunftsarchitektur-gudow-121097": {
    "lat": 53.55556,
    "lng": 10.77021,
    "mapCity": "Gudow, Schleswig-Holstein, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-shopify-developer-michendorf-300872": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-cologne-205456": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-software-engineer-wien-hamburg-frankfurt-451553": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-ml-engineer-im-bildungsumfeld-remote-heidelberg-276710": {
    "lat": 49.40768,
    "lng": 8.69079,
    "mapCity": "Heidelberg, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-seo-specialist-revenue-architect-berlin-226487": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-seo-specialist-revenue-architect-berlin-306483": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
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
  "arbeitnow-software-engineer-full-stack-munich-319540": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-startup-scout-dealflow-manager-impact-accelerator-teilzeit-lietzow-256474": {
    "lat": 54.48171,
    "lng": 13.50718,
    "mapCity": "Lietzow, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-diessen-am-ammersee-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-456711": {
    "lat": 47.95085,
    "lng": 11.10306,
    "mapCity": "Dießen am Ammersee, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-donaueschingen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-334742": {
    "lat": 47.95514,
    "lng": 8.49707,
    "mapCity": "Donaueschingen, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-kevelaer-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-459367": {
    "lat": 51.58243,
    "lng": 6.24603,
    "mapCity": "Kevelaer, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-marbach-am-neckar-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-220382": {
    "lat": 48.93964,
    "lng": 9.25995,
    "mapCity": "Marbach am Neckar, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-nassau-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-436999": {
    "lat": 25.05823,
    "lng": -77.34306,
    "mapCity": "Nassau, New Providence, Bahamas",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-rheinbollen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-131174": {
    "lat": 50.01127,
    "lng": 7.67249,
    "mapCity": "Rheinböllen, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-schlat-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-73365": {
    "lat": 48.65321,
    "lng": 9.70625,
    "mapCity": "Schlat, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-wald-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-193584": {
    "lat": 47.27595,
    "lng": 8.91405,
    "mapCity": "Wald, Canton of Zurich, Switzerland",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellte-r-landshut-125163": {
    "lat": 48.52961,
    "lng": 12.16179,
    "mapCity": "Landshut, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134969": {
    "lat": 12.97194,
    "lng": 77.59369,
    "mapCity": "Bengaluru, Karnataka, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-tax-finance-operations-interns-ai-tax-startup-berlin-284800": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-team-lead-software-production-support-gilching-349713": {
    "lat": 48.10755,
    "lng": 11.2936,
    "mapCity": "Gilching, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-teamleitung-arbeitsvorbereitung-goslar-475992": {
    "lat": 51.90425,
    "lng": 10.42766,
    "mapCity": "Goslar, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technischer-leiter-mit-erfahrung-in-der-hotel-branche-100000-140000-eur-hanover-467424": {
    "lat": 52.37052,
    "lng": 9.73322,
    "mapCity": "Hanover, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technischer-leiter-mit-erfahrung-in-der-hotel-branche-100000-140000-eur-bielefeld-216563": {
    "lat": 52.03333,
    "lng": 8.53333,
    "mapCity": "Bielefeld, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-test-automation-engineer-gilching-45300": {
    "lat": 48.10755,
    "lng": 11.2936,
    "mapCity": "Gilching, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-vertriebsassistenz-kundenbetreuung-weiden-in-der-oberpfalz-307189": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134914": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-weg-buchhalter-zahlengeist-mit-herz-gesucht-munich-78331": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werksstudent-brand-management-herrmanns-manufaktur-munich-138478": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-marketplace-amazon-e-commerce-rostsock-423856": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-werkstudent-marketing-kundenakquise-stuttgart-206896": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-hr-und-finanzen-munchen-munich-368027": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-kommunikation-pr-storytelling-berlin-157233": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-recruiting-all-genders-hamburg-21979": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-ki-video-social-ads-editor-hamburg-313240": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudierende-fur-promotion-events-auf-flexibler-basis-gesucht-berlin-390639": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-windparkplaner-molbergen-483753": {
    "lat": 52.85805,
    "lng": 7.92548,
    "mapCity": "Molbergen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-wirtschaftsprufer-paderborn-136663": {
    "lat": 51.71905,
    "lng": 8.75439,
    "mapCity": "Paderborn, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-wirtschaftsprufer-in-schweinfurt-396949": {
    "lat": 50.04937,
    "lng": 10.22175,
    "mapCity": "Schweinfurt, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-wirtschaftsprufungsassistent-in-schweinfurt-9248": {
    "lat": 50.04937,
    "lng": 10.22175,
    "mapCity": "Schweinfurt, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134971": {
    "lat": 26.91962,
    "lng": 75.78781,
    "mapCity": "Jaipur, Rajasthan, India",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-accounting-specialist-berlin-131530": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-new-business-managerin-cologne-418220": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-crm-lifecycle-marketing-manager-munich-123214": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-frontend-entwickler-75000-eur-95000-eur-jahresgehalt-zwickau-8305": {
    "lat": 50.72724,
    "lng": 12.48839,
    "mapCity": "Zwickau, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-marketing-manager-mit-entwicklungsperspektive-zur-stellvertretenden-marketingleitung-neu-ulm-19395": {
    "lat": 48.39279,
    "lng": 10.01112,
    "mapCity": "Neu-Ulm, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-personal-und-vertriebsdisponentin-am-standort-bocholt-297040": {
    "lat": 51.83879,
    "lng": 6.61531,
    "mapCity": "Bocholt, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-softwareentwickler-75000-eur-95000-eur-jahresgehalt-zwickau-34673": {
    "lat": 50.72724,
    "lng": 12.48839,
    "mapCity": "Zwickau, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-app-developer-ios-android-passau-289460": {
    "lat": 48.5665,
    "lng": 13.43122,
    "mapCity": "Passau, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134836": {
    "lat": -22.90642,
    "lng": -43.18223,
    "mapCity": "Rio de Janeiro, Brazil",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134858": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134955": {
    "lat": 33.749,
    "lng": -84.38798,
    "mapCity": "Atlanta, Georgia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134901": {
    "lat": 39.95238,
    "lng": -75.16362,
    "mapCity": "Philadelphia, Pennsylvania, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134936": {
    "lat": -31.95224,
    "lng": 115.8614,
    "mapCity": "Perth, Western Australia, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134859": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-bauleiter-planer-tga-hls-65000-eur-79000-eur-tarifvertrag-zzgl-sonderzahlungen-frankfurt-am-main-216712": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-business-developer-zwickau-383783": {
    "lat": 50.72724,
    "lng": 12.48839,
    "mapCity": "Zwickau, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-business-development-managerin-performance-marketing-hamburg-433823": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134888": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-communication-brand-campaign-managerin-frankfurt-am-main-152763": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134883": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134875": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-datenbankentwickler-oracle-apex-braunschweig-445045": {
    "lat": 52.26594,
    "lng": 10.52673,
    "mapCity": "Braunschweig, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134992": {
    "lat": 48.54964,
    "lng": -123.36931,
    "mapCity": "Saanich, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-devops-engineer-braunschweig-273752": {
    "lat": 52.26594,
    "lng": 10.52673,
    "mapCity": "Braunschweig, Lower Saxony, Germany",
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
  "arbeitnow-elektroniker-elektriker-pv-inbetriebnahme-walldorf-295367": {
    "lat": 50.61667,
    "lng": 10.38333,
    "mapCity": "Walldorf, Thuringia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-email-marketing-crm-account-manager-klaviyo-e-commerce-ai-automatisierung-dusseldorf-486524": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-entgeltabrechnerin-steuerfachangestellte-mit-homeoffice-anteil-stuttgart-80008": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134882": {
    "lat": 41.38879,
    "lng": 2.15899,
    "mapCity": "Barcelona, Catalonia, Spain",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134855": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134871": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-fachassistent-digitalisierung-und-it-prozesse-fait-nackenheim-134061": {
    "lat": 49.91528,
    "lng": 8.33889,
    "mapCity": "Nackenheim, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-fachassistent-digitalisierung-und-it-prozesse-fait-frankfurt-am-main-37871": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-fachplaner-tga-hls-cologne-412501": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134874": {
    "lat": 28.53834,
    "lng": -81.37924,
    "mapCity": "Orlando, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-financial-accountant-teilzeit-30-std-woche-hamburg-461917": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-finanzbuchhalter-hamburg-227123": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-forward-deployed-engineer-wurzburg-326739": {
    "lat": 49.79391,
    "lng": 9.95121,
    "mapCity": "Würzburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-forward-deployed-engineer-munich-177899": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founders-associate-buroorganisation-administration-events-payroll-in-bilk-dusseldorf-258087": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founders-associate-praktikum-berlin-81272": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founding-account-executive-cologne-360541": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founding-account-executive-hamburg-467091": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founding-account-executive-munich-76223": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-founding-account-executive-berlin-259963": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-full-stack-software-engineer-software-systems-munich-256310": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-hr-manager-hr-business-partner-konstanz-39077": {
    "lat": 47.66033,
    "lng": 9.17582,
    "mapCity": "Konstanz, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-industrial-engineer-zeitwirtschaft-prozessplanung-im-raum-darmstadt-1702-260991": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-influencer-marketing-manager-tiktok-shop-all-genders-cologne-289623": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-information-security-resilience-senior-manager-frankfurt-am-main-423738": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-systemadministrator-boostedt-voicetech-gmbh-250067": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-junior-e-commerce-specialist-munich-168424": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-influencer-manager-tiktok-shop-all-genders-cologne-50005": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-online-marketing-manager-munich-196832": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-paid-search-specialist-munich-399539": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-performance-marketing-manager-munich-88627": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-projektmanager-live-virtual-communication-berlin-202685": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-sales-manager-immobilienfinanzierung-berlin-457522": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-video-editor-fur-social-media-ads-cologne-208200": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kaufmannischer-business-partner-60-remote-anteil-moglich-meppen-453362": {
    "lat": 52.69064,
    "lng": 7.29097,
    "mapCity": "Meppen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kaufmannischer-mitarbeiter-immobilienverwaltung-mulheim-karlich-281407": {
    "lat": 50.3851,
    "lng": 7.4989,
    "mapCity": "Mülheim-Kärlich, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ki-marketing-content-praktikant-munich-293960": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-konstrukteur-pottenstein-160218": {
    "lat": 47.9582,
    "lng": 16.0948,
    "mapCity": "Pottenstein, Lower Austria, Austria",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-koordinatorin-kinderschutz-und-antidiskriminierung-all-genders-in-vollzeit-berlin-73420": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-lead-ai-product-manager-munich-404573": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-leitung-buchhaltung-dusseldorf-237910": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134863": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134823": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-lims-consultant-validation-expert-frankenthal-214230": {
    "lat": 49.53414,
    "lng": 8.35357,
    "mapCity": "Frankenthal, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-lohnbuchhalter-steuerfachangestellte-und-steuerfachwirte-alle-rostock-13165": {
    "lat": 54.0887,
    "lng": 12.14049,
    "mapCity": "Rostock, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-managerin-kooperationen-jugend-frauenbasketball-all-genders-in-vollzeit-berlin-91938": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-marketing-operations-manager-teilzeit-20h-woche-munich-442782": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-marketing-jr-creator-werkstudentin-praktikantin-cologne-116925": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-marketing-kommunikationsmanager-in-brand-content-bergkamen-133610": {
    "lat": 51.61633,
    "lng": 7.64451,
    "mapCity": "Bergkamen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-media-buyer-meta-ads-mannheim-370554": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134824": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134879": {
    "lat": 45.33249,
    "lng": -100.12068,
    "mapCity": "Akaska, South Dakota, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mediengestalter-schwerpunkt-bildbearbeitung-voll-oder-teilzeit-toging-am-inn-93368": {
    "lat": 48.26018,
    "lng": 12.5846,
    "mapCity": "Töging am Inn, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-microsoft-365-administrator-essen-281685": {
    "lat": 51.45657,
    "lng": 7.01228,
    "mapCity": "Essen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-mid-senior-full-stack-developer-deutsch-level-c1-kiel-339715": {
    "lat": 54.32133,
    "lng": 10.13489,
    "mapCity": "Kiel, Schleswig-Holstein, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134881": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134861": {
    "lat": -8.05389,
    "lng": -34.88111,
    "mapCity": "Recife, Pernambuco, Brazil",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134885": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-operativen-leiter-bau-leiter-projektmanagement-in-vollzeit-nuremberg-406441": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134899": {
    "lat": 46.78327,
    "lng": -92.10658,
    "mapCity": "Duluth, Minnesota, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-performance-marketing-manager-meta-ads-mannheim-11693": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personal-und-vertriebsdisponentin-am-standort-bocholt-ludenscheid-160742": {
    "lat": 51.21977,
    "lng": 7.6273,
    "mapCity": "Lüdenscheid, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-personalsachbearbeiter-fur-die-administration-frankfurt-am-main-94181": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-pflichtpraktikum-backend-softwareentwicklung-ki-python-apis-medtech-berlin-247930": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-planungsingenieur-fur-entwurfs-und-genehmigungsplanung-deponietechnik-altlasten-aachen-261620": {
    "lat": 50.77664,
    "lng": 6.08342,
    "mapCity": "Aachen, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134884": {
    "lat": 53.48095,
    "lng": -2.23743,
    "mapCity": "Manchester, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-produktmanager-zyklenentwicklung-25d-3x-5x-wessling-33571": {
    "lat": 48.07452,
    "lng": 11.2482,
    "mapCity": "Weßling, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134975": {
    "lat": 40.4165,
    "lng": -3.70256,
    "mapCity": "Madrid, Spain",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134841": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134911": {
    "lat": 17.99702,
    "lng": -76.79358,
    "mapCity": "Kingston, Jamaica",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134867": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-projektassistentin-dresden-364574": {
    "lat": 51.05089,
    "lng": 13.73832,
    "mapCity": "Dresden, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektassistenz-im-digitalen-recruiting-braunschweig-133715": {
    "lat": 52.26594,
    "lng": 10.52673,
    "mapCity": "Braunschweig, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-prufungsassistent-hamburg-352235": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-prufungsassistent-gesucht-coburg-391571": {
    "lat": 50.25937,
    "lng": 10.96384,
    "mapCity": "Coburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134876": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-recruiter-bielefeld-3544": {
    "lat": 52.03333,
    "lng": 8.53333,
    "mapCity": "Bielefeld, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-recruiter-promoter-fur-recruting-remote-waldmunchen-21591": {
    "lat": 49.37804,
    "lng": 12.70905,
    "mapCity": "Waldmünchen, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-referent-digitale-transformation-frankfurt-am-main-213478": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-revenue-operations-analyst-all-genders-100-homeoffice-kassel-439988": {
    "lat": 51.31667,
    "lng": 9.5,
    "mapCity": "Kassel, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sap-consultant-ariba-buying-100-remote-paderborn-72503": {
    "lat": 51.71905,
    "lng": 8.75439,
    "mapCity": "Paderborn, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sap-drc-project-manager-refnr-47233-munich-10568": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-scada-ingenieur-berlin-405538": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134857": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-business-development-manager-senior-account-executive-moderner-gtm-ai-stack-100-remote-karlsruhe-481719": {
    "lat": 49.00937,
    "lng": 8.40444,
    "mapCity": "Karlsruhe, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-backend-engineer-all-genders-golang-berlin-211662": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-creative-designer-paid-social-vollzeit-hamburg-107095": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-devops-engineer-full-time-100-remote-berlin-357461": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-erp-consultant-at-mytheresa-munich-304978": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-game-designer-solitaire-tripeaks-systems-economy-fully-remote-berlin-192325": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-it-projektmanager-berlin-347549": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-key-account-manager-cologne-40850": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-partner-success-manager-berlin-173126": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-partner-success-manager-munchen-438586": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-performance-marketing-manager-media-buyer-meta-monheim-am-rhein-309174": {
    "lat": 51.09162,
    "lng": 6.89217,
    "mapCity": "Monheim am Rhein, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-performance-marketing-manager-media-buyer-native-taboola-outbrain-teads-monheim-am-rhein-214092": {
    "lat": 51.09162,
    "lng": 6.89217,
    "mapCity": "Monheim am Rhein, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-producer-new-platforms-fully-remote-berlin-3554": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-projekt-account-manager-all-genders-cologne-150737": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-salesforce-admin-deutsch-level-c1-kiel-108618": {
    "lat": 54.32133,
    "lng": 10.13489,
    "mapCity": "Kiel, Schleswig-Holstein, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-salesforce-admin-deutsch-level-c1-schleswig-232121": {
    "lat": 54.52021,
    "lng": 9.56829,
    "mapCity": "Schleswig, Schleswig-Holstein, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-developer-dortmund-remote-69872": {
    "lat": 51.51494,
    "lng": 7.466,
    "mapCity": "Dortmund, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-strategy-innovation-manager-berlin-359616": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-systemadministrator-linux-munich-236624": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-web-developer-ki-entwickler-100-remote-garrel-180591": {
    "lat": 52.95483,
    "lng": 8.02635,
    "mapCity": "Garrel, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134854": {
    "lat": 42.96336,
    "lng": -85.66809,
    "mapCity": "Grand Rapids, Michigan, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-social-media-marketing-management-for-berlins-music-business-event-most-wanted-music-freelance-65333": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-social-media-und-marketing-manager-zwickau-389890": {
    "lat": 50.72724,
    "lng": 12.48839,
    "mapCity": "Zwickau, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-software-engineer-cloud-platform-wurzburg-375628": {
    "lat": 49.79391,
    "lng": 9.95121,
    "mapCity": "Würzburg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-softwareentwicklerin-senior-munich-449458": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sps-softwareentwicklung-beckhoff-twincat-leipzig-236595": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-dettingen-unter-teck-17420": {
    "lat": 48.61667,
    "lng": 9.45,
    "mapCity": "Dettingen unter Teck, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-ditzingen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-451132": {
    "lat": 48.82672,
    "lng": 9.06703,
    "mapCity": "Ditzingen, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-fachbach-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-28748": {
    "lat": 50.33944,
    "lng": 7.6893,
    "mapCity": "Fachbach, Rhineland-Palatinate, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-gerbrunn-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-191271": {
    "lat": 49.77528,
    "lng": 9.99361,
    "mapCity": "Gerbrunn, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-glattbach-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-224454": {
    "lat": 50.0076,
    "lng": 9.1499,
    "mapCity": "Glattbach, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-hambrucken-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-215986": {
    "lat": 49.19,
    "lng": 8.54056,
    "mapCity": "Hambrücken, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-muhlingen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-203202": {
    "lat": 47.91667,
    "lng": 9.01667,
    "mapCity": "Mühlingen, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-ostrach-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-259799": {
    "lat": 47.95,
    "lng": 9.38333,
    "mapCity": "Ostrach, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerberater-in-winsen-auf-wunsch-mit-partnerperspektive-gesucht-mindestens-90000eur-495429": {
    "lat": 53.35777,
    "lng": 10.21161,
    "mapCity": "Winsen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellter-mit-fokus-auf-finanzbuchhaltung-dettingen-unter-teck-149713": {
    "lat": 48.61667,
    "lng": 9.45,
    "mapCity": "Dettingen unter Teck, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellter-steuerfachwirt-oder-bilanzbuchhalter-bernburg-238728": {
    "lat": 51.79464,
    "lng": 11.7401,
    "mapCity": "Bernburg, Saxony-Anhalt, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellter-steuerfachwirt-oder-bilanzbuchhalter-magdeburg-45051": {
    "lat": 52.13129,
    "lng": 11.63189,
    "mapCity": "Magdeburg, Saxony-Anhalt, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellter-steuerfachwirt-bilanzbuchhalter-oder-lohnbuchhalter-rostock-38767": {
    "lat": 54.0887,
    "lng": 12.14049,
    "mapCity": "Rostock, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachwirt-bis-70000eur-jahresgehalt-hamburg-405048": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachwirt-bis-70000eur-jahresgehalt-bremen-384886": {
    "lat": 53.07582,
    "lng": 8.80717,
    "mapCity": "Bremen, Free Hanseatic City of Bremen, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachwirt-mit-fokus-auf-finanzbuchhaltung-dettingen-unter-teck-372324": {
    "lat": 48.61667,
    "lng": 9.45,
    "mapCity": "Dettingen unter Teck, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-team-lead-finance-senior-bilanzbuchhalter-vollzeit-hamburg-387373": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-teamleiter-im-finanzvertrieb-german-speaking-berlin-167364": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-tech-content-manager-online-redakteur-berlin-mitte-festanstellung-296074": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134915": {
    "lat": -35.9125,
    "lng": 150.08144,
    "mapCity": "Moruya, New South Wales, Australia",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-technical-writer-information-developer-berlin-280592": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134891": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134927": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-trainee-sea-manager-munich-457471": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-venture-capital-automation-internship-at-b2venture-early-stage-fund-q1-2027-berlin-455464": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134902": {
    "lat": 52.13238,
    "lng": -106.66892,
    "mapCity": "Saskatoon, Saskatchewan, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134865": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-werkstudent-softwareentwicklung-interne-tools-automatisierung-munich-274384": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-marketing-20-std-wo-cologne-248448": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-wirtschaftsprufer-oder-wirtschaftspruferanwarter-mit-aussicht-auf-partnerschaft-hamburg-294777": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-working-student-people-operations-hamburg-476987": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-working-student-retail-sales-operations-berlin-3956": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-workings-student-tax-finance-ai-tax-startup-berlin-72198": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-consultant-sap-system-performance-optimierungen-heidelberg-475036": {
    "lat": 49.40768,
    "lng": 8.69079,
    "mapCity": "Heidelberg, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-seo-manager-seo-projekt-manager-gaildorf-451381": {
    "lat": 49.00027,
    "lng": 9.76953,
    "mapCity": "Gaildorf, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-1st-2nd-level-support-specialist-im-neo-banking-hotline-backoffice-frankfurt-am-main-171504": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-account-projektmanagerin-junior-account-projektmanagerin-dusseldorf-129579": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ai-solution-architect-nurnberg-mittelfranken-42347": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-amazon-advertising-manager-ppc-langweid-am-lech-316642": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-application-support-engineer-munich-54961": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134904": {
    "lat": 49.24966,
    "lng": -123.11934,
    "mapCity": "Vancouver, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ausbildung-zum-fachinformatiker-fur-anwendungsentwicklung-bielefeld-314840": {
    "lat": 52.03333,
    "lng": 8.53333,
    "mapCity": "Bielefeld, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ausbildung-zur-zum-kauffrau-mann-fur-buromanagement-rostock-438889": {
    "lat": 54.0887,
    "lng": 12.14049,
    "mapCity": "Rostock, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bauuberwacher-bahn-oberbau-und-ingenieurbau-ob-kib-munich-207449": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-bi-consultant-power-bi-microsoft-fabric-spezialist-hamburg-377849": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134909": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remoteok-1134880": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-chatsetter-vorqualifizierung-selbststandige-nebenberufliche-tatigkeit-nordenham-424547": {
    "lat": 53.50098,
    "lng": 8.48965,
    "mapCity": "Nordenham, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134878": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-co-team-lead-senior-developer-hamburg-frankfurt-401505": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-customer-support-specialist-medtech-saas-munich-272975": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134905": {
    "lat": 43.70643,
    "lng": -79.39864,
    "mapCity": "Toronto, Ontario, Canada",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-digital-campaign-manager-berlin-255849": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-disponent-service-operations-manager-bonn-458201": {
    "lat": 50.73438,
    "lng": 7.09549,
    "mapCity": "Bonn, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-dozentin-fur-fachinformatik-anwendungsentwicklung-systemintegration-fur-edtech-startup-hamburg-48272": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-entwicklungsingenieur-biosensoren-in-mannheim-1701-423994": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134821": {
    "lat": 10.66668,
    "lng": -61.51889,
    "mapCity": "Port of Spain, Trinidad and Tobago",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-eu-freelancer-inbound-telekommunikationsprojekt-100-remote-hamburg-290932": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-frontend-engineer-munich-438244": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-full-stack-platform-engineer-munich-39238": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-geschaftsfuhrer-quereinsteiger-franchise-partner-franchise-nehmer-selbststandiger-unternehmer-fur-den-standort-hamburg-306752": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-google-ads-account-manager-fokus-e-commerce-frankfurt-am-main-234979": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-growth-marketer-meta-ads-fur-e-commerce-ai-native-boutique-agentur-online-marketing-cologne-241602": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-growth-marketing-manager-vollzeit-remote-berlin-446370": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-growth-marketing-manager-b2c-leipzig-199467": {
    "lat": 51.33962,
    "lng": 12.37129,
    "mapCity": "Leipzig, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-head-of-d2c-performance-growth-gn-mannheim-98354": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-hr-specialist-ampfing-217330": {
    "lat": 48.254,
    "lng": 12.41515,
    "mapCity": "Ampfing, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-human-capital-manager-munich-146672": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-initiativbewerbung-bau-infrastruktur-gn-bauleiter-kalkulator-projektleiter-hamburg-210644": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-internship-working-student-finance-freiburg-im-breisgau-285041": {
    "lat": 47.9959,
    "lng": 7.85222,
    "mapCity": "Freiburg im Breisgau, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-it-consultant-insurance-nuremberg-195101": {
    "lat": 49.45421,
    "lng": 11.07752,
    "mapCity": "Nuremberg, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-baumanager-wind-junior-construction-manager-wind-hamburg-193421": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134886": {
    "lat": 38.56902,
    "lng": -8.90126,
    "mapCity": "Palmela, Setúbal District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-junior-sea-google-ads-account-manager-e-commerce-fokus-frankfurt-am-main-376263": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-kanzleimarketing-senior-marketing-manager-munich-69897": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-lead-social-media-campaigning-in-vollzeit-berlin-446351": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-linkedin-copywriter-fokus-auf-ceos-personal-brands-mannheim-487238": {
    "lat": 49.4891,
    "lng": 8.46694,
    "mapCity": "Mannheim, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134831": {
    "lat": 37.53515,
    "lng": -77.58554,
    "mapCity": "Staffordshire, Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-managed-security-services-advisor-munich-31426": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-manager-accounting-projects-digitalisation-lindau-10007": {
    "lat": 47.54612,
    "lng": 9.68431,
    "mapCity": "Lindau, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-manager-financial-planning-analysis-fpa-bi-reporting-dusseldorf-490595": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-manager-fur-digitale-abrechnungsprozesse-und-controlling-im-bereich-erneuerbare-energien-marsberg-491146": {
    "lat": 51.46171,
    "lng": 8.84949,
    "mapCity": "Marsberg, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134980": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-performance-marketer-meta-ads-ai-creative-strategy-high-aov-e-commerce-cologne-164952": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134817": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-praktikant-gn-im-bereich-marketing-vertrieb-hamburg-268716": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-praktikum-marketing-berlin-277447": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-principal-governance-risk-and-compliance-grc-architect-munich-313642": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-product-owner-agent-assist-user-platforms-hamburg-166491": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-programme-manager-election-integrity-task-force-eitf-berlin-332613": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-programmierer-automatisierungstechniker-bretzfeld-220198": {
    "lat": 49.17944,
    "lng": 9.43833,
    "mapCity": "Bretzfeld, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projekt-bauuberwacher-im-anlagenbau-rohrleitungsbau-cologne-44736": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-projektmanagerin-berlin-487574": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-prufungsassistent-stuttgart-289983": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-quality-assurance-engineer-wiesbaden-190668": {
    "lat": 50.08601,
    "lng": 8.24435,
    "mapCity": "Wiesbaden, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-robotics-embedded-software-engineer-munich-21807": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sales-director-strategic-accounts-berlin-154329": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sales-director-strategic-accounts-munchen-359719": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-sea-performance-marketing-manager-buchholz-in-der-nordheide-278852": {
    "lat": 53.33038,
    "lng": 9.86596,
    "mapCity": "Buchholz in der Nordheide, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-brand-manager-berlin-36431": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-cost-engineer-gn-heidelberg-252085": {
    "lat": 49.40768,
    "lng": 8.69079,
    "mapCity": "Heidelberg, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2091067": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-senior-full-stack-engineer-python-berlin-464084": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-healthcare-consultant-klinische-ki-transformation-berlin-31567": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-hr-manager-halberstadt-343875": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-senior-manager-digital-marketing-channel-munich-4035": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-one-identity-iam-berater-refnr-47227-frankfurt-am-main-88377": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-personaldisponent-arbeitnehmeruberlassung-laatzen-87085": {
    "lat": 52.31506,
    "lng": 9.79739,
    "mapCity": "Laatzen, Lower Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-product-engineer-allgau-14895": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-senior-software-engineer-core-experiences-frankfurt-germany-459377": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-core-experiences-munich-germany-193604": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-windows-desktop-applications-dusseldorf-germany-dusseldorf-164606": {
    "lat": 51.22319,
    "lng": 6.77927,
    "mapCity": "Düsseldorf, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-windows-desktop-applications-hamburg-germany-63852": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-senior-software-engineer-windows-desktop-applications-munich-germany-484546": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-site-manager-im-anlagenbau-cologne-168081": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-social-media-projektmanagement-praktikum-berlin-381349": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-software-engineer-automation-operations-ft-cologne-362002": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-software-engineer-data-infrastructure-acquisition-munich-germany-382903": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-staff-software-engineer-ai-data-platform-snowflake-berlin-75874": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-steuerfachangestellter-lohnbuchhalter-rostock-320317": {
    "lat": 54.0887,
    "lng": 12.14049,
    "mapCity": "Rostock, Mecklenburg-Vorpommern, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-stress-engineer-munich-161189": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2069746": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "arbeitnow-technical-support-engineer-romania-frankfurt-am-main-490753": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-techniker-in-im-innendienst-bereich-braune-ware-berlin-242172": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-ugc-manager-creative-strategist-berlin-152348": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134826": {
    "lat": 45.52345,
    "lng": -122.67621,
    "mapCity": "Portland, Oregon, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remoteok-1134873": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-social-media-content-creation-cologne-94026": {
    "lat": 50.93333,
    "lng": 6.95,
    "mapCity": "Cologne, North Rhine-Westphalia, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudent-corporate-development-marketing-hamburg-345970": {
    "lat": 53.55073,
    "lng": 9.99302,
    "mapCity": "Hamburg, Free and Hanseatic City of Hamburg, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-content-social-media-berlin-492912": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-werkstudentin-copywriting-content-marketing-redaktion-berlin-308909": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-working-student-customer-service-process-documentation-berlin-483020": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "arbeitnow-working-student-venture-capital-munich-393858": {
    "lat": 48.13743,
    "lng": 11.57549,
    "mapCity": "Munich, Bavaria, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
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
  "month-5796459172": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5795144909": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5796459182": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5796459195": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
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
  "month-5789983915": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5789983945": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5788807986": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
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
  "month-5788675568": {
    "lat": 44.97997,
    "lng": -93.26384,
    "mapCity": "Minneapolis, Minnesota, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788677929": {
    "lat": 41.45005,
    "lng": -81.66346,
    "mapCity": "Newburgh Heights, Ohio, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788677926": {
    "lat": 39.24084,
    "lng": -94.288,
    "mapCity": "Missouri City, Missouri, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788700063": {
    "lat": 36.09719,
    "lng": -115.14666,
    "mapCity": "Paradise, Nevada, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5788675032": {
    "lat": 52.48142,
    "lng": -1.89983,
    "mapCity": "Birmingham, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "job-city"
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
  "month-5777649967": {
    "lat": 47.60621,
    "lng": -122.33207,
    "mapCity": "Seattle, Washington, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
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
  "month-5773548249": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5774050371": {
    "lat": 39.64176,
    "lng": -77.71999,
    "mapCity": "Hagerstown, Maryland, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "remotive-2090996": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090998": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090994": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090995": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2091000": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "remotive-2090997": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5771353531": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "month-5770347783": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "month-5767738721": {
    "lat": 38.96872,
    "lng": -77.3411,
    "mapCity": "Reston, Virginia, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-dd24gl": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-t8nqzc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-x2mkgp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-h9vimv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-187czdk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dh5ide": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hobq6w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1uqvewl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-lsnjaw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1pa3jj1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1sbya98": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-tex8ig": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-hat9b7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hzcr2m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1bbmafa": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1rutidh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-uqcwan": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19vnhpk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14ryxjp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6w9v8i": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8jttwc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1kdsm2w": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-888c4z": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1p20mxq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1tf8hz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1clpy6c": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-v8sp8l": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-24sclu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-m7b48k": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1cuksp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1nwcdtu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1l8yywt": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-8t1vsj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15vgc32": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13edpqu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6x7q68": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xh8ejj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-jz8kr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-r46k2t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mesmdk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16k6t79": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-sphqqu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-obbvyg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rledh1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-tfeczx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16jnit8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zhzuc3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-96i745": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1digwhq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1wdinom": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-58kdzh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ma6dv6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1pl94ol": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1p03g25": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fi0ktl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zv2d95": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1v2rek6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hp7ffu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1x711vg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1se661n": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16yazd5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vmrf78": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-imf6vy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1mfntxw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qmfq79": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hdrywz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1t0h1m0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yp6vmg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-g1pbsm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ryt2qm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xwgzpk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1nhh546": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dlg9lw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1flgrs8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1x2hezx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fs0jlk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13pm8fw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cd9r5e": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1usktet": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1d9ul0q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1uyww7j": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ndt3yg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1v180cl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1mlb2kn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xue694": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1sc32hj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-g42j7u": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-98ijgo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16t3o2m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1l4kk7j": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1q6k0zb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-doq7h2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zfm1j4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-38cbvl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-j55amc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-f1d774": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-hbyay1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16bh59n": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-127xiab": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-133mawq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fjgfzd": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mdgm2v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-5xe42m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-m2nga1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u00dd8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-pg119a": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-d9ptjl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-po16uy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-17gh5n2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1r4lhif": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-5meile": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1x4v44x": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1q0a4ni": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wthec0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1cus8i9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ciscb6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19f21mp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ehl3oz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1abq706": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-v0qez7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cfli27": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1btahbt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6f4fjv": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-oakjv5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bt15mc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gq0ux7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-nelce3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-x9ydql": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vq7a0u": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-q7mt67": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vzw788": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-djvifc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1shvvrs": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19q0qw2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-d4ocjf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-m8ge26": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-sl2h5k": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2w4ein": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fb3r8r": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1e94djw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vdbvqz": {
    "lat": 38.16544,
    "lng": -7.8924,
    "mapCity": "Cuba, Beja District, Portugal",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1lcodi6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mhtxbr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1trlm62": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-2h7av5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ldbgtw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-5oqo8m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1mougnr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1jdo777": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-g08glw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-3u8dpk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1bz8ybc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-9irxd1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-tyz3eo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15qz3uy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145923": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147050": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146605": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146982": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146924": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146321": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146761": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146823": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146820": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146615": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147000": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146783": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146781": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145602": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147013": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146016": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "jobicy-146015": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "jobicy-146555": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146547": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147009": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146760": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146654": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146923": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147003": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147008": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145882": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147067": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146799": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146979": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147085": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147065": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147007": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146673": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146688": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147001": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-144843": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-xsmlma": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-11ldtm3": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1gtw7tg": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-vdspln": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-ats73x": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-zapy90": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1wfutfx": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-bz23i5": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-1de59go": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-3k89sc": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-anbw18": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-7hqrg1": {
    "lat": 37.77493,
    "lng": -122.41942,
    "mapCity": "San Francisco, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "nodesk-alegfx": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-w8fauo": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "nodesk-vjr9a9": {
    "lat": 37.77493,
    "lng": -122.41942,
    "mapCity": "San Francisco, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "nodesk-1ee0bv": {
    "lat": 37.77493,
    "lng": -122.41942,
    "mapCity": "San Francisco, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "himalayas-jb9abh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-9cf4ew": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vttgiq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11ktj56": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ins4jo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vkfg8r": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-modiud": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yoqe6t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1o5odtl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u9au7e": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1kgxr0p": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1wag4su": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1eaxl2q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1l27udj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14f1ahs": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bz867o": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19ejwdu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1koxxnc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fhdfm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kfv131": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-w0sald": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1r7fxag": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rqe9ua": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1trdzd6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-eqzcxy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gc4div": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-b126wq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2oyhie": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-i4928m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1tc698r": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-146b8j2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1u0fo87": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18gbeyn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ir3bjm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1esa5sp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1nggr0b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-5p54bj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-l01saq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-me8lmi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-npdnsj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14hzalk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fjuvk6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16gmcc6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1l2qga2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dla8ea": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-114h5bo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1h958ze": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1d5aho2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-881vnw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8hr9ii": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i164jx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-14t9e2l": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n9s9mc": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-s795j7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fopf87": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bydhlj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1tcr73w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qtwds7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-27k27v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-zuz3py": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-anglap": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1w0s6b3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yhrxk2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1s6f77": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-a0lk4j": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-hs57uk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ibfrrx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1logcys": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-y3nats": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-17bc25i": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i5xn26": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-scun8h": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-a9s7l0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rk3nw7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1igv2cj": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-73qjo2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-40j1mq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8gy65c": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-r81wea": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yyjuc4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-tane3a": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1v0w540": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-shxd9": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-12o28xx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fuq1ee": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-n4bakb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-skfpit": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1gtiz2d": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1j23msk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1iupl61": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mlhezq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-19kka0h": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1n22ivi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ez67tt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1480sec": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-x77ucu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qzedql": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fqw0ox": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1j6yb2s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1p9azl5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-domshf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-o9yoet": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18e0eal": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-m2ht2a": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11fjsr7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-4k18et": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fcu7cl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xh9wq3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1i6uoa4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ktstku": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-o0cq35": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-bthp8i": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xtqbhm": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-m6fjz8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1wi18oy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dbpmdz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qc5i9z": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-aanw7q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1p6q8rt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vzphfx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1vjy13p": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-o7aa1g": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-nc1r5f": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1v4extd": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-4t0b2f": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-p1n4t2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6f7j2y": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15bhb17": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1cis7jg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-474g7w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-l88dbh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xetqt0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1iwtzj8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-srpqnm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10lf5xb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xvbzia": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ifj5o0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-12xzw7q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-lbr0c4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1myvk5o": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-50yyhm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10vdzom": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-lvcsmo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-vp2lwz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-qhxlla": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-4nekir": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-17ihsc0": {
    "lat": -19.52064,
    "lng": -40.57714,
    "mapCity": "Barbados, Espírito Santo, Brazil",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-1nr3rmx": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fm9c33": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1mw43cr": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-kdb8ev": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cts2z2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-241ek4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-56m3ee": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ttgzxi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-es5xs5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16xlmmi": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1porh5o": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15091sf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-y3i63": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ermru4": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1dxl1v0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15nm50b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ro1ha6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1wwdzml": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1oh3sd6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1aquskt": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-avu5ch": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1hn7ab4": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-51x6s3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1b9s08n": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1cvjw8": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-fxjllu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yftvts": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18zb176": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1q19fhl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1kpuozc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-k0ri6w": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-svr98f": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-p1jfmb": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18osoop": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6y5wu7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1jb1sx1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-3yob8b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-yul5ef": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1eno4co": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-mm4i4q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1ofr1m5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-l0wjv0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1f5avnl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1nhg6vm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1nzsw1m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-92q9my": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-138k6mi": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-nw8ua1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1asqejq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1lfas4q": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1m7oct1": {
    "lat": 31.76212,
    "lng": -95.63079,
    "mapCity": "Palestine, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "himalayas-14ep4rm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1jyxbm5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-briqxk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-85dmyp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rsaozu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-15izwpa": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-wew8sn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-9e0p8b": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1owxk07": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-8y2vv0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1kumbh3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-6abtz": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-on1he": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-16yb4v5": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-7qeh6t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ljpwgy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1xvugum": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-2pjh32": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-te0byj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1uwx6i3": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-gfqu94": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-xavke1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-l4s5dy": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-11xo1rm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1s1rvto": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1yqzw39": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-md110": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1qm8g6s": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-de5cvf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-t0sonk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-132ucfw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-njk9o7": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-176cmz2": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-13ju8ra": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-rnvtl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-ep6udf": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-10ze27u": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1j54tzo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dfpqxr": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18lqy5t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-18rk49n": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1psy4jl": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-cgysao": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1fdxp17": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-1mct7e": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-119n8gh": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "himalayas-dh1gfs": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145803": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146131": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149034": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145985": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-149177": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146017": {
    "lat": 22.27832,
    "lng": 114.17469,
    "mapCity": "Hong Kong",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "jobicy-149091": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145933": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146472": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-146474": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-147583": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145917": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145717": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "jobicy-145850": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-10vdt6b": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-sgmrag": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1sd5mzp": {
    "lat": 43.70643,
    "lng": -79.39864,
    "mapCity": "Toronto, Ontario, Canada",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1roth6c": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-on44jv": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-45y7x6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1go0l05": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-h3s6qt": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-x0scvp": {
    "lat": 53.85,
    "lng": -9.3,
    "mapCity": "Castlebar, Connacht, Ireland",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-10lz2fn": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-12kck8n": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1qzsv9b": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-j38uog": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1q4b7lh": {
    "lat": 25.77427,
    "lng": -80.19366,
    "mapCity": "Miami, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1889ohj": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-13cb3qt": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-la2iay": {
    "lat": 25.08652,
    "lng": -80.44728,
    "mapCity": "Key Largo, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-33wm18": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-rr91gm": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-8dfr84": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-10q3aly": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-p06gts": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-8k3xoi": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-18xlehh": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "wwr-1lwh8cm": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-lt4zql": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-vn5wb1": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-2sjspi": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-x0lco3": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ibygsk": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-3ub0rn": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-iyhzuo": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-yjv0wu": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1c330oq": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1u9g9ms": {
    "lat": 32.82346,
    "lng": -97.17057,
    "mapCity": "Hurst, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-oanbc7": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ckf5t0": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ukcz9t": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-nuz6qk": {
    "lat": 50.76871,
    "lng": 0.28453,
    "mapCity": "Eastbourne, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1pz28kc": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1y8qsgv": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1q0bkei": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1xc3e98": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-72le11": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-6bbrhg": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-2fk94c": {
    "lat": 51.05089,
    "lng": 13.73832,
    "mapCity": "Dresden, Saxony, Germany",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-14tm7i9": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1sa06li": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ox52t7": {
    "lat": 50.11552,
    "lng": 8.68417,
    "mapCity": "Frankfurt am Main, Hesse, Germany",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1pfb3d7": {
    "lat": 25.07725,
    "lng": 55.30927,
    "mapCity": "Dubai, United Arab Emirates",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "wwr-1w7wa3p": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-n0khju": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ebk32i": {
    "lat": 33.749,
    "lng": -84.38798,
    "mapCity": "Atlanta, Georgia, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1p9fppg": {
    "lat": 33.749,
    "lng": -84.38798,
    "mapCity": "Atlanta, Georgia, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1ia1eh6": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-wl5yfh": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-lcyaig": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-yvmtpk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-e8u2ai": {
    "lat": 43.70643,
    "lng": -79.39864,
    "mapCity": "Toronto, Ontario, Canada",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-17edljf": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-ilqp1z": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1cv7ne0": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-19mbu1b": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-qh40qe": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-do0g2n": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-k0set4": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1eab4sc": {
    "lat": 55.95206,
    "lng": -3.19648,
    "mapCity": "Edinburgh, Scotland, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-sto6hl": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-l3jfzy": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1nrzdmv": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-13cp6s": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1j9jzik": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-vyr4a3": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-11tf4er": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-18c9zcv": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-ozl6vd": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1wlmb9i": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-ufq8tv": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-t3htp": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-eugvtv": {
    "lat": 30.26715,
    "lng": -97.74306,
    "mapCity": "Austin, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-4yf4fu": {
    "lat": 30.26715,
    "lng": -97.74306,
    "mapCity": "Austin, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1o58umk": {
    "lat": 30.26715,
    "lng": -97.74306,
    "mapCity": "Austin, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-r9wvbl": {
    "lat": 27.33643,
    "lng": -82.53065,
    "mapCity": "Sarasota, Florida, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-28rcb6": {
    "lat": 36.37285,
    "lng": -94.20882,
    "mapCity": "Bentonville, Arkansas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-hs5dnt": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-zc1ep1": {
    "lat": 33.749,
    "lng": -84.38798,
    "mapCity": "Atlanta, Georgia, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-g7mik4": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-15lhipc": {
    "lat": 33.76696,
    "lng": -118.18923,
    "mapCity": "Long Beach, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1bixpag": {
    "lat": 30.26715,
    "lng": -97.74306,
    "mapCity": "Austin, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1qnlsvm": {
    "lat": 30.26715,
    "lng": -97.74306,
    "mapCity": "Austin, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-p1nfei": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-16kcsv9": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-ywvxrh": {
    "lat": 40.01499,
    "lng": -105.27055,
    "mapCity": "Boulder, Colorado, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-55395k": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-mwdzfq": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-18ayywz": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-jbtcup": {
    "lat": 38.62727,
    "lng": -90.19789,
    "mapCity": "St Louis, Missouri, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-13i6qrh": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1b7dph9": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-wp123": {
    "lat": 36.17497,
    "lng": -115.13722,
    "mapCity": "Las Vegas, Nevada, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-q0b35a": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1pogls7": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-vfhhp2": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1egtmkl": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-svhwu0": {
    "lat": -31.95224,
    "lng": 115.8614,
    "mapCity": "Perth, Western Australia, Australia",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-sm9ivb": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-kw9am6": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-13qv8lj": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1j17pah": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-17en5pb": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-2k7r1h": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1vf4zbw": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-76cjdg": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-4quoyp": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-wi8fij": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-pm345w": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-w6f6rg": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-179gvqs": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-18uxms2": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1yl3fib": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-eh5igq": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-199x2ew": {
    "lat": 43.70643,
    "lng": -79.39864,
    "mapCity": "Toronto, Ontario, Canada",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-w1k331": {
    "lat": 34.05223,
    "lng": -118.24368,
    "mapCity": "Los Angeles, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1kqd3ia": {
    "lat": 40.71427,
    "lng": -74.00597,
    "mapCity": "New York, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1iaqblj": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-18tlkto": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ym66hz": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1452ucf": {
    "lat": 34.74648,
    "lng": -92.28959,
    "mapCity": "Little Rock, Arkansas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-tfunej": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-svhjq8": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1fcrcnc": {
    "lat": 1.28967,
    "lng": 103.85007,
    "mapCity": "Singapore",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-5uwnfg": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-12rpke1": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1qkomuw": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-12654uv": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-5x89oc": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-566i6s": {
    "lat": -33.10396,
    "lng": 151.56364,
    "mapCity": "Silverwater, New South Wales, Australia",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-10oszxz": {
    "lat": 35.22709,
    "lng": -80.84313,
    "mapCity": "Charlotte, North Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1py3orx": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1dqxb53": {
    "lat": 46.6625,
    "lng": -94.23333,
    "mapCity": "Lakewood Court, Minnesota, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-fkmyd0": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1hssw9a": {
    "lat": 49.24966,
    "lng": -123.11934,
    "mapCity": "Vancouver, British Columbia, Canada",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-fas4er": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-10wr26y": {
    "lat": 47.17242,
    "lng": 8.51745,
    "mapCity": "Zug, Canton of Zug, Switzerland",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-bsplcb": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1lpdw7": {
    "lat": 41.13998,
    "lng": -104.82025,
    "mapCity": "Cheyenne, Wyoming, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1imj12g": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1qwrabg": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1k54cne": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-9zq0nq": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-152ltow": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1b1de9m": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-15mmo3v": {
    "lat": 37.98376,
    "lng": 23.72784,
    "mapCity": "Athens, Attica, Greece",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1ijq8tc": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-9pzxyw": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-v541wx": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-ujl3a4": {
    "lat": 52.52437,
    "lng": 13.41053,
    "mapCity": "Berlin, State of Berlin, Germany",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "wwr-18bjj9s": {
    "lat": 32.83838,
    "lng": -116.97392,
    "mapCity": "Santee, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-1ihux0z": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-xunloo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-h69q35": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1c2a6md": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-hz5q9s": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-5xqigy": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-mlkeqx": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1byrukp": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1vhk9ba": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-18qumby": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-8jv6gc": {
    "lat": 34.15112,
    "lng": -118.44925,
    "mapCity": "Sherman Oaks, California, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-12asbu6": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-mol0mt": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1bi305v": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-11jw2fo": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-1sb2fwk": {
    "mapCity": "",
    "mapPrecision": "region",
    "mapBasis": "eligibility-region"
  },
  "wwr-mt4vzy": {
    "lat": 34.23556,
    "lng": -77.94604,
    "mapCity": "Wilmington, North Carolina, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-h1yf7w": {
    "lat": 48.78232,
    "lng": 9.17702,
    "mapCity": "Stuttgart, Baden-Wurttemberg, Germany",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-7ew8kn": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1t6ni6l": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-o0h7bo": {
    "lat": 52.37403,
    "lng": 4.88969,
    "mapCity": "Amsterdam, North Holland, The Netherlands",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "wwr-1201seu": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-2dfnav": {
    "lat": 50.85045,
    "lng": 4.34878,
    "mapCity": "Brussels, Brussels Capital, Belgium",
    "mapPrecision": "city",
    "mapBasis": "job-city"
  },
  "wwr-1m8xpzn": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ttd15c": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ox9vqq": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1ny4tut": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1v2zoaj": {
    "lat": 32.78306,
    "lng": -96.80667,
    "mapCity": "Dallas, Texas, United States",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-lm44v0": {
    "mapCity": "",
    "mapPrecision": "global",
    "mapBasis": "eligibility-region"
  },
  "wwr-1u4qywg": {
    "lat": 51.50853,
    "lng": -0.12574,
    "mapCity": "London, England, United Kingdom",
    "mapPrecision": "city",
    "mapBasis": "company-hq"
  },
  "wwr-tyr1zr": {
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
