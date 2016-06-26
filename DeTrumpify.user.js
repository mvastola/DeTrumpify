// ==UserScript==
// @name        DeTrumpify
// @description Replaces references to Donald Trump with more accurate descriptions.
// @namespace   https://gh.vasto.la/
// @icon        https://gh.vasto.la/DeTrumpify/icons/32px.png
// @updateURL   https://gh.vasto.la/DeTrumpify/DeTrumpify.meta.js
// @downloadURL https://gh.vasto.la/DeTrumpify/DeTrumpify.user.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @include     /^https?:\/\/([^\.]+\.)?nytimes\.com(:[0-9]+)?(\/.*)?$/
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==

if(!Array.prototype.random) Array.prototype.random = function () {
  var idx = Math.floor(Math.random() * this.length);
  return this[idx];
}


DeTrumpify = window.DeTrumpify = {
  cssSelectorWhitelist: [ 
    'a', 
    'span', 
    'div', 
    'p', 
    'h1', 
    'h2', 
    'h3', 
    'h4', 
    'h5', 
    'h6', 
    'em', 
    'strong',
    'ul',
    'li',
    'nav'
  ],
  cssSelectorBlacklist: [
    'img',
    'script',
    'style',
    'head',
    'body',
    'html',
    'title',
    'meta',
    'link'
  ],
  domainCssSelectors: {},
  addDomainCssSelector: function(domain, cssSelector) {
    var domain = domain.toLowerCase();
    if(!this.domainCssSelectors[domain]) this.domainCssSelectors[domain] = [];
    if(this.domainCssSelectors[domain].indexOf(cssSelector) != -1) return;
    this.domainCssSelectors[domain].push(cssSelector);
  },
  addDomainCssSelectors: function() {
    for(var i = 1; i < arguments.length; i++) {
      this.addDomainCssSelector(arguments[0], arguments[i]);
    }
  },
  getHostCssSelectors: function() {
    var domain = document.location.hostname.toLowerCase();
    if(!this.domainCssSelectors[domain]) {
      var domain = domain.replace(/[^\.]+\.[^\.]+$/, '$&');
    }
    return this.domainCssSelectors[domain] || [];
  },
  synonyms: [],
  synonym: function() {
    return this.synonyms.random();
  },
  addSynonym: function(phrase) {
    if(this.synonyms.indexOf(phrase) != -1) return;
    this.synonyms.push(phrase);
  },
  addSynonyms: function() {
    for(var i = 0; i < arguments.length; i++) {
      this.addSynonym(arguments[i]);
    }
  },
  matcher: null
};

DeTrumpify.addDomainCssSelectors('nytimes.com', 'a', '.title', '.story-body-text', '.story-content', '.caption-text', '.headline', '.story-heading', '.headline > a', '.story-heading > a', 'article > ul > li', '.collection > a', '.collection > b', '.summary', '.kicker', '.caption', '.caption a', 'ul > li a', '.story a', );
// 

