const aCategory = {
    "1": "무기",
    "2": "방어구",
    "3": "장신구",
    "4": "악기",
    "5": "의상",
    "6": "소비품",
    "7": "제작",
    "8": "기계",
    "9": "소수",
    "10": "기타",
    "12": "초승돌",
    "13": "보름돌"
}

function option_load_aCategory(select_query) {
    let temp_html = "<option value=''>A분류</option>";
    for (let i = 1; i < 14; i++) {
        temp_html += `<option value=${i}>${aCategory[i]}</option>`
    }
    document.querySelector(select_query).innerHTML = temp_html;
}