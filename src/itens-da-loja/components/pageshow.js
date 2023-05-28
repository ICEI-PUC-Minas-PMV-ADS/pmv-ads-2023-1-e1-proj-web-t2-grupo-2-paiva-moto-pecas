import { initialSection } from "./initial.js";

export function pageshow(database, assets) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    window.addEventListener("pageshow", function (event) {
        const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
        if (historyTraversal) {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
            initialSection(database, assets);         
        }
    });

}