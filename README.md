# DeTrumpify

## Development Status
This code is pre-alpha and as of yet incomplete. 
While it is not yet operational, my hope is to find another 4 or so hours sometime in the near future to get this in working order.
This was started for fun on a Saturday night. We'll see if I get anywhere with it. (Feel free to create an issue or a pull-request if you're inclined to help out.)

## TODO
(In no particular order/priority/likelihood-of-ever-being-done.)

- [ ] Figure out how best to implement CSS selectors
  - [ ] Should we even have site specific ones?
  - [ ] Should we check literally every possible text-containing node against the Trump regex?
  - [ ] Should we even limit this functionality to certain sites or apply it to the whole internet?
    - [ ] Should we create an interface to make it easy(ier) to add/remove sites to the list of places where this script is active?
  - [ ] Should we highlight the text in a certain color (perhaps Trump's signature orange hue?) or designate in some other way that our script **improved** the page's text?
- [ ] Implement RegEx Matcher
  - [ ] Figure out how to deal with `&nbsp;`s and such (other unicode chars that might screw up the RegEx?)
  - [ ] What if there's HTML within the name (for instance 'Trump' is a hyperlink)? (Are we ok with those just not matching?)
  - [ ] Do we want to try to mimic the case of the original string? (i.e. all caps, all lowercase?)
- [ ] Figure out syntax of the DeTrumpify.meta.js file so the automated update check will work.
- [ ] Get website up! (https://gh.vasto.la/DeTrumpify)
  - [ ] Set up `gh_pages` branch 
    - [ ] Enforce HTTPS (lookup how to do)
  - [ ] Create DNS CNAME on `gh.vasto.la` to `mvastola.github.io` in Route53 on AWS
- [ ] Get script listed on https://greasyfork.org/, https://openuserjs.org/, etc.

## Open Source
Copyright 2016, Mike Vastola. 
OSS via MIT License.
