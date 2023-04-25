const D = document;
const body = D.querySelector('body');

// Calc real view height
(function viewHeight() {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
})();

//Toggler menu
(function menuToggler() {
    let toggler = D.querySelector('.menu-toggler'),
    headerMenu = D.querySelector('.menu');
    function openMenu() {
        this.classList.toggle('menu-toggler_opened')
        headerMenu.classList.toggle('menu_open');
        body.classList.toggle('overflow_h')
    }
    toggler.addEventListener('click', openMenu);
})();



// Calc width of ordering-steps
if(D.querySelector('.ordering-item')) {
    function findW() {
        let orderingWrapper = D.querySelector('.ordering-steps')
        let orderingItemALl = D.querySelectorAll('.ordering-item');
        let orderingItem = D.querySelector('.ordering-item');

        let totalWidth = 0;
        let cof = 0;
        let totalWidthItem = 0;

            totalWidth = orderingWrapper.clientWidth;
            cof = orderingItem.clientWidth;

            let dotsW = totalWidth - cof - (cof / 2);
            document.documentElement.style.setProperty('--dots', `${dotsW}px`)
            
            orderingItemALl.forEach((elem) => {
                totalWidthItem = elem.offsetWidth * orderingItemALl.length
                cof = elem.offsetWidth;
            })
            
            if(totalWidth < totalWidthItem) {
                let dotsW = (totalWidthItem) - (cof) - (cof / 2);
                document.documentElement.style.setProperty('--dots', `${dotsW}px`)
            }
    }
    findW();
    window.addEventListener('resize', findW)
}

//Custom select
if(document.querySelector(".select")) {
    const select = document.querySelector(".select");
    const options_list = document.querySelector(".options-list");
    const options = document.querySelectorAll(".option");
    const selectedValue = D.querySelector('.selected-options');
    //show & hide options list
    select.addEventListener("click", () => {
      select.classList.toggle('select_open');
      options_list.classList.toggle("active");
      select.querySelector(".select__icon").classList.toggle("select__icon_open");
    });

    //select option
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')});
        select.querySelector("span").innerHTML = option.innerHTML;
        selectedValue.value = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("active");
        select.querySelector(".select__icon").classList.toggle("select__icon_open");
        select.classList.remove('select_open');

      });
    });
}

//Input range
if(D.querySelector('.ui-field-range__input')) {
    let rangeValue = D.querySelector('.ui-field-range__value-num'),
    rangeInput = D.querySelector('.ui-field-range__input');

    rangeValue.innerHTML = rangeInput.value;
    rangeInput.oninput = function() {
        rangeValue.innerHTML = this.value;
    }
}

