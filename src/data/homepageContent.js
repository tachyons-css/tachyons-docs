const PRINCIPLES = [
  { title: "Responsive", copy: "Everything should be 100% responsive. Your website should work regardless of a users device or screensize." },
  { title: "Readable", copy: "No matter the lighting, or the device, font-sizes should be large enough and contrast should be high enough for your users to easily read your content." },
  { title: "Performant", copy: "Code should be optimized for performance." },
  { title: "Modular", copy: "Modules > Monoliths Tachyons isn't a monolithic framework. It's a collection of self contained modules that can be mixed and matched or used independently. Only use what you need." },
  { title: "Reusable", copy: "Doing one thing well, promotes reusability and reduces redundancy in a codebase." },
  { title: "Easy", copy: "Designing in the browser should be easy. If a computer can do it, you shouldn't have to." },
]

const FEATURES = [
  { title: "Runs on <a href='https://github.com/postcss/postcss' class='link dim near-black'>Postcss</a>", copy: "A flexible plugin framework for post-processing css. <a href='https://github.com/postcss/postcss' class='link dn dim f6 db mid-gray'>View on Github</a>" },
  { title: "Mobile-first architecture", copy: "Base classes are mobile by default. Can be overridden by namespaced classes targeting larger breakpoints." },
  { title: "Layout debugging", copy: "Small css modules for debugging stacking and layout issues. Can easily be turned on or off during development." },
  { title: "Composable classes", copy: "Construct anything from complex layouts to responsive components with a series of single purpose classes." },
  { title: "Cohesive design system", copy: "Scale based on the powers of two. Starting at .25" },
  { title: "Responsive Grid", copy: "Infinitely nestable. Fully fluid. Extremely light-weight." },
  { title: "Easy to Customize and extend", copy: "Tachyons is meant to be edited and customized to meet the needs of your product. It's just css. It isn't precious. Don't be afraid to change: class names, media queries, breakpoints, or values." },
]

const TESTIMONIALS = [
  { copy: "<b>Here’s why I think designing systems with tools/frameworks like Tachyons is a Good Idea™.</b> Design Systems break as they scale (either scaling org or scaling product) because new components/variants of a component are introduced. Those variants sometimes (read: often) go undocumented, leading to duplication when that component/variant is needed (and created) again. Even when the component is documented, documenting effectively often means dozens/hundreds of instances to capture all states/variants. <br> Systems like Tachyons et al approach this problem by instead documenting and limiting *properties* of components. (I like to think of this as “subatomic” design.) You then create components by composing subatomic components (properties). Rather than creating a component and its variants, you simply have a comprehensive list of “ingredient” subatomic components. Those subatomic components can be combined in thousands of ways to create hundreds of components. The properties of those components are numerous, but constrained to a set of acceptable values (our subatomic components).", footer: "<span class='b'>Daniel Eden</span> - <i>Designer / Engineer at Dropbox</i>"},
  { copy: "After I embraced the “lots of little classes” way of styling, my anger at CSS almost completely went away and I was much more easily able to style and modify a design... you really have to try it.", footer: "<span class='b'>Dave Copeland</span> - <i>Software Engineer</i>"},
  { copy: "It turns out composing utilities together like that is a really nice way to style things. Adam Morse has taken this to its logical conclusion with Tachyons...", footer: "<span class='b'>Ben Smithett</span> - <i>Developer</i>" },
  { copy: "It seems silly at first to write code that looks like inline HTML styling but Tachyons works. Instead of wasting time hunting down and dealing with CSS overrides, I now spend time iterating on the design... which is what we're supposed to be doing in the first place :)", footer: "<span class='b'>Jason Li</span> - <i>Illustrator &amp; Designer</i>" },
  { copy: "I’ve found extremely low-level “frameworks” like BassCSS and Tachyons useful recently. They let you do the whole “just add and remove classes to create elements” thing but also don’t lock you into the constraints and issues of higher level frameworks like Bootstrap.", footer: "<span class='b'>Cole Peters</span> - <i>Designer</i>" },
  { copy: "CSS frameworks shouldn't be one-size-fits-all. Tachyons nails it with its modular approach, eliminating bloat from day one.", footer: "<span class='b'>Philip Ardeljan</span> - <i>Designer</i>" },
  { copy: "Tachyons nails everything you need from a CSS framework. Development goes faster, designs are more consistent, and best of all it’s a ton of fun to play with.", footer: "<span class='b'>Lachlan Campbell </span> - <i>Designer / Developer</i>" },
  { copy: "I never understood how people did font ratios and table layouts nicely with CSS until @mrmrs showed me the light.", footer: "<span class='b'>Nat Welch</span> - <i>Software Engineer</i>" },
  { copy: "Tachyons enabled the aboutLife team to more easily reason about, debug, and change visual styles all while thinking _less_ about CSS. We’re able to achieve our desired designs more quickly than ever before.", footer: "<span class='b'>Parsha Pourkhomami</span> - <i>Software Engineer</i>" },
]

export {
  PRINCIPLES,
  FEATURES,
  TESTIMONIALS
}

