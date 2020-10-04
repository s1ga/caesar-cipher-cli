# caesar-cipher-cli

## Download Node.js 
Firstly, go to [Node.js site](https://nodejs.org/) and download LTS version of Node.js and npm.

## Downloading a repository
`git clone <repository URL>`

## Dependencies 
You need to go to the folder _caesar-cipher_ and write in terminal\
`npm install`

## Running application
Application has 4 options:
* **-a, --action**. Action you want to do: encode/decode. This is required option.
* **-s, --shift**. Shift value of your cipher. Only positive number. This is required option
* **-i, --input**. The path of existing file for reading text. If option is empty, app will use stdin(console). Error will be if there are no access to file
* **-o, --output**. Likiwese input, but this is file for writing text. If option is empty, app will use stdout(console).

## Examples
```bash
    1. node my_caesar_cli --action decode --shift 23 --input input.txt --output output.txt

    2. node my_caesar_cli -a decode -s 23 -i input.txt 

    3. node my_caesar_cli -a decode -s 23
```

*In first case(if files exists) you will get cipher to output.txt file from input.txt
*In second case(if file exists) you will get cipher from input file to stdout(console)
*In third case you will enter your text in stdin and get your cipher in stdout(console)