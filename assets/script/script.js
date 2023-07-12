function taxCalculator() {
    const validate = document.querySelector("#horsepower").value;
    if (validate === '' || validate == undefined) {
        alert('Моля въведете конски сили!')
    } else {
        const horsePower = document.querySelector('#horsepower').value;
        const year = document.querySelector('#year').value;
        const euro = document.querySelector('#euro').value;
        const totalPricePay = document.getElementById('price');

        const kilowatt = Math.floor(horsePower / 1.34102209);

        let price = 0;

        if (kilowatt <= 55) {
            price = kilowatt * 0.60;
        } else if (kilowatt > 55 && kilowatt <= 74) {
            price = kilowatt * 0.81;
        } else if (kilowatt > 74 && kilowatt <= 110) {
            price = kilowatt * 1.50;
        } else if (kilowatt > 110 && kilowatt <= 150) {
            price = kilowatt * 2.00;
        } else if (kilowatt > 150 && kilowatt <= 245) {
            price = kilowatt * 2.00;
        } else {
            price = kilowatt * 2.10;
        }

        if (year === "Над 20 години") {
            price = price * 1.1;
        } else if (year === "Над 15 до 20 години") {
            price = price * 1.0;
        } else if (year === "Над 10 до 15 години") {
            price = price * 1.3;
        } else if (year === "Над 5 до 10 години") {
            price = price * 1.5;
        } else if (year === "До 5 години включително") {
            price = price * 2.3;
        }

        if (euro === "Без Екологична категория") {
            sum = sum * 1.1;
        } else if (euro === "Евро 1") {
            sum = sum * 1.1;

        } else if (euro === "Евро 2") {
            price = price * 1.1;
        } else if (euro === "Евро 3") {
            price = price * 1.0;
        } else if (euro === "Евро 4") {
            price = price * 0.9;
        } else if (euro === "Евро 5") {
            price = price * 0.8;
        } else if (euro === "Евро 6 или EEV") {
            price = price * 0.6;
        }

        const totalPrice = price.toFixed(2);

        totalPricePay.innerHTML = totalPrice;
    }


}



function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            if (inputFilter(this.value)) {
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }

                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            }
            else if (this.hasOwnProperty("oldValue")) {
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
            else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("horsepower"), function (value) {
    return /^\d*\d*$/.test(value);
}, "Може да използвате само числа!");


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    taxCalculator()
})