---
title: Instigatr
brief: <span class="team-project">Team Project</span> – Live debate app in Express.js using Socket.IO, allowing a user to spectate on debates, or choose a side and join the queue to be allowed to speak.
permalink: /folio/instigatr/
screenshot: instigatr.jpg
demo_url: "https://instigatr.herokuapp.com/"
repo_url: "https://github.com/PsiRadish/Instigatr"
---

###Contributors:
[PsiRadish](https://github.com/PsiRadish)  
[sorenrehkopf](https://github.com/sorenrehkopf)  
[candlewoodtoby](https://github.com/candlewoodtoby)  
[mustafa206](https://github.com/mustafa206)  

###Technologies Used:
  1. Node.js + Express.js
  2. Socket.IO
  3. PostGreSQL
  4. Sequelize
  5. CSS  
        + InK
        + Sass
        + Compass
  6. jQuery
  7. jQuery custom content scroller plug-in
  8. New York Times API
  
###General Approach Taken:
  The team conducted its first meeting brainstorming ideas until finally deciding on a debate app concept.
  We then produced wireframes, model diagrams, a development roadmap and code skeleton. Each member was assigned a
  specific section of the web application to work on for the duration of development. Team met frequently to integrate
  and merge their respective sections of code and to work out any conflicts.
  
###Responsibilites/Challenges:
*Git:* I was in charge of maintaining our GitHub repository and merging pull requests, and I did the first few merges poorly, ending up with two of every middleware
(which was probably the cause of some login problems we were having at the time). Towards the end, my git repository was also corrupted, causing git command-line to hang
and GitHub for Windows to crash at the sight of it. Conveniently, this was shortly after I'd pushed to GitHub, so I didn't lose anything when wiping out the local repo
and recloning. Inconveniently, I really would have rather spent that time sleeping.  

*Socket.IO + Express.js:* Getting these two to talk to each other (instead of merely co-habitating on the same server) can be a bit of an ordeal; the details of which
change significantly with version number. Once I finally searched specifically for the versions we use, I found a method that worked, but some time was still wasted
trying to adapt old methods to the present.  

*Chat Queue:* Implementing this required spending a long time deep in code before there was anything to test 'back on the surface'. And you can't talk underwater. Ask
me how its going and my answer would be little more articulate than "blub blub blub".
