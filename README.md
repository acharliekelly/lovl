# LOVL - Landing Page


## Notes

* My landing page is split up into React components, but none of them do anything. Someone will still have to add behavior.
* I used the exact pixel measurements from the XD file, so the page is non-responsive. Which is probably OK for now since you said it doesn't need to work on mobile, but going forward the pages should handle resizing. Right now it looks like the XD reference on screens that are 1200px and larger, but smaller screens just get cut off.
* I don't have access to Adobe's premium resources, so the fonts don't look right. Adding the Adobe webfonts should fix that.
* Going forward, I would recommend using a react-enabled material design library (ie Bootstrap, Materialize, etc) - it will make it a lot easier to maintain a consistent appearance, as well as do a better job with page sizing. I didn't use one because that decision is above my pay grade, so my CSS is pretty random and would be hard to maintain over an entire site. Also, I thought maybe Adobe provides some kind of MD, since there is clearly a consistent style in all the XD pages.
