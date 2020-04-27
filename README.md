## vueTemplateToPug

Parse .vue files template and convert to pug


### Installation

```
git clone https://github.com/tmyl123/vueTemplateToPug

cd vueTemplateToPug

npm install -g vueTemplateToPug-1.0.0.tgz
```


### Usage

```
vueTemplateToPug -p -f <filename>

❯ vueTemplateToPug -h
Usage: vueTemplateToPug [options]

Options:
  -V, --version               output the version number
  -f, --file-name [value]     Enable pug prettier. Default: true (default: "")
  -p, --pretty                Enable pug prettier. Default: true
  -s, --start-tag [value]     Start tag for parser. Default: <template> (default: "<template>")
  -e, --end-tag [value]       End tag for parser. Default: </template> (default: "</template>")
  -P, --place-holder [value]  Default: _____ (default: "_____")
  -h, --help                  display help for command

```
