
**Ric Lavers First portfolio**

* Version
ruby 2.4.1p111

* Dependencies
    Bootstrap 4.0

* Database
 postgreSQL

##**Goal**
This site was created to host my (Ric Lavers) personal website, to present a portfolio and professional face to the internet.

##**Audience**
The audience are people who are potentially unknown to me and may require software development. Therefore, it’s important that the site demonstrates competent web development skill quickly and concisely, whilst I present links for greater research into myself I’m careful not to overwhelm the user. The Call To Action is to contact me to discuss their project or issues, this way I can help them find a solution, including recommending a developer who may be able to help them (if my skills are not right or my time short).

##**Design Decisions**
Given the short period of time for the project I decided to create a basic website that allows me to build upon the structure in the future. This was good planning as due to technical issues and illness I lost around 3 days of development time.
The layout was based upon a One-page stroller style website, however for affect the menu was custom built to provide a unique user experience, with the page sitting above the fold and the contact box below the fold.
The font choice was the google font of “Poppin”, this was chosen for two main reasons. Firstly, as a google font accessibility is not an issue. Secondly, the font is one of the few fonts that don’t have a hat on the lower case ‘a’ which is a strong personal preference, and this style of ‘a’ has been used in past businesses. The font is also very clean and matches the simplicity of the website.
Although a color scheme was originally chosen, as the project progressed a pallet of black, white and grey emerged as a stronger choice. Firstly, it helped reinforce the clean and simple idea previously mentioned. Secondly, the sites use of icons became a focus point of the site, highlighting skills education and where to go next. The contrast of the a colored icons against the site grey scale draws the eye as a feature.
Although the layout was fairly basic, Bootstrap was used to ensure ease of future development. From the Bootstrap components included were ‘Jumbotron’ and screen sized column responsiveness.

##**Logo**
The logo created is based upon a simple guilloche design. This style of design is present throughout my digital artwork and concept that I’m still investigating its potential. The center of the logo was used in the favicon, as the favicon must be square it presented the first challenge of a rectangular logo.
The logo can be found in the rails public folder

##**Usability Heuristics**
*HTML validator*
The validator returned some errors that were left unchanged.
-	&emsp | signs have been used to indent paragraphs and keywords the recognize the code as ‘not defined and no default entity’ and ‘no system identifier’. However the symbol works across browsers.
-	Short tags| The validator does not like the use of short tag html whist SVG and line breaks often use short breaks. This is likely not a problem as it only affects much older browsers (pre 2010).
-	Container tags| For some reason the validators flagged a number of <div class=”container”> tags noting that the document had elements possibly belonged in the head.
-	Double quotes| The validator placed warning for using double quotes for class names.

*User experience*
Given the simplicity of the site map (being one page) the user experience is relatively simple. The user may have a natural tendency to scroll, this will lead them to the contact box (and trigger the animation), If the user takes the page as a website that is above the fold the contact button will smooth-scroll to the contact box(given plugins work).
The menu is designed in a obvious manner, and is ordered in a way manner that is typically expected.

*Browser Issues (site is optimised for Chrome)*
(internet explorer was tested using https://netrenderer.com)
- smooth scroll only works | firefox
- fading greyscale on hover didn't work | Safari & IE
- embedded form input in SVG not working | firefox, Safari & IE
- Pixel fragmentation | IE
- SVG not loading | IE
- jQuery menu not active | IE
- not responsive | IE
##**WireFrame**
You will find a copy of the initial WireFrame within the public folder of the rails project. Originally the Wireframe was to set up to be a >>
##**Features to add**
- additional site pages including
    - gallery of artworks/ designs
    - Event page featuring event portfolio
    - Blog
