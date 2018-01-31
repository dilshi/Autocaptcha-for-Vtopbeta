//chrome.runtime.sendMessage(document.getElementsByClassName('form-group col-sm-5 col-md-5 col-md-offset-3')[0].innerText);
var inp=document.getElementsByClassName('form-group col-sm-5 col-md-5 col-md-offset-3')[0].innerText;
inp=inp.replace(/^\s+|\s+$/g, '');
document.getElementById('captchaCheck').value=inp;