/* 語音朗讀 */
Blockly.Blocks['speak_async_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("語言")
            .appendField(new Blockly.FieldDropdown([
                ["中文", "zh-TW"],
                ["英文", "en-US"],
                ["日文", "ja-JP"]
            ]), "lang_")
            .appendField(" 音調")
            .appendField(new Blockly.FieldDropdown([
                ["尖銳", "2"],
                ["高昂", "1.5"],
                ["正常", "1"],
                ["低沈", "0.5"],
                ["沙啞", "0.1"]
            ]), "pitch_")
            .appendField(" 速度")
            .appendField(new Blockly.FieldDropdown([
                ["很快", "2"],
                ["快", "1.5"],
                ["正常", "1"],
                ["慢", "0.7"],
                ["很慢", "0.5"]
            ]), "rate_");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip('');
        this.setColour(45);
        this.setHelpUrl('');
    }
};

/* 語音辨識 */
Blockly.Blocks['speech_recognition'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("語音辨識，語言")
            .appendField(new Blockly.FieldDropdown([["中文", "cmn-Hant-TW"], ["英文", "en-US"]]), "lang_")
            .appendField(" ( 僅支援 Chrome、Android )");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(40);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setCommentText("語音辨識之後，才會繼續執行下方程式");
    }
};

Blockly.Blocks['speech_recognition_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("語音辨識的文字");
        this.setOutput(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};