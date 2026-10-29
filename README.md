# The Magic of Christmas — website refresh

A static, multi-page refresh of **https://www.themagicofchristmas.org/** for The Magic of Christmas, a 100% volunteer charity based in Calgary (Charitable Society #139636369).

Live preview: https://leo-mcg.github.io/themagicofchristmas/

## Content source
Every page's text, photos, logos, addresses and phone numbers are taken from the charity's current WordPress site (crawled October 2026). We didn't add any new facts, figures, names or testimonials. Photos and logos are the originals, re-encoded as WebP. The only generated artwork is decorative: the reindeer-bus illustration, the icons and the snow effect.

The events list is a snapshot of the live calendar from the build date. Each event links back to its page on the current site.

## External services (unchanged from the current site)
- **Donations:** CanadaHelps embedded donation form (page id 54362), plus the CanadaHelps peer-to-peer fundraiser link
- **Volunteer registration:** FormAssembly (moccalgary.tfaforms.net/24)
- **Volunteer shifts:** Salesforce Volunteers job calendar and listing
- **Contact, Santa party, referral and corporate volunteer forms:** Microsoft Forms embeds
- **Donation box and drop-off map:** Google My Maps embed
- **Video:** YouTube (click-to-load, youtube-nocookie)
- **Recycling:** SkipTheDepot
- **PDFs** (wish list, donation box poster, sponsorship package), the request-a-donation-box form, the volunteer release form and the events calendar are linked on themagicofchristmas.org

## Stack
Plain HTML, CSS and JS with no build step needed to serve. Hosted on GitHub Pages (`.nojekyll`). All links are relative.

Website by Leo-McG.
