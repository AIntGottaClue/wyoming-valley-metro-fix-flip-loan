export interface City { slug:string; name:string; county:string; title:string; description:string; intro:string; angle:string; caution:string; }
export const brand = 'Wyoming Valley Metro Fix & Flip Loan';
export const domain = 'wyomingvalleyfixandflip.loansapp.cfd';
export const formName = 'Wyoming-Valley-Metro-Fix-Flip-Loan-Form';
/** GA4 measurement ID. Leave empty until the property is created, then paste the G-XXXXXXXXXX value here. */
export const ga4Id = 'G-P16QW702F6';

type Raw = [slug:string, name:string, county:string, intro:string, angle:string, caution:string];
const raw: Raw[] = [
  ['scranton','Scranton','Lackawanna',
   'Scranton rewards investors who read a block before they buy on it. Send us the address, the work you have planned and how you expect to sell. We connect you with funding sources and move fast once the project is clear.',
   'The Electric City is full of tall twins and single-family homes stacked up the hillsides, with the Hill Section, Green Ridge and the South Side each carrying a different buyer. Pair your repair plan with recent sales on the same side of town, since a few blocks can change the finished value.',
   'Older Scranton homes often hide knob-and-tube wiring, steep basement stairs and settled foundations. Walk the house with a contractor before you lock a budget, and tell us what is still unconfirmed.'],
  ['dunmore','Dunmore','Lackawanna',
   'Dunmore sits right against Scranton, and its flips often get compared with Scranton sales. Tell us what you are buying and what you plan to change. We will connect you with funding sources that look at the project itself.',
   'The borough is dense, with narrow lots, front porches and a lot of two-story homes that have been in the same families for decades. Buyers here often want updated kitchens and baths without losing the character of the street.',
   'Lot lines are tight, so confirm what an addition or new deck can realistically do before you plan around it. A quick call to the borough about permits can save a stalled schedule.'],
  ['carbondale','Carbondale','Lackawanna',
   'Carbondale is the old Pioneer City of the anthracite fields, and its housing reflects that history. Share the property and your renovation scope with us. We connect investors with funding sources and keep the next steps simple.',
   'Homes here were built for coal-era households, often with small footprints, steep roofs and stone or block foundations. A flip that opens the layout and refreshes the mechanicals can stand apart from the original stock on the market.',
   'Ask about mine subsidence coverage and look at the foundation closely, because ground history matters in coal country. Make sure your budget reflects what the inspection finds rather than what the listing photos show.'],
  ['olyphant','Olyphant','Lackawanna',
   'Olyphant is a compact Lackawanna River borough with a steady supply of older homes. Tell us how you plan to buy, rehab and sell. We connect you with funding sources that review the deal on its merits.',
   'Many properties are modest twins and single-family homes close to the main streets, which keeps renovation scopes practical. The best-supported resale estimates come from nearby sales of updated homes of the same size.',
   'River proximity and older drainage can matter in the lower parts of town, so check the basement and the lot grade. Describe any water history up front so the conversation stays honest.'],
  ['dickson-city','Dickson City','Lackawanna',
   'Dickson City mixes older residential streets with a busy retail corridor along Business Route 6. Send us the property and the plan. We will connect you with funding sources and discuss the project plainly.',
   'The older blocks near the borough center offer classic homes, while newer pockets pull in different buyers. Your comparable sales should match the exact neighborhood you are buying in, not the retail strip nearby.',
   'Traffic noise and street position can affect how a finished home shows. Take that into account when you set the after-repair value you present.'],
  ['archbald','Archbald','Lackawanna',
   'Archbald is a former mining borough where long-held homes still change hands slowly. Tell us what you found and what you plan to do with it. We connect investors with funding sources and respond quickly.',
   'The borough has older frame and brick homes, plus newer development toward its edges, and buyers tend to compare both. Local landmarks such as the Archbald Pothole give the area its identity, but resale support still comes from recent nearby sales.',
   'Properties near old workings deserve a careful look at the foundation and any past settlement. Bring what you know to the conversation, including what the inspection could not confirm.'],
  ['clarks-summit','Clarks Summit','Lackawanna',
   'Clarks Summit and the Abingtons draw a different buyer than the older Lackawanna Valley towns. Tell us about the property and your finish plan. We connect you with funding sources that can review a higher-finish project.',
   'Homes here range from mid-century ranches to larger colonials, and buyers often expect updated systems and tidy curb appeal. A flip that matches the finish level of recent sales will usually be easier to support.',
   'Higher expectations can push a renovation budget up quickly. Keep the scope tied to what comparable homes in the Abingtons actually offer.'],
  ['taylor','Taylor','Lackawanna',
   'Taylor borders Scranton and offers a more affordable entry point for many buyers. Share the address and your repair plan with us. We will connect you with funding sources and talk through the project.',
   'Housing is mostly older single-family homes and twins on small lots, many with unfinished attics and basements that can add usable space. Buyers often compare Taylor against Scranton and Old Forge, so check sales in all three.',
   'Small lots limit what you can add outside, so most value comes from the interior. Confirm the scope against what the borough allows before relying on extra square footage.'],
  ['old-forge','Old Forge','Lackawanna',
   'Old Forge is a tight-knit borough known for its pizza, and its homes tend to stay in the family for generations. Send us what you are buying and how you plan to sell. We connect investors with funding sources.',
   'The streets are lined with older homes close to the borough center, and local buyers value a house that feels move-in ready. Strong finished sales within the borough will do more for your estimate than numbers from farther away.',
   'Hillside streets can mean retaining walls and drainage work that a listing never mentions. Look at the exterior as carefully as the interior.'],
  ['wilkes-barre','Wilkes-Barre','Luzerne',
   'Wilkes-Barre has real range, from downtown near Public Square to residential neighborhoods like the Heights and Parsons. Tell us the property and the plan. We connect you with funding sources and keep the process moving.',
   'Many blocks are older brick and frame homes close to Wilkes University and the riverfront, where rental and owner-occupant demand can overlap. Decide early whether you are renovating for an owner-occupant buyer or an investor buyer.',
   'The city sits on the Susquehanna, and flood history from Agnes in 1972 shaped how the area thinks about floodplains. Check the flood zone status of any parcel near the river and tell us what you find.'],
  ['kingston','Kingston','Luzerne',
   'Kingston sits across the Susquehanna from Wilkes-Barre and works as a quieter residential market. Send us the property and the plan for it. We connect investors with funding sources that review the whole project.',
   'The borough has well-kept older homes near Market Street and a steady buyer pool that values updated, low-maintenance houses. Comparable sales within Kingston usually tell the clearest story.',
   'Parts of town lie in the river flood zone, so look at elevation and insurance questions before you commit. Share any history of water in the basement so the plan reflects it.'],
  ['plymouth','Plymouth','Luzerne',
   'Plymouth is a former coal town on the Susquehanna with an older, affordable housing base. Tell us what you are buying and what you plan to change. We will connect you with funding sources.',
   'Many homes are older twins and single-family houses within walking distance of local shops and churches. A well-finished flip can stand out, but the resale estimate should lean on nearby completed sales.',
   'Older mechanicals and river-flats elevation both deserve a close look. Be specific about what you have verified and what still needs a contractor.'],
  ['nanticoke','Nanticoke','Luzerne',
   'Nanticoke blends an older riverfront city with the student and staff presence around Luzerne County Community College. Share your property and plan with us. We connect investors with funding sources and respond promptly.',
   'Housing is a mix of older homes near the center and newer streets on the hillside. Buyers and renters both shop here, so your renovation choices should suit the exit you have in mind.',
   'The low-lying areas near the river and the older drainage need a careful inspection. Put what you know about the site in your submission.'],
  ['pittston','Pittston','Luzerne',
   'Pittston is best known for its tomato festival and a strong local identity. Send us the address and your renovation plan. We will connect you with funding sources that can look at the project on its own terms.',
   'The city and surrounding area have older homes on hills above the Susquehanna, and buyers here tend to value location and condition together. Check recent sales in the city and in neighboring Duryea and West Pittston.',
   'Mining history runs through this part of the valley, so ask about subsidence insurance and look at the foundation. A short, honest note about the property history helps the conversation.'],
  ['hazleton','Hazleton','Luzerne',
   'Hazleton sits on a high ridge in the southern part of Luzerne County and has its own distinct market, separate from the Wyoming Valley floor. Tell us the property and plan. We connect you with funding sources.',
   'The city has older rowhomes and single-family houses built into a hillside, along with newer growth on the outskirts tied to warehouse and logistics jobs. Buyers and renters both matter here, so pick your finish level with your exit in mind.',
   'Hillside lots, retaining walls and older utilities are common in the older neighborhoods. Check them early and tell us what you learn.'],
  ['forty-fort','Forty Fort','Luzerne',
   'Forty Fort is a small, established borough on the west side of the river, known for its historic meetinghouse. Share your property and plan. We connect investors with funding sources and respond quickly.',
   'Streets of tidy single-family homes attract owner-occupants who want something finished and ready to live in. A clean, modest renovation that fits the neighborhood often reads better than a heavy luxury redo.',
   'The river and levee system affect how some parcels are treated, so confirm flood status for the exact address. A buyer will ask the same question.'],
  ['hanover-township','Hanover Township','Luzerne',
   'Hanover Township wraps around the southern edge of Wilkes-Barre and offers a mix of older neighborhoods and newer subdivisions. Tell us what you are buying. We will connect you with funding sources that review the full project.',
   'Buyers here can choose between older homes near the city line and newer builds farther out, so your comps must match the housing type. Sales from the same development are usually the best support for an estimate.',
   'Newer homes may need little more than cosmetic work, while older ones can hide deferred maintenance. Scope each house on its own condition rather than by neighborhood.'],
  ['dallas','Dallas','Luzerne',
   'Dallas anchors the Back Mountain, a suburban market with a different feel from the river towns. Send us your property and the plan for it. We connect investors with funding sources that can review a higher-finish flip.',
   'Back Mountain buyers often look for updated kitchens, finished basements and good schools, and Misericordia University adds a steady local presence. Use recent Back Mountain sales rather than Wilkes-Barre numbers.',
   'Wells, septic systems and larger lots can shape the budget in ways a city property will not. Confirm the utilities and tell us what you have verified.']
];
export const cities: City[] = raw.map(([slug,name,county,intro,angle,caution])=>({
  slug,name,county,intro,angle,caution,
  title:`Fix and Flip Loans in ${name}, PA | ${brand}`,
  description:`Fix and flip funding connections for ${name}, Pennsylvania investors. Share your purchase and renovation plan and we connect you with funding sources.`
}));

