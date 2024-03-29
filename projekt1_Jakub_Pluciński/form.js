function isEmpty(str) {
    return (!str || str.length === 0);
}

function validate(form) {
    checkStringAndFocus(form.elements["f_imie"], "Błędne imie");
    checkString(form.elements["f_nazwisko"].value, "złe nazwisko");
    checkEmail(form.elements["f_email"].value, "zły email");
    checkZIPCodeRegEx()(form.elements["f_kod"].value, "zły kod");
    checkString(form.elements["f_ulica"].value, "zła ulica");
    checkString(form.elements["f_miasto"].value, "zła ulica");
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        alert(msg);
        return false;
    } else return true;
}

function checkEmail(str) {
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail"); else {
        at = str.indexOf("@");
        if (at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") l = i;
            }
            if ((l < (at + 2)) || (l == str.length - 1)) alert("Nieprawidłowy e-mail");
        }
        return true;
    }
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else return true;
}

function checkZIPCodeRegEx(e) {
    var ZIPcode = /^[0-9]{2}-[0-9]{3}$/;
    if (ZIPcode.test(e.value)) {
        document.getElementById("kod").innerHTML = "OK";
        document.getElementById("kod").className = "green";
        return true;
    } else {
        document.getElementById("kod").innerHTML = "Źle";
        document.getElementById("kod").className = "red";
        return false;
    }
}

function validate2(form) {
    if (validate(form)) {
        for (i = 0; i < form.elements.length; i++) {
            form.elements[i].setAttribute("class", "correct");
        }
    } else {
        for (i = 0; i < form.elements.length; i++) {
            form.elements[i].setAttribute("class", "wrong");

        }
    }
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) e.setAttribute("style", "background-color: Aqua;");
        e = e.nextSibling;
        while (e && e.nodeType != 1) e = e.nextSibling;
        alterRows(++i, e);
    }
}