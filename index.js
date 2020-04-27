#!/usr/bin/env node
const fs = require("fs");
const prettier = require("prettier");
const html2jade = require("html2jade");
const program = require("commander");

program
    .version("1.0.0")
    .usage("[options]")
    .requiredOption("-f, --file-name [value]", "Vue file to parse.")
    .option("-p, --pretty", "Enable pug prettier")
    .option(
        "-s, --start-tag [value]",
        "Start tag for parser. Default: <template>",
        "<template>"
    )
    .option(
        "-e, --end-tag [value]",
        "End tag for parser. Default: </template>",
        "</template>"
    )
    .option("-P, --place-holder [value]", "Default: _____", "_____")
    .parse(process.argv);

const { fileName, pretty, startTag, endTag, placeHolder } = program;
// console.log(fileName, pretty, startTag, endTag, placeHolder);

if (!process.argv.slice(2).length || !fileName) {
    program.outputHelp();

    process.exit();
}

main();

async function main() {
    let result = await vueToPug(fileName);
    console.log(result);
}

async function vueToPug(fileName) {
    // Read file
    let htmlText = fs.readFileSync(fileName, "utf-8");

    // Parse html between <template></template>
    let parsedHtmlText = parseTemplateTag(htmlText);
    parsedHtmlText = replaceCapitalToPlaceholder(parsedHtmlText);

    // Transfer to pug
    let pugText = await convertHtmlToPug(parsedHtmlText);
    pugText = replacePlaceholderToCapital(pugText);
    if (!pretty) return pugText;

    // Prettify pug, if needed
    let prettyPugText = prettierPug(pugText);

    return prettyPugText;
}

function parseTemplateTag(htmlText) {
    let firstTemplateIndex = htmlText.indexOf(startTag);
    let lastTemplateIndex = htmlText.lastIndexOf(endTag);

    let newtext = htmlText.slice(
        firstTemplateIndex + startTag.length,
        lastTemplateIndex
    );

    return newtext;
}

function convertHtmlToPug(htmlText) {
    return new Promise(function (resolve, reject) {
        let options = {
            double: true,
            nspaces: 4,
            donotencode: true,
            bodyless: true,
            noattrcomma: true,
            noemptypipe: true
        };
        html2jade.convertHtml(htmlText, options, function (err, jade) {
            if (err) console.log(err);
            resolve(jade);
        });
    });
}

function prettierPug(pugText) {
    try {
        let result = prettier.format(pugText, {
            parser: "pug",
            tabWidth: 4,
            attributeSeparator: "as-needed"
        });
        return result;
    } catch (err) {
        console.log("prettier failed");
        console.log(err);
        return pugText;
    }
}

function replaceCapitalToPlaceholder(text) {
    let re = new RegExp("[A-Z]", "g");
    let replaceText = text.replace(re, function (match, offset) {
        return match.toLowerCase() + placeHolder;
    });
    return replaceText;
}

function replacePlaceholderToCapital(text) {
    let re = new RegExp("[a-z]" + placeHolder, "g");
    let replaceText = text.replace(re, function (match, offset) {
        return match.slice(0, 1).toUpperCase();
    });
    return replaceText;
}
