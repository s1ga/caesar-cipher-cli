# caesar-cipher-cli

## Downloading a repository
`git clone <repository URL>`

## Dependencies 
You need to go to the folder _caesar-cipher_ and write in terminal\
`npm install`

## Running application
Application has 4 options:
* **-a, --action**. Action you want to do: encode/decode. This is required option.\
* **-s, --shift**. Shift value of your cipher. Only positive number. This is required option\
 **-i, --input**. The path of existing file for reading text. If option is empty, app will use stdout(console). Error will be if there are no access to file\
* **-o, --output**. Likiwese input, but this is file for writing text. If option is empty, app will use stdin(console).\