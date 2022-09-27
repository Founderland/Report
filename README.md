## Setup

install CLI 
https://tailwindcss.com/docs/installation


## Build process

Local:
- run build 
> npx tailwindcss -i ./assets/styles/input.css -o ./assets/styles/output.css --watch

Remote: 
- Github builds the jekyll website remotely using its Actions workflows (typically takes around a minute)
    - 'pages-build-deployment' is the relevant action
- you can watch build process here: https://github.com/Founderland/Report/actions

## Exporting PDFs

- export: print to pdf
    - export environment 
        - Firefox -> save to PDF
        - MacOS (tho Firefox export should also work on Windows)
    - settings
        - paper size: A4
        - scale: 100 
        - margins: none
        - format: original 
        - print headers and footers: unchecked
        - print backgrounds: checked

## editing content 

    - where to find everything ...
        - includes 


# Assets for export 

https://www.figma.com/file/DJnMJG3xuEQHfBw8H3RmKi/Report-Mockups?node-id=288%3A1659 