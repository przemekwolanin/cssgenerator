let DOMStrings = {
    inpChngV: '#button--change-value',
    valueOfBtn: '#preview__button button',
    valueOfAllRadius: '#border-radius-allc',
    radiusInpTxt: '#border-radius-allc-num',
    valueOfTopLeftRadius: '#border-radius-topleft',
    radiusTopLeftInpTxt: '#border-radius-topleft-num',
    valueOfTopRightRadius: '#border-radius-topright',
    radiusTopRightInpTxt: '#border-radius-topright-num',
    valueOfBottomLeftRadius: '#border-radius-bottomleft',
    radiusBottomLeftInpTxt: '#border-radius-bottomleft-num',
    valueOfBottomRightRadius: '#border-radius-bottomright',
    radiusBottomRightInpTxt: '#border-radius-bottomright-num',
    elemBgColor: '#settings__buton--bg-color',
    elemTxtolor: '#settings__buton--txt-color',
    elemBrdColor: '#settings__buton--brd-color',
    borderWidthRange: '#border-width',
    borderWidthInp: '#border-width-num',
    borderStyleInp: '#border-style-select',
    fontSizeInp: '#button--change-fontsize'
}

let $ = function(selector) {
    return document.querySelector(selector);
}

let initBtn = function() {
    // init button css values
    let cssStyle = $(DOMStrings.valueOfBtn).style;
    cssStyle.fontSize = '36px';
    cssStyle.backgroundColor = '#ff0000';
    cssStyle.textAlign = 'center';
    cssStyle.color = '#fff';
    cssStyle.fontWeight = 'bold';
    cssStyle.paddingBottom = '20px';
    cssStyle.paddingTop = '20px';
    cssStyle.paddingLeft = '50px';
    cssStyle.paddingRight = '50px';
    cssStyle.borderWidth = '1px';
    cssStyle.borderStyle = 'solid';
    cssStyle.borderColor = '#000';
}

let chngBtnValue = function() {
    let getV = $(DOMStrings.inpChngV).value;
    let btnV = $(DOMStrings.valueOfBtn);
    let inpV = $(DOMStrings.valueOfInp)
    btnV.textContent = getV;
    if(getV === '') {
        btnV.textContent = 'Text';
    }
}

let chngBtnBrdRad = function () {
    let getV = $(DOMStrings.valueOfAllRadius).value;
    $(DOMStrings.valueOfBtn).style.borderRadius = parseInt(getV) + 'px';
    $(DOMStrings.radiusInpTxt).value = parseInt(getV);
    chngBtnBrdRadAllParts(getV);
}

let chngBtnBrdRadAllParts = function(val) {
    // Add value to rest of the fields
    $(DOMStrings.valueOfTopLeftRadius).value = parseInt(val);
    $(DOMStrings.radiusTopLeftInpTxt).value = parseInt(val);
    $(DOMStrings.valueOfTopRightRadius).value = parseInt(val);
    $(DOMStrings.radiusTopRightInpTxt).value = parseInt(val);
    $(DOMStrings.valueOfBottomLeftRadius).value = parseInt(val);
    $(DOMStrings.radiusBottomLeftInpTxt).value = parseInt(val);
    $(DOMStrings.valueOfBottomRightRadius).value = parseInt(val);
    $(DOMStrings.radiusBottomRightInpTxt).value = parseInt(val);
};

let chngBtnBrdRadN = function() {
    let getV = $(DOMStrings.radiusInpTxt).value;
    getV = parseInt(getV)
    if(isNaN(getV)) {
        getV = 0;
    } else if (getV > 100) {
        getV = 100;
        $(DOMStrings.radiusInpTxt).value = 100;
    }
    $(DOMStrings.valueOfBtn).style.borderRadius = parseInt(getV) + 'px';
    $(DOMStrings.valueOfAllRadius).value = getV;

    chngBtnBrdRadAllParts(getV);
}

let chngBtnBrdRadCorners = function(side) {
    let getV;
    if (side === 'topleft') {
        getV = $(DOMStrings.valueOfTopLeftRadius).value;
        $(DOMStrings.valueOfBtn).style.borderTopLeftRadius = parseInt(getV) + 'px';
        $(DOMStrings.radiusTopLeftInpTxt).value = parseInt(getV);
    } else if (side === 'topright') {
        getV = $(DOMStrings.valueOfTopRightRadius).value;
        $(DOMStrings.valueOfBtn).style.borderTopRightRadius = parseInt(getV) + 'px';
        $(DOMStrings.radiusTopRightInpTxt).value = parseInt(getV);
    } else if (side === 'bottomleft') {
        getV = $(DOMStrings.valueOfBottomLeftRadius).value;
        $(DOMStrings.valueOfBtn).style.borderBottomLeftRadius = parseInt(getV) + 'px';
        $(DOMStrings.radiusBottomLeftInpTxt).value = parseInt(getV);
    } else if (side === 'bottomright') {
        getV = $(DOMStrings.valueOfBottomRightRadius).value;
        $(DOMStrings.valueOfBtn).style.borderBottomRightRadius = parseInt(getV) + 'px';
        $(DOMStrings.radiusBottomRightInpTxt).value = parseInt(getV);
    }
};

