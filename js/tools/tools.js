import {toolsData} from "../../data/libs.js";


export function renderToolsSection() {
    toolsData.forEach(data => {
        const toolsItem = createToolItem(data);
        $('.tools__container').append(toolsItem);
    });
    $('.tools__container').masonry({
        // options
        itemSelector: '.tools__item',
        columnWidth: 220,
        gutter:10
    });
}

// Create a single education item element
function createToolItem(data) {
    const modifierClass = data.title.split(' ')[0].toLowerCase();
    // console.log('modifierClass', modifierClass);
    const toolsItem = $('<div>').addClass(`tools__item tools__item--${modifierClass}`);
    const toolsItemContent = $('<div>').addClass('tools__item__content');


    const title = $('<div>').addClass('tools__title').text(data.title);


    const itemList = $('<ul>').addClass('tools__list');


    data.items.forEach(item => {
        const itemLink = $('<a>')
            .attr('href', item.link)
            .attr('target', '_blank')
            .addClass('tools__list-link')
            .text(item.name);
        const listItem = $('<li>').addClass('tools__list-item').append(itemLink);
        itemList.append(listItem);
    });

    const toolsItemOverlay = $('<div>').addClass('tools__item__overlay');
    const icon1 = $('<div>').addClass('floating-icon react-icon');
    const icon2 = $('<div>').addClass('floating-icon jquery-icon');
    toolsItemOverlay.append(title, icon1, icon2);

    toolsItemContent.append(itemList);
    toolsItem.append(toolsItemContent, toolsItemOverlay);

    return toolsItem;
}
