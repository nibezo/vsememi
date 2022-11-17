bad_ids = new Set();
bad_ids_arr = []
function idBadImgs(i) {
    bad_ids.add(i);
    bad_ids_arr = Array.from(bad_ids);
};

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    for (let i = 1; i < 425; i++) {
        document.getElementById('images').innerHTML += `<img src="https://veshok.com/dw/files/Memy/%D0%9C%D0%B5%D0%BC%20(${i}).jpg" onerror="javascript: idBadImgs(${i})">`;
    };
};

