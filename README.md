# jekyll-reveal

A [Jekyll](http://jekyllrb.com) template for quickly writing slides in markdown. Based on [mdo](https://github.com/mdo)'s [Lanyon](http://lanyon.getpoole.com) theme and [hakimel](https://github.com/hakimel)'s [reveal.js](http://lab.hakim.se/reveal-js) HTML presentation framework.

This is a *very* preliminary experimental release. Please pardon the mess.

## Usage

Clone it

```
git clone git@github.com:ngoldman/jekyll-reveal.git slides
```

Create a slide

```
cd slides
touch _slides/prism-bloopers.md
$EDITOR _slides/prism-bloopers.md
```

```md
---
title: Prism Bloopers
---

# Surveillance Lols!

---

![](http://cdn3.vox-cdn.com/assets/4717906/VpmftGR__2_.gif)

haha we have fun here

---

## but seriously
```

**Important**: Edit [`_config.yml`](_config.yml) to reflect wherever you'll be pushing this to.

Push to your new gh-pages repo

```
git add origin git@github.com:NationalSecurityAgency/slides.git
git push origin gh-pages
```

Visit your new slides

```
https://nationalsecurityagency.github.io/slides/prism-bloopers/
```

## License

[MIT](LICENSE.md)

## Credit

Thanks to [mdo](https://github.com/mdo) & [hakimel](https://github.com/hakimel) for all of their work creating great tools for internet people.