let chngBtnBrdRadCornersN = function(side) {
    let getV;

    if(side === 'topleft') {
        getV = $(DOMStrings.radiusTopLeftInpTxt).value;
    } else if (side === 'topright') {
        getV = $(DOMStrings.radiusTopRightInpTxt).value;
    } else if (side === 'bottomleft') {
        getV = $(DOMStrings.radiusBottomLeftInpTxt).value;
    } else if (side === 'bottomright') {
        getV = $(DOMStrings.radiusBottomRightInpTxt).value;
    }
    getV = parseInt(getV)
    if(isNaN(getV)) {
        getV = 0;
    }
    if(side === 'topleft') {
        if(getV > 100) {getV = 100; $(DOMStrings.radiusTopLeftInpTxt).value = 100;}
        $(DOMStrings.valueOfBtn).style.borderTopLeftRadius = parseInt(getV) + 'px';
        $(DOMStrings.valueOfTopLeftRadius).value = getV;
    } else if (side === 'topright') {
        if(getV > 100) {getV = 100; $(DOMStrings.radiusTopRightInpTxt).value = 100;}
        $(DOMStrings.valueOfBtn).style.borderTopRightRadius = parseInt(getV) + 'px';
        $(DOMStrings.valueOfTopRightRadius).value = getV;
    } else if (side === 'bottomleft') {
        if(getV > 100) {getV = 100; $(DOMStrings.radiusBottomLeftInpTxt).value = 100;}
        $(DOMStrings.valueOfBtn).style.radiusBottomLeftInpTxt = parseInt(getV) + 'px';
        $(DOMStrings.valueOfBottomLeftRadius).value = getV;
    } else if (side === 'bottomright') {
        if(getV > 100) {getV = 100; $(DOMStrings.radiusBottomRightInpTxt).value = 100;}
        $(DOMStrings.valueOfBtn).style.borderBottomLeftRadius = parseInt(getV) + 'px';
        $(DOMStrings.valueOfBottomRightRadius).value = getV;
    }
}

let chngBtnBgColor = function(el) {
    let getV;
    if(el === 'backgroundColor') {
        getV = $(DOMStrings.elemBgColor).value;
        $(DOMStrings.valueOfBtn).style.backgroundColor = getV;
    } else if (el === 'textColor') {
        getV = $(DOMStrings.elemTxtolor).value;
        $(DOMStrings.valueOfBtn).style.color = getV;
    } else if(el === 'borderColor') {
        getV = $(DOMStrings.elemBrdColor).value;
        $(DOMStrings.valueOfBtn).style.borderColor = getV;
    }
}

let chngBtnWid = function() {
    let getV = $(DOMStrings.borderWidthRange).value;
    $(DOMStrings.valueOfBtn).style.borderWidth = parseInt(getV) + 'px';
    $(DOMStrings.borderWidthInp).value = parseInt(getV);
}

let chngBtnWidN = function() {
    let getV = $(DOMStrings.borderWidthInp).value;
    getV = parseInt(getV)
    if(isNaN(getV)) {
        getV = 0;
    } else if (getV > 50) {
        getV = 50;
        $(DOMStrings.radiusInpTxt).value = 50;
    }
    $(DOMStrings.valueOfBtn).style.borderRadius = parseInt(getV) + 'px';
    $(DOMStrings.valueOfAllRadius).value = getV;
}

let chnBtnBordStyle = function() {
    let getV = $(DOMStrings.borderStyleInp).value;
    $(DOMStrings.valueOfBtn).style.borderStyle = getV;
}

let chngFontSize = function() {
    let getV = $(DOMStrings.fontSizeInp).value;
    $(DOMStrings.valueOfBtn).style.fontSize = getV + 'px';
}

// Event Listeners
$(DOMStrings.inpChngV).addEventListener('keyup',chngBtnValue);
$(DOMStrings.valueOfAllRadius).addEventListener('input',chngBtnBrdRad);
$(DOMStrings.radiusInpTxt).addEventListener('input',chngBtnBrdRadN);
$(DOMStrings.valueOfTopLeftRadius).addEventListener('input',function(){
    chngBtnBrdRadCorners('topleft');
});
$(DOMStrings.valueOfTopRightRadius).addEventListener('input',function(){
    chngBtnBrdRadCorners('topright');
});
$(DOMStrings.valueOfBottomLeftRadius).addEventListener('input',function(){
    chngBtnBrdRadCorners('bottomleft');
});
$(DOMStrings.valueOfBottomRightRadius).addEventListener('input',function(){
    chngBtnBrdRadCorners('bottomright');
});

$(DOMStrings.radiusTopLeftInpTxt).addEventListener('input',function(){
    chngBtnBrdRadCornersN('topleft');
});
$(DOMStrings.radiusTopRightInpTxt).addEventListener('input',function(){
    chngBtnBrdRadCornersN('topright');
});
$(DOMStrings.radiusBottomLeftInpTxt).addEventListener('input',function(){
    chngBtnBrdRadCornersN('bottomleft');
});
$(DOMStrings.radiusBottomRightInpTxt).addEventListener('input',function(){
    chngBtnBrdRadCornersN('bottomright');
});

$(DOMStrings.elemBgColor).addEventListener('input',function(){
    chngBtnBgColor('backgroundColor');
});
$(DOMStrings.elemTxtolor).addEventListener('input',function(){
    chngBtnBgColor('textColor');
});
$(DOMStrings.elemBrdColor).addEventListener('input',function(){
    chngBtnBgColor('borderColor');
});
$(DOMStrings.borderWidthRange).addEventListener('input',chngBtnWid);
$(DOMStrings.borderWidthInp).addEventListener('input',chngBtnWidN);
$(DOMStrings.borderStyleInp).addEventListener('input',chnBtnBordStyle);
$(DOMStrings.fontSizeInp).addEventListener('input',chngFontSize);

initBtn();