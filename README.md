# diggingforshovels.com

## File Structure

/diggingforshovels.github.io<br>
|--/assets<br>
|  |--/css<br>
|  |   |--fonts.css<br>
|  |   |--layout.css<br>
|  |   |--state.css<br>
|  |   |--theme.css<br>
|  |   |--variables.css<br>
|  |--/fonts<br>
|  |   |--lato-v25-latin-900.woff2<br>
|  |   |--lato-v25-latin-regular.woff2<br>
|  |--/images<br>
|  |   |--diggingforshovels-logo.webp<br>
|  |   |--jamison-nicosia-profile.webp<br>
|  |   |--joe-brancaleone-profile.webp<br>
|  |   |--rich-pin-profile.webp<br>
|  |--/js<br>
|  |   |--main.js<br>
|  |--/video<br>
|     |--digging-for-shovels-come-into-the-wave-original-song-video.webm<br>
|     |--digging-for-shovels-guarantees-cover-song-video.webm<br>
|--CNAME<br>
|--index.html<br>
|--README.md<br>
|--style.css<br>

## HTML

- `index.html`<br>

### Container & Wrapper classes

- Each major section has its own wrapper class to control total site width.<br>
    - `header-wrapper`<br>
    - `section-wrapper`<br>
    - `footer-wrapper`<br>

- There are multiple sections that utilize cards and those are represented<br>
  by a container class for all cards and a card class. Videos have their own<br> 
  containers.<br>
    - `cards`<br>
    - `card`<br>
    - `card-inline`<br>
    - `videos`<br>
    - `video`<br>

### Icons & Captions

- The site uses svg icons in multiple places with a combination of a common<br>
  class and a unique class for global and unique styling. The same class<br>
  structure is used for captions.<br>
  - `icon`<br>
  - `[unique-class]`<br>
    - _example:_ `class="icon instagram"`<br>

## CSS

### style.css

- Contains CSS resets and default styles.<br>

### fonts.css

- Contains @font-face to import fonts from `/assets/fonts`.<br>
- Contains global font sizes and styles.<br>
- Contains individual font sizes and styles.<br>

### layout.css

- Contains grid layout and overall site structure.<br>

### state.css

- Contains styles for active, hover and focus states.<br>

### theme.css

- Contains styles that include colors, backgrounds and borders.<br>

### variables.css

- Contains global variable definitions separated by category.<br>
    - Site Colors.<br>
    - Site Dimensions.<br>
    - Font Colors.<br>
    - Font Dimensions.<br>
    - Font Styles.<br>

## Javascript

### main.js

- Contains functions and event listeners for navigation and video.<br>
    - Toggle navigation menu.<br>
    - Toggle mute button for video.<br>