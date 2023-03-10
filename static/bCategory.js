const bCategory = {
    "1": "한손무기",
    "2": "양손무기",
    "3": "원거리무기",
    "4": "천",
    "5": "가죽",
    "6": "판금",
    "7": "방패",
    "8": "망토",
    "9": "귀걸이",
    "10": "목걸이",
    "11": "반지",
    "12": "관악기",
    "13": "악기",
    "15": "물약",
    "16": "음식",
    "17": "음료",
    "18": "도구",
    "19": "포탄",
    "21": "제작법",
    "22": "마법물품",
    "23": "아키움",
    "24": "원료",
    "25": "재료",
    "26": "동물",
    "27": "식물",
    "28": "실내장식",
    "29": "책",
    "30": "차량",
    "31": "선박",
    "32": "날틀",
    "33": "공성병기",
    "34": "탑승소수",
    "35": "소수장비",
    "36": "퀘스트",
    "37": "잡동사니",
    "38": "주",
    "40": "붉은초승돌",
    "41": "갈색초승돌",
    "42": "푸른초승돌",
    "43": "노란초승돌",
    "44": "초록초승돌",
    "45": "분초승돌",
    "46": "보라초승돌",
    "47": "편린",
    "48": "달그림자",
    "49": "기타",
    "54": "의상",
    "55": "합성의상",
    "56": "속옷",
    "57": "전투소수",
    "58": "연기학개론",
    "59": "악보",
    "60": "하얀초승돌"
}

function option_load_bCategory(select_query) {
    let temp_html = "<option value=''>B분류</option>";
    for (let i = 1; i < 61; i++) {
        temp_html += `<option value=${i}>${bCategory[i]}</option>`
    }
    document.querySelector(select_query).innerHTML = temp_html;
}