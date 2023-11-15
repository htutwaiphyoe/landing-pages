# Bookmark manager - Landing Page

container does not center, so use mx-auto or
configure in tailwind.config.js file with container => center => true
also can add horizontal padding

to overwrite breakpoints, theme => screens => breakpoint: value
to overwrite container breakpoints => theme => container => screens => breakpoint: value

to add default font family => theme => fontFamily => { name: "font family" }, globals.css => @layer base => body => @apply className

to extend (not overwrite tailwind palette) colors => theme => extend => colors => key: value

type attribute in html button element has type in typescript needs to extend React.ButtonHTMLAttributes<HTMLButtonElement> in interface
