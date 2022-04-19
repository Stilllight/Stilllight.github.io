/**
 * Author: Prasanna Dhere
 * Scope: This file will contain all the client side validations
 */

// Return true if string contains special character else false..
function isSpecialCharacter(e) {
    var result = e.target.value.match(/[!@#$%^&*()-+=,.:'<>//\\?~{}`"]/g) ? true : false;
    if (result) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
}

function isSpecialCharacterOnTextChange(e) {
    var result = e.target.value.match(/[!@#$%^&*()-+=,.:'<\]\-_>//\\?~{}`"1234567890٠١٢٣٤٥٦٧٨٩[|]/g) ? true : false;
    if (result) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
}

function isSpecialCharacterOnTextChange_concern(e) {
    var result = e.target.value.match(/[!@#$%^&*()-+=:'<\]\-_>//\\?~{}`"1234567890٠١٢٣٤٥٦٧٨٩[|]/g) ? true : false;
    if (result) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
}


// RETURN TRUE IF VALUE IS THERE OTHERWISE FALSE
function requiredField(e) {
    var textValue = e.target.value.trim(' ');
    if (textValue && textValue.length > 0) { // NOT UNDEFINED
        return true;
    }
    return false;
}

function isValidEmail(text) {

    return text.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);
}

function isValidDate(e) {
    return e.value.match(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/g) ? true : false;

}

function isInteger(e) {
    console.log(e)
    var result = e.value.match(/^[-+]?[1-9]\d*$/) ? false : true;
    console.log(result)
    if (result) {
        console.log(e.value.substring(0, e.value.length - 1))
        e.value = e.value.substring(0, e.value.length - 1);
    }
}


function isSpecialCharacterOnTextWithDigitChange(e) {
    var result = e.value.match(/[!@#$%^&*()-+=,.:'<\]\-_>//\\?~{}`"٠١٢٣٤٥٦٧٨٩[|]/g) ? true : false;
    if (result) {
        e.value = e.value.substring(0, e.value.length - 1);
    }
}

function isSpecialCharacterOnTextChange_allowint(e) {
    var result = e.value.match(/[!@#$%^&*()-+=,.:'<\]\-_>//\\?~{}`"٠١٢٣٤٥٦٧٨٩[|]/g) ? true : false;
    if (result) {
        e.value = e.value.substring(0, e.value.length - 1);
    }
}

function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return "";
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//$(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
//    //this.value = this.value.replace(/[^0-9\.]/g,'');

//    $(this).val($(this).val().replace(/[^a-zA-Z0-9-\.]/g, ''));
//    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
//        event.preventDefault();
//    }
//});


$(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
    //this.value = this.value.replace(/[^0-9\.]/g,'');
   
    $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});

//$(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
//   //console.log(1)
//    $(this).val($(this).val().replace(/[^\d].+/, ""));
//    if ((event.which < 48 || event.which > 57)) {
//        event.preventDefault();
//    }
//});


$(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
    //console.log(1);
   
    //$(this).val($(this).val().replace(/[^\d].+/, ""));
    //if ((event.which < 48 || event.which > 57)) {
    //    event.preventDefault();
    //}
});


$(".allowonlyalphanumeric").on("keypress keyup blur", function (event) {
    //console.log(1)
    //var patt = new RegExp(/[!@#$%^&*(),.?":{}|<>]/g);
    //if (patt.test(str)) {
    //    return false;
    //}

    $(this).val($(this).val().replace(/[!@#$%^&*(),.?":{}|<>]/g, ""));
   
});

//$(document).ready(function () {

 
//        $('#txteid').bind('copy paste cut', function (e) {
//            e.preventDefault(); //disable cut,copy,paste
//        });
    

   
//        $('#txteid').on('drop', function (event) {
//            event.preventDefault();
//        });
    


 
//        $("#txteid").keyup(function (event) {
           
//            //var oldval = $(event.target).val();
//            //var newVal = "";
//            //for (var index = 0; index < oldval.length; index++) {
//            //    var keyCode = oldval.charCodeAt(index);
//            //    var valLen = newVal.length;
//            //    if (valLen >= 18 || !((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105 || keyCode == 8))) {
//            //        continue;
//            //    }

//            //    if (valLen == 3 || valLen == 8 || valLen == 16) {
//            //        newVal += "-";
//            //    }
//            //    newVal += String.fromCharCode(keyCode < 58 ? keyCode : keyCode - 48);

//            //}

//            //$(event.target).val(newVal);

//            var oldval = $(event.target).val();
//            var newVal = "";
//            for (var index = 0; index < oldval.length; index++) {
//                var keyCode = oldval.charCodeAt(index);
//                var valLen = newVal.length;
//                if (valLen >= 18 || !((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))) {
//                    continue;
//                }


//                if (valLen == 3 || valLen == 8 || valLen == 16) {
//                    newVal += "-";
//                }
//                newVal += String.fromCharCode(keyCode < 58 ? keyCode : keyCode - 48);

//            }

//            $(event.target).val(newVal);

//        });

//        $("#txteid").keydown(function (event) {

//            //var keyCode = (event.which) ? event.which : event.keyCode
//            //if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)))
//            //    return false;
//            //return true;

//            var keyCode = (event.which) ? event.which : event.keyCode
//            if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || (keyCode == 8)))
//                return false;
//            return true;

//        });
   

//});



$("document").ready(function () {
    
    $('input[type="radio"]').on('change', function (e) {
        if ($(this).val() == 'MRN') {
            // alert($(this).val() );
            //$('#txtpassport').hide();
            //$('#TXT_MRN').show();
            //$('#txteid').hide();
            //document.getElementById('txtpassport').value = '';
            //document.getElementById('TXT_MRN').value = '';
            //document.getElementById('txteid').value = '';
            document.getElementById('txteid').value = '';
            $('#txteid').show();
            $('#Lbldob').hide();
            $('#txtdob').hide();

            $('*').off('keyup keydown keypress');


            //$('#txteid').bind('copy paste cut', function (e) {
            //    e.preventDefault(); //disable cut,copy,paste
            //});

            //$('#txteid').on('drop', function (event) {
            //    event.preventDefault();
            //});

            $("#txteid").keyup(function (event) {
                $(this).val($(this).val().replace(/[^\d].+/, ""));
                //if ((event.which < 48 || event.which > 57)) {
                //    event.preventDefault();
                //}
            });

            //$("#txteid").keydown(function (event) {
            //    $(this).val($(this).val().replace(/[^\d].+/, ""));
            //    if ((event.which < 48 || event.which > 57) || (event.which == 8)) {
            //        event.preventDefault();
            //    }
            //});



            $("#txteid").keydown(function (event) {
                var keyCode = (event.which) ? event.which : event.keyCode
                //if (!((keyCode >= 48 && keyCode <= 57) || (keyCode == 8) ))
                if (!((keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (event.ctrlKey && (event.keyCode == 86 || event.keyCode == 118))))
                    return false;
                return true;
            });
        }
            if ($(this).val() == 'Passport Number') {
            //    alert('h');
                //$('#txtpassport').show();
                //$('#TXT_MRN').hide();
                //$('#txteid').hide();
                //document.getElementById('txtpassport').value = '';
                //document.getElementById('TXT_MRN').value = '';
                //document.getElementById('txteid').value = '';
                document.getElementById('txteid').value = '';
                $('#txteid').show();
                $('*').off('keyup keydown keypress');
                //$('#txteid').bind('copy paste cut', function (e) {
                //    e.preventDefault(); //disable cut,copy,paste
                //});

                //$('#txteid').on('drop', function (event) {
                //    event.preventDefault();
                //});

                $('#Lbldob').show();
                $('#txtdob').show();
                
                $("#txteid").keyup(function (event) {

                   // $(this).val($(this).val().replace(/^[A-Za-z0-9]+$/, ""));
                       var k = (event.which) ? event.which : event.keyCode
                     if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)))
                           event.preventDefault();
                    
                });

                $("#txtdob").keyup(function (event) {
                    //   alert('eid');
                    var oldval = $(event.target).val();
                    var newVal = "";
                    for (var index = 0; index < oldval.length; index++) {
                        var keyCode = oldval.charCodeAt(index);
                        var valLen = newVal.length;

                        if (valLen >= 18 || !((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || (event.ctrlKey && (event.keyCode == 86 || event.keyCode == 118)))) {
                            continue;
                        }

                        if (valLen == 2 || valLen == 5 ) {
                            newVal += "-";
                        }
                        newVal += String.fromCharCode(keyCode < 58 ? keyCode : keyCode - 48);
                    }
                    $(event.target).val(newVal);
                    return true;
                });

                //$("#txteid").keydown(function (event) {
                //    $(this).val($(this).val().replace(/^[A-Za-z0-9]+$/, ""));
                //   var keyCode = (event.which) ? event.which : event.keyCode

                //   if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode > 96 && keyCode < 123) || (keyCode == 8)))
                //       event.preventDefault();
                    
                //    //if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode > 96 && keyCode < 123)|| (keyCode == 8)))
                //    //        return false;
                //    //return true;
                //});

                $("#txteid").keydown(function (event) {
                    var keyCode = (event.which) ? event.which : event.keyCode
                    if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode > 96 && keyCode < 123) || (keyCode == 8)))
                        return false;
                    return true;
                });
            }
            if ($(this).val() == 'Emirates Id') {
                $('#txtpassport').hide();
                $('#TXT_MRN').hide();
                $('#Lbldob').hide();
                $('#txtdob').hide();
                $('#txteid').show();
                document.getElementById('txteid').value = '';

                $('*').off('keyup keydown keypress');

                //document.getElementById('txtpassport').value = '';
                //document.getElementById('TXT_MRN').value = '';
                //document.getElementById('txteid').value = '';

                //$('#txteid').bind('copy paste cut', function (e) {
                //    e.preventDefault(); //disable cut,copy,paste
                //});

                //$('#txteid').on('drop', function (event) {
                //    event.preventDefault();
                //});
              

                $("#txteid").keyup(function (event) {
                 //   alert('eid');
                    var oldval = $(event.target).val();
                    var newVal = "";
                    for (var index = 0; index < oldval.length; index++) {
                        var keyCode = oldval.charCodeAt(index);
                        var valLen = newVal.length;
                        //      if (valLen >= 18 || !((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))) {
                        if (valLen >= 18 || !((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || (event.ctrlKey && (event.keyCode == 86 || event.keyCode == 118)))) {                          
                            continue;
                        }

                        if (valLen == 3 || valLen == 8 || valLen == 16) {
                            newVal += "-";
                        }
                        newVal += String.fromCharCode(keyCode < 58 ? keyCode : keyCode - 48);
                    }
                    $(event.target).val(newVal);
                    return true;
                });
               
                $("#txteid").keydown(function (event) {                 
                        var keyCode = (event.which) ? event.which : event.keyCode
                        if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || (keyCode == 8)))
                            return false;
                        return true;                   
                });
            }
         
            return false;
        });    
   
});



//$("document").ready(function () {
//    $("#RadioButtonList1 input").change(function () {
//        if ($(this).val() == 'MRN') {
//            $('#txtpassport').hide();
//            $('#TXT_MRN').show();
//            $('#txteid').hide();
//            //document.getElementById('txtpassport').value = '';
//            //document.getElementById('TXT_MRN').value = '';
//            //document.getElementById('txteid').value = '';
//        }
//        else if ($(this).val() == 'Passport Number') {
//            $('#txtpassport').show();
//            $('#TXT_MRN').hide();
//            $('#txteid').hide();
//            //document.getElementById('txtpassport').value = '';
//            //document.getElementById('TXT_MRN').value = '';
//            //document.getElementById('txteid').value = '';
//        }
//        else if ($(this).val() == 'Emirates Id') {
//            $('#txtpassport').hide();
//            $('#TXT_MRN').hide();
//            $('#txteid').show();
//            //document.getElementById('txtpassport').value = '';
//            //document.getElementById('TXT_MRN').value = '';
//            //document.getElementById('txteid').value = '';
           
//        }
//        else {

//            $('#txtpassport').hide();
//            $('#TXT_MRN').hide();
//            $('#txteid').hide();
//            //document.getElementById('txtpassport').value = '';
//            //document.getElementById('TXT_MRN').value = '';
//            //document.getElementById('txteid').value = '';

//        }
//        return false;
//    });
//});


// RETURN THE CURRENT LANGUAGE
function getCurrentLanguage() {
    var current_lang = getParameterByName("FormLanguage");
    var par_lang = "English";
    if (current_lang.length == 0 || current_lang.toLowerCase() === "english") {
        par_lang = "English";
    }
    else if (current_lang.toLowerCase() === "arabic") {
        par_lang = "Arabic";
    }
    return par_lang;
}