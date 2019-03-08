/* 語音朗讀 */
Blockly.JavaScript['speak_async'] = function (block) {
  let value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  let value_setting_ = Blockly.JavaScript.valueToCode(block, 'setting_', Blockly.JavaScript.ORDER_ATOMIC);
  let code;
  if (!value_setting_) {
      code = 'await speakAsync(' + value_text_ + ', [\'zh-TW\', 1, 1]);\n';
  } else {
      code = 'await speakAsync(' + value_text_ + ',[' + value_setting_ + ']);\n';
  }
  return code;
};

Blockly.JavaScript['speak_async_setting'] = function (block) {
  let dropdown_lang_ = block.getFieldValue('lang_');
  let dropdown_pitch_ = block.getFieldValue('pitch_');
  let dropdown_rate_ = block.getFieldValue('rate_');
  let code = '"' + dropdown_lang_ + '",' + dropdown_pitch_ + ',' + dropdown_rate_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/* 語音辨識 */
Blockly.JavaScript['speech_async_recognition'] = function (block) {
  let dropdown_lang_ = block.getFieldValue('lang_');
  let code = 'await speechRecognitionAsync(\'' + dropdown_lang_ + '\');\n';
  return code;
};

Blockly.JavaScript['speech_async_recognition_value'] = function (block) {
  var code = 'speechValue_';
  return [code, Blockly.JavaScript.ORDER_NONE];
};