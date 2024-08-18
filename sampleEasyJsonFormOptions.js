let sampleEasyJsonFormOptions = {
    // 'disabled' makes form and structure read-only when set true. Default is false.
    disabled: false,
    // 'fileHandler' contains the set of functions needed to deal with files that are
    // uploaded with EasyJsonForm. The files in EasyJsonForm are uploaded assynchronously and, on success,
    // a text value is returned. With this text value 2 more methods are necessary: One
    // that converts that name into a display name an the other that convert that name
    // into a http link to be clicked by the user. If fileHandler is not supported, the
    // file operations will return errors
    fileHandler: {
        // Returns a string with the name to be displayed
        displayName: (value) => EasyJsonForm.dictionary['item.file.vaule.uploaded.file'],
        // Returns a Promise (fetch can be used!) which will resolve as an object with keys
        // 'success' (boolean) and 'value' (string: value to be stored or error message)
        upload: (file) => {
            return new Promise((resolve, reject) => {
                console.log(file);
                setTimeout(()=>resolve({success: true, value: 'sampleFileName'}), 3000);
            });
        },
        // Returns the url for the link to be displayed
        url: (value) => 'https://google.com',
    },
    // 'onStructureChange' can receive a callback function which is invoked whenever there
    // is a change on the structure of the form caused by the builder
    onStructureChange: () => {
        sampleEasyJsonForm.formUpdate();
        document.querySelector('#jsonData').textContent = JSON.stringify(sampleEasyJsonForm.structureExport(), null, 4);
        document.querySelector('#rawValue').innerHTML = JSON.stringify(sampleEasyJsonForm.valueExport('raw'), null, 4);
        document.querySelector('#simpleValue').innerHTML = JSON.stringify(sampleEasyJsonForm.valueExport('simple'), null, 4);
        document.querySelector('#htmlValueExport').innerHTML = sampleEasyJsonForm.valueExport('html');
    },
    // 'onValueChange' can receive a callback function which is invoked whenever the user
    // changes the values in a form
    onValueChange: () => {
        document.querySelector('#jsonData').textContent = JSON.stringify(sampleEasyJsonForm.structureExport(), null, 4);
        document.querySelector('#rawValue').innerHTML = JSON.stringify(sampleEasyJsonForm.valueExport('raw'), null, 4);
        document.querySelector('#simpleValue').innerHTML = JSON.stringify(sampleEasyJsonForm.valueExport('simple'), null, 4);
        document.querySelector('#htmlValueExport').innerHTML = sampleEasyJsonForm.valueExport('html');
    },
};