DeTrumpify.addSynonyms(
  'Cheeto Jesus',
  'Bone-in Ham',
  'Four-Time Bankruptcy Filer and Setthing Hernia Mass',
  'Sun-Dried Tomato',
  'Adult Blobfish',
  'Deflated Football',
  'Fart-Infused Lump of Raw Meat',
  'Melting Pig Carcass',
  'Disgraced Racist',
  'Talking Comb-Over',
  'Human Equivalent of Cargo Pants that Zip Away into Shorts',
  'Cheeto-Dusted Bloviator',
  'Fuzzy Meat-Wad',
  'Bag of Flour',
  'Man who Cherishes Women',
  'Futire Leader of the Free World',
  'Decomposing Ear of Corn',
  'Own Best Parody',
  'Rich Idiot Willing to Allow Garbage to Fall Out of His Mouth Without Batting a Single Golden Lash',
  'Pond Scum',
  'Noted Troll',
  'Class Clown that Everyone Wishes Would Be Quiet and Let The Class Learn',
  'Melting Businessman',
  'Wax Museum Figure on a Very Hot Day',
  'Soggy Burlap Sack',
  'Bag of Toxic Sludge',
  'Your Next President and Ruler of Life',
  'Brightly Burning Trash Fire',
  'Great Judgement-Haver',
  'Man-Sized Sebaceous Cyst',
  'Enlarged Pee-Splattered Sno Cone',
  'Empty Popcorn Bag Rotting in the Sun',
  'Man-Shaped Asbestos Insulation Board',
  'Hair Plug Swollen with Rancid Egg Whites',
  'Inside-Out Lower Intestine',
  'Dusty Barrel of Fermented Peepee',
  'Usually Reasonable Burlap Sack Full of Rancid Peeps',
  'Presidential Candidate and Bargain Bin Full of Yellowing Jean-Claude Van Damme Movies',
  'Hairpiece Come to Life',
  'Normal-Looking Human Man and Entirely Credible Choice as Future Leader of the Free World',
  'Decomposing Pumpkin Pie Inhabited by Viciious Albino Squirrels',
  'Dishrag that on Closer Inspection is Alive with Maggots',
  'Lead Paint Factory Explosion',
  'Candied Yam Riddled with Moldy Spider Carcasses',
  'Enraged Gak Spill',
  'Shriveled Pinto Bean You Had to Pluck out of Your Chipotle Burrito Basket',
  'Human-Sized Infectious Microbe',
  'Poorly-Trained Circus Organgutan',
  'Chester Cheetah Impersonator',
  'Lumbering Human-Life Tardigrade',
  'Tiny Piece of Dried Cat Poop that You Found in Your Rug',
  'Seagull Dipped in Tikka Masala',
  'Bursting Landfill of Municipal Solid Waste',
  'Mountain of Rotting Whale Blubber',
  'Sputum-Filled Orange Julius',
  'Gangrenous Gaping Wound',
  'Racist, Sexist Block of Aged Cheddar',
  'Oversized Wasp Exoskeleton Stuffed with Old Mustard',
  'Neo-Fascist Real Estate Golem',
  'Abandoned Roadside Ham Hock',
  'Bewildered, Golden-Helmeted Astronaut Who’s Just Landed on This Planet from a Distant Galaxy',
  'Monument to Human Hubris Crafted out of Rotting Spam',
  'Walking Pile of Reanimated Roadkill',
  'Heaving Carcass',
  'Stately Hot Dog Casing',
  'Flatulent Leather Couch',
  'Swollen Earthworm Gizzard',
  'Narcissistic Bowl of Rotten Gazpacho',
  'Yellowing Hunk of Masticated Gristle',
  'Human/Komodo Dragon Hybrid',
  'Blackening Scab Artfully Hiding in Your Raisin Bran',
  '“Taco truck”',
  'Man Who Could One Day Become the First Hobgoblin to Enter The White House',
  'Pair of Chapped Lips Superglued to a Hairball',
  'Horsehair Mattress Stuffed with Molding Copies of Hustler',
  'Malignant Corn Chip',
  'Human Kinder Egg Whose Inner Surprise is a Tiny Pebble of Rat Shit',
  'The Sculpture your Three-Year-Old Made but of Soggy Ground-Up Goldfish Snacks',
  'Man with the Hair of a Radioactive Skunk',
  'Roiling Cheez Whiz Mass',
  'Cryogenically Frozen Bog Man',
  'Glistening, Shouting Gristle Mass with a History of Saying Terrible and Stupid Things',
  'Screaming Giant Cheese Wedge',
  'Republican Frontrunner and 250-pound Accumulation of Rancid Beef',
  'Day-Glo Roadside Billboard About Jock Itch',
  'Temperamental Gelatinous Sponge',
  'Sentient Hate-Balloon',
  'Rumpelstiltskin Inflated with a Bike Pump and Filled with Bacteria',
  'Self-Tanning Enthusiast',
  'Enraged, Bewigged Fetus Blown up to Nightmarish Size',
  'Parental Pile of Burnt Organic Material',
  'Human-Shaped Wad of Gak',
  'Walking Irradiated Tumor',
  'Uncooked Chicken Breast',
  'KKK Rally Port-a-Potty Holding Tank',
  'Neon-Tinted Hellion',
  'Plentiful Field of Dung Piled into the Shape of a Presidential Candidate',
  'Malfunctioning Wind Turbine',
  'Seeping Fleabag',
  'Sloshing Styrofoam Takeout Container Filled with Three-Day-Old Mac and Cheese',
  'Sticky, Grabby, Cheeto-Hued Toddler with No Sense of Adult Deportment',
  'Figurative Rubber, and also Literal Rubber',
  'Carnivorous Plant Watered with Irradiated Bat Urine',
  'Sentient Waste Disposal Plant',
  'Disappointment',
  'Poorly-Drawn Fascist',
  'Racist Teratoma',
  'Lamprey Eel Spray-Painted Gold',
  'Hair That You Pluck, Causing a Cluster of Hairs to Sprout in Its Place',
  'Sunken, Corroding Soufflé',
  'Nacho Cheese Golem',
  'Undead Tangerine',
  'Cartoon Representation of Irritable Bowel Syndrome in a Pharmaceutical Ad',
  'Fossilized Meatball',
  'Horking Mole-Creature Suffering from Radioactive Spray-Tan',
  'Tattered Craigslist Sofa',
  'full-Grown Monopoly Dog Carefully Balancing a Spongecake Atop His Head',
  'Play-Doh Factory Explosion',
  'New Superfood Made of Finely-Ground Clown Wigs',
  'Unkempt Troll Doll Found Floating Facedown in a Tub of Rancid Beluga Caviar'
);

DeTrumpify.matcher = /((Mr\.?|Mister)\s)?(Don(ald|nie)?\s)?(J(\.|ohn)?\s)?(Trump\s)?/i;

jQuery.noConflict(true)(document).ready(function($) {
  console.log(DeTrumpify.getHostCssSelectors());
  console.log(DeTrumpify.synonym());
  console.log(DeTrumpify.matcher);
});
