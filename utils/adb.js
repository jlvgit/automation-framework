const { driver } = require("./android");

module.exports = {
    scanBarcode: (data_string, label_type) => {
        return driver.execute("mobile: shell", [
            {
                command: "am broadcast",
                includeStderr: true,
                args: [
                    "-a com.app.data",
                    "-c android.intent.category.DEFAULT",
                    `-e com.motorolasolutions.emdk.datawedge.data_string ${data_string}`,
                    "-e com.motorolasolutions.emdk.datawedge.source scanner",
                    `-e com.motorolasolutions.emdk.datawedge.label_type ${label_type}`,
                    "-e com.motorolasolutions.emdk.datawedge.decoded_mode single_decode",
                    "-f 0",
                    "-D",
                ],
            },
        ]);
    },

    inputText: (text) => {
        return driver.execute("mobile: shell", [
            {
                command: "input text",
                includeStderr: true,
                args: [`'${text}'`],
            },
        ]);
    },
};