export interface Scenario { title:string; intro:string; items:string[]; outro:string }
export const priorityCities: string[] = ['scranton','wilkes-barre','hazleton','pittston'];
export const scenarios: Record<string,Scenario> = {
  scranton:{title:'A Scranton project, step by step',intro:'This is an illustration of how a project package might read for a hillside Scranton twin. It is not a real deal.',items:['The buyer sends the address, the purchase contract and a list of what the house needs: electrical panel, kitchen, bath and flooring.','A contractor walks the property and returns a written scope. The buyer adds three recent sales of updated twins on the same side of town.','We connect the project with funding sources, and the buyer answers follow-up questions about timeline and exit.'],outro:'Every project is different, and funding sources make their own decisions. Read our <a href="/fix-and-flip-project-checklist/">project checklist</a> to prepare your own package.'},
  'wilkes-barre':{title:'A Wilkes-Barre project, step by step',intro:'This is an illustration of a project package for an older brick home near the river. It is not a real deal.',items:['The buyer confirms the flood zone status of the parcel and sends it with the address, the contract and a photo set of the basement.','The renovation scope covers new mechanicals, drywall and a refreshed kitchen, with a note about the intended owner-occupant buyer.','We connect the project with funding sources and pass along any questions about the file.'],outro:'Funding sources decide eligibility and timing on their own. Our <a href="/how-fix-and-flip-funding-works-in-pennsylvania/">Pennsylvania funding guide</a> explains the full sequence.'},
  hazleton:{title:'A Hazleton project, step by step',intro:'This is an illustration of a package for a hillside Hazleton home. It is not a real deal.',items:['The buyer documents the lot grade, any retaining walls and the age of the roof, sewer line and electrical service.','The scope focuses on safety items first, then interior finishes that match recent sales in the same neighborhood.','We connect the project with funding sources and the buyer responds to follow-up questions promptly.'],outro:'No outcome is guaranteed. The <a href="/fix-and-flip-vs-hard-money/">fix and flip vs hard money</a> guide explains how this kind of funding differs from other options.'},
  pittston:{title:'A Pittston project, step by step',intro:'This is an illustration of a package for an older Pittston home near the river. It is not a real deal.',items:['The buyer asks the insurance agent about mine subsidence coverage and records the answer in the file.','The scope covers the foundation repair a contractor recommended, then a new kitchen and bath.','We connect the project with funding sources and keep the buyer informed of each next step.'],outro:'Funding sources make their own decisions on each project. Start with the <a href="/fix-and-flip-project-checklist/">project checklist</a>.'}
};
export const nearbyAreas: Record<string,string[]> = {
  scranton:['dunmore','taylor','dickson-city'], dunmore:['scranton','olyphant','taylor'],
  carbondale:['archbald','olyphant','dickson-city'], olyphant:['archbald','dickson-city','dunmore'],
  'dickson-city':['olyphant','scranton','archbald'], archbald:['olyphant','carbondale','dickson-city'],
  'clarks-summit':['scranton','taylor','dunmore'], taylor:['scranton','old-forge','dunmore'],
  'old-forge':['taylor','scranton','pittston'], 'wilkes-barre':['kingston','forty-fort','hanover-township'],
  kingston:['wilkes-barre','forty-fort','plymouth'], plymouth:['nanticoke','kingston','wilkes-barre'],
  nanticoke:['plymouth','hanover-township','wilkes-barre'], pittston:['old-forge','wilkes-barre','kingston'],
  hazleton:['nanticoke','hanover-township','wilkes-barre'], 'forty-fort':['kingston','wilkes-barre','dallas'],
  'hanover-township':['wilkes-barre','nanticoke','plymouth'], dallas:['kingston','forty-fort','wilkes-barre']
};
