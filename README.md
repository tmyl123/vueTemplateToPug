## vueTemplateToPug

Parse `<template></template>` in .vue files and convert to pug. :tada: ***Capital Case Preserved*** :tada:

<br>

### Story behind..
>While there already has bunch of html to pug converter out there, I made this just for the convenience \
>when I need to convert from vue directly. And the most important part is this tool will **preserve the capital \
>case**, which lots of frontend libraries use it nowadays, as well as attribute names.
>
>If you feel like using other online converter using copy pasting, I found this is a [good one](https://html2pug.now.sh)


Any suggestions are welcome :bowtie:

<br>


### Installation
```
git clone https://github.com/tmyl123/vueTemplateToPug

cd vueTemplateToPug

npm install -g vueTemplateToPug-1.0.0.tgz
```

<br>


### Usage

```
vueTemplateToPug -p -f <filename>

Usage: index [options]

Options:
  -V, --version               output the version number
  -f, --file-name [value]     Vue file to parse.
  -p, --pretty                Enable pug prettier
  -s, --start-tag [value]     Start tag for parser. Default: <template> (default: "<template>")
  -e, --end-tag [value]       End tag for parser. Default: </template> (default: "</template>")
  -P, --place-holder [value]  Default: _____ (default: "_____")
  -h, --help                  display help for command

```

<br>


### Snippet
![image](https://github.com/tmyl123/vueTemplateToPug/blob/master/snippet.png)

<br>

#### Bonus
If you are a `vimer` as I am, you can put `map <C-p> :w<CR>:!vueTemplateToPug -p -f %<CR>` inside you `~/.vimrc`, \
so you can just hit `Ctrl + P`, and the convert result will just pop up :v:

![image](https://github.com/tmyl123/vueTemplateToPug/blob/master/vim_snippet.gif)

