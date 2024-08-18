let sampleEasyJsonFormStructure =
    [
        {"type":"text","label":"This is a character restricted text field","customattribute":"Custom attribute for character restricted text","mandatory":true,"properties":{"length":{"measure":"bycharacter","min":2,"max":100}},"value":"Test value for character restricted text area"},
        {"type":"text","label":"This is a word restricted text field","customattribute":"Custom attribute word restricted for text","mandatory":true,"properties":{"length":{"measure":"byword","min":2,"max":100}},"value":"Test value for word restricted text area"},
        {"type":"text","label":"This is an unrestricted text field","customattribute":"Custom attribute for unrestricted text","mandatory":true,"properties":{"length":{"measure":"no","min":2,"max":100}},"value":"Test value for unrestricted text area"},
        {"type":"textgroup","label":"This is a text group field","customattribute":"Custom attribute for text group","mandatory":true,"properties":{"items":["a","b","c"]},"value":['å','∫','ç']},
        {"type":"number","label":"This is a number field","customattribute":"Custom attribute for number","mandatory":true,"properties":null,"value":null},
        {"type":"singlechoice","label":"This is a single choice field","customattribute":"Custom attribute for single choice","mandatory":true,"properties":{"items":["m","n","o"]},"value":"1"},
        {"type":"multiplechoice","label":"This is a multiple choice field","customattribute":"Custom attribute for multiple choice","mandatory":true,"properties":{"items":["x","y","z"]},"value":["0","1","0"]},
        {"type":"file","label":"This is a file field","customattribute":"Custom attribute for file","mandatory":true,"properties":{"filetypes":["application/pdf","image/jpeg","image/bmp","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-powerpoint"],"maxsize":42},"value":null},
        {"type":"file","label":"This is another file field","customattribute":"Custom attribute for another file","mandatory":true,"properties":{"filetypes":["image/bmp","image/gif"],"maxsize":42},"value":'somefile'},
    ];