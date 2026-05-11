
let ITEMS = [document.getElementById('data'), document.getElementById('ux/design'), document.getElementById('other')];

const menu_items = ['cat_data', 'cat_ux/design', 'cat_other'];

const headers = ['head_data', 'head_ux/design', 'head_other'];

const sections = ['data_sec', 'ux/design_sec', 'other_sec'];


const parent = document.getElementById('changing_section');



var menu_cont = document.getElementById('menu');
let elementNew = '';
let index = 0;

var cat_all = document.getElementById('cat_all');

// Next step: let the user renavigate the menu multiple times!
// Also add back elements

function change_menu(element){

    menu_items.forEach(function(item){
        elementNew = element;

        if (element == "cat_all"){
            location.reload();
            document.getElementById(element).innerHTML = html;
        }
        let objectNew = document.getElementById(item);
        
        
        if ((objectNew.id != "cat_all") && (objectNew.id == elementNew)){
            objectNew.style.backgroundColor = "#c4c4ff";
            let section = ITEMS[index];
            console.log(section)

            if (section == document.getElementById('other')){
                parent.append(ITEMS[index]);
                console.log("APPEND")
            } 
            // else {
            //     // parent.insertBefore(section, document.getElementById(menu_items[index + 1]));
            // }
        } else if ((objectNew.id != elementNew)){
            objectNew.style.backgroundColor = "#ffffff";
            cat_all.style.backgroundColor = "#ffffff";
            let section = document.getElementById(sections[index]);
            if (document.getElementById(sections[index])){
                section.remove();
                console.log(element, item, 'remove');

            }
        }
        index++;

    });
};


